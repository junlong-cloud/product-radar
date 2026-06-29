"use client";

import { useEffect, useState } from "react";

const channels = [
  { idx: "01", label: "必学知识", href: "#knowledge" },
  { idx: "02", label: "必读书籍", href: "#books" },
  { idx: "03", label: "必看网站", href: "#websites" },
  { idx: "04", label: "必装软件", href: "#software" },
  { idx: "05", label: "必装 Skills", href: "#skills" },
];

export function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // hero 是 min-h-screen，滚过 80% 视口高度后浮出
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="border-b border-line bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="channel-dot" />
            <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-ink">
              产品雷达
            </span>
            <span className="hairline hidden sm:inline">PRODUCT RADAR</span>
          </a>
          <nav className="flex items-center gap-1" aria-label="板块快捷导航">
            {channels.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[12.5px] font-semibold text-ink-soft hover:bg-canvas-deep hover:text-ink sm:px-3"
              >
                <span className="font-mono text-[10.5px] text-accent">
                  {c.idx}
                </span>
                <span className="hidden sm:inline">{c.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
