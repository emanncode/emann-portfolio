import Reveal from "@/components/ui/reveal/Reveal";

import SkillTag from "./SkillTag";

type SkillCategoryProps = {
  title: string;
  skills: {
    label: string;
    highlighted?: boolean;
  }[];
  delay?: number;
};

export default function SkillCategory({
  title,
  skills,
  delay,
}: SkillCategoryProps) {
  return (
    <Reveal delay={delay}>
      <div>
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
          {title}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillTag key={skill.label} highlighted={skill.highlighted}>
              {skill.label}
            </SkillTag>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
