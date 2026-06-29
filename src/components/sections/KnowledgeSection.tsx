import {
  knowledgeItems,
  knowledgeKindLabels,
  knowledgeKindTint,
} from "@/lib/knowledge";
import { ChannelHead } from "./ChannelHead";

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="mx-auto max-w-[1240px] px-6 py-20">
      <ChannelHead
        idx="01"
        title="必学知识"
        english="Knowledge Base"
        count={knowledgeItems.length}
        blurb="从自学笔记里提炼的核心知识点 —— 基础概念、方法框架、软技能，按添加时间倒序。"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledgeItems.map((item) => (
          <article key={item.slug} className="surface flex flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <span
                className="chip"
                style={{
                  borderColor: knowledgeKindTint[item.kind],
                  color: knowledgeKindTint[item.kind],
                }}
              >
                {knowledgeKindLabels[item.kind]}
              </span>
              {item.featured && (
                <span className="hairline text-accent">焦点</span>
              )}
            </div>
            <h3 className="text-[17px] font-bold leading-snug text-ink">
              {item.term}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              {item.oneLiner}
            </p>
            <p className="text-[12.5px] leading-relaxed text-ink-muted italic">
              {item.whyNoted}
            </p>
            <div className="mt-auto flex items-center justify-between pt-2 text-[11.5px] text-ink-muted">
              <span className="font-mono">{item.addedAt}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  看原文 →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
