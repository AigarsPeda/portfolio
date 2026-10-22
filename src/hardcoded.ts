import type { ProjectType } from "~/types/project.types";

export const PROJECT_APPEARED_DELAY = 0.7;

// get images from folder and add to array

export const PROJECTS: ProjectType[] = [
  {
    id: 3,
    title: "Math Mews",
    summary: "A maths game with a virtual cat · In development",
    aboutLink: "math-mews",
    link: "",
    codeLink: "",
    logo: "/asset/math_mews/icon.webp",
    coverImage: "/asset/math_mews/cover.webp",
    category: "Mobile game · In development",
    role: "App development",
    platform: "iOS & Android",
    description:
      "A mobile game that motivates children to practise maths and logical thinking through puzzles, pet care, and furnishing a 3D home.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Filament",
      "Supabase",
      "RevenueCat",
    ],
    details: [
      {
        heading: "The problem",
        text: "Math Mews is designed for children who need a reason to keep practising maths. The goal is to motivate learning through play and help develop logical thinking, with puzzles that ask children to reason through a problem rather than only memorise an answer.",
      },
      {
        heading: "Learning through play",
        text: "Solving puzzles earns coins to furnish a virtual cat's home. Children can care for the cat and explore connected 3D rooms between learning sessions. Picture help breaks a problem into visible steps, while topic statistics highlight areas that need more practice.",
      },
      {
        heading: "The build",
        text: "I am building the iOS and Android game with React Native, Expo, and TypeScript. Filament renders the rooms and animated cat, Supabase supports backend services, and RevenueCat handles coin-pack purchases. The game is in active development; the screenshots show the current app running in the iPhone simulator.",
      },
    ],
    screenshots: [
      {
        src: "/asset/math_mews/01-room.webp",
        alt: "Math Mews iPhone screen showing a furnished 3D living room, pet stats, and the puzzle button",
        caption:
          "A furnished living room, pet stats, and access to math puzzles.",
      },
      {
        src: "/asset/math_mews/02-puzzle-clean.webp",
        alt: "Math Mews sharing puzzle with illustrated apples, picture help, and multiple-choice answers",
        caption: "A sharing puzzle with illustrated objects and picture help.",
      },
      {
        src: "/asset/math_mews/03-logic.webp",
        alt: "Math Mews logic puzzle asking children to reason about how many sheep remain",
        caption:
          "A logic puzzle that encourages children to read carefully and reason through the answer.",
      },
      {
        src: "/asset/math_mews/04-picture-help.webp",
        alt: "Math Mews picture help showing two remaining sheep and a subtraction example",
        caption:
          "Step-by-step picture help explains the idea with a practice example.",
      },
      {
        src: "/asset/math_mews/05-progress.webp",
        alt: "Math Mews topic statistics with accuracy, attempts, and a recommendation to practise logic",
        caption: "Topic progress highlights areas that need more practice.",
      },
      {
        src: "/asset/math_mews/06-kitchen.webp",
        alt: "Math Mews furnished 3D kitchen with a virtual cat and the puzzle button",
        caption:
          "A furnished kitchen gives children another room to explore and customise.",
      },
    ],
  },
  {
    id: 6,
    title: "Dentsu Latvia",
    summary: "A bilingual agency website",
    aboutLink: "dentsu",
    link: "https://dentsu.lv/lv",
    codeLink: "",
    logo: "",
    coverImage: "/asset/dentsu/02-work.webp",
    category: "Agency website",
    role: "Full-stack development",
    platform: "Web",
    description:
      "A bilingual agency website built with Next.js and Strapi, with services, campaign case studies, news, and editable page sections.",
    technologies: ["Next.js", "React", "TypeScript", "Strapi", "Tailwind CSS"],
    details: [
      {
        heading: "The brief",
        text: "Dentsu wanted a modern website that could support a variety of page layouts and an ongoing publishing workflow. Alongside its services and campaign case studies, the agency needed space for blog posts, news, research, and vacancies in Latvian and English.",
      },
      {
        heading: "Why Next.js and Strapi",
        text: "I built a Next.js frontend backed by Strapi. Reusable content sections let editors assemble different page types, update media, and manage translations and metadata in the CMS. This gives the agency room to publish new content and build out pages as its needs change.",
      },
      {
        heading: "The experience",
        text: "The site combines service accordions, case-study filtering by agency, article listings, media carousels, and contact forms. Responsive layouts carry the same content across desktop and mobile, with a shared visual style across the agency's different services and publications.",
      },
    ],
    screenshots: [
      {
        src: "/asset/dentsu/01-services.webp",
        alt: "Dentsu Latvia services page with an aerial city photograph and a Latvian service introduction",
        caption: "Services introduction with a full-width image.",
      },
      {
        src: "/asset/dentsu/02-work.webp",
        alt: "Dentsu Latvia campaign case studies with agency filters and project cards",
        caption: "Campaign case studies, with filters for the agency brands.",
      },
      {
        src: "/asset/dentsu/03-about.webp",
        alt: "Dentsu Latvia homepage introduction and contact call to action in Latvian",
        caption: "Agency introduction and contact section on the homepage.",
      },
      {
        src: "/asset/dentsu/04-news.webp",
        alt: "Dentsu Latvia news and research listing with article images, summaries, and read buttons",
        caption: "The news and research listing supports ongoing publishing.",
      },
      {
        src: "/asset/dentsu/05-article.webp",
        alt: "Dentsu Latvia blog article with a campaign photograph and editorial text",
        caption:
          "An article page combines campaign photography and editorial content.",
      },
    ],
  },
  {
    id: 4,
    title: "JāņogaGO",
    summary: "A food-vending website with an interactive 3D experience",
    aboutLink: "janogago",
    link: "https://janogago.lv/",
    codeLink: "",
    logo: "",
    coverImage: "/asset/janogago/01-home.webp",
    category: "Business website",
    role: "Design & development",
    platform: "Web",
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
      {
        heading: "The problem",
        text: "Businesses considering workplace food vending need to understand the food on offer, how the service works, what it costs, and whether their location is suitable. JāņogaGO needed a website that could answer those questions and turn interest into a useful quote enquiry.",
      },
      {
        heading: "Why WordPress",
        text: "The company preferred a traditional solution it was already accustomed to working with. I built a custom WordPress theme so the team could manage dishes, photographs, page content, and enquiries through a familiar admin interface. Polylang supports the Latvian and English versions.",
      },
      {
        heading: "The experience",
        text: "An interactive 3D vending machine introduces the service, while category and dietary filters help visitors explore the food catalog. Service information explains installation and ongoing support. The enquiry form collects location and usage details, validates submissions, and stores requests privately in WordPress with email notifications.",
      },
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
      {
        src: "/asset/janogago/03-process.webp",
        alt: "JāņogaGO three-step service process explaining the enquiry, offer, and installation",
        caption:
          "A three-step explanation helps businesses understand how the service begins.",
      },
      {
        src: "/asset/janogago/04-enquiry.webp",
        alt: "JāņogaGO enquiry form with fields for company, location, and expected daily users",
        caption:
          "The enquiry form collects the details needed to prepare a relevant offer.",
      },
    ],
  },
  {
    id: 5,
    title: "OAKS Build",
    summary: "A construction management website",
    aboutLink: "oaksbuild",
    link: "https://oaksbuild.lv/",
    codeLink: "",
    logo: "",
    coverImage: "/asset/oaksbuild/01-home.webp",
    category: "Business website",
    role: "Design & development",
    platform: "Web",
    description:
      "A construction management website in three languages, with service pages and completed project galleries built in WordPress.",
    technologies: ["WordPress", "PHP", "JavaScript", "Gutenberg", "Polylang"],
    details: [
      {
        heading: "The problem",
        text: "Construction management covers many stages and responsibilities. OAKS Build needed to explain its services clearly to both property developers and private home builders, show examples of completed work, and give prospective clients a direct way to discuss a project.",
      },
      {
        heading: "Why WordPress",
        text: "The company wanted a traditional platform that fit the way it was already used to working. I built a custom WordPress block theme around the native Gutenberg editor, so the team could update service copy, project galleries, menus, and contact details. Polylang connects the Latvian, English, and Russian versions.",
      },
      {
        heading: "The experience",
        text: "Dedicated service pages guide the two main audiences through the construction process. Completed-project galleries give visitors concrete examples of the team's work, and contact links make it easy to start a conversation. The layouts adapt the same information and photography for desktop and mobile.",
      },
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
      {
        src: "/asset/oaksbuild/03-home-builders.webp",
        alt: "OAKS Build service page for private home builders with a construction photograph and contact link",
        caption: "A dedicated service page addresses private home builders.",
      },
      {
        src: "/asset/oaksbuild/04-process.webp",
        alt: "OAKS Build project workflow covering planning, procurement, construction, and handover",
        caption:
          "The construction workflow makes the team’s responsibilities easier to understand.",
      },
    ],
  },
  {
    id: 1,
    title: "Wupzy",
    summary: "A volleyball tournament and scorekeeping app",
    aboutLink: "wupzy",
    link: "https://wupzy.com",
    logo: "/asset/wupzy/wupzy_logo.jpg",
    coverImage: "/asset/wupzy/a_main.webp",
    thumbnailImage: "/asset/previews/wupzy-cover.webp",
    category: "Tournament app",
    role: "Full-stack development",
    platform: "Web",
    codeLink: "https://github.com/AigarsPeda/wupzy",
    description:
      "Organize volleyball tournaments, track scores in real time, and share results with your team, all from your phone.",
    details: [
      {
        heading: "The problem",
        text: "Our volleyball group needed a way to organise tournaments and keep track of scores without relying on scraps of paper that could get lost between games. Everyone already had a phone, so a shared web app was a practical way to keep the competition organised.",
      },
      {
        heading: "The solution",
        text: "Wupzy brings tournament setup, teams, match scores, standings, and playoffs into one place. Players can record scores from their phones and share tournament results with a link or QR code, giving the group a common place to follow the competition.",
      },
      {
        heading: "The build",
        text: "I built the frontend with React and Next.js and used tRPC for type-safe APIs, Prisma for database access, and MySQL on PlanetScale for storage. Stripe handles payments, and the application is deployed on Vercel.",
      },
    ],
    screenshots: [
      {
        src: "/asset/wupzy/c_main.webp",
        alt: "Wupzy tournament overview with teams and standings",
        caption: "Tournament overview and team standings.",
      },
      {
        src: "/asset/wupzy/new-tournament-form.webp",
        alt: "Wupzy form for creating a volleyball tournament",
        caption: "Setting up a new tournament.",
      },
      {
        src: "/asset/wupzy/playoffs.webp",
        alt: "Wupzy playoff bracket showing tournament matches",
        caption: "Following the competition through the playoffs.",
      },
      {
        src: "/asset/wupzy/a_mob_2.webp",
        alt: "Wupzy mobile match screen with team score controls and a save button",
        caption: "Players can record match scores directly from their phones.",
        layout: "portrait",
      },
      {
        src: "/asset/wupzy/c_mob_1.webp",
        alt: "Wupzy mobile tournament options with a share link, QR code, and playoff controls",
        caption:
          "Share a tournament with a link or QR code and manage its next stages.",
        layout: "portrait",
      },
    ],
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
    summary: "A browser-based drawing and diagram tool",
    aboutLink: "canvas",
    link: "https://aigarspeda.github.io/designer/",
    codeLink: "https://github.com/AigarsPeda/designer",
    logo: "/asset/canvas/canvas_logo.webp",
    coverImage: "/asset/canvas/canvas_a_main.webp",
    thumbnailImage: "/asset/previews/canvas-cover.webp",
    category: "Drawing tool",
    role: "Frontend development",
    platform: "Web",
    description:
      "A browser-based drawing tool with free-form sketching, SVG backgrounds, and a full color palette. Works on desktop and touch screens.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Pinia",
      "GitHub Pages",
      "Fabric.js",
    ],
    details: [
      {
        heading: "The idea",
        text: "A quick sketch can make an idea easier to explain. Canvas explores how to bring free-form drawing, shapes, arrows, and text into a browser workspace that works with both mouse and touch input. I built it as a personal project to learn Vue.js and canvas-based interaction.",
      },
      {
        heading: "The solution",
        text: "Users can draw, select and arrange objects, adjust colours and backgrounds, and save or export their scenes. The tools support quick diagrams as well as free-form sketches, with editing controls kept alongside the workspace.",
      },
      {
        heading: "The build",
        text: "The app uses Vue.js and TypeScript, with Fabric.js for drawing and object manipulation and Pinia for state management. I added a custom free-drawing mode to improve stroke behaviour. The app is hosted on GitHub Pages, and I continue to refine its tools and interactions.",
      },
    ],
    screenshots: [
      {
        src: "/asset/canvas/canvas_select.webp",
        alt: "Canvas scene manager with saved drawing previews and options to select, edit, and export them",
        caption: "Managing saved drawing scenes.",
      },
      {
        src: "/asset/canvas/canvas_square.webp",
        alt: "Canvas drawing workspace with shapes and drawing controls",
        caption: "Working with shapes and free-form drawing.",
      },
      {
        src: "/asset/canvas/canvas_export.webp",
        alt: "Canvas artwork export options",
        caption: "Exporting the finished artwork.",
      },
      {
        src: "/asset/canvas/04-diagram.webp",
        alt: "Canvas workspace with two coloured rounded shapes, an arrow, and editable text",
        caption:
          "A simple diagram demonstrates shapes, arrows, colour, and text in the browser.",
      },
    ],
  },
];
