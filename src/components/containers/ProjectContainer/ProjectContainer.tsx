import ProjectCard from "components/elements/ProjectCard/ProjectCard";
import { PROJECTS } from "hardcoded";
import type { FC } from "react";
import classNames from "utils/classNames";

const CardVariant = ["dark", "green", "yellow", "light"] as const;

const ProjectContainer: FC = () => {
  const getCardVariant = (idx: number) => {
    return CardVariant[idx % CardVariant.length];
  };

  return (
    <div className="w-full py-5">
      <div className="  grid max-h-96 grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((project, i) => {
          return (
            <div
              key={project.id}
              className={classNames(i % 2 !== 0 ? "mb-5" : "mt-12", " mx-auto")}
            >
              <ProjectCard cardVariant={getCardVariant(i)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContainer;
