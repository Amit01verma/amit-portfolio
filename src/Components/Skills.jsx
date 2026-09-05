const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Intellij IDEA"],
    },
    {
      title: "Problem Solving",
      skills: ["Data Structures", "Algorithms"],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-[#080d14]
        px-6 pt-12 pb-12        
        md:px-12
        lg:px-16
      "
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Technologies and tools I use to build modern web applications
            and solve problems efficiently.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/[0.05]
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.04]
                      px-4 py-2
                      text-sm font-medium
                      text-slate-300
                      transition-all duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;