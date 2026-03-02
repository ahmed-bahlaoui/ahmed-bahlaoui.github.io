import Navbar from "@/components/cv/Navbar";
import HeroSection from "@/components/cv/HeroSection";
import ExperienceSection from "@/components/cv/ExperienceSection";
import ProjectsSection from "@/components/cv/ProjectsSection";
import SkillsSection from "@/components/cv/SkillsSection";
import EducationSection from "@/components/cv/EducationSection";
import CertificationsSection from "@/components/cv/CertificationsSection";
import VolunteeringSection from "@/components/cv/VolunteeringSection";
import FooterSection from "@/components/cv/FooterSection";

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <CertificationsSection />
    <VolunteeringSection />
    <FooterSection />
  </main>
);

export default Index;
