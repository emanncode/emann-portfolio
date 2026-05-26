import Section from "@/components/layout/Section";

import Reveal from "@/components/ui/reveal/Reveal";
import SectionLabel from "@/components/ui/section-label/SectionLabel";
import SectionTitle from "@/components/ui/section-title/SectionTitle";

import ProjectGrid from "./ProjectGrid";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-32
          h-125
          w-125md
          -translate-x-1/2
          rounded-full
          blur-3xl
        "
        style={{
          background: "rgba(190,255,0,0.06)",
        }}
      />

      <Reveal>
        <SectionLabel number="02" title="Work" />
      </Reveal>

      <Reveal delay={0.1}>
        <SectionTitle title={["SELECTED", "PROJECTS"]} />
      </Reveal>

      <Reveal delay={0.15}>
        <p
          className="
            mt-6
            max-w-2xl
            text-sm
            leading-relaxed
            text-white/50
            md:text-base
          "
        >
          A collection of products, platforms, and experiences focused on
          cinematic UI, smooth interactions, scalable architecture, and modern
          frontend engineering.
        </p>
      </Reveal>

      <div className="relative z-10 mt-16">
        <ProjectGrid />
      </div>
    </Section>
  );
}
