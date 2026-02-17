import type { ProjectType } from "~/types/project.types";

export const PROJECT_APPEARED_DELAY = 0.7;

// get images from folder and add to array

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "Wupzy",
    aboutLink: "wupzy",
    link: "https://wupzy.com",
    logo: "/asset/wupzy/wupzy_logo.jpg",
    codeLink: "https://github.com/AigarsPeda/wupzy",
    description:
      "Organize volleyball tournaments, track scores in real time, and share results with your team — all from your phone.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "tRPC",
      "Prisma",
      "MySQL",
      "Stripe",
      "Vercel",
      "PlanetScale",
    ],
  },
  {
    id: 2,
    title: "Canvas",
    aboutLink: "canvas",
    link: "https://aigarspeda.github.io/designer/",
    codeLink: "https://github.com/AigarsPeda/designer",
    logo: "/asset/canvas/canvas_main.webp",
    description:
      "A browser-based drawing tool with free-form sketching, SVG backgrounds, and a full color palette. Works on desktop and touch screens.",
    technologies: ["Vue.js", "TypeScript", "Pinia", "Github page", "Fabric.js"],
  },
  {
    id: 3,
    title: "Kids learning app",
    aboutLink: "kids_learning_app",
    link: "",
    codeLink: "https://github.com/AigarsPeda/brain-trainer-app",
    logo: "/asset/kids_learning_app/kids_learning_app_6.jpg",
    description:
      "A mobile app that helps kids practice math through bite-sized challenges. Built with React Native and Expo for iOS and Android.",
    technologies: ["React native", "TypeScript", "Expo"],
  },
];
