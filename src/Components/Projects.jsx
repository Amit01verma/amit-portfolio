const Projects = () => {
  const projects = [
    {
      title: "Munch",
      subtitle: "Full Stack Food Ordering Application",
      description:
        "A full-stack food ordering application with user registration, JWT authentication, food browsing, search, cart management, and order placement.",
      technologies: ["React.js", "Node.js", "Express.js", "Prisma", "MySQL"],
      liveUrl: "https://munch-app-five.vercel.app/",
      githubUrl: "https://github.com/Amit01verma/Munch-App",
      featured: true,
    },
    {
      title: "BMI Calculator",
      subtitle: "React Web Application",
      description:
        "A responsive BMI calculator with real-time input handling, state management, input validation, and error handling.",
      technologies: ["React.js", "JavaScript"],
      liveUrl: "https://bmi-calculator-react-6iqi.vercel.app/",
      githubUrl: "https://github.com/Amit01verma/bmi-calculator-react",
      featured: false,
    },
    {
      title: "Interactive Golf Website",
      subtitle: "Animated Interactive Website",
      description:
        "A responsive golf-themed website featuring GSAP-powered animations, scroll-triggered effects, custom cursor interactions, and an engaging user interface.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      liveUrl: "https://interactive-golf-website.vercel.app/",
      githubUrl: "https://github.com/Amit01verma/interactive-golf-website",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#080d14]
        via-[#0a1019]
        to-[#080d14]
        px-6 pt-12 pb-12
        md:px-12
        lg:px-16
      "
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            What I've Built
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            A selection of projects I've built while developing my skills in
            frontend, backend, databases, and interactive web development.
          </p>
        </div>

        {/* Featured Project */}
        <div
          className="
            group relative mb-8 overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            transition-all duration-500
            hover:border-cyan-400/30
          "
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Project Visual */}
            <div
              className="
                relative flex min-h-[320px]
                items-center justify-center
                overflow-hidden
                bg-gradient-to-br
                from-cyan-400/[0.08]
                via-transparent
                to-purple-500/[0.08]
              "
            >
              <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

              <div
                  className="
     relative z-10 mx-auto flex h-auto w-[90%] md:h-56 md:w-110
    items-center justify-center
    overflow-hidden
    rounded-3xl
    border border-cyan-400/20
    bg-[#0d1621]
    shadow-[0_0_50px_rgba(34,211,238,0.08)]
    transition-transform duration-500
    group-hover:scale-105
  "
              >
   <img
  src="/munch.png"
  alt="Munch food ordering application"
  className="h-auto w-full rounded-2xl object-contain"
/>
              </div>

              <span className="absolute left-8 top-8 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

              <span className="absolute bottom-10 right-10 text-3xl text-purple-400">
                ✦
              </span>
            </div>

            {/* Project Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Featured Project
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">Munch</h3>

              <p className="mt-2 text-lg font-medium text-slate-300">
                Full Stack Food Ordering Application
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                A full-stack food ordering application with user registration,
                JWT authentication, food browsing, search, cart management, and
                order placement.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[0].technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border border-white/10
                      bg-white/[0.04]
                      px-3 py-1.5
                      text-xs font-medium
                      text-slate-300
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-3">
                {projects[0].liveUrl ? (
                  <a
                    href={projects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      bg-cyan-400
                      px-5 py-3
                      text-sm font-semibold
                      text-slate-950
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-cyan-300
                    "
                  >
                    Live Demo ↗
                  </a>
                ) : null}

                {projects[0].githubUrl ? (
                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      px-5 py-3
                      text-sm font-semibold
                      text-slate-300
                      transition-all duration-300
                      hover:border-cyan-400/30
                      hover:text-cyan-400
                    "
                  >
                    GitHub ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project) => (
            <div
              key={project.title}
              className="
                group overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-cyan-400/30
              "
            >
              {/* Visual */}
              <div
                className="
                  relative flex h-56
                  items-center justify-center
                  overflow-hidden
                  bg-gradient-to-br
                  from-cyan-400/[0.06]
                  to-purple-500/[0.06]
                "
              >
                <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-[70px]" />

                <div
                  className="
                    relative z-10 flex h-40 w-60
                    items-center justify-center
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-[#0d1621]
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                >
                  <img
                    src={
                      project.title === "BMI Calculator"
                        ? "/bmi.png"
                        : "/golf.png"
                    }
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Information */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-cyan-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-lg
                        border border-white/10
                        bg-white/[0.04]
                        px-3 py-1.5
                        text-xs font-medium
                        text-slate-300
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-xl
                        bg-cyan-400
                        px-4 py-2.5
                        text-sm font-medium
                        text-slate-950
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-cyan-300
                      "
                    >
                      Live Demo ↗
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-xl
                        border border-white/10
                        px-4 py-2.5
                        text-sm font-medium
                        text-slate-300
                        transition-all duration-300
                        hover:border-cyan-400/30
                        hover:text-cyan-400
                      "
                    >
                      GitHub ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;