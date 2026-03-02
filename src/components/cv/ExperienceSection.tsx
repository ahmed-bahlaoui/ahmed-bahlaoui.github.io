import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";
import { ChromaCard } from "../ui/ChromaCard";

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative pl-8 border-l-2 border-border"
      >
        <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <Briefcase size={12} className="text-accent-foreground" />
        </div>
        <ChromaCard className="bg-card rounded-xl p-6 shadow-sm border border-border chroma-card-border-transition">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg font-semibold font-display text-foreground">IT Support Assistant</h3>
            <span className="text-sm text-muted-foreground">Jan 2024 – May 2024</span>
          </div>
          <p className="text-sm text-accent font-medium mb-3">ENSAM IT Department · Rabat, Morocco</p>
          <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
            <li>• Analyzed recurring system incidents, reducing repeated issues through structured troubleshooting.</li>
            <li>• Maintained and cleaned internal databases, ensuring data accuracy and reliability.</li>
            <li>• Monitored network performance metrics and improved system stability.</li>
          </ul>
        </ChromaCard>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
