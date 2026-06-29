import { books, bookCategoryLabels, type Book } from "@/lib/books";
import { ChannelHead } from "./ChannelHead";

function BookCover({ book, idx }: { book: Book; idx: number }) {
  const isAiPm = book.category === "ai-pm";

  // 标题断行：优先用 titleLines，否则按「：」「——」自动切
  const lines: string[] = book.titleLines && book.titleLines.length > 0
    ? book.titleLines
    : (() => {
        const [main, ...rest] = book.title.split(/[：—]/);
        return rest.length ? [main, rest.join("：").trim()] : [main];
      })();

  const [titleA, titleB, titleC] = lines;

  const palette = isAiPm
    ? {
        bg: "#0d1b2e",
        fg: "#fffdf9",
        muted: "rgba(255,253,249,0.5)",
        rule: "rgba(255,253,249,0.25)",
        watermark: "rgba(255,253,249,0.04)",
      }
    : {
        bg: "#efeae0",
        fg: "#1b1a16",
        muted: "#7a7666",
        rule: "#b9b3a0",
        watermark: "rgba(27,26,22,0.05)",
      };

  return (
    <div
      className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden p-6"
      style={{ background: palette.bg, color: palette.fg }}
    >
      {/* 背景大水印数字 —— 装饰但承载编号 */}
      <span
        className="display absolute select-none leading-none"
        style={{
          color: palette.watermark,
          fontSize: "240px",
          right: "-30px",
          bottom: "-80px",
          letterSpacing: "-0.05em",
          fontWeight: 900,
        }}
        aria-hidden
      >
        {String(idx + 1).padStart(2, "0")}
      </span>

      {/* 左侧脊条 */}
      <span
        className="absolute left-0 top-0 h-full w-[3px]"
        style={{ background: "#ff5a36" }}
      />

      {/* 顶部行：编号 + 类目 */}
      <div
        className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ color: palette.muted }}
      >
        <span style={{ color: palette.fg }}>N°{String(idx + 1).padStart(2, "0")}</span>
        <span>{isAiPm ? "AI · PM" : "PM · BASICS"}</span>
      </div>

      {/* 标题区：主标 → 次标 → 第三行（小） */}
      <div className="relative">
        <h3
          className="display leading-[0.95]"
          style={{
            fontSize: titleA.length > 6 ? "32px" : "40px",
            color: palette.fg,
            letterSpacing: "-0.01em",
          }}
        >
          {titleA}
        </h3>
        {titleB && (
          <div
            className="display mt-1 leading-[0.95]"
            style={{
              fontSize: titleB.length > 8 ? "20px" : "28px",
              color: palette.fg,
              letterSpacing: "-0.01em",
            }}
          >
            {titleB}
          </div>
        )}
        {titleC && (
          <p
            className="mt-3 text-[11.5px] leading-snug"
            style={{ color: palette.muted }}
          >
            {titleC}
          </p>
        )}
      </div>

      {/* 底部 imprint */}
      <div className="relative">
        <span
          className="block h-px w-10"
          style={{ background: "#ff5a36" }}
        />
        <div className="mt-3 flex items-end justify-between gap-3">
          <div>
            <div
              className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: palette.fg }}
            >
              {book.author}
            </div>
            <div
              className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em]"
              style={{ color: palette.muted }}
            >
              {isAiPm ? "Vol. II · AI" : "Vol. I · Basics"}
            </div>
          </div>
          <div
            className="font-mono text-[8.5px] uppercase tracking-[0.2em]"
            style={{ color: palette.muted, textAlign: "right" }}
          >
            产品雷达
            <br />
            Product Radar
          </div>
        </div>
      </div>
    </div>
  );
}

export function BooksSection() {
  return (
    <section id="books" className="mx-auto max-w-[1240px] px-6 py-20">
      <ChannelHead
        idx="02"
        title="必读书籍"
        english="Reading List"
        count={books.length}
        blurb="转 AI PM 不知道从哪开始读？这里按阅读顺序排好 8 本 —— 先 4 本打传统 PM 基本盘，再 4 本补 AI PM 专项，全部已开放下载。"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book, idx) => (
          <article key={book.slug} className="surface flex flex-col overflow-hidden">
            <BookCover book={book} idx={idx} />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="hairline text-accent">
                {bookCategoryLabels[book.category]}
              </span>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {book.blurb}
              </p>
              <p className="text-[12px] leading-relaxed text-ink-muted italic">
                {book.whyRead}
              </p>
              <div className="mt-auto pt-2">
                {book.downloadUrl ? (
                  <a
                    href={book.downloadUrl}
                    download
                    className="btn btn-primary w-full"
                  >
                    下载 {book.downloadUrl.endsWith(".epub") ? "EPUB" : "PDF"}
                  </a>
                ) : (
                  <span className="btn w-full cursor-not-allowed opacity-50">
                    待上传
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
