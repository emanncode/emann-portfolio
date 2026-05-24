import { AnimatePresence, motion } from "framer-motion";

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

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="
              fixed inset-0 z-90
              bg-black/70
              backdrop-blur-md
              md:hidden
            "
          />

          {/* MENU PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 240,
            }}
            className="
              fixed right-0 top-0 z-100
              flex h-screen w-[85%] max-w-95
              flex-col
              border-l border-border
              bg-bg/95
              px-8 pb-10 pt-32
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* LINKS */}
            <div className="flex flex-col gap-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 40,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  onClick={onClose}
                  className="group flex items-center gap-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                    0{index + 1}
                  </span>

                  <span
                    className="
                      font-display text-5xl leading-none
                      tracking-[-0.04em]
                      transition-colors duration-300
                      group-hover:text-primary
                    "
                  >
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto border-t border-border pt-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                Frontend & Mobile Engineer
              </p>

              <p className="mt-3 text-sm leading-7 text-text/60">
                React · Next.js · Vue · React Native · PHP · MySQL
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
