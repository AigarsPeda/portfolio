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
    // imagesAssets: [
    //   "/asset/wupzy/desktop_1.webp",
    //   "/asset/wupzy/new-tournament-form.webp",
    //   "/asset/wupzy/setting_dropdown.webp",
    //   "/asset/wupzy/playoffs.webp",
    //   "/asset/wupzy/qr_code.webp",
    //   "/asset/wupzy/mob_3.webp",
    // ],
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
    // imagesAssets: [
    //   "/asset/canvas/canvas_main.webp",
    //   "/asset/canvas/canvas_square.webp",
    //   "/asset/canvas/canvas_select.webp",
    //   "/asset/canvas/canvas_export.webp",
    // ],
    description:
      "Simple drawing app. Draw with your mouse or touch screen. Save your drawings and share them with your friends.",
    technologies: ["Vue.js", "TypeScript", "Pinia", "Github page", "Fabric.js"],
  },
];
