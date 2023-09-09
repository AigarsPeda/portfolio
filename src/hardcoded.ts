import type { ProjectType } from "~/types/project.types";

export const PROJECT_APPEARED_DELAY = 0.7;

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "Wupzy",
    aboutLink: "wupzy",
    link: "https://wupzy.com",
    logo: "/asset/wupzy/wupzy_logo.jpg",
    imagesAssets: [
      "/asset/wupzy/desktop.webp",
      "/asset/wupzy/new-tournament-form.webp",
      "/asset/wupzy/playoffs.webp",
      "/asset/wupzy/qr_code.webp",
      "/asset/wupzy/mob_3.webp",
    ],
    description:
      "Tournament management platform to organize tournaments. Create teams, save scores and share results.",
  },
];
