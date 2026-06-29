import Link from "next/link";
import { KnowledgeBoard } from "@/components/KnowledgeBoard";
import { TrendingBand } from "@/components/TrendingBand";
import {
  BooksSection,
  WebsitesSection,
  SoftwareSection,
} from "@/components/Sections";
import { knowledgeItems, knowledgeKindLabels, knowledgeKindTint } from "@/lib/knowledge";
import { buildLog } from "@/lib/builds";
import { books } from "@/lib/books";
import { websites } from "@/lib/websites";
import { softwareList } from "@/lib/software";
import {
  skillCategoryBlurb,
  skillCategoryLabels,
  starterSkills,
  type SkillCategory,
} from "@/lib/radar-data";

const navTabs = [
  { key: "weekly", label: "本周三选" },
  { key: "knowledge", label: "必学知识" },
  { key: "books", label: "必读书籍" },
  { key: "websites", label: "必看网站" },
  { key: "software", label: "必装软件" },
  { key: "tools", label: "必装 Skill", href: "/skills" },
  { key: "builds", label: "我做的" },
  { key: "about", label: "关于" },
] as const;

const XHS_URL = "https://www.xiaohongshu.com/user/profile/your-id"; // TODO: 替换成你的主页
const EMAIL = "you@example.com"; // TODO: 替换成你的邮箱

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <TopBar />
      <Hero />
      <WeeklyPicks />
      <KnowledgeBoard />
      <BooksSection />
      <WebsitesSection />
      <SoftwareSection />
      <ToolsPreview />
      <TrendingBand />
      <BuildLog />
      <About />
      <Footer />
    </main>
  );
}

/* ---------- TopBar ---------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/85 border-b border-line/70">
      <div className="mx-auto max-w-[1240px] px-6 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-[8px] bg-ink text-canvas text-[13px] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ◐
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            产品雷达
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navTabs.map((t) => {
            const href = "href" in t ? t.href : `#${t.key}`;
            return (
              <a key={t.key} href={href} className="tabpill">
                {t.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={XHS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-xhs h-9 text-[13px] inline-flex items-center gap-1.5"
          >
            <XhsIcon />
            <span className="hidden sm:inline">小红书</span>
          </a>
          <a href="#weekly" className="btn btn-primary h-9 text-[13px]">
            看本周
          </a>
        </div>
      </div>
    </header>
  );
}

function XhsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
      <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2.4 5.2v5.6h1.4v-2.1l1.7 2.1h1.7l-2.1-2.5 2-2.5h-1.7l-1.6 2v-2.6H7.4zm6.2 0v5.6h3.8v-1.3h-2.4v-1h2.1v-1.3h-2.1v-.8h2.4V9.2h-3.8z" />
    </svg>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const weekNumber = 1;
  return (
    <section className="relative isolate overflow-hidden">
      <div className="dot-field absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-28 grid grid-cols-12 gap-10 items-end">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow mb-4">
            AI 产品经理学习者的每周收藏 · 第 {weekNumber} 期
          </p>
          <h1
            className="display text-ink"
            style={{ fontSize: "clamp(56px, 8vw, 116px)" }}
          >
            产品
            <br />
            雷达。
          </h1>
          <p className="mt-7 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
            我从地产营销转 AI 产品经理，还在路上。这个站不是教程，是一个还在学的人每周整理的三件事：
            <em className="not-italic font-semibold text-ink">要懂的知识</em>、
            <em className="not-italic font-semibold text-ink">在用的工具</em>、
            <em className="not-italic font-semibold text-ink">值得参考的项目</em>
            。一半我自己写，一半全网精挑。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="chip" data-tone="lime">⟳ 周五 12:00 更新</span>
            <span className="chip">{knowledgeItems.length} 条知识</span>
            <span className="chip">{books.length} 本书</span>
            <span className="chip">{websites.length} 个网站</span>
            <span className="chip">{softwareList.length} 件软件</span>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            <a href="#knowledge" className="btn btn-primary">必学知识</a>
            <a href="#books" className="btn">必读书籍</a>
            <a href="#websites" className="btn">必看网站</a>
            <a href="#software" className="btn">必装软件</a>
            <Link href="/skills" className="btn">必装 Skill</Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pl-6">
          <HeroStatCard />
        </div>
      </div>
    </section>
  );
}

function HeroStatCard() {
  return (
    <div className="surface p-7 shadow-[0_30px_60px_-30px_rgba(14,19,32,0.18)]">
      <div className="flex items-start justify-between">
        <p className="hairline">本期指数</p>
        <span
          className="display text-ink"
          style={{ fontSize: "56px", lineHeight: 1 }}
        >
          W1
        </span>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-8 border-t border-line pt-6">
        <Stat label="知识" value={String(knowledgeItems.length)} />
        <Stat label="书籍" value={String(books.length)} />
        <Stat label="网站" value={String(websites.length)} />
        <Stat label="软件" value={String(softwareList.length)} />
      </div>
      <div className="mt-7 space-y-1.5">
        <div className="scorebar">
          <span style={{ width: "42%", background: "#225cff" }} />
        </div>
        <div className="scorebar">
          <span style={{ width: "32%", background: "#15c26a" }} />
        </div>
        <div className="scorebar">
          <span style={{ width: "26%", background: "#ff7a3d" }} />
        </div>
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
        知识 · 工具 · 参考
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="hairline mb-1.5">{label}</p>
      <p className="text-[20px] font-semibold text-ink tracking-tight tabular-nums">
        {value}
      </p>
    </div>
  );
}

/* ---------- Weekly picks ---------- */

function WeeklyPicks() {
  const picks = knowledgeItems.filter((k) => k.featured).slice(0, 3);
  return (
    <section id="weekly" className="bg-night text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow" style={{ color: "var(--color-lime)" }}>
              本周三选
            </p>
            <h2
              className="display mt-3"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#fff" }}
            >
              这周最值得点开的三条。
            </h2>
            <p className="mt-3 max-w-[520px] text-[14px] text-white/70 leading-relaxed">
              从这一期的所有收藏里挑出三条 —— 一条知识、一份工具、一个参考方向。每周五重选。
            </p>
          </div>
          <a href="#knowledge" className="btn btn-lime">看全部知识 →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {picks.map((k, i) => (
            <article
              key={k.slug}
              className="rounded-[18px] p-6 border flex flex-col gap-4 relative"
              style={{
                background: "var(--color-night-soft)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="absolute -top-3 -left-3 h-9 w-9 grid place-items-center rounded-full text-[14px] font-bold tabular-nums"
                style={{ background: "var(--color-lime)", color: "var(--color-ink)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <header className="flex items-center justify-between">
                <span
                  className="hairline"
                  style={{ color: knowledgeKindTint[k.kind] }}
                >
                  {knowledgeKindLabels[k.kind]}
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/55">
                  {k.link ? "全网精挑" : "我整理"}
                </span>
              </header>
              <h3 className="display" style={{ fontSize: "22px", color: "#fff", lineHeight: 1.2 }}>
                {k.term}
              </h3>
              <p className="text-[13px] leading-relaxed text-white/75 flex-1">
                {k.oneLiner}
              </p>
              <p className="text-[12px] leading-relaxed text-white/55 border-l-2 border-white/15 pl-3">
                <span className="text-white/80 font-semibold">为什么 · </span>
                {k.whyNoted}
              </p>
              {k.link ? (
                <a
                  href={k.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-semibold text-white inline-flex items-center gap-1"
                >
                  看来源 →
                </a>
              ) : (
                <span className="text-[11.5px] text-white/45">本条由我整理 · 暂无外链</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tools preview ---------- */

function ToolsPreview() {
  const buckets: SkillCategory[] = [
    "starter",
    "rising",
    "product",
    "visual",
    "office",
    "cli",
  ];
  return (
    <section id="tools" className="bg-canvas">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow">必装 Skill</p>
            <h2
              className="display mt-3"
              style={{ fontSize: "clamp(36px, 4.5vw, 52px)" }}
            >
              可复用的 AI 技能包。
            </h2>
            <p className="mt-3 max-w-[520px] text-[14.5px] text-ink-soft leading-relaxed">
              不是堆工具清单，按使用场景分六类，每张卡都附为什么必装和官方来源链接。
            </p>
          </div>
          <Link href="/skills" className="btn btn-primary">
            查看完整工具栈 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buckets.map((cat) => (
            <ToolBucket key={cat} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolBucket({ cat }: { cat: SkillCategory }) {
  const items = starterSkills.filter((s) => s.category === cat).slice(0, 3);
  return (
    <Link
      href={`/skills#${cat}`}
      className="surface p-6 flex flex-col gap-4 hover:border-ink/50 transition-colors group"
    >
      <header>
        <p className="hairline">{skillCategoryLabels[cat]}</p>
        <h3 className="display mt-2" style={{ fontSize: "22px" }}>
          {skillCategoryBlurb[cat]}
        </h3>
      </header>
      <ul className="space-y-1.5 mt-1">
        {items.map((s) => (
          <li
            key={s.slug}
            className="flex items-center gap-2 text-[13.5px] text-ink-soft"
          >
            <span className="h-1 w-1 rounded-full bg-ink-muted" />
            <span>{s.name}</span>
            {s.badge && (
              <span
                className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-[0.1em]"
                style={{
                  background:
                    s.badge === "new"
                      ? "var(--color-lime)"
                      : "var(--color-warm)",
                  color: s.badge === "new" ? "var(--color-ink)" : "#fff",
                }}
              >
                {s.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
      <span className="text-[12px] text-ink-muted mt-auto group-hover:text-ink transition-colors">
        进 {skillCategoryLabels[cat]} 详情 →
      </span>
    </Link>
  );
}

/* ---------- Build Log ---------- */

function BuildLog() {
  return (
    <section id="builds" className="bg-canvas">
      <div className="mx-auto max-w-[1240px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow">Build Log · 我做的</p>
            <h2
              className="display mt-3"
              style={{ fontSize: "clamp(36px, 4.5vw, 52px)" }}
            >
              我的 vibecoding。
            </h2>
            <p className="mt-3 max-w-[520px] text-[14.5px] text-ink-soft leading-relaxed">
              不是简历项目，是我边学边做的东西。每个都记一下「我学到了什么」 —— 这是产品雷达诚信度的来源。
            </p>
          </div>
          <span className="text-[12px] uppercase tracking-[0.16em] text-ink-muted">
            {buildLog.length} 个
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buildLog.map((b) => (
            <article
              key={b.slug}
              className="surface p-6 flex flex-col gap-4 hover:border-ink/50 transition-colors"
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  className="hairline"
                  style={{
                    color:
                      b.status === "shipped"
                        ? "var(--color-good)"
                        : b.status === "wip"
                        ? "var(--color-warm)"
                        : "var(--color-ink-muted)",
                  }}
                >
                  {b.status === "shipped"
                    ? "已上线"
                    : b.status === "wip"
                    ? "进行中"
                    : "想法"}
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                  开始 {b.startedAt}
                </span>
              </header>
              <h3 className="display" style={{ fontSize: "26px", lineHeight: 1.15 }}>
                {b.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink">{b.blurb}</p>
              <div className="border-l-2 border-line pl-3">
                <p className="hairline mb-1">我学到了什么</p>
                <p className="text-[12.5px] leading-relaxed text-ink-soft">
                  {b.whatILearned}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {b.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium px-2 py-1 rounded-full bg-muted text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <footer className="flex gap-2 pt-2">
                {b.liveUrl && (
                  <a
                    href={b.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary h-10 text-[13px] flex-1"
                  >
                    看上线版 →
                  </a>
                )}
                {b.repoUrl && (
                  <a
                    href={b.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn h-10 text-[13px] flex-1"
                  >
                    看仓库 →
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="bg-canvas-deep/40 border-y border-line">
      <div className="mx-auto max-w-[1240px] px-6 py-24 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow">关于</p>
          <h2
            className="display mt-3"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            我是谁，<br />为什么做这个。
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-5 text-[15px] leading-[1.85] text-ink">
          <p>
            我在地产做了几年营销，正在转 AI 产品经理。这个站不是教程 —— 我自己也还没入职，没资格教。它是一个"学习中"的人每周整理的工作板：要懂的知识、要用的工具、值得参考的项目。
          </p>
          <p>
            我自己用，也分享给同样在转、或者已经在做 AI PM 的人。我的目的不是导流，是把我学的东西沉淀成结构化的内容，让自己复盘有抓手，让同路人少绕弯。
          </p>
          <p>
            每周五 12:00 更新一次。小红书做日常分发，这里做主仓。两边内容独立、不互相替代。
          </p>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-line">
            <a
              href={XHS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-xhs inline-flex items-center gap-1.5"
            >
              <XhsIcon />
              小红书找我
            </a>
            <a href={`mailto:${EMAIL}`} className="btn">写信</a>
            <a href="#builds" className="btn">看我做的</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="bg-night text-white/70">
      <div className="mx-auto max-w-[1240px] px-6 py-16 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-[8px] bg-canvas text-ink text-[13px] font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ◐
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              产品雷达
            </span>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed max-w-[360px]">
            AI 产品经理学习者的每周收藏板 —— 知识 / 工具 / 参考。一半我整理，一半全网精挑。周五 12:00 更新。
          </p>
        </div>
        <FooterCol
          title="本期"
          items={[
            { label: "本周三选", href: "#weekly" },
            { label: "知识库", href: "#knowledge" },
            { label: "参考项目", href: "#trending" },
            { label: "我做的", href: "#builds" },
          ]}
        />
        <FooterCol
          title="工具"
          items={[
            { label: "新手必装", href: "/skills#starter" },
            { label: "本周新星", href: "/skills#rising" },
            { label: "产品开发", href: "/skills#product" },
            { label: "完整工具栈", href: "/skills" },
          ]}
        />
        <FooterCol
          title="关于"
          items={[
            { label: "我是谁", href: "#about" },
            { label: "小红书", href: XHS_URL },
            { label: "邮箱", href: `mailto:${EMAIL}` },
            { label: "投递参考", href: `mailto:${EMAIL}` },
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-6 py-6 flex flex-wrap items-center justify-between text-[12px] text-white/50">
          <span>© 产品雷达 · 一个 AI 产品经理学习者的工作板</span>
          <span>周五 12:00 更新</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="col-span-6 md:col-span-2">
      <p className="hairline text-white/50 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-[13px] text-white/80 hover:text-white transition-colors"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
