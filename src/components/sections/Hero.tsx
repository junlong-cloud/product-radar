const channels = [
  { idx: "01", label: "必学知识", href: "#knowledge" },
  { idx: "02", label: "必读书籍", href: "#books" },
  { idx: "03", label: "必看网站", href: "#websites" },
  { idx: "04", label: "必装软件", href: "#software" },
  { idx: "05", label: "必装 Skills", href: "#skills" },
];

// AI PM 必懂术语 —— 16 个，仅在主标外围浮现，限制在 1600px 信号域内
const signals = [
  // 顶部带（top 4-14%）
  { term: "LLM",              meta: "Large Language Model",    top: "6%",  left: "4%",  delay: "0s"   },
  { term: "Embedding",        meta: "Semantic Vector",         top: "10%", left: "26%", delay: "3.0s" },
  { term: "Eval",             meta: "Quality Benchmark",       top: "6%",  left: "48%", delay: "5.4s" },
  { term: "Multimodal",       meta: "Vision + Language",       top: "10%", left: "70%", delay: "1.8s" },
  { term: "RAG",              meta: "Retrieval-Augmented Gen", top: "6%",  left: "90%", delay: "4.2s" },
  // 左侧（left 2-10%）
  { term: "Prompt",           meta: "Instruction Design",      top: "30%", left: "3%",  delay: "5.0s" },
  { term: "MCP",              meta: "Model Context Protocol",  top: "58%", left: "4%",  delay: "2.2s" },
  // 右侧（left 88-96%）
  { term: "Agent",            meta: "Autonomous Loop",         top: "30%", left: "90%", delay: "4.4s" },
  { term: "Fine-tune",        meta: "Specialize a Model",      top: "58%", left: "90%", delay: "0.8s" },
  // 底部带（top 84-94%）
  { term: "Token",            meta: "Cost & Context Unit",     top: "88%", left: "4%",  delay: "6.0s" },
  { term: "Context Window",   meta: "Token Budget",            top: "92%", left: "22%", delay: "2.4s" },
  { term: "Hallucination",    meta: "False Confidence",        top: "88%", left: "44%", delay: "3.6s" },
  { term: "Tool Use",         meta: "Function Calling",        top: "92%", left: "62%", delay: "1.7s" },
  { term: "Chain of Thought", meta: "Step-by-step Reasoning",  top: "88%", left: "80%", delay: "4.8s" },
  { term: "RLHF",             meta: "Human Feedback Loop",     top: "92%", left: "94%", delay: "2.0s" },
  // 主标上方一条小补充
  { term: "Inference",        meta: "Model Runtime",           top: "20%", left: "84%", delay: "6.5s" },
];

export function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col overflow-hidden bg-night text-[#fffdf9]">
      {/* 背景层：网格 + 雷达 */}
      <div className="dial-field absolute inset-0" />
      <div className="radar-rings pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 aspect-square w-[140%] -translate-x-1/2 -translate-y-1/2 sm:w-[90%]">
          <div className="radar-sweep" />
        </div>
        <div className="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2">
          <div className="radar-pulse" />
          <div className="radar-pulse delay-1" />
          <div className="radar-pulse delay-2" />
        </div>
        {/* 信号域：限制在 1600px 居中，避免 2K+ 屏幕术语跑到屏幕边缘发呆 */}
        <div className="absolute left-1/2 top-0 h-full w-full max-w-[1600px] -translate-x-1/2">
          {signals.map((s) => (
            <div
              key={s.term}
              className="signal"
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            >
              <span className="signal-dot" />
              <div className="flex flex-col leading-tight">
                <span className="signal-label">{s.term}</span>
                <span className="signal-meta">{s.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 顶部状态栏 */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 pt-6">
        <span className="eyebrow text-accent">SIGNAL · AI PRODUCT MANAGER</span>
        <span className="hairline hidden sm:inline text-[#fffdf9]/60">
          STATION 001 · {new Date().getFullYear()}
        </span>
      </div>

      {/* 主体居中 */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-6 py-16">
        <h1
          className="display hero-rise"
          style={{ fontSize: "clamp(64px, 11vw, 168px)", animationDelay: "0.1s" }}
        >
          产品雷达
          <span className="hero-caret" />
        </h1>
        <p
          className="hero-rise mt-4 font-mono text-[13px] tracking-[0.22em] text-accent sm:text-[14px]"
          style={{ animationDelay: "0.2s" }}
        >
          PRODUCT&nbsp;RADAR&nbsp;·&nbsp;AI&nbsp;PM&nbsp;EDITION
        </p>
        <p
          className="hero-rise mt-10 max-w-[680px] text-[16px] leading-relaxed text-[#fffdf9]/75 sm:text-[18px]"
          style={{ animationDelay: "0.35s" }}
        >
          学 AI 产品经理，不必从零摸索。
          这里替你筛选好<span className="text-accent">必学知识 · 必读书籍 · 必看网站 · 必装软件 · 必装 Skills</span>，
          每周更新，打开就能用 —— 把摸索的时间，省下来做产品。
        </p>

        {/* 状态条 + 榜单入口 */}
        <div
          className="hero-rise mt-6 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-3 py-1.5 font-mono text-[12px] font-bold tracking-wide text-[#fffdf9]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#fffdf9]" />
            每周一 8:00 更新
          </span>
          <a
            href="https://github-zh-trending.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#fffdf9]/15 bg-[#fffdf9]/[0.04] px-3 py-1.5 font-mono text-[12px] tracking-wide text-[#fffdf9]/80 transition-colors hover:border-accent hover:bg-accent/10 hover:text-[#fffdf9]"
          >
            GitHub 中文榜单
            <span className="text-accent">↗</span>
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[#fffdf9]/15 bg-[#fffdf9]/[0.04] px-3 py-1.5 font-mono text-[12px] tracking-wide text-[#fffdf9]/80 transition-colors hover:border-accent hover:bg-accent/10 hover:text-[#fffdf9]"
          >
            GitHub 周度新星
            <span className="text-accent">↓</span>
          </a>
        </div>

        <nav
          className="hero-rise mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "0.55s" }}
          aria-label="板块导航"
        >
          {channels.map((c) => (
            <a key={c.href} href={c.href} className="tuner-btn">
              <span className="tuner-idx">{c.idx}</span>
              {c.label}
            </a>
          ))}
        </nav>
      </div>

      {/* 底部滚动提示 */}
      <a
        href="#knowledge"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-[#fffdf9]/60 hover:text-accent"
        aria-label="向下滚动"
      >
        <span className="hairline">SCROLL</span>
        <svg
          className="scroll-hint"
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
        >
          <path
            d="M7 1v18M1 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>
  );
}
