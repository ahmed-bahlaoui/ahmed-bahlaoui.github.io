import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  Code2,
  BrainCircuit,
  BarChart3,
  Lightbulb,
  Wrench,
  Cog,
  CheckCircle2,
  Network,
  Calculator,
  LineChart
} from "lucide-react";

// Using Lucide icons for concepts where brand logos aren't applicable
const skillGroups = [
  {
    label: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ],
  },
  {
    label: "Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    ],
  },
  {
    label: "Data Analysis",
    icon: BarChart3,
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: LineChart, color: "#11557c" },
    ],
  },
  {
    label: "Concepts",
    icon: Lightbulb,
    skills: [
      { name: "Feature Eng.", icon: Cog, color: "#8b5cf6" },
      { name: "Model Eval.", icon: CheckCircle2, color: "#10b981" },
      { name: "ML Design", icon: Network, color: "#f43f5e" },
      { name: "Statistics", icon: Calculator, color: "#3b82f6" },
    ],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 relative">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Skills" />
      <div className="space-y-16 mt-12">
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <group.icon className="w-8 h-8 text-white/80" />
              <h3 className="text-2xl font-bold text-white font-display tracking-tight uppercase">
                {group.label}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.skills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <SpotlightCard 
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-sm h-full flex flex-col items-center justify-center gap-4 group cursor-default"
                    spotlightColor={`${skill.color}33`} // Default to 20% opacity of the brand color by appending hex alpha
                  >
                    <skill.icon 
                      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 relative z-10" 
                      style={{ color: skill.color }} 
                    />
                    <span className="text-sm font-medium text-white/90 text-center relative z-10">
                      {skill.name}
                    </span>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
