import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="relative flex h-20 w-full items-center justify-between border-b border-white/10 bg-slate-950/80 px-6 backdrop-blur-xl md:px-12 lg:px-20">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="group flex items-center"
        >
          <img
            src="/favicon.png"
            alt="Amit Kumar"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${
              active === "home"
                ? "bg-white font-semibold text-slate-900 shadow-lg shadow-white/10"
                : "font-medium text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => handleNavClick("about")}
            className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${
              active === "about"
                ? "bg-white font-semibold text-slate-900 shadow-lg shadow-white/10"
                : "font-medium text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => handleNavClick("skills")}
            className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${
              active === "skills"
                ? "bg-white font-semibold text-slate-900 shadow-lg shadow-white/10"
                : "font-medium text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => handleNavClick("projects")}
            className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${
              active === "projects"
                ? "bg-white font-semibold text-slate-900 shadow-lg shadow-white/10"
                : "font-medium text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className={`rounded-xl px-5 py-2.5 text-sm transition-all duration-200 ${
              active === "contact"
                ? "bg-white font-semibold text-slate-900 shadow-lg shadow-white/10"
                : "font-medium text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Resume */}
          <a
            href="/Amit-Kumar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] md:px-5"
          >
            Resume
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute left-4 right-4 top-[88px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => handleNavClick("about")}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => handleNavClick("skills")}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => handleNavClick("projects")}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;