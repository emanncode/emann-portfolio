import { motion, useScroll, useSpring } from "framer-motion";

export default function NavbarProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-200 h-0.5 w-full origin-left bg-primary"
    />
  );
}