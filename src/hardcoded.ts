import type { ProjectType } from "~/types/project.types";

export const PROJECT_APPEARED_DELAY = 0.7;

// get images from folder and add to array

export const PROJECTS: ProjectType[] = [
  {
    id: 4,
    title: "JāņogaGO",
    aboutLink: "janogago",
    link: "https://janogago.lv/",
    codeLink: "",
    logo: "",
    coverImage: "/asset/janogago/01-home.webp",
    category: "Business website",
    description:
      "A bilingual food-vending website with an interactive 3D machine, a filterable food catalog, and quote enquiries.",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Polylang",
      "model-viewer",
    ],
    details: [
      "I built a custom WordPress theme for JāņogaGO, a service that installs and stocks food vending machines in workplaces. The Latvian and English website explains the service, presents the food selection, and helps businesses request a quote.",
      "The homepage brings the vending machine into the browser with an interactive 3D model and a photo fallback. The food catalog supports category and dietary filters, with shareable filter URLs. Staff can manage dishes, photographs, translations, and page content through WordPress.",
      "Quote enquiries submit without reloading the page and are saved privately in WordPress, with email notifications for the team. Field validation, spam controls, and clear submission feedback support the enquiry flow.",
    ],
    screenshots: [
      {
        src: "/asset/janogago/01-home.webp",
        alt: "JāņogaGO homepage with Latvian service information and a red 3D vending machine",
        caption: "Service homepage with an interactive 3D vending machine.",
      },
      {
        src: "/asset/janogago/02-catalog.webp",
        alt: "JāņogaGO food catalog with category filters and photographs of prepared meals",
        caption: "Food catalog with category and dietary filters.",
      },
    ],
  },
  {
    id: 5,
    title: "OAKS Build",
    aboutLink: "oaksbuild",
    link: "https://oaksbuild.lv/",
    codeLink: "",
    logo: "",
    coverImage: "/asset/oaksbuild/01-home.webp",
    category: "Business website",
    description:
      "A construction management website in three languages, with service pages and completed project galleries built in WordPress.",
    technologies: ["WordPress", "PHP", "JavaScript", "Gutenberg", "Polylang"],
    details: [
      "I built OAKS Build's website to explain its construction management and supervision services. Dedicated pages address property developers and private home builders, while a completed-project gallery gives visitors concrete examples of the team's work.",
      "The site uses a custom WordPress block theme and the native Gutenberg editor. The team can update service copy, project photographs, menus, and contact details without editing code. Polylang connects the Latvian, English, and Russian versions.",
      "The responsive layouts carry the same service information and project photography across desktop and mobile. Contact links give prospective clients a direct route to discuss a building project.",
    ],
    screenshots: [
      {
        src: "/asset/oaksbuild/01-home.webp",
        alt: "OAKS Build homepage with construction management headline and a building site image",
        caption: "Construction management and supervision homepage.",
      },
      {
        src: "/asset/oaksbuild/02-projects.webp",
        alt: "OAKS Build completed-project gallery showing renovated buildings and interiors",
        caption: "Completed projects, with photographs and location details.",
      },
    ],
  },
  {
    id: 3,
    title: "Math Mews",
    aboutLink: "math-mews",
    link: "",
    codeLink: "",
    logo: "/asset/math_mews/icon.webp",
    coverImage: "/asset/math_mews/cover.webp",
    category: "Mobile game · In development",
    description:
      "A mobile math game where kids solve puzzles, care for a virtual cat, and furnish connected 3D rooms.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Filament",
      "Supabase",
      "RevenueCat",
    ],
    details: [
      "Math Mews connects math practice with caring for a virtual cat. Children work through puzzles at different difficulty levels, earn coins, and use their rewards to furnish the cat's home. Picture help and topic statistics support learning along the way.",
      "The cat lives in connected rooms, including a living room, bedroom, bathroom, and kitchen. Players can arrange furniture and toys, feed the cat, and watch it interact with its surroundings. Native Filament rendering brings the rooms and animated cat to iOS and Android.",
      "I am building the game with React Native, Expo, and TypeScript, with Supabase for backend services and RevenueCat for coin-pack purchases. Math Mews is in active development. The images below show the current app running in the iPhone simulator.",
    ],
    screenshots: [
      {
        src: "/asset/math_mews/01-room.webp",
        alt: "Math Mews iPhone screen showing a furnished 3D living room, pet stats, and the puzzle button",
        caption:
          "A furnished living room, pet stats, and access to math puzzles.",
      },
      {
        src: "/asset/math_mews/02-puzzle.webp",
        alt: "Math Mews sharing puzzle with illustrated apples, picture help, and multiple-choice answers",
        caption: "A sharing puzzle with illustrated objects and picture help.",
      },
    ],
  },
  {
    id: 1,
    title: "Wupzy",
    aboutLink: "wupzy",
    link: "https://wupzy.com",
    logo: "/asset/wupzy/wupzy_logo.jpg",
    coverImage: "/asset/wupzy/a_main.webp",
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
    logo: "/asset/canvas/canvas_logo.webp",
    coverImage: "/asset/canvas/canvas_a_main.webp",
    description:
      "A browser-based drawing tool with free-form sketching, SVG backgrounds, and a full color palette. Works on desktop and touch screens.",
    technologies: ["Vue.js", "TypeScript", "Pinia", "Github page", "Fabric.js"],
  },
];
