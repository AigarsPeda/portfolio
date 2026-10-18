export type ProjectType = {
  id: number;
  title: string;
  codeLink: string;
  aboutLink: string;
  technologies: string[];
  // imagesAssets: string[];
  link: string | undefined;
  logo: string | undefined;
  description: string | undefined;
  coverImage: string;
  category?: string;
  role: string;
  platform: string;
  details?: { heading: string; text: string }[];
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
    layout?: "portrait";
  }[];
};
