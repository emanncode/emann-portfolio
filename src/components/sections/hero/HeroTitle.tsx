import { motion } from "framer-motion";

interface HeroTitleProps {
  title: string[];
}

export default function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1
      className="
        font-display
        leading-[0.87]
        tracking-[-1px]
        text-[clamp(3.8rem,15vw,11rem)]
        leading-[0.88]
        tracking-[-0.06em]
        xs:text-[clamp(4.2rem,14vw,11rem)]
        sm:text-[clamp(5rem,12vw,11rem)]
      "
    >
      {title.map((line, index) => (
        <div key={line} className="overflow-hidden">
          <motion.span
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2 + index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              block
              ${index === 2 ? "text-primary" : ""}
            `}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </h1>
  );
}
