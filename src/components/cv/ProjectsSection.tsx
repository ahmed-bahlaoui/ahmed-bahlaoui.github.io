import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { ChromaCard } from "../ui/ChromaCard";

const projects = [
  {
    title: "Physics Particle Simulator",
    tech: "C++",
    year: "2025",
    points: [
      "Modeled real-time physical systems using numerical methods to simulate 1,000+ interacting particles.",
      "Optimized computational efficiency through algorithm refinement and memory management.",
    ],
  },
  {
    title: "Shortify – URL Shortener",
    tech: "Redis · Vercel",
    year: "2025",
    points: [
      "Designed a data-driven backend using Redis key-value storage for high-speed URL retrieval.",
      "Implemented performance monitoring to evaluate latency and scalability.",
    ],
  },
  {
    title: "Machine Learning Projects",
    tech: "Python · scikit-learn",
    year: "",
    points: [
      "Built supervised learning models (regression & classification) using scikit-learn.",
      "Performed data preprocessing, feature scaling, and model evaluation.",
      "Conducted exploratory data analysis using Pandas and Matplotlib.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 section-alt">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Projects" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
          >
            <ChromaCard className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow group chroma-card-border-transition h-full">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold font-display text-foreground leading-snug">{p.title}</h3>
                <ExternalLink size={14} className="text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {p.tech.split(" · ").map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                    {t}
                  </span>
                ))}
                {p.year && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {p.year}
                  </span>
                )}
              </div>
              <ul className="space-y-1.5 text-muted-foreground text-sm leading-relaxed">
                {p.points.map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </ChromaCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
