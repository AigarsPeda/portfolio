import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import classNames from "utils/classNames";

interface ProjectCardProps {
  projectTitle: string;
  projectLink: string | undefined;
  projectImageSrc: string | undefined;
  projectAboutLink: string | undefined;
  projectDescription: string | undefined;
  cardVariant?: "dark" | "light" | "green" | "yellow";
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectLink,
  projectTitle,
  projectImageSrc,
  projectAboutLink,
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
            <div className="my-4 flex w-full justify-between md:block md2:flex">
              {projectAboutLink && (
                <Link
                  href={`/projects/${projectAboutLink}`}
                  className={classNames(
                    cardVariant === "dark" &&
                      "text-primary-yellow hover:text-yellow-500",
                    cardVariant === "light" && "text-white hover:text-gray-50",
                    cardVariant === "green" && "text-white hover:text-gray-50",
                    cardVariant === "yellow" && "text-white hover:text-gray-50",
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
                      "text-primary-yellow hover:text-yellow-500",
                    cardVariant === "light" && "text-white hover:text-gray-50",
                    cardVariant === "green" && "text-white hover:text-gray-50",
                    cardVariant === "yellow" && "text-white hover:text-gray-50",
                    "flex items-center text-sm font-semibold"
                  )}
                >
                  View Project
                  <FiExternalLink className={classNames("ml-2 h-5 w-5")} />
                </Link>
              )}
            </div>
            {projectDescription && (
              <p
                className={classNames(
                  cardVariant === "dark" && "text-white",
                  cardVariant === "light" && "text-black",
                  cardVariant === "green" && "text-black",
                  cardVariant === "yellow" && "text-black",
                  "mt-2 text-sm "
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
