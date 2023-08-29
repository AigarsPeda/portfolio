import { type FC } from "react";
import { ProjectType } from "~/types/project.types";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <button className="bg-primary-dark-light duration-250 group w-full max-w-xs rounded-md p-3 text-left transition-all ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark">
      <h2 className="mb-4 text-lg group-hover:text-primary-dark">
        {project.title}
      </h2>
      <p className="text-sm text-primary-light/70 group-hover:text-primary-dark">
        {project.description}
      </p>
    </button>
  );
};

export default ProjectCard;
