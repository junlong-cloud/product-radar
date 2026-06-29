export type BookCategory = "pm-basics" | "ai-pm";

export const bookCategoryLabels: Record<BookCategory, string> = {
  "pm-basics": "传统 PM 基础",
  "ai-pm": "AI PM 专项",
};

export type Book = {
  slug: string;
  title: string;
  /** 封面手工断行：第 0 行是主标，后续行是副标（小一号显示）。不填则按 title 自动拆。 */
  titleLines?: string[];
  author: string;
  category: BookCategory;
  blurb: string;
  whyRead: string;
  coverColor: string;
  coverGlyph: string;
  downloadUrl?: string;
};

export const books: Book[] = [
  {
    slug: "everyone-pm",
    title: "人人都是产品经理",
    titleLines: ["人人都是", "产品经理"],
    author: "苏杰",
    category: "pm-basics",
    blurb:
      "产品经理入门必读，前阿里产品经理苏杰写的产品工作流和基本盘 —— 看完会对「PM 一天到底在干嘛」建立第一层认知。",
    whyRead: "建立产品基础的第一本。",
    coverColor: "#0d1b2e",
    coverGlyph: "人",
    downloadUrl: "/books/everyone-pm.pdf",
  },
  {
    slug: "inspired",
    title: "启示录：打造用户喜爱的产品",
    titleLines: ["启示录", "打造用户喜爱的产品"],
    author: "Marty Cagan",
    category: "pm-basics",
    blurb:
      "硅谷产品圈奉为经典的一本。围绕人、流程、产品三个角度展开，告诉你怎么搭一个能持续打造好产品的团队。",
    whyRead: "看完后再听任何产品方法论都有底。",
    coverColor: "#1b1a16",
    coverGlyph: "启",
    downloadUrl: "/books/inspired.pdf",
  },
  {
    slug: "b-side-pm",
    title: "决胜 B 端：产品经理升级之路",
    titleLines: ["决胜 B 端", "产品经理升级之路"],
    author: "杨堃",
    category: "pm-basics",
    blurb:
      "B 端产品的体系化指南：业务调研、方案设计、需求迭代管理、企业级应用架构 —— 想做 B 端 AI 产品必看。",
    whyRead: "AI 产品很大一块在 B 端落地，这本提前补课。",
    coverColor: "#ff5a36",
    coverGlyph: "B",
    downloadUrl: "/books/b-side-pm.pdf",
  },
  {
    slug: "ai-pm-method",
    title: "人工智能产品经理：AI 时代 PM 修炼手册",
    titleLines: ["人工智能", "产品经理", "AI 时代 PM 修炼手册"],
    author: "张竞宇",
    category: "ai-pm",
    blurb:
      "国内 AI PM 实战指南：AI 产品设计方法、模型评估指标、人机交互设计 —— 有产品基础后看，吸收率最高。",
    whyRead: "把传统 PM 知识「AI 化」的桥梁书。",
    coverColor: "#e6481f",
    coverGlyph: "AI",
    downloadUrl: "/books/ai-pm-method.epub",
  },
  {
    slug: "ml-in-action",
    title: "机器学习实战：基于 Scikit-Learn、Keras 和 TensorFlow",
    titleLines: ["机器学习", "实战", "Scikit-Learn · Keras · TensorFlow"],
    author: "Aurélien Géron",
    category: "ai-pm",
    blurb:
      "Python 示例讲机器学习从经典算法到深度学习的全流程。PM 不用写代码，但要懂模型在做什么。",
    whyRead: "建立对「模型在干什么」的直觉。",
    coverColor: "#1b1a16",
    coverGlyph: "ML",
    downloadUrl: "/books/ml-in-action.pdf",
  },
  {
    slug: "dl-introduction",
    title: "深度学习入门：基于 Python 的理论与实现",
    titleLines: ["深度学习", "入门", "基于 Python 的理论与实现"],
    author: "斋藤康毅",
    category: "ai-pm",
    blurb:
      "从零讲神经网络原理，几乎不需要复杂数学。AI PM 不写代码，但要知道深度学习能做什么 / 不能做什么。",
    whyRead: "把「神经网络」四个字从黑箱变成有概念。",
    coverColor: "#0d1b2e",
    coverGlyph: "DL",
    downloadUrl: "/books/dl-introduction.pdf",
  },
  {
    slug: "dl-nlp",
    title: "深度学习进阶：自然语言处理",
    titleLines: ["深度学习", "进阶", "自然语言处理"],
    author: "斋藤康毅",
    category: "ai-pm",
    blurb:
      "《深度学习入门》续作，从 word2vec 一路讲到 RNN/LSTM/Attention，是 PM 理解 LLM 前身机制的最佳入口。",
    whyRead: "AI PM 想真正听懂算法同学谈「注意力」「序列建模」，这本最对路。",
    coverColor: "#1f7a6c",
    coverGlyph: "NLP",
    downloadUrl: "/books/dl-nlp.epub",
  },
  {
    slug: "gen-ai",
    title: "生成式 AI：人工智能的未来",
    titleLines: ["生成式 AI", "人工智能的未来"],
    author: "詹姆斯·斯金纳",
    category: "ai-pm",
    blurb:
      "系统讲 AIGC、大语言模型的原理和应用。理解 ChatGPT、Midjourney 这一代产品背后的技术逻辑。",
    whyRead: "现在做 AI 产品几乎都绕不开生成式 AI，这本帮你站稳。",
    coverColor: "#ff5a36",
    coverGlyph: "GAI",
    downloadUrl: "/books/gen-ai.pdf",
  },
];
