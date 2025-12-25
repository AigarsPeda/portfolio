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
      const imagePaths = await getImagesFromFolder<string[]>(project.aboutLink);
      setImages(imagePaths);
    };
    fetchImages().catch((err) => console.error(err));
  }, [project.aboutLink]);

  return (
    <button
      className="group shadow-primary-dark-light flex flex-col justify-between rounded-md bg-gray-900 p-3 text-left shadow-md transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-gray-900/75 md:max-w-84"
      onClick={() => {
        router
          .push(`/projects/${project.aboutLink}`)
          .catch((err) => console.error(err));
      }}
    >
      <h2 className="mb-4 text-xl">{project.title}</h2>
      <p className="text-primary-light/70 min-h-24 text-sm">
        {project.description}
      </p>

      {project?.technologies?.length > 0 && (
        <div className="my-4 gap-2">
          <p className="mb-2 text-sm font-semibold">Technologies:</p>
          <div className="flex min-h-12 flex-wrap gap-2 text-sm">
            {project.technologies.map((tech, i) => (
              <p key={i} className="text-primary-light/70">
                {tech}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="h-55.75 w-full">
        <div className="relative mx-auto h-full w-full rounded-lg">
          <Image
            fill
            alt="wupzy"
            placeholder="blur"
            blurDataURL="/asset/blur.jpg"
            src={images[0] || "/asset/blur.jpg"}
            className="rounded-md object-cover grayscale group-hover:grayscale-0"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;
