export type SoftwareItem = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  oneLiner: string;
  whyInstall: string;
  link: string;
  badge?: "must" | "new" | "hot";
};

/* 必装软件 —— 区分于「必装 Skill」：
   软件 = 你装在电脑里能跑的工具
   Skill = 可复用的 AI 能力包 / 工作流 */

export const softwareList: SoftwareItem[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "AI Coding",
    tagline: "终端 AI 主力",
    oneLiner: "Anthropic 官方终端 AI pair —— 读写仓库、跑命令、做 plan。Vibecoding 的主战场。",
    whyInstall: "目前所有 AI 工具里上限最高的一个，转 AI PM 必装。",
    link: "https://github.com/anthropics/claude-code",
    badge: "must",
  },
  {
    slug: "codex-cli",
    name: "Codex CLI",
    category: "AI Coding",
    tagline: "OpenAI 对位",
    oneLiner: "OpenAI 出的终端 agent —— 跟 Claude Code 同位面，做多模型对比时用。",
    whyInstall: "Claude 不行用 Codex，做 PM 要会切供应商。",
    link: "https://github.com/openai/codex",
    badge: "must",
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "AI IDE",
    tagline: "IDE 顺起点",
    oneLiner: "AI 原生编辑器 —— Tab 自动补、Cmd+K 改一段、Composer 跨文件改。",
    whyInstall: "习惯 IDE 不习惯终端的人从这入门，零迁移成本。",
    link: "https://cursor.com",
    badge: "must",
  },
  {
    slug: "git",
    name: "Git",
    category: "版本控制",
    tagline: "AI 救命药",
    oneLiner: "branch / reset / stash 三件套 —— AI 改飞了 30 秒回到出发点。",
    whyInstall: "AI 会乱改，会回滚才敢放手。Vibecoding 的安全绳。",
    link: "https://git-scm.com",
    badge: "must",
  },
  {
    slug: "node-pnpm",
    name: "Node + pnpm",
    category: "运行环境",
    tagline: "环境最小集",
    oneLiner: "Node 22 LTS + pnpm，跑别人代码 / 跑 AI 生成代码的底座。",
    whyInstall: "Node 装错版本 / npm 锁不住依赖，是新手最常卡的两个点。",
    link: "https://nodejs.org",
    badge: "must",
  },
  {
    slug: "skillhub",
    name: "Skillhub",
    category: "Skill 管理",
    tagline: "Skill 仓库",
    oneLiner: "讯飞开源的 Claude Skills 集中管理工具，浏览、安装、分发一站式。",
    whyInstall: "想把「我做过的事」沉淀成可复用 skill，需要一个能统一管理和分享的本地中心。",
    link: "https://github.com/iflytek/skillhub",
    badge: "must",
  },
];
