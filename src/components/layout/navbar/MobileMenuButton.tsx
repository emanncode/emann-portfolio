import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  open: boolean;
  onClick: () => void;
};

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle mobile menu"
      className="
        relative z-120
        flex h-11 w-11 items-center justify-center
        rounded-full border border-border
        bg-black/40 backdrop-blur-xl
        transition-all duration-300
        hover:border-primary/40
        hover:bg-primary/5
        md:hidden
      "
    >
      {/* MENU ICON */}
      <span
        className={`
          absolute transition-all duration-300
          ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
        `}
      >
        <Menu size={18} />
      </span>

      {/* CLOSE ICON */}
      <span
        className={`
          absolute transition-all duration-300
          ${
            open
              ? "rotate-0 opacity-100"
              : "-rotate-90 opacity-0"
          }
        `}
      >
        <X size={18} />
      </span>
    </button>
  );
}