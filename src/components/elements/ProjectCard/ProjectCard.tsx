import type { FC } from "react";
import classNames from "utils/classNames";

interface ProjectCardProps {
  cardVariant?: "dark" | "light" | "green" | "yellow";
}

const ProjectCard: FC<ProjectCardProps> = ({ cardVariant = "dark" }) => {
  return (
    <div className="flex justify-center">
      <div className={classNames("relative")}>
        <div
          className={classNames(
            cardVariant === "dark" && "bg-black",
            cardVariant === "light" && "bg-primary-gray",
            cardVariant === "green" && "bg-primary-green",
            cardVariant === "yellow" && "bg-primary-yellow",
            "h-[24rem] w-[18rem] rounded-3xl p-5 md:h-[18rem] md:w-[13rem] md2:h-[24rem] md2:w-[18rem]"
          )}
        >
          <p
            className={classNames(
              cardVariant === "light" && "text-black",
              cardVariant === "green" && "text-black",
              cardVariant === "yellow" && "text-black",
              cardVariant === "dark" && "text-primary-gray",
              "text-xl font-semibold"
            )}
          >
            Project card
          </p>
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
