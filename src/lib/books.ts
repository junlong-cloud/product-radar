export type BookCategory = "pm-basics" | "ai-pm";

export const bookCategoryLabels: Record<BookCategory, string> = {
  "pm-basics": "传统 PM 基础",
  "ai-pm": "AI PM 专项",
};

export type Book = {
  slug: string;
  title: string;
  author: string;
  category: BookCategory;
  blurb: string;
  whyRead: string;
  coverColor: string;       // 暂用色块占位，等你提供封面图
  coverGlyph: string;       // 封面上压一个字 / 符号
  downloadUrl?: string;     // 留空待你上传 epub/pdf
};

export const books: Book[] = [
  {
    slug: "everyone-pm",
    title: "人人都是产品经理",
    author: "苏杰",
    category: "pm-basics",
    blurb:
      "产品经理入门必读，前阿里产品经理苏杰写的产品工作流和基本盘 —— 看完会对「PM 一天到底在干嘛」建立第一层认知。",
    whyRead: "建立产品基础的第一本。",
    coverColor: "#225cff",
    coverGlyph: "人",
  },
  {
    slug: "inspired",
    title: "启示录：打造用户喜爱的产品",
    author: "Marty Cagan",
    category: "pm-basics",
    blurb:
      "硅谷产品圈奉为经典的一本。围绕人、流程、产品三个角度展开，告诉你怎么搭一个能持续打造好产品的团队。",
    whyRead: "看完后再听任何产品方法论都有底。",
    coverColor: "#0a0d18",
    coverGlyph: "启",
  },
  {
    slug: "ux-elements",
    title: "用户体验要素",
    author: "Jesse James Garrett",
    category: "pm-basics",
    blurb:
      "用户体验的五层模型 —— 战略、范围、结构、框架、表现。任何 PM 都该把这五层背下来。",
    whyRead: "做交互方案时随时能套用的脚手架。",
    coverColor: "#15c26a",
    coverGlyph: "U",
  },
  {
    slug: "b-side-pm",
    title: "决胜 B 端：产品经理升级之路",
    author: "杨堃",
    category: "pm-basics",
    blurb:
      "B 端产品的体系化指南：业务调研、方案设计、需求迭代管理、企业级应用架构 —— 想做 B 端 AI 产品必看。",
    whyRead: "AI 产品很大一块在 B 端落地，这本提前补课。",
    coverColor: "#ff7a3d",
    coverGlyph: "B",
  },
  {
    slug: "ai-pm-method",
    title: "AI 产品经理：方法、实战与进阶",
    author: "—",
    category: "ai-pm",
    blurb:
      "专为 AI PM 写的实战指南：AI 产品设计方法、模型评估指标、人机交互设计 —— 有产品基础后看，吸收率最高。",
    whyRead: "把传统 PM 知识「AI 化」的桥梁书。",
    coverColor: "#d8ff4a",
    coverGlyph: "AI",
  },
  {
    slug: "ml-in-action",
    title: "机器学习实战",
    author: "Peter Harrington",
    category: "ai-pm",
    blurb:
      "Python 示例讲机器学习常见算法（分类、聚类、回归）。PM 不用写代码，但要懂模型在做什么。",
    whyRead: "建立对「模型在干什么」的直觉。",
    coverColor: "#0a0d18",
    coverGlyph: "ML",
  },
  {
    slug: "dl-introduction",
    title: "深度学习入门：基于 Python 的理论与实现",
    author: "斋藤康毅",
    category: "ai-pm",
    blurb:
      "从零讲神经网络原理，几乎不需要复杂数学。AI PM 不写代码，但要知道深度学习能做什么 / 不能做什么。",
    whyRead: "把「神经网络」四个字从黑箱变成有概念。",
    coverColor: "#225cff",
    coverGlyph: "DL",
  },
  {
    slug: "gen-ai",
    title: "生成式人工智能：人工智能的未来",
    author: "—",
    category: "ai-pm",
    blurb:
      "系统讲 AIGC、大语言模型的原理和应用。理解 ChatGPT、Midjourney 这一代产品背后的技术逻辑。",
    whyRead: "现在做 AI 产品几乎都绕不开生成式 AI，这本帮你站稳。",
    coverColor: "#ff4d6d",
    coverGlyph: "GAI",
  },
];
