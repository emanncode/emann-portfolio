"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

import ProjectGlow from "./ProjectGlow";
import ProjectTag from "./ProjectTag";
import ProjectMedia from "./ProjectMedia";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  index: number;
  number: string;
  image: string;
  link?: string;
  featured?: boolean;
  comingSoon?: boolean;
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  tags,
  index,
  number,
  image,
  link,
  featured,
  comingSoon,
  delay,
}: ProjectCardProps) {
  const content = (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-4xl
        border
        border-white/10
        bg-white/3
        p-5
        md:p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-primary/30
        hover:bg-white/5
      "
    >
      {/* GLOW */}
      <ProjectGlow />

      {/* TOP */}
      <div className="relative z-10 mb-8 flex items-start justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-primary
              "
            >
              {featured
                ? "Featured Project"
                : `Project ${number}`}
            </p>

            {comingSoon && (
              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/50
                "
              >
                Coming Soon
              </span>
            )}
          </div>

          <h3
            className="
              font-display
              text-2xl
              tracking-tighter
              transition-all
              duration-500
              group-hover:-translate-y-1
              md:text-3xl
            "
          >
            {title}
          </h3>
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/3
            text-white/70
            transition-all
            duration-500
            group-hover:border-primary/30
            group-hover:bg-primary/10
            group-hover:text-primary
          "
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* MEDIA */}
      <div className="relative z-10">
        <ProjectMedia
          image={image}
          title={title}
        />
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          relative
          z-10
          mt-7
          max-w-2xl
          text-sm
          leading-[1.9]
          text-white/60
          md:text-[15px]
        "
      >
        {description}
      </p>

      {/* TAGS */}
      <div className="relative z-10 mt-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <ProjectTag
            key={tag}
            label={tag}
          />
        ))}
      </div>

      {/* HOVER LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-primary
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* TOP LIGHT */}
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
            "radial-gradient(circle at top, rgba(190,255,0,0.08), transparent 45%)",
        }}
      />
    </motion.article>
  );

  return (
    <Reveal delay={(delay ?? index) * 0.08}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Reveal>
  );
}