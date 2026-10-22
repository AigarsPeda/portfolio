import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { useRouter } from "next/router";
import { getProjects } from "~/i18n/projects";

export default function Projects() {
  const projects = getProjects(useRouter().locale);
  return (
    <div className="selected-projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
