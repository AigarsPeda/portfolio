import type { FC } from "react";
import { classNames } from "utils/classNames";

interface ProjectCardProps {
  cardVariant?: "dark" | "light" | "green" | "yellow";
}

const ProjectCard: FC<ProjectCardProps> = ({ cardVariant = "dark" }) => {
  return (
    <div
      className={classNames(
        // cardVariant === "dark" ? "mt-10" : "",
        // cardVariant === "light" ? "mt-5" : "",
        // cardVariant === "green" ? "mt-0" : "",
        // cardVariant === "yellow" ? "mt-0" : "",
        "relative"
      )}
    >
      <div
        className={classNames(
          cardVariant === "dark" ? "bg-black" : "",
          cardVariant === "light" ? "bg-primary-gray" : "",
          cardVariant === "green" ? "bg-primary-green" : "",
          cardVariant === "yellow" ? "bg-primary-yellow" : "",
          "h-[24rem] w-[19rem] rounded-3xl p-5"
        )}
      >
        <p
          className={classNames(
            cardVariant === "dark" ? "text-primary-gray" : "",
            cardVariant === "light" ? "text-black" : "",
            cardVariant === "green" ? "text-black" : "",
            cardVariant === "yellow" ? "text-black" : "",
            "text-xl font-semibold"
          )}
        >
          Project card
        </p>
      </div>
      <div
        className={classNames(
          cardVariant === "dark" ? "h-[9rem] border-black" : "",
          cardVariant === "light" ? "h-[9rem] border-black" : "",
          cardVariant === "green" ? "h-[8rem] bg-black" : "",
          cardVariant === "yellow" ? "h-[8rem] bg-black" : "",
          "absolute -left-4 -bottom-4 z-[-1] w-[18.5rem] rounded-[2rem] border-2"
        )}
      ></div>
    </div>
  );
};

export default ProjectCard;
