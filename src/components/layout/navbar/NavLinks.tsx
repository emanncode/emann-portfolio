import NavLink from "./NavLink";

const links = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function NavLinks() {
  return (
    <div className="hidden items-center md:flex">
      {/* LINKS */}
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
}
