import Image from "next/image";
import { useRouter } from "next/router";
import { type FC } from "react";
import { type ProjectType } from "~/types/project.types";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <button
      className="group flex max-w-xs flex-col justify-between rounded-md bg-primary-dark-light p-3 text-left shadow-md shadow-primary-dark-light transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark"
      onClick={() => {
        router
          .push(`/projects/${project.aboutLink}`)
          .catch((err) => console.error(err));
      }}
    >
      <h2 className="mb-4 text-xl group-hover:text-primary-dark">
        {project.title}
      </h2>
      <p className="mb-6 text-sm text-primary-light/70 group-hover:text-primary-dark">
        {project.description}
      </p>

      {project?.technologies?.length > 0 && (
        <div className="my-4 gap-2">
          <p className="mb-2 text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {project.technologies.map((tech, i) => (
              <p key={i} className="text-primary-light/70">
                {tech}
              </p>
            ))}
          </div>
        </div>
      )}

      {project.imagesAssets[0] && (
        <Image
          width={400}
          height={400}
          // placeholder="blur"
          alt={project.title}
          src={project.imagesAssets[0]}
          // blurDataURL={project.imagesAssets[0]}
          className="rounded grayscale transition-all duration-300 ease-in-out group-hover:scale-[1.01] group-hover:grayscale-0"
          style={{
            width: "100%",
            position: "relative",
            objectFit: "cover",
            minHeight: "230px",
          }}
        />
      )}
    </button>
  );
};

export default ProjectCard;
