import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";

const certs = [
  { name: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera" },
  { name: "Statistics Foundations", issuer: "Meta · Sep 2024" },
  { name: "Introduction to Data Analytics", issuer: "Meta · Aug 2024" },
  { name: "Introduction to Data Management", issuer: "Meta · Aug 2024" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <SpotlightCard className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 h-full group">
              <Award size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">{c.name}</p>
                <p className="text-xs text-white/50 mt-1">{c.issuer}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
