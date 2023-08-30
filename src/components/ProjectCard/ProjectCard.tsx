import Link from "next/link";
import { type FC } from "react";
import { ProjectType } from "~/types/project.types";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  return (
    <button
      // href={`/projects/${project.aboutLink}`}
      className="group w-full max-w-xs rounded-md bg-primary-dark-light p-3 text-left shadow-md shadow-primary-dark-light transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark"
      onClick={() => router.push(`/projects/${project.aboutLink}`)}
    >
      <h2 className="mb-4 text-xl group-hover:text-primary-dark">
        {project.title}
      </h2>
      <p className="mb-6 text-sm text-primary-light/70 group-hover:text-primary-dark">
        {project.description}
      </p>
      <Image
        width={500}
        height={500}
        priority={true}
        alt="Picture wupzy dashboard"
        className="rounded grayscale group-hover:grayscale-0"
        src={project.imagesAssets[0] || ""}
        style={{
          width: "100%",
          position: "relative",
          objectFit: "scale-down",
        }}
      />
    </button>
  );
};

export default ProjectCard;
