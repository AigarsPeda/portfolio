import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";
import { type ProjectType } from "~/types/project.types";
import getImagesFromFolder from "~/utils/getImagesFromFolder";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = await getImagesFromFolder(project.aboutLink);
      setImages(imagePaths);
    };
    fetchImages();
  }, []);

  return (
    <button
      className="group flex max-w-xs flex-col justify-between rounded-md bg-primary-dark-light p-3 text-left shadow-md shadow-primary-dark-light transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-primary-accent hover:text-primary-dark"
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

      {project?.technologies?.length > 0 && (
        <div className="my-4 gap-2">
          <p className="mb-2 text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {project.technologies.map((tech, i) => (
              <p key={i} className="text-primary-light/70">
                {tech}
              </p>
            ))}
          </div>
        </div>
      )}

      {images[0] && (
        <Image
          priority
          width={400}
          height={430}
          src={images[0]}
          alt={project.title}
          style={{
            objectFit: "fill",
            // objectPosition: "center",
          }}
          className="h-[225px] w-full rounded object-cover grayscale transition-all duration-300 ease-in-out group-hover:scale-[1.01] group-hover:grayscale-0"
        />
      )}
    </button>
  );
};

export default ProjectCard;
