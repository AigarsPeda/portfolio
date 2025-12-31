import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";
import { type ProjectType } from "~/types/project.types";
import getImagesFromFolder from "~/utils/getImagesFromFolder";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = await getImagesFromFolder<string[]>(project.aboutLink);
      setImages(imagePaths);
    };
    fetchImages().catch((err) => console.error(err));
  }, [project.aboutLink]);

  return (
    <button
      className="group border-primary-light/10 from-primary-dark-light/50 to-primary-dark hover:border-primary-accent/30 hover:shadow-primary-accent/5 relative flex h-full w-full flex-col overflow-hidden rounded-xl border bg-linear-to-b p-3 text-left transition-all duration-500 ease-out hover:cursor-pointer hover:shadow-lg md:max-w-96"
      onClick={() => {
        router
          .push(`/projects/${project.aboutLink}`)
          .catch((err) => console.error(err));
      }}
    >
      {/* Hover gradient overlay */}
      <div className="from-primary-accent/5 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image Section */}
      <div className="relative mb-5 h-48 w-full overflow-hidden rounded-lg">
        <Image
          fill
          alt={project.title}
          placeholder="blur"
          blurDataURL="/asset/blur.jpg"
          src={images[0] || "/asset/blur.jpg"}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        {/* Image overlay on hover */}
        <div className="from-primary-dark/60 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-1 flex-col">
        <h2 className="group-hover:text-primary-accent mb-3 text-xl font-semibold tracking-tight transition-colors duration-300">
          {project.title}
        </h2>

        <p className="text-primary-light/60 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        {project?.technologies?.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary-light/5 text-primary-light/70 group-hover:bg-primary-accent/10 group-hover:text-primary-accent/90 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="bg-primary-light/5 text-primary-light/50 rounded-full px-3 py-1 text-xs font-medium">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        {/* View Project indicator */}
        <div className="text-primary-accent mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>View Project</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
