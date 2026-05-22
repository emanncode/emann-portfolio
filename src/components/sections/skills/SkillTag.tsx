import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SkillTagProps = {
  children: ReactNode;
  highlighted?: boolean;
  className?: string;
};

export default function SkillTag({
  children,
  highlighted,
  className,
}: SkillTagProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-full border border-white/6 bg-white/3 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.08] hover:text-primary",
        highlighted && "border-primary/10 bg-primary/[0.08] text-primary",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>

      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </div>
  );
}
