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
      className="group w-full max-w-md rounded-md bg-primary-dark-light p-3 text-left shadow-md shadow-primary-dark-light transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark"
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
      {project.imagesAssets[0] && (
        <Image
          width={500}
          height={500}
          priority={true}
          alt="Picture wupzy dashboard"
          className="rounded grayscale group-hover:grayscale-0"
          src={project.imagesAssets[0]}
          style={{
            width: "100%",
            position: "relative",
            objectFit: "scale-down",
          }}
        />
      )}
    </button>
  );
};

export default ProjectCard;
