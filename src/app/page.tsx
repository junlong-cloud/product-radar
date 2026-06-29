import { Hero } from "@/components/sections/Hero";
import { StickyNav } from "@/components/sections/StickyNav";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { BooksSection } from "@/components/sections/BooksSection";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main id="top">
      <StickyNav />
      <Hero />
      <KnowledgeSection />
      <BooksSection />
      <WebsitesSection />
      <SoftwareSection />
      <SkillsSection />
    </main>
  );
}
