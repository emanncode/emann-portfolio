"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/SocialIcons";

import Reveal from "@/components/ui/reveal/Reveal";

export default function FooterSection() {
  return (
    <footer
      className="
        relative py-24 md:py-32
        overflow-hidden
        border-t
        border-white/10
        px-6
        md:px-10
        xl:px-14
      "
    >
      {/* AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-100
          w-100
          -translate-x-1/2
          rounded-full
          blur-3xl
        "
        style={{
          background: "rgba(190,255,0,0.06)",
        }}
      />

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="relative z-10">
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div className="max-w-2xl">
            <Reveal>
              <p
                className="
                  mb-5
                  text-[11px]
                  uppercase
                  tracking-[0.32em]
                  text-primary
                "
              >
                Final Transmission
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                className="
                  font-display
                  text-[clamp(3rem,8vw,7rem)]
                  leading-[0.88]
                  tracking-[-0.06em]
                "
              >
                LET’S
                <br />
                BUILD
                <br />
                SOMETHING
                <br />
                REAL.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="
                  mt-8
                  max-w-xl
                  text-sm
                  leading-relaxed
                  text-white/55
                  md:text-base
                "
              >
                Frontend engineer focused on cinematic interfaces, scalable
                products, smooth interactions, and modern web experiences.
              </p>
            </Reveal>
          </div>

          {/* RIGHT */}
          <Reveal delay={0.15}>
            <a
              href="mailto:youremail@gmail.com"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-white/10
                bg-white/3
                px-6
                py-4
                text-sm
                text-white/80
                transition-all
                duration-500
                hover:border-primary/30
                hover:bg-primary/10
              "
            >
              Start a conversation
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  transition-all
                  duration-500
                  group-hover:rotate-45
                  group-hover:border-primary/30
                "
              >
                <ArrowUpRight size={16} />
              </div>
            </a>
          </Reveal>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* BRAND */}
          <Reveal delay={0.2}>
            <div>
              <h3
                className="
                  font-display
                  text-2xl
                  tracking-tighter
                "
              >
                EmannCode
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/40
                "
              >
                Designing motion-driven digital experiences.
              </p>
            </div>
          </Reveal>

          {/* LINKS */}
          <Reveal delay={0.25}>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Emann-Code-01"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/3
                  text-white/60
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <GitHubIcon size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/3
                  text-white/60
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <LinkedInIcon size={18} />
              </a>

              <a
                href="mailto:youremail@gmail.com"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/3
                  text-white/60
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* COPYRIGHT */}
        <Reveal delay={0.3}>
          <div
            className="
              mt-16
              flex
              flex-col
              gap-3
              border-t
              border-white/10
              pt-8
              text-[12px]
              uppercase
              tracking-[0.2em]
              text-white/30
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>© 2026 EmannCode</p>

            <p>Built with React · TypeScript · Tailwind · Framer Motion</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
