#!/usr/bin/env node
// 抓取 GitHub Trending Weekly Top 10，重写 src/lib/radar-data.ts 里的 rising 块。
// 用法: npm run refresh-trending

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.resolve(__dirname, "../src/lib/radar-data.ts");

const TRENDING_URL = "https://github.com/trending?since=weekly";

async function fetchTrending() {
  // 优先用 Node fetch；失败（如沙箱限制）回退到本机 curl
  try {
    const res = await fetch(TRENDING_URL, {
      headers: {
        "User-Agent": "product-radar-refresh-script",
        Accept: "text/html",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    console.log(`  (fetch 失败：${err.message}，回退到 curl)`);
    return execFileSync(
      "curl",
      ["-sL", "-A", "product-radar-refresh-script", TRENDING_URL],
      { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 },
    );
  }
}

function decodeEntities(s) {
  return (s ?? "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseTrending(html) {
  // 每个仓库一个 <article class="Box-row">
  const articles = html.split(/<article\s+class="Box-row">/).slice(1);
  const repos = [];

  for (const raw of articles.slice(0, 10)) {
    const chunk = raw.split("</article>")[0];

    // owner/repo —— 在第一个 <h2><a href="/owner/repo">
    const repoMatch = chunk.match(
      /<h2[^>]*>\s*<a[^>]*href="\/([^"]+\/[^"]+?)"/,
    );
    if (!repoMatch) continue;
    const ownerRepo = repoMatch[1].trim();

    // 描述
    const descMatch = chunk.match(/<p[^>]*class="col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    const desc = decodeEntities(descMatch?.[1] ?? "").replace(/<[^>]+>/g, "");

    // 本周新增 stars: "X stars this week"
    const weeklyMatch = chunk.match(/([\d,]+)\s+stars\s+this\s+week/i);
    const weekly = weeklyMatch
      ? parseInt(weeklyMatch[1].replace(/,/g, ""), 10)
      : 0;

    // 总 stars: <a href="/X/Y/stargazers">...<svg/>...NUMBER</a>
    const totalMatch = chunk.match(
      /href="\/[^"]+\/stargazers"[\s\S]*?<\/svg>\s*([\d,]+)\s*<\/a>/,
    );
    const total = totalMatch
      ? parseInt(totalMatch[1].replace(/[,\s]/g, ""), 10) || 0
      : 0;

    // 主语言
    const langMatch = chunk.match(
      /<span[^>]*itemprop="programmingLanguage"[^>]*>([^<]+)<\/span>/,
    );
    const lang = langMatch?.[1].trim();

    repos.push({ ownerRepo, desc, weekly, total, lang });
  }

  return repos;
}

function slugify(ownerRepo) {
  return ownerRepo
    .split("/")[1]
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatStars(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

function tsEscape(s) {
  return (s ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function entry(repo) {
  const slug = slugify(repo.ownerRepo);
  const name = repo.ownerRepo.split("/")[1];
  const tagline = repo.lang ? `${repo.lang} · 热门` : "本周热门";
  const oneLiner = repo.zhOneLiner || repo.desc || `${repo.ownerRepo} —— GitHub Trending Weekly 上榜。`;
  const why = repo.zhWhy || "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。";
  const signal = `${repo.ownerRepo} · 总 ${formatStars(repo.total)} stars`;

  return `  {
    slug: "${slug}", name: "${tsEscape(name)}", category: "rising",
    tagline: "${tsEscape(tagline)}",
    oneLiner: "${tsEscape(oneLiner)}",
    signal: "${tsEscape(signal)}",
    why: "${tsEscape(why)}",
    link: "https://github.com/${repo.ownerRepo}",
    weeklyDelta: ${repo.weekly},
  },`;
}

// 调用 Claude API 把 10 条英文 desc 一次翻译 + 提炼成中文，并给每个 repo 写一句"为什么值得看"
async function translateBatch(repos) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.log("  (未设置 ANTHROPIC_API_KEY，跳过翻译，保留英文 desc)");
    return repos;
  }

  const items = repos.map((r, i) => ({
    i,
    repo: r.ownerRepo,
    lang: r.lang ?? "",
    desc: r.desc ?? "",
  }));

  const prompt = `你是 AI 产品经理学习社区「产品雷达」的内容编辑。下面是 GitHub Trending 本周上榜的 ${items.length} 个仓库，每个有英文 description。请为每个仓库输出两条中文文案：

- "zhOneLiner"：一句话用通俗中文说清楚这个项目是什么、能做什么。30-60 字，去掉营销腔，保留关键技术词，对 AI 产品经理读者友好。
- "zhWhy"：一句话点出这个项目为什么值得 AI 产品经理点开看（可能是赛道方向、可能是工具能直接用、可能是值得借鉴的产品形态）。20-40 字。

只用纯 JSON 数组回复，顺序与输入一致，不要任何额外说明、Markdown 或 code fence。

输入：
${JSON.stringify(items, null, 2)}

输出格式示例：
[
  {"i":0,"zhOneLiner":"...","zhWhy":"..."},
  {"i":1,"zhOneLiner":"...","zhWhy":"..."}
]`;

  console.log("→ Calling Claude API (haiku-4-5) 翻译 + 提炼");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 3000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Claude API HTTP ${res.status}: ${errText.slice(0, 300)}`);
  }
  const data = await res.json();
  const text = data.content?.[0]?.text?.trim() ?? "";
  // 防御性剥离可能的 code fence
  const jsonText = text.replace(/^```(?:json)?\s*/, "").replace(/```\s*$/, "");
  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch (e) {
    throw new Error(`Claude 返回不是合法 JSON：${text.slice(0, 200)}`);
  }
  if (!Array.isArray(parsed) || parsed.length !== repos.length) {
    throw new Error(`Claude 返回数组长度不对：期望 ${repos.length}，实际 ${parsed?.length}`);
  }

  // 按 i 写回（即便顺序乱也能对齐）
  for (const item of parsed) {
    const r = repos[item.i];
    if (!r) continue;
    if (item.zhOneLiner) r.zhOneLiner = String(item.zhOneLiner).trim();
    if (item.zhWhy) r.zhWhy = String(item.zhWhy).trim();
  }
  console.log(`✓ 翻译完成（${parsed.length} 条）`);
  return repos;
}

async function main() {
  console.log(`→ Fetching ${TRENDING_URL}`);
  const html = await fetchTrending();

  console.log("→ Parsing");
  const repos = parseTrending(html);
  if (repos.length === 0) {
    throw new Error("No repos parsed — GitHub HTML structure may have changed");
  }

  // 按本周新增 stars 倒序（GitHub trending 页本身不严格按这个排序）
  repos.sort((a, b) => b.weekly - a.weekly);

  console.log(`\nTop ${repos.length} this week:`);
  for (const [i, r] of repos.entries()) {
    console.log(
      `  ${String(i + 1).padStart(2, " ")}. ${r.ownerRepo.padEnd(48)} +${r.weekly.toLocaleString().padStart(7, " ")} ${r.lang ?? ""}`,
    );
  }

  // 用 Claude API 把英文 desc 翻译 + 提炼成中文
  await translateBatch(repos);

  const source = await readFile(dataFile, "utf8");

  const startMarker = source.match(
    /\/\/\s*----\s*rising 本周新星[^\n]*\n/,
  );
  if (!startMarker) {
    throw new Error("Could not find rising block start marker in radar-data.ts");
  }
  const startIdx = startMarker.index + startMarker[0].length;

  const tail = source.slice(startIdx);
  const endMarker = tail.match(/\n\s*\/\/\s*----\s*pm 产品经理/);
  if (!endMarker) {
    throw new Error("Could not find rising block end marker (// ---- pm 产品经理)");
  }
  const endIdx = startIdx + endMarker.index + 1; // 保留前面那个换行

  const block = repos.map(entry).join("\n") + "\n";
  const updated = source.slice(0, startIdx) + block + source.slice(endIdx);

  await writeFile(dataFile, updated, "utf8");
  console.log(`\n✓ Wrote ${repos.length} new rising entries to ${path.relative(process.cwd(), dataFile)}`);
  console.log("\n下一步：");
  console.log("  1. git diff src/lib/radar-data.ts   # 检查改动");
  console.log("  2. （可选）润色中文描述");
  console.log("  3. git commit -am 'data: refresh rising trending'");
  console.log("  4. git push   # Netlify 自动重新部署");
}

main().catch((err) => {
  console.error("\n✗", err.message);
  process.exit(1);
});
