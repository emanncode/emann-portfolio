import Reveal from "@/components/ui/reveal/Reveal";

import SkillCategory from "./SkillCategory";

const skillGroups = [
  {
    title: "Web Frontend",
    skills: [
      { label: "React", highlighted: true },
      { label: "Next.js", highlighted: true },
      { label: "TypeScript", highlighted: true },
      { label: "Vue.js" },
      { label: "JavaScript" },
      { label: "Tailwind CSS" },
      { label: "HTML / CSS" },
    ],
  },

  {
    title: "Mobile",
    skills: [
      { label: "React Native", highlighted: true },
      { label: "Expo", highlighted: true },
      { label: "Flutter", highlighted: true },
      { label: "Cross Platform" },
      { label: "Android" },
      { label: "iOS" },
    ],
  },

  {
    title: "Animation & 3D",
    skills: [
      { label: "Framer Motion", highlighted: true },
      { label: "GSAP" },
      { label: "Three.js" },
      { label: "CSS Animation" },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      { label: "Supabase", highlighted: true },
      { label: "PHP", highlighted: true },
      { label: "MySQL", highlighted: true },
      { label: "REST APIs" },
      { label: "Git / GitHub" },
      { label: "Vercel" },
    ],
  },

  {
    title: "Architecture",
    skills: [
      { label: "Component Design" },
      { label: "Performance" },
      { label: "State Management" },
      { label: "Real-time Features" },
    ],
  },

  {
    title: "How I Work",
    skills: [
      { label: "Problem Solving" },
      { label: "Fast Learner" },
      { label: "Collaboration" },
      { label: "Always Shipping" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-28 md:px-10 xl:px-14">
      <p className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        03 / Skills
        <span className="h-px w-12 bg-primary" />
      </p>

      <Reveal>
        <h2 className="mb-16 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.04em]">
          TECH
          <br />
          STACK
        </h2>
      </Reveal>

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCategory
            key={group.title}
            title={group.title}
            skills={group.skills}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
