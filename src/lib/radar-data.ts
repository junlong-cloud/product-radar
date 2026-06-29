export type Track = "stars" | "useful" | "playful";
export type Lang = "zh" | "en" | "both";
export type TimeBudget = "30m" | "1-2h" | "half-day" | "weekend";
export type Goal = "ship" | "learn" | "wow";
export type Skill = "first-day" | "comfy" | "deep-end";

export const trackLabels: Record<Track, string> = {
  stars: "明星",
  useful: "好用",
  playful: "好玩",
};

export const trackTint: Record<Track, string> = {
  stars: "#d8ff4a",
  useful: "#225cff",
  playful: "#ff7a3d",
};

export type Project = {
  id: string;
  rank: number;
  title: string;
  blurb: string;
  track: Track;
  time: TimeBudget;
  goal: Goal;
  skill: Skill;
  lang: Lang;
  vibe: string[];
  scores: { fun: number; useful: number; build: number };
  total: number;
  risingDelta?: number;
  mvp: string;
};

export const projects: Project[] = [
  // ---- 明星 stars (rising fastest this week) ----
  {
    id: "s1", rank: 1, track: "stars",
    title: "周报小本子",
    blurb: "把一周的 commit、PR、文档动作喂进去，吐一份能直接发给领导的中文周报。",
    time: "1-2h", goal: "ship", skill: "first-day", lang: "zh",
    vibe: ["LLM", "打工人", "复制即用"],
    scores: { fun: 7, useful: 10, build: 8 }, total: 94, risingDelta: 32,
    mvp: "一个表单：粘 Git 日志 → 选语气 → 拿一段 Markdown 周报。",
  },
  {
    id: "s2", rank: 2, track: "stars",
    title: "Sticker Mind",
    blurb: "A pocket flashcard app that turns any article you paste in into spaced-repetition stickers.",
    time: "weekend", goal: "ship", skill: "comfy", lang: "en",
    vibe: ["learning", "habit"],
    scores: { fun: 8, useful: 9, build: 7 }, total: 91, risingDelta: 28,
    mvp: "Paste-article → cards generated → daily review queue (5 cards/day).",
  },
  {
    id: "s3", rank: 3, track: "stars",
    title: "灵感打捞机",
    blurb: "睡前把碎念语音录进去，第二天早上收到一封整理好的「值不值得做」清单邮件。",
    time: "weekend", goal: "wow", skill: "comfy", lang: "zh",
    vibe: ["语音", "agent", "邮件"],
    scores: { fun: 9, useful: 8, build: 7 }, total: 88, risingDelta: 21,
    mvp: "Whisper 转写 → 用 LLM 分类 + 评分 → resend 早 8 点推。",
  },
  {
    id: "s4", rank: 4, track: "stars",
    title: "Tab Closer",
    blurb: "Browser extension that quietly archives the 47 tabs you forgot why you opened.",
    time: "half-day", goal: "ship", skill: "comfy", lang: "en",
    vibe: ["extension", "everyday"],
    scores: { fun: 6, useful: 10, build: 7 }, total: 86, risingDelta: 18,
    mvp: "Pop-up lists tabs older than 3 days → one-click archive to a JSON.",
  },
  {
    id: "s5", rank: 5, track: "stars",
    title: "话题雷达 mini",
    blurb: "盯三个 RSS 源，每天 10 点把当天最值得读的三条用一段话总结发到你的微信。",
    time: "1-2h", goal: "ship", skill: "first-day", lang: "both",
    vibe: ["RSS", "推送", "cron"],
    scores: { fun: 7, useful: 9, build: 6 }, total: 84, risingDelta: 15,
    mvp: "RSS 拉取 → LLM 摘要 → server-chan 推送。",
  },
  {
    id: "s6", rank: 6, track: "stars",
    title: "Pocket Standup",
    blurb: "A solo developer's standup bot — type 'done', 'doing', 'stuck', it remembers the trail.",
    time: "1-2h", goal: "learn", skill: "first-day", lang: "en",
    vibe: ["habit", "CLI"],
    scores: { fun: 7, useful: 8, build: 7 }, total: 82, risingDelta: 12,
    mvp: "CLI prompt three questions → append to dated markdown → weekly recap.",
  },

  // ---- 好用 useful ----
  {
    id: "u1", rank: 7, track: "useful",
    title: "发票管家",
    blurb: "拍一张发票照片，自动识别金额、抬头、税号，导出一行 CSV。",
    time: "weekend", goal: "ship", skill: "comfy", lang: "zh",
    vibe: ["OCR", "报销"],
    scores: { fun: 5, useful: 10, build: 8 }, total: 90,
    mvp: "上传图 → 多模态模型抽字段 → 表格行 + 月度汇总。",
  },
  {
    id: "u2", rank: 8, track: "useful",
    title: "Pocket Habit Garden",
    blurb: "A CLI that grows ASCII plants as you keep small daily promises.",
    time: "1-2h", goal: "ship", skill: "first-day", lang: "en",
    vibe: ["terminal", "calm", "streaks"],
    scores: { fun: 8, useful: 9, build: 7 }, total: 87,
    mvp: "yaml of habits → `habit check` → render plant by streak length.",
  },
  {
    id: "u3", rank: 9, track: "useful",
    title: "会议摘要小抄",
    blurb: "把 Zoom 会议录音丢进去，10 分钟拿回一份「决定、待办、谁负责」三段式纪要。",
    time: "half-day", goal: "ship", skill: "comfy", lang: "zh",
    vibe: ["Whisper", "团队"],
    scores: { fun: 6, useful: 10, build: 7 }, total: 86,
    mvp: "音频上传 → 转写 + 结构化 → 钉钉/飞书消息推送。",
  },
  {
    id: "u4", rank: 10, track: "useful",
    title: "Bookshelf Librarian",
    blurb: "Snap your shelf, get titles indexed and a 'what to read next' card.",
    time: "1-2h", goal: "learn", skill: "first-day", lang: "en",
    vibe: ["vision", "books"],
    scores: { fun: 6, useful: 8, build: 6 }, total: 80,
    mvp: "Photo → spine OCR → Goodreads cross-ref → next-pick.",
  },
  {
    id: "u5", rank: 11, track: "useful",
    title: "命令救生圈",
    blurb: "终端里忘了的命令，描述一句，它给出最稳妥的那条 + 一句说明。",
    time: "30m", goal: "ship", skill: "first-day", lang: "both",
    vibe: ["CLI", "everyday"],
    scores: { fun: 6, useful: 9, build: 8 }, total: 79,
    mvp: "`?? 怎么撤销上个 commit` → 出命令 + 风险提示。",
  },
  {
    id: "u6", rank: 12, track: "useful",
    title: "Reading Receipts",
    blurb: "An RSS reader that writes you a 'why I bothered' sentence for everything you opened.",
    time: "weekend", goal: "learn", skill: "comfy", lang: "en",
    vibe: ["reading", "meta"],
    scores: { fun: 7, useful: 8, build: 7 }, total: 78,
    mvp: "RSS open-log → end-of-day digest with one-line reflection per piece.",
  },
  {
    id: "u7", rank: 13, track: "useful",
    title: "字幕翻译流水线",
    blurb: "拖一个 mp4 进去，吐回带双语字幕的视频，术语表自动维护。",
    time: "half-day", goal: "ship", skill: "comfy", lang: "zh",
    vibe: ["ffmpeg", "i18n"],
    scores: { fun: 6, useful: 9, build: 6 }, total: 77,
    mvp: "Whisper → 翻译 → ffmpeg 烧字幕，glossary.json 复用。",
  },

  // ---- 好玩 playful ----
  {
    id: "p1", rank: 14, track: "playful",
    title: "三个 AI 吵架",
    blurb: "出一个问题，三个性格各异的模型 persona 现场互喷，最后选一个最有道理的。",
    time: "1-2h", goal: "wow", skill: "comfy", lang: "both",
    vibe: ["agents", "show-off"],
    scores: { fun: 10, useful: 5, build: 7 }, total: 85,
    mvp: "三条 system prompt → 多轮对话 → 你给「最讲理」票 → 留榜。",
  },
  {
    id: "p2", rank: 15, track: "playful",
    title: "Friendly Dungeon",
    blurb: "A text adventure that softens on bad days and turns spicy when you're bored.",
    time: "weekend", goal: "wow", skill: "comfy", lang: "en",
    vibe: ["game", "narrative"],
    scores: { fun: 10, useful: 4, build: 8 }, total: 82,
    mvp: "State machine + LLM scene gen → mood slider seeds the tone.",
  },
  {
    id: "p3", rank: 16, track: "playful",
    title: "微信群时光机",
    blurb: "把群聊导出粘进去，自动出一份「这周谁最唠、谁的梗最多、什么时候最静」的报告。",
    time: "1-2h", goal: "wow", skill: "first-day", lang: "zh",
    vibe: ["社交", "数据"],
    scores: { fun: 9, useful: 6, build: 6 }, total: 78,
    mvp: "txt 解析 → 计数 + LLM 梗识别 → 一张图。",
  },
  {
    id: "p4", rank: 17, track: "playful",
    title: "Karaoke Companion",
    blurb: "Drop a song, get a singable lyric sheet with key tips and breath marks.",
    time: "1-2h", goal: "wow", skill: "comfy", lang: "en",
    vibe: ["audio", "social"],
    scores: { fun: 9, useful: 6, build: 6 }, total: 76,
    mvp: "Audio → key detect → lyric format with annotations.",
  },
  {
    id: "p5", rank: 18, track: "playful",
    title: "拍照取名 bot",
    blurb: "拍一张你养的多肉/猫/盆栽，它郑重其事地起个中二的中文名字。",
    time: "30m", goal: "wow", skill: "first-day", lang: "zh",
    vibe: ["视觉", "梗"],
    scores: { fun: 9, useful: 4, build: 8 }, total: 74,
    mvp: "图 → 多模态描述 → 起名 prompt → 结果卡。",
  },
  {
    id: "p6", rank: 19, track: "playful",
    title: "Field Notes Camera",
    blurb: "Snap a plant, get a watercolor of it and a care plan.",
    time: "weekend", goal: "wow", skill: "comfy", lang: "en",
    vibe: ["vision", "diffusion"],
    scores: { fun: 8, useful: 7, build: 7 }, total: 72,
    mvp: "Photo → identify → care steps + image-gen card.",
  },
  {
    id: "p7", rank: 20, track: "playful",
    title: "晚安播客生成器",
    blurb: "三段你想琢磨的事，吐回一段 5 分钟的中文播客音频，配舒缓 BGM。",
    time: "half-day", goal: "wow", skill: "comfy", lang: "zh",
    vibe: ["TTS", "睡前"],
    scores: { fun: 8, useful: 6, build: 6 }, total: 70,
    mvp: "三段输入 → 串成稿 → TTS + BGM → mp3 下载。",
  },
];

export const stars = projects.filter((p) => p.track === "stars");

/* ---- filter zones for "Match Me" ---- */

export type FilterZone<K extends string = string> = {
  key: K;
  label: string;
  options: { value: string; label: string }[];
};

export const filterZones = [
  {
    key: "time" as const,
    label: "我有多少时间",
    options: [
      { value: "30m", label: "30 分钟" },
      { value: "1-2h", label: "1–2 小时" },
      { value: "half-day", label: "半天" },
      { value: "weekend", label: "一个周末" },
    ],
  },
  {
    key: "goal" as const,
    label: "我想要什么",
    options: [
      { value: "ship", label: "做个我真会用的小工具" },
      { value: "learn", label: "学一个没碰过的角落" },
      { value: "wow", label: "弄点能给朋友看的玩意儿" },
    ],
  },
  {
    key: "skill" as const,
    label: "我大概在哪",
    options: [
      { value: "first-day", label: "今天第一天上手" },
      { value: "comfy", label: "基本操作没问题" },
      { value: "deep-end", label: "扔我下深水区" },
    ],
  },
  {
    key: "lang" as const,
    label: "语言偏好",
    options: [
      { value: "zh", label: "中文优先" },
      { value: "en", label: "英文练手" },
      { value: "both", label: "都行" },
    ],
  },
] satisfies readonly FilterZone[];

export type FilterKey = (typeof filterZones)[number]["key"];

/* ---- hero stat card numbers ---- */

export const heroStats = {
  index: 90,
  tracks: "3 条",
  topScore: 94,
  mvpSpan: "30 分钟 – 一周末",
  rising: 6,
  meterSplit: [
    { tint: "#d8ff4a", value: 28 }, // stars
    { tint: "#225cff", value: 38 }, // useful
    { tint: "#ff7a3d", value: 34 }, // playful
  ],
};

/* ---- starter skills ---- */

export type SkillCategory =
  | "starter"
  | "rising"
  | "product"
  | "visual"
  | "office"
  | "cli";

export const skillCategoryLabels: Record<SkillCategory, string> = {
  starter: "新手必装",
  rising: "本周新星",
  product: "产品开发",
  visual: "页面视觉",
  office: "日常办公",
  cli: "CLI 工作流",
};

export const skillCategoryBlurb: Record<SkillCategory, string> = {
  starter: "第一个晚上把这几个装上，往后就不慌。",
  rising: "这周圈里在聊、值得点开一看的新工具。",
  product: "把一个想法捏成可以发出去的产品。",
  visual: "让你的小项目看起来不像周末作业。",
  office: "把日常重复劳动塞进流水线。",
  cli: "终端里多一行命令，少一次切换窗口。",
};

export type StarterSkill = {
  slug: string;
  name: string;
  category: SkillCategory;
  tagline: string;       // 右上角标签：如「含金量最高」「官方工具」
  oneLiner: string;       // 卡片主标题下的简介
  signal: string;         // 公开信号一句：如「GitHub 80k+ stars」
  why: string;            // 为什么必装一句
  link: string;           // 「看来源」跳转 URL（首选 GitHub）
  badge?: "new" | "hot";
};

export const starterSkills: StarterSkill[] = [
  // ---- starter 新手必装 ----
  {
    slug: "claude-code", name: "Claude Code", category: "starter",
    tagline: "Vibecoding 主力",
    oneLiner: "终端里的 AI pair —— 读写仓库、跑命令、做 plan，能真正动你的项目文件。",
    signal: "Anthropic 官方工具 / 持续高频更新",
    why: "比浏览器里的对话框强一个量级，是当前所有 AI 工具里上限最高的一个。",
    link: "https://github.com/anthropics/claude-code",
  },
  {
    slug: "cursor", name: "Cursor", category: "starter",
    tagline: "IDE 顺起点",
    oneLiner: "AI 原生编辑器 —— Tab 自动补、Cmd+K 改一段、Composer 跨文件改。",
    signal: "VS Code fork / 主流付费 AI IDE",
    why: "如果你习惯用 IDE 而不是终端，从这入门最顺，几乎零迁移成本。",
    link: "https://cursor.com",
  },
  {
    slug: "git-basics", name: "Git 三件套", category: "starter",
    tagline: "AI 救命药",
    oneLiner: "branch / reset / stash —— AI 改飞了能 30 秒回到出发点。",
    signal: "git-scm.com / 必备底座",
    why: "AI 会乱改。会回滚的人才敢放手让它干 —— 这是 vibecoding 的安全绳。",
    link: "https://git-scm.com/doc",
  },
  {
    slug: "node-pnpm", name: "Node + pnpm", category: "starter",
    tagline: "环境最小集",
    oneLiner: "Node 22 LTS + pnpm，是跑别人代码、跑 AI 生成代码的底座环境。",
    signal: "pnpm GitHub 31k+ stars / Node 官方 LTS",
    why: "Node 装错版本、npm 锁不住依赖，是新手最常卡的两个点 —— 一次装稳。",
    link: "https://github.com/pnpm/pnpm",
  },

  // ---- rising 本周新星 ----
  {
    slug: "skills-protocol", name: "Claude Skills", category: "rising", badge: "new",
    tagline: "AI 复用范式",
    oneLiner: "把一类工作沉淀成可复用的技能包，让 Claude Code 在不同项目里有不同身份。",
    signal: "Anthropic 官方文档 / 新机制",
    why: "比起每次重写 prompt，把方法论沉淀成 skill 复用是当前最有杠杆的做法。",
    link: "https://docs.claude.com/en/docs/claude-code/skills",
  },
  {
    slug: "mcp-servers", name: "MCP Servers", category: "rising", badge: "hot",
    tagline: "AI 接 USB",
    oneLiner: "给 AI 工具接外部能力（Notion、飞书、数据库、终端）的标准协议。",
    signal: "Anthropic 牵头 / OpenAI 也支持",
    why: "想让 Claude 真正能查你的工作数据、动你的本地文件，绕不开它。",
    link: "https://github.com/modelcontextprotocol/servers",
  },
  {
    slug: "v0", name: "v0 by Vercel", category: "rising",
    tagline: "出 UI 神器",
    oneLiner: "一句话出整页 UI 草稿，导出干净的 React + Tailwind 代码。",
    signal: "Vercel 出品 / 前端最常调侃的工具",
    why: "做产品时拿来出第一版页面骨架，能省两小时画线框图的功夫。",
    link: "https://v0.dev",
  },

  // ---- product 产品开发 ----
  {
    slug: "next-shadcn", name: "Next.js + shadcn/ui", category: "product",
    tagline: "前端主流栈",
    oneLiner: "Next.js 作为框架，shadcn 作为组件源 —— 组件不装库，直接 add 进你的 src。",
    signal: "Next.js 130k+ / shadcn 75k+ stars",
    why: "中文小站、SaaS demo、个人项目的现代默认组合，长得现代也好改。",
    link: "https://github.com/shadcn-ui/ui",
  },
  {
    slug: "supabase", name: "Supabase", category: "product",
    tagline: "后端零配置",
    oneLiner: "一键拿到 Postgres + Auth + Storage + Realtime，不用自己起后端。",
    signal: "GitHub 80k+ stars / 开源 Firebase 替代",
    why: "做需要登录、需要存数据的小项目，它就是最省心的那个。",
    link: "https://github.com/supabase/supabase",
  },
  {
    slug: "resend", name: "Resend", category: "product",
    tagline: "现代发信",
    oneLiner: "API 一行发邮件，开发友好的现代发信服务，免费额度够小项目用。",
    signal: "GitHub 5k+ stars / React Email 同公司",
    why: "做提醒类、通知类、订阅推送类的小工具几乎绕不开 —— 比 SMTP 顺手十倍。",
    link: "https://github.com/resend/resend-node",
  },

  // ---- visual 页面视觉 ----
  {
    slug: "tailwind-v4", name: "Tailwind CSS v4", category: "visual",
    tagline: "原子化 CSS",
    oneLiner: "无配置文件、CSS 变量驱动，v4 写起来比 v3 顺很多 —— 旧教程要看清版本。",
    signal: "GitHub 80k+ stars / 前端主流方案",
    why: "把样式留在 JSX 里、token 留在 CSS 里 —— 改设计、改主题最丝滑。",
    link: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    slug: "fonts-google", name: "next/font + Google Fonts", category: "visual",
    tagline: "高级感来源",
    oneLiner: "next/font 加载 Google 字体，零 CLS、零网络抖动，自动子集化。",
    signal: "Next.js 官方内建 / Google Fonts 千余款",
    why: "好字体 = 廉价的高级感。Inter / Fraunces / Geist 三件套就能让你的项目立刻不像周末作业。",
    link: "https://nextjs.org/docs/app/api-reference/components/font",
  },
  {
    slug: "lucide", name: "Lucide Icons", category: "visual",
    tagline: "图标默认值",
    oneLiner: "线条干净的开源图标库，React 组件按需引入，size + strokeWidth 一调就是你的风格。",
    signal: "GitHub 14k+ stars / Feather Icons 接力",
    why: "比 emoji 体面、比图标字体小、比 SVG sprite 易管理 —— 个人项目首选。",
    link: "https://github.com/lucide-icons/lucide",
  },

  // ---- office 日常办公 ----
  {
    slug: "feishu-base", name: "飞书多维表格", category: "office",
    tagline: "国内最稳",
    oneLiner: "当 Notion 用、当数据库用、当后台用 —— 配 OpenAPI 还能让脚本往里塞数据。",
    signal: "字节官方 / 国内访问稳定",
    why: "你的 vibecoding 项目想让非技术朋友也能看数据，飞书表格是最顺的桥梁。",
    link: "https://open.feishu.cn/document/server-docs/docs/bitable-v1/bitable-overview",
  },
  {
    slug: "raycast", name: "Raycast", category: "office",
    tagline: "Mac 加速器",
    oneLiner: "Mac 上的命令面板 —— 启动器、剪贴板、AI、自定义脚本一站集成。",
    signal: "全球 Mac 用户首选 launcher",
    why: "把日常 10 个高频动作压成 ⌘+空格 三个字母，长期回报极高。",
    link: "https://www.raycast.com",
  },
  {
    slug: "obsidian", name: "Obsidian", category: "office",
    tagline: "灵感落点",
    oneLiner: "本地 Markdown 笔记 + 双链 —— 想法不丢、随时复盘、永远归你。",
    signal: "百万级日活 / 文件本地存储",
    why: "vibecoding 灵感来得快、丢得也快，得有一个永远在线的本地落点。",
    link: "https://obsidian.md",
  },

  // ---- cli 终端 ----
  {
    slug: "ghostty", name: "Ghostty", category: "cli",
    tagline: "现代终端",
    oneLiner: "原生快、字体渲染漂亮、跨平台一致 —— Mitchell Hashimoto 出品。",
    signal: "GitHub 28k+ stars / 2025 年开源",
    why: "比默认 Terminal、iTerm 在视觉和速度上都是代际差距，新项目从它开始最舒服。",
    link: "https://github.com/ghostty-org/ghostty",
  },
  {
    slug: "fzf-zoxide", name: "fzf + zoxide", category: "cli",
    tagline: "终端肌肉记忆",
    oneLiner: "Ctrl+R 模糊找历史命令、z 一秒跳上次去过的目录 —— CLI 体验立刻翻倍。",
    signal: "fzf 70k+ / zoxide 23k+ stars",
    why: "再也不用 cd ../../../ 这种笨拙写法 —— 一旦上手回不去原始 shell。",
    link: "https://github.com/junegunn/fzf",
  },
  {
    slug: "gh-cli", name: "gh CLI", category: "cli",
    tagline: "PR 不开浏览器",
    oneLiner: "GitHub 官方 CLI —— 开 PR、看 issue、跑 Actions、查 release 全在终端。",
    signal: "GitHub 官方 / 38k+ stars",
    why: "Vibecoding 周末 ship 一发，gh pr create 一句完事，省下来切窗口的注意力。",
    link: "https://github.com/cli/cli",
  },
];
