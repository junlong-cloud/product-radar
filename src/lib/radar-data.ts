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
  | "pm"
  | "visual"
  | "office"
  | "fullstack";

export const skillCategoryLabels: Record<SkillCategory, string> = {
  starter: "新手必装",
  rising: "本周新星",
  pm: "产品经理必装",
  visual: "页面视觉",
  office: "日常办公",
  fullstack: "全栈开发",
};

export const skillCategoryBlurb: Record<SkillCategory, string> = {
  starter: "第一个晚上把这几个装上，往后就不慌。",
  rising: "基于 GitHub Trending Weekly 候选池，按本周新增 stars 重新排序的开源新星 TOP 10。",
  pm: "产品经理圈子里反复被推荐的 16 个 Skill。",
  visual: "让你的小项目看起来不像周末作业。",
  office: "把日常重复劳动塞进流水线。",
  fullstack: "把一个想法捏成可以发出去的产品。",
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
  weeklyDelta?: number;   // 仅 rising 类用：近 7 天 star 增量
};

export const starterSkills: StarterSkill[] = [
  // ---- starter 新手必装（来自外部榜单整理） ----
  {
    slug: "superpowers", name: "Superpowers", category: "starter",
    tagline: "含金量最高",
    oneLiner: "把软件开发方法论、工作流和 agentic skills 打成一套增强包，适合先给 AI 装上「做事方法」。",
    signal: "GitHub 232.3k stars / 近期仍活跃",
    why: "它提升的是规划、执行、复盘这类长期能力。",
    link: "https://github.com/obra/superpowers",
  },
  {
    slug: "anthropic-skills", name: "Anthropic Skills", category: "starter",
    tagline: "官方生态",
    oneLiner: "Claude Skill 的官方公开仓库，适合理解 Skill 的标准写法、触发方式和跨工具复用思路。",
    signal: "GitHub 152.5k stars / 官方仓库",
    why: "新手先看官方范式，比乱装小众包更稳。",
    link: "https://github.com/anthropics/skills",
  },
  {
    slug: "openai-skills-catalog", name: "OpenAI Skills Catalog", category: "starter",
    tagline: "Codex 底座",
    oneLiner: "Codex 用户最该先看的官方技能目录，用来理解怎么安装、触发和组合 Skill。",
    signal: "Codex 官方 Skill 目录",
    why: "它是把 Codex 从聊天变成执行器的入口。",
    link: "#",
  },
  {
    slug: "addy-osmani-agent-skills", name: "Addy Osmani Agent Skills", category: "starter",
    tagline: "工程增强",
    oneLiner: "一套生产级工程 Skill，覆盖代码理解、实现、测试、重构和上线检查，适合直接提升 AI Coding 质量。",
    signal: "GitHub 63.0k stars / 本周 +9,285",
    why: "它把常见工程流程拆成 AI 能稳定执行的 Skill。",
    link: "https://github.com/addyosmani/agent-skills",
  },
  {
    slug: "vercel-agent-skills", name: "Vercel Agent Skills", category: "starter",
    tagline: "上线必备",
    oneLiner: "网页项目做完后最需要预览、部署、检查和上线，Vercel 这一套非常适合新手拿结果。",
    signal: "GitHub 28.1k stars / Vercel 官方 Skill",
    why: "让作品从本地 demo 变成别人能打开的链接。",
    link: "#",
  },
  {
    slug: "github-cli-skill", name: "GitHub CLI", category: "starter",
    tagline: "复现源码",
    oneLiner: "让 AI 能更顺地 clone、查 issue、看 release、开 PR 和管理项目来源，是复现开源项目的基本手脚。",
    signal: "GitHub 官方 CLI / 开发者高频工具",
    why: "几乎所有榜单项目都要先读仓库、跑示例。",
    link: "https://github.com/cli/cli",
  },
  {
    slug: "opencli", name: "OpenCLI", category: "starter",
    tagline: "网页手脚",
    oneLiner: "把网站、平台和登录态浏览器变成 AI 能调用的 CLI，适合做资料抓取、网页操作和中文工作流。",
    signal: "GitHub 24.8k stars / 社区热工具",
    why: "它补的是 AI 真实操作网页和平台的能力。",
    link: "#",
  },
  {
    slug: "playwright-skill", name: "Playwright Skill", category: "starter",
    tagline: "真机验收",
    oneLiner: "让 AI 真的打开浏览器测试按钮、输入框、响应式和流程，不再只靠「看起来能跑」。",
    signal: "GitHub 2k+ stars / 浏览器 QA 高频工作流",
    why: "它能显著减少上线前的假可用 demo。",
    link: "https://github.com/microsoft/playwright",
  },
  {
    slug: "grill-me", name: "Grill Me", category: "starter",
    tagline: "苏格拉底拷打",
    oneLiner: "让 AI 用追问式提问把一个知识点反复拷打到你真的懂为止 —— 装一次：npx skills add mattpocock/skills，先跑 /setup-matt-pocock-skills。",
    signal: "mattpocock/skills · TypeScript 名师 Matt Pocock 出品",
    why: "看视频/看书都是被动输入，被 AI 反过来拷问才是把概念真嚼烂的最快路径。",
    link: "https://github.com/mattpocock/skills",
  },

  // ---- rising 本周新星：GitHub Trending Weekly TOP 10（按本周新增 stars 倒序，每周快照） ----
  {
    slug: "openmontage", name: "OpenMontage", category: "rising",
    tagline: "Python · 热门",
    oneLiner: "World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio.",
    signal: "calesthio/OpenMontage · 总 27.8k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/calesthio/OpenMontage",
    weeklyDelta: 18703,
  },
  {
    slug: "codebase-memory-mcp", name: "codebase-memory-mcp", category: "rising",
    tagline: "C · 热门",
    oneLiner: "High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.",
    signal: "DeusData/codebase-memory-mcp · 总 20.6k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/DeusData/codebase-memory-mcp",
    weeklyDelta: 8926,
  },
  {
    slug: "daily-stock-analysis", name: "daily_stock_analysis", category: "rising",
    tagline: "Python · 热门",
    oneLiner: "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs.",
    signal: "ZhuLinsen/daily_stock_analysis · 总 51.5k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/ZhuLinsen/daily_stock_analysis",
    weeklyDelta: 7045,
  },
  {
    slug: "design-md", name: "design.md", category: "rising",
    tagline: "TypeScript · 热门",
    oneLiner: "A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.",
    signal: "google-labs-code/design.md · 总 23k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/google-labs-code/design.md",
    weeklyDelta: 6728,
  },
  {
    slug: "ai-website-cloner-template", name: "ai-website-cloner-template", category: "rising",
    tagline: "TypeScript · 热门",
    oneLiner: "Clone any website with one command using AI coding agents",
    signal: "JCodesMore/ai-website-cloner-template · 总 23.2k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/JCodesMore/ai-website-cloner-template",
    weeklyDelta: 5317,
  },
  {
    slug: "palmier-pro", name: "palmier-pro", category: "rising",
    tagline: "Swift · 热门",
    oneLiner: "macOS video editor built for AI",
    signal: "palmier-io/palmier-pro · 总 9.4k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/palmier-io/palmier-pro",
    weeklyDelta: 5034,
  },
  {
    slug: "simplex-chat", name: "simplex-chat", category: "rising",
    tagline: "Haskell · 热门",
    oneLiner: "SimpleX - the first messaging network operating without user identifiers of any kind - 100% private by design! iOS, Android and desktop apps 📱!",
    signal: "simplex-chat/simplex-chat · 总 15.8k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/simplex-chat/simplex-chat",
    weeklyDelta: 3218,
  },
  {
    slug: "orca", name: "orca", category: "rising",
    tagline: "TypeScript · 热门",
    oneLiner: "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop and mobile.",
    signal: "stablyai/orca · 总 8.9k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/stablyai/orca",
    weeklyDelta: 2769,
  },
  {
    slug: "no-mistakes", name: "no-mistakes", category: "rising",
    tagline: "Go · 热门",
    oneLiner: "git push no-mistakes",
    signal: "kunchenguid/no-mistakes · 总 4.2k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/kunchenguid/no-mistakes",
    weeklyDelta: 2449,
  },
  {
    slug: "hiring-agent", name: "hiring-agent", category: "rising",
    tagline: "Python · 热门",
    oneLiner: "AI agent to evaluate and score resumes.",
    signal: "interviewstreet/hiring-agent · 总 3.4k stars",
    why: "GitHub Trending Weekly 上榜 —— 一周内集中获得关注，值得点开看一眼是不是你的菜。",
    link: "https://github.com/interviewstreet/hiring-agent",
    weeklyDelta: 1973,
  },

  // ---- pm 产品经理必装（16 个，来自小红书 Bobbie_Lee《产品经理们，这 16 个 Skill 建议收藏》） ----
  {
    slug: "pm-workbench", name: "pm-workbench", category: "pm",
    tagline: "PM 工作台",
    oneLiner: "把老板一句话、模糊需求和零散想法，整理成可以推进的产品判断。",
    signal: "BobbieLee / 需求澄清 + PRD Lite",
    why: "快速拆清楚一个模糊需求到底要解决什么问题，避免只写漂亮话。",
    link: "https://github.com/BobbieLee/pm-workbench",
  },
  {
    slug: "pm-skills-marketplace", name: "PM Skills Marketplace", category: "pm",
    tagline: "技能市场",
    oneLiner: "像一个产品经理 AI 技能市场，覆盖发现、策略、执行、发布和增长。",
    signal: "phuryn / Discovery + Strategy",
    why: "看 PM Skill 如何按工作流和插件组织，参考产品发现/策略/增长的技能拆法。",
    link: "https://github.com/phuryn/pm-skills",
  },
  {
    slug: "product-manager-skills-deanpeters", name: "Product-Manager-Skills", category: "pm",
    tagline: "方法论库",
    oneLiner: "把 JTBD、PRD、Roadmap、优先级和领导力场景整理成一套 PM 方法库。",
    signal: "deanpeters / JTBD + PM Frameworks",
    why: "用结构化方法训练产品思考，写 PRD、做路线图、做产品策略讨论。",
    link: "https://github.com/deanpeters/Product-Manager-Skills",
  },
  {
    slug: "pm-skills-on-purpose", name: "PM-Skills", category: "pm",
    tagline: "团队资产",
    oneLiner: "更像企业内部可维护的产品管理能力库，结构清晰，适合团队化使用。",
    signal: "product-on-purpose / Agent Skills + Workflow",
    why: "建立标准化的产品工作流程，统一 PRD、用户故事、实验和复盘产物。",
    link: "https://github.com/product-on-purpose/pm-skills",
  },
  {
    slug: "product-manager-skills-digidai", name: "Product Manager Skills", category: "pm",
    tagline: "PM Copilot",
    oneLiner: "像一个会追问、会质疑、会帮你审 PRD 和看指标的产品同事。",
    signal: "Digidai / PRD Review + SaaS Metrics",
    why: "审查 PRD 里的目标、范围和指标问题，诊断留存、转化、流失和增长指标。",
    link: "https://github.com/Digidai/product-manager-skills",
  },
  {
    slug: "productskills-assimovt", name: "Product Skills for Claude Code", category: "pm",
    tagline: "实战技能包",
    oneLiner: "颗粒度很舒服的一组 PM Skill，覆盖访谈、验证、定位、优先级和指标。",
    signal: "assimovt / User Interview + JTBD",
    why: "设计用户访谈和问题验证流程，做机会地图、竞品分析和产品定位。",
    link: "https://github.com/assimovt/productskills",
  },
  {
    slug: "claude-pm-skills-pratik", name: "Claude Product Management Skills", category: "pm",
    tagline: "判断增强",
    oneLiner: "专注发现问题、暴露假设、设计实验和检查发布准备度。",
    signal: "pratikshadake / Problem Discovery + Trade-off",
    why: "判断一个需求到底是不是值得做，找出方案背后的隐藏假设和风险。",
    link: "https://github.com/pratikshadake/claude-product-management-skills",
  },
  {
    slug: "advanced-pm-skills", name: "Advanced Product Management Skills", category: "pm",
    tagline: "框架集合",
    oneLiner: "把 Shape Up、OKRs、PMF、增长循环等经典方法变成可调用的 AI Skill。",
    signal: "wdavidturner / Shape Up + Growth Loops",
    why: "用成熟产品框架分析复杂问题，做增长、定位、定价、机会树和战略叙事。",
    link: "https://github.com/wdavidturner/product-skills",
  },
  {
    slug: "ai-pm-skills-aroyburman", name: "PM Skills for AI Product Managers", category: "pm",
    tagline: "AI PM",
    oneLiner: "面向 AI 产品经理的技能库，覆盖 PRD、策略、分析、案例和面试训练。",
    signal: "aroyburman-codes / AI PM + Mock Interview",
    why: "写 AI 产品相关 PRD 和策略文档，做 AI 市场分析、产品拆解和伦理取舍。",
    link: "https://github.com/aroyburman-codes/pm-skills",
  },
  {
    slug: "ai-pm-grill-yanlin", name: "AI 产品经理拷打技能", category: "pm",
    tagline: "中文审查",
    oneLiner: "中文语境下的产品方案审查 Skill，重点是追问、质疑和发现逻辑漏洞。",
    signal: "yanlin-cheng / 中文 PM + 逻辑拷打",
    why: "审早期产品想法和需求方案，检查用户、价值、商业模式和技术可行性。",
    link: "https://github.com/yanlin-cheng/skill-product-manager",
  },
  {
    slug: "pm-toolkit-alireza", name: "Product Manager Toolkit", category: "pm",
    tagline: "PM 工具箱",
    oneLiner: "大技能库里的产品经理工具包，覆盖优先级、访谈、PRD、发现和上市。",
    signal: "alirezarezvani / RICE + PRD Template",
    why: "参考 PM Skill 如何嵌入跨职能技能平台，做客户访谈分析、PRD 模板和上市计划。",
    link: "https://github.com/alirezarezvani/claude-skills",
  },
  {
    slug: "startup-os-skills", name: "Startup OS Skills", category: "pm",
    tagline: "创业系统",
    oneLiner: "面向创业团队的 Skill 集合，包含产品经理和产品策略相关能力。",
    signal: "ncklrs / Product Manager + Strategist",
    why: "从创业公司视角组织产品、增长和交付工作，参考产品经理与产品策略两个角色如何拆分。",
    link: "https://github.com/ncklrs/startup-os-skills",
  },
  {
    slug: "prd-taskmaster", name: "PRD Taskmaster", category: "pm",
    tagline: "PRD 生成",
    oneLiner: "专注把产品想法变成详细 PRD，并衔接后续任务拆解。",
    signal: "anombyte93 / PRD Generation + Taskmaster",
    why: "通过追问补齐 PRD 里的关键信息，生成更适合工程实现的需求文档。",
    link: "https://github.com/anombyte93/prd-taskmaster",
  },
  {
    slug: "claude-code-bmad", name: "Claude Code BMAD Skills", category: "pm",
    tagline: "敏捷流程",
    oneLiner: "把产品经理、业务分析、架构、故事拆分等角色流程做成 Claude Code Skill。",
    signal: "aj-geddes / Product Manager + User Stories",
    why: "从产品简报生成详细 PRD，拆功能需求、非功能需求、史诗和用户故事。",
    link: "https://github.com/aj-geddes/claude-code-bmad-skills",
  },
  {
    slug: "claude-code-slice", name: "Claude Code Slice Skills", category: "pm",
    tagline: "垂直切片",
    oneLiner: "从一个用户、一个任务、一个端到端场景出发，生成更具体的产品和技术规格。",
    signal: "arun-mosai / Vertical Slice + Persona",
    why: "把大需求切成一个可交付的最小闭环，明确用户旅程、界面、接口、数据和测试点。",
    link: "https://github.com/arun-mosai/claude-code-slice-skills",
  },
  {
    slug: "get-shit-done", name: "Get Shit Done", category: "pm",
    tagline: "执行系统",
    oneLiner: "从需求到验证和发布，提供一套更完整的执行推进流。",
    signal: "gsd-build / Requirements + Roadmap + UAT",
    why: "把产品想法拆成需求、阶段和执行任务，规划验证、验收、发布和后续待办。",
    link: "https://github.com/gsd-build/get-shit-done",
  },

  // ---- fullstack 全栈开发 ----
  {
    slug: "gstack", name: "gstack", category: "fullstack",
    tagline: "AI 工程工作流",
    oneLiner: "Garry Tan 出品的全栈 AI 编码工作流 —— 23 个专业角色 Skill（CEO / 设计师 / 工程经理 / 评审 / 部署...）覆盖从想法到上线全流程。",
    signal: "garrytan/gstack · 118k+ stars / TypeScript",
    why: "一个人做产品的最佳「团队替身」，把 PM / Eng / Design / Ship 的关键步骤都接上 AI。",
    link: "https://github.com/garrytan/gstack",
  },
  {
    slug: "next-shadcn", name: "Next.js + shadcn/ui", category: "fullstack",
    tagline: "前端主流栈",
    oneLiner: "Next.js 作为框架，shadcn 作为组件源 —— 组件不装库，直接 add 进你的 src。",
    signal: "Next.js 130k+ / shadcn 75k+ stars",
    why: "中文小站、SaaS demo、个人项目的现代默认组合，长得现代也好改。",
    link: "https://github.com/shadcn-ui/ui",
  },
  {
    slug: "supabase", name: "Supabase", category: "fullstack",
    tagline: "后端零配置",
    oneLiner: "一键拿到 Postgres + Auth + Storage + Realtime，不用自己起后端。",
    signal: "GitHub 80k+ stars / 开源 Firebase 替代",
    why: "做需要登录、需要存数据的小项目，它就是最省心的那个。",
    link: "https://github.com/supabase/supabase",
  },
  {
    slug: "resend", name: "Resend", category: "fullstack",
    tagline: "现代发信",
    oneLiner: "API 一行发邮件，开发友好的现代发信服务，免费额度够小项目用。",
    signal: "GitHub 5k+ stars / React Email 同公司",
    why: "做提醒类、通知类、订阅推送类的小工具几乎绕不开 —— 比 SMTP 顺手十倍。",
    link: "https://github.com/resend/resend-node",
  },

  // ---- visual 页面视觉 ----
  {
    slug: "shadcn-ui-skill", name: "shadcn/ui Skill", category: "visual",
    tagline: "UI 爆款",
    oneLiner: "新手做 Web App 最容易用到的 UI Skill —— 让代理按项目配置正确添加按钮、表单、弹窗、导航、仪表盘组件。",
    signal: "GitHub 116.9k stars / Web 组件事实标准",
    why: "shadcn 在 AI Web Coding 圈子里辨识度极高，做出来一眼就是「现代项目」。",
    link: "https://github.com/shadcn-ui/ui",
  },
  {
    slug: "figma-skills", name: "Figma Skills", category: "visual",
    tagline: "设计稿",
    oneLiner: "把设计稿、组件、变量和页面结构交给 AI 理解，减少「截图转代码」的瞎猜 —— 从 Figma 到 React 页面、设计系统同步。",
    signal: "Claude 官方 Skill 入口 / 大众设计工具",
    why: "Figma 是最容易被设计/产品同学理解的入口，跨职能协作零门槛。",
    link: "#",
  },
  {
    slug: "canva-skills", name: "Canva Skills", category: "visual",
    tagline: "视觉素材",
    oneLiner: "做海报、长图、分享图、PPT 视觉包装 —— 宣传图、封面、社媒图、演示稿一条龙。对非工程新手尤其友好。",
    signal: "Claude 官方 Skill 入口 / 大众素材工具",
    why: "Canva 大家耳熟，做出来的成果也容易被看见。",
    link: "#",
  },
  {
    slug: "guizang-ppt-skill", name: "归藏 PPT Skill", category: "visual",
    tagline: "社区爆款",
    oneLiner: "把横向翻页网页 PPT、杂志风页面和发布会式演示变成可复用 Skill —— 分享稿、发布页、网页 PPT、长图风内容都能做。",
    signal: "GitHub 15k+ stars / 中文创作者常用",
    why: "有社区传播度，且成果非常容易展示，新手马上能做出像样的视觉。",
    link: "#",
  },
  {
    slug: "frontend-slides", name: "Frontend Slides", category: "visual",
    tagline: "PPT 转代码",
    oneLiner: "让 coding agent 从零做出精美 HTML 演示稿，或把 PowerPoint 转成可改的网页 slide。",
    signal: "zarazhangrui/frontend-slides · 总 23.8k stars",
    why: "PM 经常要做汇报和 demo，把 PPT 工作流接到 AI 上是最直接的提效。",
    link: "https://github.com/zarazhangrui/frontend-slides",
  },
  {
    slug: "vercel-web-design-guidelines", name: "Vercel Web Design Guidelines", category: "visual",
    tagline: "页面质检",
    oneLiner: "新手最容易做出「能跑但不好用」的页面 —— 这个 Skill 在发布前检查可访问性、焦点态和移动端。",
    signal: "Vercel Agent Skills / UI 质检",
    why: "能直接提升公开作品的完成度，避免一眼看出是周末玩具。",
    link: "#",
  },

  // ---- office 日常办公 ----
  {
    slug: "notion-skills", name: "Notion Skills", category: "office",
    tagline: "知识库",
    oneLiner: "把需求、资料、任务、项目管理和知识库交给 AI 处理 —— 整理项目、提炼需求、生成行动项，新手不用反复复制粘贴上下文。",
    signal: "Claude 官方 Skill 入口 / 大众知识库",
    why: "Notion 是大众生产力工具，理解成本低、迁入成本也低。",
    link: "#",
  },
  {
    slug: "document-skills", name: "Document Skills", category: "office",
    tagline: "Office",
    oneLiner: "Word、Excel、PowerPoint、PDF 这类 Skill 对新手非常直接 —— 整理 PDF、生成 PPT、处理表格，把资料变成文档和汇报。",
    signal: "Anthropic 官方 Skills / Office 高频场景",
    why: "人人都懂 Office 的结果长什么样，不需要解释技术栈。",
    link: "https://github.com/anthropics/skills",
  },
  {
    slug: "atlassian-jira-skills", name: "Atlassian / Jira Skills", category: "office",
    tagline: "项目协作",
    oneLiner: "把需求、任务、缺陷和进度接入 AI —— 拆任务、写验收标准、整理 issue，适合已经在团队工具里工作的用户。",
    signal: "Claude 官方 Skill 入口 / 团队协作工具",
    why: "对团队用户很熟悉，比冷门工具更容易在公司里铺开。",
    link: "#",
  },
  {
    slug: "zapier-skills", name: "Zapier Skills", category: "office",
    tagline: "自动化",
    oneLiner: "把常见 SaaS 串起来 —— 表单、邮件、CRM、通知、自动同步。新手不用先学 API，也能理解「让 AI 帮我自动处理流程」。",
    signal: "Claude 官方 Skill 入口 / SaaS 自动化",
    why: "Zapier 心智强，适合非工程用户。",
    link: "#",
  },
  {
    slug: "lark-cli", name: "飞书 / Lark CLI", category: "office",
    tagline: "中文办公",
    oneLiner: "飞书 CLI 覆盖消息、文档、多维表格、日历、会议纪要、任务等 —— 对中文团队特别实用。",
    signal: "GitHub 14.4k stars / 中文团队协作高频",
    why: "本身支持 Agent Skills，中文用户收益很高。",
    link: "#",
  },

];
