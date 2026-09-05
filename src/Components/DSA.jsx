const DSA = () => {
  const dataStructures = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stack",
    "Queue",
  ];

  const algorithms = [
    "Searching",
    "Sorting",
    "Recursion",
    "Backtracking",
    "Two Pointers",
    "Sliding Window",
  ];

  const coreConcepts = [
    "Time Complexity",
    "Space Complexity",
    "Problem Solving",
    "Logical Thinking",
  ];

  return (
    <section
      id="dsa"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#080d14]
        via-[#0a1019]
        to-[#080d14]
        px-6 pb-12 pt-12
        md:px-12
        lg:px-16
      "
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-180px] bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Problem Solving
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Data Structures <span className="text-cyan-400">&</span> Algorithms
          </h2>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            I regularly practice Data Structures and Algorithms to improve my
            problem-solving, logical thinking, and coding skills.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Data Structures */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
                ◈
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Data Structures
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Linear Data Structures
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {dataStructures.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-lg
                    border border-white/10
                    bg-white/[0.04]
                    px-3 py-2
                    text-sm text-slate-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Algorithms */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-purple-400/30
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-xl">
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Algorithms & Techniques
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Problem-solving approaches
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {algorithms.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-lg
                    border border-white/10
                    bg-white/[0.04]
                    px-3 py-2
                    text-sm text-slate-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
                ◎
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Core Concepts
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Foundations I focus on
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {coreConcepts.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-lg
                    border border-white/10
                    bg-white/[0.04]
                    px-3 py-2
                    text-sm text-slate-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Practice */}
        <div
          className="
            mt-6 flex flex-col gap-5
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-7
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Coding Practice
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Consistent Practice, Better Problem Solving
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://leetcode.com/u/amit_kumar0875/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              LeetCode ↗
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/amitku9qyt2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              GeeksforGeeks ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSA;
