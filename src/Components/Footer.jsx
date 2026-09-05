const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070b11] px-6 py-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <a href="#home" className="group flex items-center">
            <img
              src="/favicon.png"
              alt="Amit Kumar"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

          {/* Contact */}
          <a
            href="#contact"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            Let's Talk →
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Amit Kumar. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
