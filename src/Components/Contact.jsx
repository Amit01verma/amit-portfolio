const Contact = () => {
  return (
    <section
      id="contact"
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
        <div className="absolute left-[-150px] top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-cyan-400 to-purple-500" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          I'm always open to discussing new opportunities, interesting projects,
          and ways we can work together.
        </p>

        {/* Contact Card */}
        <div
          className="
            mx-auto mt-12 max-w-2xl
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
            sm:p-10
          "
        >
          {/* Email */}
          <div>
            <p className="text-sm text-slate-500">Email</p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amitkr15104@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg font-medium text-white transition-colors hover:text-cyan-400"
            >
              amitkr15104@gmail.com
            </a>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-white/10" />

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/amit-kumar-657434249/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-5 py-3
                text-sm font-medium
                text-slate-300
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:text-cyan-400
              "
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Amit01verma"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-5 py-3
                text-sm font-medium
                text-slate-300
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:text-cyan-400
              "
            >
              GitHub ↗
            </a>
          </div>

          {/* Email Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amitkr15104@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    mt-7 inline-block
    rounded-xl
    bg-cyan-400
    px-7 py-3.5
    font-bold
    text-slate-950
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-cyan-300
    hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  "
          >
            Send Me an Email →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
