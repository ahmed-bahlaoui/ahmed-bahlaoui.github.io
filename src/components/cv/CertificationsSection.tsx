import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";
import { ChromaCard } from "../ui/ChromaCard";

const certs = [
  { name: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera" },
  { name: "Statistics Foundations", issuer: "Meta · Sep 2024" },
  { name: "Introduction to Data Analytics", issuer: "Meta · Aug 2024" },
  { name: "Introduction to Data Management", issuer: "Meta · Aug 2024" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
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
            <ChromaCard className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border chroma-card-border-transition h-full">
              <Award size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
              </div>
            </ChromaCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
