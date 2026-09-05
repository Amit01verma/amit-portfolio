const About = () => {
  return (
    <section
     id="about"
  className="
    relative overflow-hidden
    bg-gradient-to-b
    from-[#0b111b]
    via-[#0a1019]
    to-[#080d14]
    px-6
    pt-16
    pb-12
    md:px-12
    lg:px-16
  "
>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            WHO I AM
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mt-5 h-px w-20 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* About Text */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              sm:p-10
            "
          >
            <h3 className="text-2xl font-semibold text-white">
              I'm a Full Stack Developer who enjoys building things for the web.
            </h3>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-400">
              <p>
                I enjoy turning ideas into clean, responsive, and user-friendly
                web applications. I like working across both the frontend and
                backend to understand how everything comes together.
              </p>

              <p>
                I'm continuously improving my development skills and
                strengthening my problem-solving abilities through Data
                Structures and Algorithms.
              </p>

              <p>
                My goal is to keep learning, build meaningful projects, and grow
                as a software developer while writing clean and maintainable
                code.
              </p>
            </div>

            {/* Small highlight */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-sm font-medium text-slate-300">
                Always learning. Always building.
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
              "
            >
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Focus
              </p>

              <p className="mt-3 text-xl font-semibold text-white">
                Full Stack Development
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
              "
            >
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Problem Solving
              </p>

              <p className="mt-3 text-xl font-semibold text-white">
                Data Structures & Algorithms
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-400/30
              "
            >
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Mindset
              </p>

              <p className="mt-3 text-xl font-semibold text-white">
                Learn • Build • Improve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
