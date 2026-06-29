import { knowledgeItems } from "@/lib/knowledge";
import { books } from "@/lib/books";
import { websites } from "@/lib/websites";
import { softwareList } from "@/lib/software";
import { buildLog } from "@/lib/builds";
import { starterSkills } from "@/lib/radar-data";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1240px] px-6 py-24 space-y-12">
      <header>
        <p className="eyebrow mb-4">产品雷达 · 重新出发</p>
        <h1
          className="display text-ink"
          style={{ fontSize: "clamp(56px, 9vw, 116px)" }}
        >
          产品雷达。
        </h1>
        <p className="mt-6 max-w-[600px] text-[15px] leading-relaxed text-ink-soft">
          AI 产品经理学习者的每周收藏板。这是一个全新的开始 ——
          骨架还没动，先把数据迁移过来，IA 和 UI 等下一步重新定。
        </p>
      </header>

      <section className="surface p-7">
        <p className="hairline mb-4">数据迁移情况</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-[14px]">
          <li className="flex items-baseline justify-between">
            <span className="text-ink">必学知识</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {knowledgeItems.length}
            </span>
          </li>
          <li className="flex items-baseline justify-between">
            <span className="text-ink">必读书籍</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {books.length}
            </span>
          </li>
          <li className="flex items-baseline justify-between">
            <span className="text-ink">必看网站</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {websites.length}
            </span>
          </li>
          <li className="flex items-baseline justify-between">
            <span className="text-ink">必装软件</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {softwareList.length}
            </span>
          </li>
          <li className="flex items-baseline justify-between">
            <span className="text-ink">必装 Skill</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {starterSkills.length}
            </span>
          </li>
          <li className="flex items-baseline justify-between">
            <span className="text-ink">Build Log</span>
            <span className="display tabular-nums" style={{ fontSize: "22px" }}>
              {buildLog.length}
            </span>
          </li>
        </ul>
      </section>

      <section className="surface p-7 space-y-3">
        <p className="hairline">下一步</p>
        <ol className="text-[14px] leading-[1.85] text-ink-soft list-decimal pl-5 space-y-2">
          <li>聊清楚新版 IA：要保留哪些 section，怎么排顺序，主页是落点还是只是入口。</li>
          <li>挑视觉方向：现在还是浅底 + 深 hero band 的老风格，要不要换一种？</li>
          <li>把 lib/ 里的数据按新 IA 重新组装组件。</li>
        </ol>
      </section>
    </main>
  );
}
