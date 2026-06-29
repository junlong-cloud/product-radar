export type KnowledgeKind =
  | "basics"     // 基础概念
  | "method"     // 方法 / 框架
  | "skill"      // 软技能
  | "tweet"      // 推文
  | "doc"        // 文章 / 文档
  | "video";     // 视频

export const knowledgeKindLabels: Record<KnowledgeKind, string> = {
  basics: "基础概念",
  method: "方法框架",
  skill: "软技能",
  tweet: "推文",
  doc: "文章",
  video: "视频",
};

/* 统一到主题色阶：暖纸 + 信号橙 + 深墨，避免 chip 颜色与 hero 调色不搭 */
export const knowledgeKindTint: Record<KnowledgeKind, string> = {
  basics: "#1b1a16", // 深墨 —— 基础概念，最稳重
  method: "#ff5a36", // 信号橙 —— 方法框架，关键
  skill:  "#1f7a6c", // 仪表盘绿 —— 软技能，偏内功
  tweet:  "#5c5848", // 中灰墨 —— 推文，轻量
  doc:    "#e6481f", // 信号橙深 —— 文章，深入
  video:  "#948f7c", // 暖灰 —— 视频，辅助
};

export type KnowledgeItem = {
  slug: string;
  term: string;
  kind: KnowledgeKind;
  oneLiner: string;
  whyNoted: string;
  author?: string;
  link?: string;
  addedAt: string;
  featured?: boolean;
};

/* ---- 必学知识：提炼自我自学的几篇核心笔记 ----
   原文作者：开足码力 · AI 产品经理自学指南 · ai.fullcoding.cn
   我用自己的话重新整理 + 加了"我为什么记下"。 */

const SOURCE_GUIDE = "开足码力 · AI 产品经理自学指南";

export const knowledgeItems: KnowledgeItem[] = [
  // ===== 基础概念 =====
  {
    slug: "ai-pm-definition",
    term: "AI 产品经理 ≠ 懂点 AI 的 PM",
    kind: "basics",
    oneLiner:
      "AI PM = 传统 PM 的能力底座 + AI 技术理解 + AI 场景洞察。是复合岗位，不是叠加岗位。",
    whyNoted:
      "转行第一周想明白的事 —— 别把 AI PM 当成传统 PM 的升级版，它是一个新的复合岗，技术理解力是地基。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/3b48f3/",
    addedAt: "2026-06-28",
    featured: true,
  },
  {
    slug: "deterministic-vs-probabilistic",
    term: "确定性流程 vs 概率性系统",
    kind: "basics",
    oneLiner:
      "传统 PM 设计的是按钮点了必跳转的确定性流程，AI PM 设计的是同一个输入可能产生不同输出的概率系统。",
    whyNoted:
      "这一句话决定了 AI PM 的所有方法论 —— PRD、交互、兜底、评估全都要按「概率」来重新想。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/3b48f3/",
    addedAt: "2026-06-28",
  },
  {
    slug: "llm-essentials",
    term: "LLM 必懂五件事",
    kind: "basics",
    oneLiner:
      "Prompt、Token、上下文窗口、幻觉、RAG —— 这五个词撑起所有大模型产品的产品设计语言。",
    whyNoted:
      "和算法同学开会能不能搭得上话，就看这五个词你能不能用对。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-27",
  },
  {
    slug: "eval-metrics",
    term: "准确率 / 精确率 / 召回率",
    kind: "basics",
    oneLiner:
      "高精确率 = 宁可漏掉不可错杀（适合搜索），高召回率 = 宁可错杀不可漏掉（适合风控）。F1 是两者的折中。",
    whyNoted:
      "PM 跟算法同学聊验收标准时绕不开这三个。先想清楚业务场景到底偏哪头，再去定阈值。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-27",
  },

  // ===== 方法框架 =====
  {
    slug: "ai-need-five-questions",
    term: "AI 需求五问框架",
    kind: "method",
    oneLiner:
      "接到 AI 需求先问五件事：必须用 AI 吗？技术成熟度？数据从哪来？用户错误容忍度？Plan B 是什么？",
    whyNoted:
      "这五问能在需求阶段就杀掉一半的「为 AI 而 AI」的伪需求。当面试题答也好用。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-27",
    featured: true,
  },
  {
    slug: "ai-solution-matrix",
    term: "技术方案选型五选一",
    kind: "method",
    oneLiner:
      "规则 / 传统 ML / 大模型 API / 大模型微调 / 自研模型 —— 五条路按「可控性 vs 效果上限」权衡。",
    whyNoted:
      "默认大家都喊「上大模型」，但很多场景规则就够了。这张表帮我把「该不该上模型」想清楚。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-26",
  },
  {
    slug: "ai-prd-modules",
    term: "AI 产品 PRD 必备七模块",
    kind: "method",
    oneLiner:
      "AI 能力定义 / 模型目标 / 数据需求 / 技术方案 / 兜底策略 / 边界场景 / 用户预期管理 —— 缺一不可。",
    whyNoted:
      "传统 PRD 模板写 AI 产品会缺一大块。这套模板让我写需求时不会落项。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-26",
  },
  {
    slug: "fallback-strategy",
    term: "兜底策略：三级置信度分流",
    kind: "method",
    oneLiner:
      "置信度 > 90% 直答；60%–90% 人工审核后展示；< 60% 直接转人工。智能客服的经典三层。",
    whyNoted:
      "AI 产品的命脉在「出错时怎么办」。这套三级分流是最容易迁移到其他场景的兜底模板。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-26",
  },
  {
    slug: "bad-case-loop",
    term: "Bad Case 分析是 AI 迭代的引擎",
    kind: "method",
    oneLiner:
      "上线后收集模型出错的样本，分类归因（是某类输入容易错？训练数据有偏？边界没覆盖？）—— 这是模型优化最直接的驱动。",
    whyNoted:
      "传统 PM 看数据看的是漏斗，AI PM 多了一件事：要会看 Bad Case。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/2f8157/",
    addedAt: "2026-06-25",
  },

  // ===== 软技能 =====
  {
    slug: "drive-uncertainty",
    term: "驾驭不确定性",
    kind: "skill",
    oneLiner:
      "AI 是概率系统，不是确定性系统。AI PM 的价值不在追求 100% 准确，而在不确定中设计最可靠的方案。",
    whyNoted:
      "这是最难修但最值得修的心态。学会接受「15% 会出错」并提前给用户安全感，整个工作方式都会变。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/23d480/",
    addedAt: "2026-06-25",
    featured: true,
  },
  {
    slug: "tech-translator",
    term: "技术翻译能力",
    kind: "skill",
    oneLiner:
      "AI PM 是算法团队和业务团队之间的双向翻译 —— 把用户语言翻成技术需求，把技术约束翻成业务能听懂的话。",
    whyNoted:
      "我观察转型最容易卡的就是这步。能不能两边的话都听懂、还能传话不变形，是 AI PM 的核心壁垒。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/23d480/",
    addedAt: "2026-06-24",
  },
  {
    slug: "data-sensitivity",
    term: "数据敏感度：看到准确率要追问什么",
    kind: "skill",
    oneLiner:
      "看到「模型准确率 85%」的第一反应应该是：测试集多大？类别分布？和业务场景一致吗？而不是直接欢呼。",
    whyNoted:
      "光看数字不追问背后样本，是 PM 最容易踩的坑。养成「看到指标先追问」的肌肉记忆。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/23d480/",
    addedAt: "2026-06-24",
  },
  {
    slug: "rapid-experimentation",
    term: "快速实验比完美规划值钱",
    kind: "skill",
    oneLiner:
      "AI 产品的模型效果在上线前几乎不可能 100% 预估。最佳实践是用 API 搭最小 Demo 跑用户场景，而不是规划完美再上线。",
    whyNoted:
      "在 AI 领域，快速失败的成本远低于慢速成功 —— 这句话我准备贴在显示器上。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/23d480/",
    addedAt: "2026-06-23",
  },

  // ===== 学习习惯 / 转型角度 =====
  {
    slug: "daily-3-thoughts",
    term: "每天 30 分钟体验 + 3 点思考",
    kind: "skill",
    oneLiner:
      "每天用一个 AI 产品 30 分钟，强迫自己输出 3 点思考：它解决什么问题？为什么用 AI？我会怎么优化？",
    whyNoted:
      "产品嗅觉不是看出来的，是练出来的。这个动作我准备坚持 3 个月看变化。",
    author: SOURCE_GUIDE,
    link: "https://ai.fullcoding.cn/pages/d53b7f/",
    addedAt: "2026-06-23",
  },
];

export const knowledgeStats = {
  total: knowledgeItems.length,
  byKind: {
    basics: knowledgeItems.filter((k) => k.kind === "basics").length,
    method: knowledgeItems.filter((k) => k.kind === "method").length,
    skill: knowledgeItems.filter((k) => k.kind === "skill").length,
  },
};
