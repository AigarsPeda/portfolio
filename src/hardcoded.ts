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
      "Tournament management platform to organize tournaments. Create teams, save scores and share results.",
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
      "Simple drawing app. Draw with your mouse or touch screen. Save your drawings and share them with your friends.",
    technologies: ["Vue.js", "TypeScript", "Pinia", "Github page", "Fabric.js"],
  },
  {
    id: 3,
    title: "Kids learning app",
    aboutLink: "kids_learning_app",
    link: "",
    codeLink: "https://github.com/AigarsPeda/kids_learning_app",
    logo: "/asset/kids_learning_app/kids_learning_app_1.webp",
    description:
      "Kids learning app. Learn math by solving simple math problems.",
    technologies: ["React native", "TypeScript", "Expo"],
  },
];
