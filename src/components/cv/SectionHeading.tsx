import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold font-display text-white">{title}</h2>
    {subtitle && <p className="mt-2 text-white/60">{subtitle}</p>}
    <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
  </motion.div>
);

export default SectionHeading;
