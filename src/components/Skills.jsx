import React from "react";
import { skillCategories } from "../personalData";
import LogoLoop from "./LogoLoop"; 

import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaJs
} from "react-icons/fa";

import {
  SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiFirebase, SiPostman
} from "react-icons/si";

/* ---------------- ICON LOOP DATA ---------------- */
// 🚀 ICONS INCREASED FROM 20 TO 32 FOR A LARGER LOOK
const techLogos = [
  {
    node: <FaReact className="text-cyan-400" size={32} />,
    alt: "React",
  },
  {
    node: <FaJs className="text-yellow-400" size={32} />,
    alt: "JavaScript",
  },
  {
    node: <FaNodeJs className="text-green-500" size={32} />,
    alt: "Node.js",
  },
  {
    node: <SiExpress className="text-gray-300" size={32} />,
    alt: "Express.js",
  },
  {
    node: <SiMongodb className="text-green-400" size={32} />,
    alt: "MongoDB",
  },
  {
    node: <SiNextdotjs className="text-white" size={32} />,
    alt: "Next.js",
  },
  {
    node: <SiTailwindcss className="text-cyan-300" size={32} />,
    alt: "Tailwind CSS",
  },
  {
    node: <SiTypescript className="text-blue-500" size={32} />,
    alt: "TypeScript",
  },
  {
    node: <FaPython className="text-blue-400" size={32} />,
    alt: "Python",
  },
  {
    node: <SiFirebase className="text-amber-500" size={32} />,
    alt: "Firebase",
  },
  {
    node: <SiPostman className="text-orange-500" size={32} />,
    alt: "Postman",
  },
  {
    node: <FaGitAlt className="text-red-500" size={32} />,
    alt: "Git",
  },
  {
    node: <FaGithub className="text-white" size={32} />,
    alt: "GitHub",
  },
];

/* ---------------- CARD ---------------- */
const SkillCard = ({ cat }) => {
  return (
    <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-bold text-white mb-4">
        {cat.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {cat.items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------------- SKILLS ---------------- */
export default function Skills() {
  return (
    <section className="py-24 px-4 bg-black">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I use 🚀
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} cat={cat} />
          ))}
        </div>

        {/* LOOP */}
        <p className="text-center text-gray-500 tracking-[0.3em] mb-10 text-xs uppercase">
          Technologies I Work With
        </p>

        {/* 🚀 INCREASED GAP TO 32 TO ACCOMMODATE LARGER CAPSULES */}
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          gap={32}
          pauseOnHover={true}
          fadeOut={true}
          scaleOnHover={true}   
        />

        <div className="mt-6 opacity-80">
          <LogoLoop
            logos={[...techLogos].reverse()}
            speed={80}
            direction="right"
            gap={32}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
          />
        </div>

      </div>
    </section>
  );
}