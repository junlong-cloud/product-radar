"use client";

import { useState } from "react";
import {
  starterSkills,
  skillCategoryLabels,
  skillCategoryBlurb,
  type SkillCategory,
} from "@/lib/radar-data";
import { ChannelHead } from "./ChannelHead";

const categories = Object.keys(skillCategoryLabels) as SkillCategory[];

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>("rising");
  const items = starterSkills.filter((s) => s.category === active);

  return (
    <section id="skills" className="mx-auto max-w-[1240px] px-6 py-20">
      <ChannelHead
        idx="05"
        title="必装 Skills"
        english="Skill Library"
        count={starterSkills.length}
        blurb="6 个频道，从新手起步到全栈出活，按需切台。"
      />

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Skill 分类">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className="tabpill"
            data-active={active === cat}
          >
            {skillCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <p className="mb-8 max-w-[640px] text-[13px] leading-relaxed text-ink-soft">
        {skillCategoryBlurb[active]}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((skill, idx) => (
          <a
            key={skill.slug}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            className="surface group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_8px_24px_-12px_rgba(13,27,46,0.18)]"
          >
            {/* 顶部行：序号 + 标签（左），主指标（右） */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold text-ink-muted tracking-wider">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="hairline">{skill.tagline}</span>
              </div>
              {skill.category === "rising" && typeof skill.weeklyDelta === "number" ? (
                <div className="flex flex-col items-end leading-none">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-ink-muted">
                    本周 ★
                  </span>
                  <span className="display tabular-nums text-[24px] text-accent">
                    +{skill.weeklyDelta.toLocaleString()}
                  </span>
                </div>
              ) : skill.badge ? (
                <span className="chip">
                  {skill.badge === "new" ? "新增" : "热门"}
                </span>
              ) : null}
            </div>

            {/* 主角：名称 */}
            <h3 className="display mb-3 text-[22px] leading-[1.15] text-ink group-hover:text-accent">
              {skill.name}
            </h3>

            {/* 一句话 */}
            <p className="mb-5 text-[13.5px] leading-relaxed text-ink-soft">
              {skill.oneLiner}
            </p>

            {/* 信号区：用 hairline 边线划开主体和元信息 */}
            <div className="mt-auto border-t border-line pt-4">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  Signal
                </span>
              </div>
              <p className="mb-3 text-[12px] leading-relaxed text-ink-soft">
                {skill.signal}
              </p>
              <p className="text-[11.5px] leading-relaxed text-ink-muted">
                <span className="text-ink-muted/70">▸ </span>
                {skill.why}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
