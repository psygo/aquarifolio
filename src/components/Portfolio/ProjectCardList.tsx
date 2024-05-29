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
    badgeList: ["LaTeX", "Go (Board Game)"],
  },
  {
    href: "https://github.com/FanaroEngineering/ogs_kbd_nav",
    iconFilename: "ogs_kbd_nav_logo.svg",
    iconAlt: "OGS Kbd Nav",
    title: "OGS Kbd nav",
    stars: 9,
    description:
      "A browser extension for playing the game of Go on OGS entirely through the keyboard.",
    badgeList: [
      "Browser Extension",
      "TypeScript",
      "Go (Board Game)",
    ],
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
    href: "https://github.com/FanaroEngineering/dogemp",
    iconFilename: "dogemp_logo.svg",
    iconAlt: "DOGemP",
    title: "DOGemP",
    stars: 4,
    description:
      "The web version of a spreadsheet I used to manage a Go (board game) online league.",
    badgeList: ["Flutter", "Dart", "Go (Board Game)"],
  },
  {
    href: "https://github.com/FanaroEngineering/fanaro_sabaki_theme_collection",
    iconFilename: "sabaki_logo.png",
    iconAlt: "Fanaro Sabaki Theme Collection",
    title: "Fanaro Sabaki Theme Collection",
    stars: 4,
    description:
      "A collection of CSS themes for the Go (board game) editor Sabaki",
    badgeList: ["CSS", "Sabaki", "Themes"],
  },
  {
    href: "https://github.com/psygo/latex-go-diagrams-template",
    iconFilename: "latex_logo.png",
    iconAlt: "Go Diagrams with LaTex",
    title: "Go Diagrams with LaTex",
    stars: 2,
    description:
      "A collection of LaTeX macros so you can draw Go (board game) diagrams without external tools.",
    badgeList: ["LaTeX", "Go (Board Game)"],
  },
  {
    href: "https://github.com/psygo/go_pattern_search",
    iconFilename: "neo4j_logo.png",
    iconAlt: "Go Pattern Search",
    title: "Go Pattern Search",
    stars: 1,
    description:
      "A web tool to pattern search through a graph of multiple SGF trees, using the graph database Neo4j.",
    badgeList: [
      "Neo4j",
      "Cipher",
      "Graph",
      "Go (Board Game)",
    ],
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
    href: "https://github.com/psygo/cv-2023",
    iconFilename: "cv_screenshot.png",
    iconAlt: "CV 2023",
    title: "My CV with LaTeX",
    description: "My 2023 CV using LaTeX.",
    badgeList: ["LaTeX", "CV"],
  },
  {
    href: "https://github.com/FanaroEngineering/youtube_kbd_nav",
    iconFilename: "yt_kbd_nav.svg",
    iconAlt: "YouTube Kbd Nav Logo",
    title: "YouTube Kbd Nav",
    description:
      "A browser extension for controlling YouTube entirely through the keyboard",
    badgeList: ["TypeScript", "Browser Extension"],
  },
  {
    href: "https://github.com/psygo/dotfiles_archcraft_2023/tree/master",
    iconFilename: "dotfiles.png",
    iconAlt: "Dotfiles Logo",
    title: "My Archcraft Dotfiles",
    description:
      "My Archcraft (Arch Linux) 2023 dotfiles config, mostly i3.",
    badgeList: ["Dotfiles", "Linux"],
  },
  {
    href: "https://github.com/psygo/dotfiles_mac_m2_2023",
    iconFilename: "dotfiles.png",
    iconAlt: "Dotfiles Logo",
    title: "My Mac Dotfiles",
    description:
      "My Mac 2023 dotfiles config, with Yabai WM.",
    badgeList: ["Dotfiles", "Mac", "Yabai"],
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
