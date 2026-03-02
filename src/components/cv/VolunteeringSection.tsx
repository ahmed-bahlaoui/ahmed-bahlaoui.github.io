import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Heart } from "lucide-react";
import { ChromaCard } from "../ui/ChromaCard";

const VolunteeringSection = () => (
  <section id="volunteering" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Volunteering" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ChromaCard className="bg-card rounded-xl p-6 border border-border shadow-sm chroma-card-border-transition">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Heart size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">
                Education Mentor
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                Fatal Error Club ENSAMR
              </p>
              <p className="text-sm text-muted-foreground mt-1">Aug 2025 – Present</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Responsible for Machine Learning training at Fatal Error Club, delivering introductory courses on topics such as logistic regression and univariate linear regression.
              </p>
            </div>
          </div>
        </ChromaCard>
      </motion.div>
    </div>
  </section>
);

export default VolunteeringSection;
