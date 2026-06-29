export type WebsiteCategory = "pm-general" | "ai-tech" | "skill";

export const websiteCategoryLabels: Record<WebsiteCategory, string> = {
  "pm-general": "PM 通用",
  "ai-tech": "AI 技术",
  skill: "技能基本功",
};

export type Website = {
  slug: string;
  name: string;
  url: string;
  category: WebsiteCategory;
  blurb: string;
  whyVisit: string;
};

export const websites: Website[] = [
  {
    slug: "woshipm",
    name: "人人都是产品经理",
    url: "https://www.woshipm.com",
    category: "pm-general",
    blurb: "国内最大的 PM 知识社区。竞品分析、需求文档、用户增长各种长文。",
    whyVisit: "PM 基本盘的中文百科。",
  },
  {
    slug: "huxiu",
    name: "虎嗅",
    url: "https://www.huxiu.com",
    category: "pm-general",
    blurb: "聚焦科技与创新的资讯平台，深度行业分析。",
    whyVisit: "保持对中文互联网商业动态的嗅觉。",
  },
  {
    slug: "papers-with-code",
    name: "Papers With Code",
    url: "https://paperswithcode.com",
    category: "ai-tech",
    blurb: "把学术论文和开源代码对应起来 —— PM 用来快速看某个技术的实现和效果数据。",
    whyVisit: "想知道「这个 idea 别人到底跑出来过没有」，先来这。",
  },
  {
    slug: "huggingface",
    name: "Hugging Face",
    url: "https://huggingface.co",
    category: "ai-tech",
    blurb: "全球最大的 AI 模型开源社区。可以直接在线体验各种预训练模型。",
    whyVisit: "评估「市面上有什么模型可用」的第一站。",
  },
  {
    slug: "modelscope",
    name: "魔搭社区 ModelScope",
    url: "https://www.modelscope.cn",
    category: "ai-tech",
    blurb: "阿里推出的 AI 模型开源社区，中文友好。在线体验各种中文大模型。",
    whyVisit: "国内 AI 模型生态的入口。",
  },
  {
    slug: "jiqizhixin",
    name: "机器之心",
    url: "https://www.jiqizhixin.com",
    category: "ai-tech",
    blurb: "国内领先的 AI 媒体，每天看一眼能掌握行业动态。",
    whyVisit: "AI PM 的日报。",
  },
  {
    slug: "infoq-ai",
    name: "InfoQ AI 前线",
    url: "https://www.infoq.cn/topic/AI",
    category: "ai-tech",
    blurb: "聚焦 AI 工程实践和产品落地，案例分享和技术实践经验。",
    whyVisit: "想看「AI 怎么落到产品里」的真实案例。",
  },
  {
    slug: "prompt-guide",
    name: "Prompt Engineering Guide",
    url: "https://www.promptingguide.ai",
    category: "skill",
    blurb: "提示词工程系统教程，从基础到高级。",
    whyVisit: "Prompt 是 AI PM 的基本功之一，这是体系化练手册。",
  },
];
