import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Heart } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";

const VolunteeringSection = () => (
  <section id="volunteering" className="py-24 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Volunteering" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SpotlightCard className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-sm group">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Heart size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold font-display text-white">
                Education Mentor
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                Fatal Error Club ENSAMR
              </p>
              <p className="text-sm text-white/50 mt-1">Aug 2025 – Present</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                Responsible for Machine Learning training at Fatal Error Club, delivering introductory courses on topics such as logistic regression and univariate linear regression.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  </section>
);

export default VolunteeringSection;
