import Link from "next/link";
import { useCopy } from "~/i18n";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectPreview from "~/components/ProjectPreview/ProjectPreview";
import TextFill from "~/components/TextFill/TextFill";
import type { ProjectType } from "~/types/project.types";
import { moveMagnetic, resetMagnetic } from "~/utils/magnetic";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectType;
  featured?: boolean;
}) {
  const copy = useCopy();
  return (
    <article
      className={
        featured ? "project-card project-card--featured" : "project-card"
      }
    >
      <Link
        href={`/projects/${project.aboutLink}`}
        aria-labelledby={`project-title-${project.id}`}
        data-cursor-label={copy.viewProject}
      >
        <ProjectPreview project={project} priority={featured} />
        <div className="project-heading">
          <h3 id={`project-title-${project.id}`}>
            <TextFill text={project.title} />
          </h3>
          <span
            className="project-arrow magnetic-target"
            data-magnetic-strength="5"
            onPointerMove={moveMagnetic}
            onPointerLeave={resetMagnetic}
            onPointerCancel={resetMagnetic}
            aria-hidden="true"
          >
            <span className="project-arrow-button magnetic-content">
              <FiArrowUpRight />
            </span>
          </span>
        </div>
        <div className="project-caption">
          <div className="project-summary">
            <p>{project.description}</p>
            <span className="project-category">{project.category}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
