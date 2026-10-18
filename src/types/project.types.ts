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
  details?: string[];
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
};
