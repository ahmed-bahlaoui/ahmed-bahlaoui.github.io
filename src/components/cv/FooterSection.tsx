import { Mail, Linkedin, Github } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="hero-gradient text-primary-foreground py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Let's Connect</h2>
      <p className="opacity-70 mb-8 text-sm">
        Arabic (Native) · French (Fluent) · English (Fluent)
      </p>
      <div className="flex items-center justify-center gap-5 mb-8">
        <a href="mailto:AhmedBahlaoui@outlook.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Mail size={16} />
        </a>
        <a href="https://linkedin.com/in/ahmed-bahlaoui" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="https://github.com/ahmed-bahlaoui" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Github size={16} />
        </a>
      </div>
      <p className="text-xs opacity-50">© 2025 Ahmed Bahlaoui. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;
