import { websites, websiteCategoryLabels } from "@/lib/websites";
import { ChannelHead } from "./ChannelHead";

export function WebsitesSection() {
  return (
    <section id="websites" className="mx-auto max-w-[1240px] px-6 py-20">
      <ChannelHead
        idx="03"
        title="必看网站"
        english="Daily Sources"
        count={websites.length}
        blurb="日常监听 AI 和 PM 动态的信号源 —— 按 PM 通用 / AI 技术 / 技能基本功分类。"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {websites.map((site, idx) => {
          const domain = (() => {
            try {
              return new URL(site.url).hostname.replace(/^www\./, "");
            } catch {
              return site.url;
            }
          })();
          return (
            <a
              key={site.slug}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_8px_24px_-12px_rgba(13,27,46,0.18)]"
            >
              {/* 顶部行：序号 + 分类标签（左），外链 chip（右） */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-ink-muted tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="hairline">
                    {websiteCategoryLabels[site.category]}
                  </span>
                </div>
                <span className="font-mono text-[10.5px] tracking-[0.1em] text-ink-muted group-hover:text-accent">
                  ↗
                </span>
              </div>

              {/* 主角：站名 */}
              <h3 className="display mb-3 text-[22px] leading-[1.15] text-ink group-hover:text-accent">
                {site.name}
              </h3>

              {/* 简介 */}
              <p className="mb-5 text-[13.5px] leading-relaxed text-ink-soft">
                {site.blurb}
              </p>

              {/* 信号区 */}
              <div className="mt-auto border-t border-line pt-4">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                    Source
                  </span>
                </div>
                <p className="mb-3 font-mono text-[12px] leading-relaxed text-ink-soft">
                  {domain}
                </p>
                <p className="text-[11.5px] leading-relaxed text-ink-muted">
                  <span className="text-ink-muted/70">▸ </span>
                  {site.whyVisit}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
