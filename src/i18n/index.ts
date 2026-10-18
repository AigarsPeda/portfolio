import { useRouter } from "next/router";

export const COPY = {
  en: {
    name: "Aigars Peda",
    skip: "Skip to content",
    home: "ap, Aigars Peda home",
    navigation: "Main navigation",
    work: "Work",
    about: "About",
    contact: "Contact",
    theme: "Switch color theme",
    switchLanguage: "Switch to Latvian",
    viewProject: "View project",
    nextProject: "Next project",
    backToProjects: "Back to projects",
    role: "My role",
    platform: "Platform",
    project: "Project",
    visitWebsite: "Visit website",
    viewCode: "View code",
    theProject: "The project",
    builtWith: "Built with",
    inDetail: "In detail",
    preview: "project preview",
    enlarge: "Enlarge image",
    screenshots: "Project screenshots",
    screenshot: "Project screenshot",
    closeGallery: "Close image gallery",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    viewScreenshot: "View screenshot",
    footerLine1: "Have a project",
    footerLine2: "in mind?",
    letsTalk: "Let's talk",
    emailLabel: "Let's talk, email Aigars about a project",
    backToTop: "Back to top ↑",
    title: "Aigars Peda | Full-stack developer",
    description:
      "I'm Aigars, a full-stack developer building websites and mobile apps. Explore my work with React, React Native, Next.js, and WordPress.",
    heroLine1: "I build websites",
    heroLine2: "and mobile apps",
    explore: "Explore work",
    selectedWork: "Selected work",
    aboutLine1: "A little",
    aboutLine2: "about me.",
    aboutLead:
      "I'm a full-stack developer who enjoys building things people can use.",
    currentWork:
      "I'm currently working with LVM Geo on OpenLayers map layers and an inventory application with web and mobile versions.",
    experience:
      "My work includes business websites, a volleyball tournament app, a drawing tool, and a math game with a virtual cat. I work across the interface, application logic, and backend.",
    webBackend: "Web & backend",
    mobile: "Mobile",
    native3d: "native 3D rendering",
  },
  lv: {
    name: "Aigars Peda",
    skip: "Pāriet uz saturu",
    home: "ap, Aigara Pedas sākumlapa",
    navigation: "Galvenā navigācija",
    work: "Darbi",
    about: "Par mani",
    contact: "Kontakti",
    theme: "Mainīt krāsu tēmu",
    switchLanguage: "Switch to English",
    viewProject: "Skatīt projektu",
    nextProject: "Nākamais projekts",
    backToProjects: "Atpakaļ pie projektiem",
    role: "Mana loma",
    platform: "Platforma",
    project: "Projekts",
    visitWebsite: "Atvērt mājaslapu",
    viewCode: "Skatīt kodu",
    theProject: "Par projektu",
    builtWith: "Izmantotās tehnoloģijas",
    inDetail: "Tuvāk projektam",
    preview: "projekta priekšskatījums",
    enlarge: "Palielināt attēlu",
    screenshots: "Projekta ekrānattēli",
    screenshot: "Projekta ekrānattēls",
    closeGallery: "Aizvērt attēlu galeriju",
    previousScreenshot: "Iepriekšējais ekrānattēls",
    nextScreenshot: "Nākamais ekrānattēls",
    viewScreenshot: "Skatīt ekrānattēlu",
    footerLine1: "Ir ideja",
    footerLine2: "projektam?",
    letsTalk: "Sazināmies",
    emailLabel: "Sazinies ar Aigaru par savu projektu e-pastā",
    backToTop: "Uz sākumu ↑",
    title: "Aigars Peda | Mājaslapu un mobilo lietotņu izstrāde",
    description:
      "Esmu Aigars, mājaslapu un mobilo lietotņu izstrādātājs. Iepazīsti manus projektus, kas veidoti ar React, React Native, Next.js un WordPress.",
    heroLine1: "Veidoju mājaslapas",
    heroLine2: "un mobilās lietotnes",
    explore: "Skatīt darbus",
    selectedWork: "Atlasītie darbi",
    aboutLine1: "Nedaudz",
    aboutLine2: "par mani.",
    aboutLead:
      "Esmu pilna cikla izstrādātājs. Man patīk veidot lietas, ko cilvēki var izmantot ikdienā.",
    currentWork:
      "Pašlaik sadarbojos ar LVM Geo, strādājot pie OpenLayers karšu slāņiem un inventarizācijas lietotnes ar tīmekļa un mobilo versiju.",
    experience:
      "Manu darbu vidū ir uzņēmumu mājaslapas, volejbola turnīru lietotne, zīmēšanas rīks un matemātikas spēle ar virtuālu kaķi. Strādāju ar lietotāja saskarni, lietotnes loģiku un servera pusi.",
    webBackend: "Tīmeklis un servera puse",
    mobile: "Mobilās lietotnes",
    native3d: "3D attēlošana ierīcē",
  },
};

export function useCopy() {
  return COPY[useRouter().locale === "lv" ? "lv" : "en"];
}

export function localizedUrl(locale: string | undefined, path: string) {
  const prefix = locale === "lv" ? "/lv" : "";
  return `https://www.aigarspeda.com${prefix}${path === "/" && prefix ? "" : path}`;
}
