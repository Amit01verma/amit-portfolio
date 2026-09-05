const Hero = () => {
  return (
    <section
      id="home"
     className="
  relative
  overflow-hidden
  bg-gradient-to-b
  from-[#080d14]
  via-[#080d14]
  to-[#0b111b]
  px-8
 pt-28
md:px-12
md:pt-30
lg:px-16
lg:pt-16
  md:px-12
  lg:px-16
"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-10 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute bottom-0 right-[35%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-10 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative z-10">
          
          {/* Intro */}
          <div className="mb-7 flex items-center gap-3">
            <span className="text-3xl">👋</span>

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Hi there, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="font-name text-7xl leading-[0.9] tracking-tight text-white sm:text-8xl">
            Amit
            <br />
            Kumar
          </h1>

          {/* Decorative line */}
          <div className="mt-6 flex items-center gap-2">
            <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </div>

          {/* Role */}
          <div className="mt-7 flex items-center gap-3">
            <h2 className="text-xl font-bold uppercase tracking-wider text-cyan-400 sm:text-2xl">
              Full Stack Developer
            </h2>

            <span className="text-2xl">💻</span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm a passionate developer who loves building modern,
            responsive, and user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                rounded-xl
                bg-cyan-400
                px-7 py-4
                font-semibold
                text-slate-950
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-[0_12px_35px_rgba(34,211,238,0.25)]
              "
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="
                rounded-xl
                border border-slate-700
                px-7 py-4
                font-semibold
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:text-cyan-400
              "
            >
              Contact Me ✉
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]">
          
          {/* Main glow */}
          <div className="absolute right-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="absolute right-10 top-20 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[90px]" />

          {/* Decorative circle */}
          <div className="absolute right-8 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-cyan-400/20" />

          {/* Image */}
          <img
            src="/portfolio-hero.png"
            alt="Developer working on a laptop"
            className="
              relative z-10
              w-full
              max-w-[700px]
              object-contain
              drop-shadow-[0_0_45px_rgba(34,211,238,0.12)]
            "
          />

          {/* Floating cyan dot */}
          <span className="absolute right-2 top-24 z-20 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />

          {/* Floating purple dot */}
          <span className="absolute bottom-24 left-8 z-20 h-5 w-5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />

          {/* Star */}
          <span className="absolute bottom-28 right-0 z-20 text-4xl text-cyan-400">
            ✦
          </span>
        </div>
      </div>

      {/* Smooth transition into About */}
<div
  className="
    pointer-events-none
    absolute bottom-0 left-0 right-0
    h-32
    bg-gradient-to-b
    from-transparent
    to-[#0b111b]
  "
/>
    </section>
  );
};

export default Hero;