import Link from "next/link";
import type { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import classNames from "utils/classNames";
import Image from "next/image";

interface ProjectCardProps {
  projectTitle: string;
  projectLink: string | undefined;
  projectImageSrc: string | undefined;
  projectDescription: string | undefined;
  cardVariant?: "dark" | "light" | "green" | "yellow";
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectLink,
  projectTitle,
  projectImageSrc,
  projectDescription,
  cardVariant = "dark",
}) => {
  return (
    <div className="flex justify-center">
      <div className={classNames("relative")}>
        <div
          className={classNames(
            cardVariant === "dark" && "bg-black",
            cardVariant === "light" && "bg-primary-gray",
            cardVariant === "green" && "bg-primary-green",
            cardVariant === "yellow" && "bg-primary-yellow",
            "flex h-[24rem] w-[18rem] flex-col justify-between rounded-3xl p-5 md:h-[18rem] md:w-[13rem] md2:h-[24rem] md2:w-[18rem]"
          )}
        >
          <div>
            <p
              className={classNames(
                cardVariant === "dark" && "text-white",
                cardVariant === "light" && "text-black",
                cardVariant === "green" && "text-black",
                cardVariant === "yellow" && "text-black",
                "text-2xl font-semibold"
              )}
            >
              {projectTitle}
            </p>
            {projectDescription && (
              <p
                className={classNames(
                  cardVariant === "dark" && "text-white",
                  cardVariant === "light" && "text-black",
                  cardVariant === "green" && "text-black",
                  cardVariant === "yellow" && "text-black",
                  "mt-2 text-base font-medium md:text-sm md2:text-base"
                )}
              >
                {projectDescription}
              </p>
            )}
          </div>
          {projectImageSrc && (
            <div className="relative m-2 mx-auto h-full w-full rounded-lg">
              <Image
                fill
                alt="wupzy"
                src={projectImageSrc}
                className="rounded-lg object-cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
          <div className="flex w-full justify-between md:block md2:flex">
            {projectLink && (
              <Link
                href={`/projects/${projectTitle}`}
                className={classNames(
                  cardVariant === "dark" &&
                    "text-white hover:text-primary-yellow",
                  cardVariant === "light" && "text-black hover:text-white",
                  cardVariant === "green" && "text-black hover:text-white",
                  cardVariant === "yellow" && "text-black hover:text-white",
                  "mb-0 flex items-center text-sm font-semibold transition-all duration-100 ease-in-out md:mb-2 md2:mb-0"
                )}
              >
                About Project
                <FiExternalLink className={classNames("ml-2 h-5 w-5")} />
              </Link>
            )}
            {projectLink && (
              <Link
                target="_blank"
                href={projectLink}
                className={classNames(
                  cardVariant === "dark" &&
                    "text-white hover:text-primary-yellow",
                  cardVariant === "light" && "text-black hover:text-white",
                  cardVariant === "green" && "text-black hover:text-white",
                  cardVariant === "yellow" && "text-black hover:text-white",
                  "flex items-center text-sm font-semibold"
                )}
              >
                View Project
                <FiExternalLink className={classNames("ml-2 h-5 w-5")} />
              </Link>
            )}
          </div>
        </div>

        <div
          className={classNames(
            cardVariant === "green" && "h-[6rem] bg-black md2:h-[8rem]",
            cardVariant === "yellow" && "h-[6rem] bg-black md2:h-[8rem]",
            cardVariant === "dark" && "h-[7rem] border-black md2:h-[9rem]",
            cardVariant === "light" && "h-[7rem] border-black md2:h-[9rem]",
            "absolute left-[-0.4rem] -bottom-2 z-[-1] w-[18rem] rounded-[2rem] border-2 md:w-[13rem] md2:-bottom-4 md2:-left-4 md2:w-[18rem]"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
