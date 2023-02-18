import ProjectCard from "components/elements/ProjectCard/ProjectCard";
import { PROJECTS } from "hardcoded";
import type { FC } from "react";

const CardVariant = ["dark", "light", "green", "yellow"] as const;

const ProjectContainer: FC = () => {
  const getCardVariant = (idx: number) => {
    return CardVariant[idx % CardVariant.length];
  };

  return (
    <div className="space-y-8">
      {PROJECTS.map((project, i) => {
        return (
          <div key={project.id}>
            <ProjectCard cardVariant={getCardVariant(i)} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
