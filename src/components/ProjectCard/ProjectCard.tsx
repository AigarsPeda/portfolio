import Link from "next/link";
import { useCopy } from "~/i18n";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectPreview from "~/components/ProjectPreview/ProjectPreview";
import type { ProjectType } from "~/types/project.types";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: ProjectType;
  priority?: boolean;
}) {
  const copy = useCopy();
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.aboutLink}`}
        className="project-row"
        aria-labelledby={`project-title-${project.id}`}
        aria-describedby={`project-summary-${project.id}`}
        data-cursor-label={copy.viewProject}
      >
        <ProjectPreview project={project} priority={priority} thumbnail />
        <div className="project-row-copy">
          <h3 id={`project-title-${project.id}`} className="project-row-title">
            {project.title}
          </h3>
          <p id={`project-summary-${project.id}`} className="project-row-summary">
            {project.summary}
          </p>
        </div>
        <span className="project-row-action">
          {copy.viewProject} <FiArrowUpRight aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
