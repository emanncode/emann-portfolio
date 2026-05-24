import { ArrowUpRight } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1GQ14Uk15s-k9kkazth5PmCz17CMxp0kI/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
      className="
        group
        hidden
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/3
        px-4
        py-2
        text-[12px]
        font-medium
        tracking-[0.12em]
        text-white/80
        uppercase
        transition-all
        duration-300
        hover:border-primary/40
        hover:bg-primary/10
        hover:text-white
        lg:flex
      "
    >
      Resume
      <ArrowUpRight
        size={14}
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </a>
  );
}
