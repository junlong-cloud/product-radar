export function ChannelHead({
  idx,
  title,
  english,
  count,
  blurb,
}: {
  idx: string;
  title: string;
  english?: string;
  count?: number;
  blurb?: string;
}) {
  return (
    <div className="mb-12">
      {/* 顶部分隔线 + 频道编号 + 信号计数 */}
      <div className="border-t border-line pt-5">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
            CH&nbsp;·&nbsp;{idx}
          </span>
          {typeof count === "number" && (
            <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {count} signals
            </span>
          )}
        </div>
      </div>

      {/* 主标题 + 英文副线 */}
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
        <h2
          className="display text-ink"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          {title}
        </h2>
        {english && (
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent sm:pb-3">
            {english}
          </span>
        )}
      </div>

      {/* 副标：左侧橙色细条引出 */}
      {blurb && (
        <p className="mt-5 max-w-[640px] border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-ink-soft">
          {blurb}
        </p>
      )}
    </div>
  );
}
