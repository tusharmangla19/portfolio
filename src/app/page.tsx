import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}
