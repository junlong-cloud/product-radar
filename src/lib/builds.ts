export type BuildLogItem = {
  slug: string;
  title: string;
  status: "shipped" | "wip" | "idea";
  stack: string[];
  blurb: string;
  whatILearned: string;
  liveUrl?: string;
  repoUrl?: string;
  startedAt: string; // YYYY-MM-DD
};

export const buildLog: BuildLogItem[] = [
  {
    slug: "github-zh-trending",
    title: "GitHub 中文热门榜",
    status: "shipped",
    stack: ["Python", "GitHub Actions", "Netlify", "飞书多维表格"],
    blurb:
      "每天抓 GitHub 中文项目，按近 7 天新增 stars 排名，同步进飞书表格做累积。我的第一个 vibecoding 项目。",
    whatILearned:
      "数据 + 自动化 + 部署一个跑通的最小循环，比读 10 篇教程都更让我理解'产品上线'是什么意思。",
    repoUrl: "https://github.com/junlong-cloud/github-zh-trending",
    startedAt: "2026-06-15",
  },
  {
    slug: "product-radar",
    title: "产品雷达（这个站本身）",
    status: "wip",
    stack: ["Next.js 16", "Tailwind v4", "shadcn/ui", "Netlify"],
    blurb:
      "AI 产品经理学习者的每周收藏板：知识 / 工具 / 参考三轨。一边学一边整理，一边练前端。",
    whatILearned:
      "Meta 一点：做这个站本身就是在练 AI PM 的两个核心动作 —— 用 vibecoding 把想法快速落到一个能用的形态，再迭代。",
    startedAt: "2026-06-28",
  },
];
