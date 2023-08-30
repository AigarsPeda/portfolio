import { type FC } from "react";
import GridLayout from "~/components/GridLayout/GridLayout";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  return (
    <GridLayout minWith="250px">
      {PROJECTS.map((project) => (
        <ProjectCard key={getUniqueId()} project={project} />
      ))}
    </GridLayout>
  );
};

export default Projects;
