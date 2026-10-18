import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";

export default function Projects() {
  return (
    <div className="selected-projects">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
