import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { ChromaBackground } from "../ui/ChromaBackground";
import { ShinyText } from "../ui/shiny-text";
import { TextType } from "../ui/text-type";

const socials = [
  { icon: Mail, href: "mailto:AhmedBahlaoui@outlook.com", label: "Email" },
  { icon: Phone, href: "tel:+212663527790", label: "Phone" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ahmed-bahlaoui",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/ahmed-bahlaoui", label: "GitHub" },
];

const HeroSection = () => (
  <section className="relative min-h-screen hero-gradient text-primary-foreground overflow-hidden">
    <ChromaBackground className="absolute inset-0 z-0" radius={800} />
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/5 blur-xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-white/5 blur-2xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase opacity-70 mb-6 font-sans"
        >
          <ShinyText
            text="AI & Data Science Engineer"
            disabled={false}
            speed={3}
            className=""
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
        >
          <TextType
            text="Ahmed Bahlaoui"
            as="span"
            typingSpeed={100}
            loop={false}
            showCursor={true}
            cursorCharacter="_"
            cursorClassName="font-light opacity-50"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl mx-auto mb-10 font-light"
        >
          Engineering student with strong foundations in statistics, machine
          learning, and data modeling. Skilled in translating complex datasets
          into actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}Ahmed_Bahlaoui_CV.pdf`}
              download="Ahmed_Bahlaoui_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors font-medium text-sm"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Ahmed_Bahlaoui_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors font-medium text-sm"
            >
              <Eye size={16} />
              View CV
            </a>
          </div>
          <div className="flex items-center justify-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="animate-bounce opacity-50" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
