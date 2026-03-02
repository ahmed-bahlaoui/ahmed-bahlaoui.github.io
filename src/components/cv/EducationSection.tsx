import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";
import { ChromaCard } from "../ui/ChromaCard";

const EducationSection = () => (
  <section id="education" className="py-24 px-6 section-alt">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ChromaCard className="bg-card rounded-xl p-6 border border-border shadow-sm chroma-card-border-transition">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">
                Engineering Degree — AI & Data Science
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                École Nationale des Arts et Métiers · Rabat, Morocco
              </p>
              <p className="text-sm text-muted-foreground mt-1">Sep 2023 – Jun 2028</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Coursework: Machine Learning, Probability & Statistics, Algorithms, Data Structures, Mathematical Optimization
              </p>
            </div>
          </div>
        </ChromaCard>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
