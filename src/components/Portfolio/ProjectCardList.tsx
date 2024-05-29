"use client"

import { motion } from "framer-motion"

import {
  ProjectCard,
  ProjectCardProps,
} from "./ProjectCard"

const containerAnimationParams = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
}

const itemAnimationParams = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const projectCardsData: ProjectCardProps[] = [
  {
    href: "https://github.com/marcglasberg/fast_immutable_collections",
    iconFilename: "fic.svg",
    iconAlt: "FIC Logo",
    title: "Fast Immutable Collections",
    stars: 203,
    description:
      "Immutable Data Structures for Dart (Co-Developed)",
    badgeList: ["Dart", "Flutter", "Data Structures"],
  },
  {
    href: "https://github.com/FanaroEngineering/traducao_como_jogar_go",
    iconFilename: "como_jogar_go_capa.png",
    iconAlt: "Como Jogar Go Cover",
    title: "Como Jogar Go",
    stars: 15,
    description:
      "A translation of an introductory book to the game of Go, made entirely with LaTeX.",
    badgeList: ["Go (Board Game)", "LaTeX"],
  },
  {
    href: "https://fanaro.io",
    iconFilename: "fanaro.io.svg",
    iconAlt: "Fanaro.io Logo",
    title: "fanaro.io",
    stars: 6,
    description:
      "My personal blog, made entirely with vanilla HTML/CSS/JS, with 100+ articles on Go (board game), and various other topics, including programming.",
    badgeList: ["HTML", "CSS", "CSS", "Go (Board Game)"],
  },
  {
    href: "https://github.com/psygo/three-portfolio",
    iconFilename: "Portfolio_Screenshot.png",
    iconAlt: "Aquarifolio",
    title: "Aquarifolio",
    description:
      "A 3D aquarium built with Three.js and React (React Three Fiber).",
    badgeList: ["Three.js", "React", "3D"],
  },
  {
    href: "https://github.com/psygo/abragodb",
    iconFilename: "edgedb.png",
    iconAlt: "EdgeDB Logo",
    title: "ABRAGO DB",
    description:
      "An interactive database of Go (board game) players, made with Next.js and EdgeDB.",
    badgeList: ["EdgeDB", "SQL", "Next.js"],
  },
  {
    href: "https://github.com/FanaroEngineering/youtube_kbd_nav",
    iconFilename: "yt_kbd_nav.svg",
    iconAlt: "YT Kbd Nav Logo",
    title: "YouTube Kbd Nav",
    description:
      "A browser extension for controlling YouTube entirely through the keyboard",
    badgeList: ["TypeScript", "Browser Extension"],
  },
]

export function ProjectCardList() {
  return (
    <motion.ul
      variants={containerAnimationParams}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3 max-w-[600px]"
    >
      {projectCardsData.map((pc, i) => (
        <motion.li key={i} variants={itemAnimationParams}>
          <ProjectCard {...pc} />
        </motion.li>
      ))}
    </motion.ul>
  )
}
