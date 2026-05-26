"use client";

import { motion } from "framer-motion";

type ProjectMediaProps = {
  image: string;
  title: string;
};

export default function ProjectMedia({
  image,
  title,
}: ProjectMediaProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/3
      "
    >
      {/* IMAGE */}
      <motion.img
        src={image}
        alt={title}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          h-60
          w-full
          object-cover
          object-top
          md:h-80
        "
      />

      {/* OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-t
          from-black/70
          via-black/10
          to-transparent
        "
      />

      {/* LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at top, rgba(190,255,0,0.18), transparent 45%)",
        }}
      />

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </motion.div>
  );
}