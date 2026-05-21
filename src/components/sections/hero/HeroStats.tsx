import { motion } from "framer-motion";

interface HeroStatsProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
        duration: 0.8,
      }}
      className="flex gap-8 md:gap-14"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <span className="font-display text-[40px] block">{stat.value}</span>

          <span
            className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.15em]
              text-white/50
            "
          >
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
