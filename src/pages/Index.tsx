import Navbar from "@/components/cv/Navbar";
import HeroSection from "@/components/cv/HeroSection";
import ExperienceSection from "@/components/cv/ExperienceSection";
import ProjectsSection from "@/components/cv/ProjectsSection";
import SkillsSection from "@/components/cv/SkillsSection";
import EducationSection from "@/components/cv/EducationSection";
import CertificationsSection from "@/components/cv/CertificationsSection";
import VolunteeringSection from "@/components/cv/VolunteeringSection";
import FooterSection from "@/components/cv/FooterSection";
import DarkVeil from "@/components/ui/DarkVeil";

const Index = () => (
  <main className="overflow-x-hidden relative">
    {/* Global DarkVeil background — single canvas behind all content */}
    <div className="fixed inset-0 z-0">
      <DarkVeil speed={2} />
    </div>
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <VolunteeringSection />
      <FooterSection />
    </div>
  </main>
);

export default Index;
