import { softwareList } from "@/lib/software";
import { ChannelHead } from "./ChannelHead";

const badgeLabel: Record<string, string> = {
  must: "必装",
  new: "新增",
  hot: "热门",
};

export function SoftwareSection() {
  return (
    <section id="software" className="mx-auto max-w-[1240px] px-6 py-20">
      <ChannelHead
        idx="04"
        title="必装软件"
        english="Toolbelt"
        count={softwareList.length}
        blurb="装在电脑里能直接跑的工具 —— AI coding、版本控制、运行环境、skill 管理。"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {softwareList.map((item, idx) => (
          <a
            key={item.slug}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_8px_24px_-12px_rgba(13,27,46,0.18)]"
          >
            {/* 顶部行：序号 + 标签（左），徽章（右） */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold text-ink-muted tracking-wider">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="hairline">{item.tagline}</span>
              </div>
              {item.badge && (
                <span
                  className="chip"
                  data-tone={item.badge === "must" ? "lime" : undefined}
                >
                  {badgeLabel[item.badge]}
                </span>
              )}
            </div>

            {/* 主角：软件名 */}
            <h3 className="display mb-3 text-[22px] leading-[1.15] text-ink group-hover:text-accent">
              {item.name}
            </h3>

            {/* 简介 */}
            <p className="mb-5 text-[13.5px] leading-relaxed text-ink-soft">
              {item.oneLiner}
            </p>

            {/* 信号区 */}
            <div className="mt-auto border-t border-line pt-4">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  Category
                </span>
              </div>
              <p className="mb-3 text-[12px] leading-relaxed text-ink-soft">
                {item.category}
              </p>
              <p className="text-[11.5px] leading-relaxed text-ink-muted">
                <span className="text-ink-muted/70">▸ </span>
                {item.whyInstall}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
