import type { FC, JSX, ReactNode } from "react";
import classNames from "~/utils/classNames";

interface GridLayoutProps {
  isGap?: boolean;
  children: JSX.Element | JSX.Element[] | ReactNode;
  minWith?:
    | "150px"
    | "175px"
    | "200px"
    | "220px"
    | "250px"
    | "350px"
    | "400px"
    | "600px";
}

const GridLayout: FC<GridLayoutProps> = ({
  isGap,
  children,
  minWith = "150px",
}) => {
  return (
    <div
      className={classNames(
        isGap && "gap-5",
        minWith === "250px" && "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        minWith === "220px" && "grid-cols-[repeat(auto-fit,minmax(220px,1fr))]",
        minWith === "200px" && "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]",
        minWith === "175px" && "grid-cols-[repeat(auto-fit,minmax(175px,1fr))]",
        minWith === "150px" && "grid-cols-[repeat(auto-fit,minmax(150px,1fr))]",
        minWith === "350px" && "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        minWith === "400px" && "grid-cols-[repeat(auto-fit,minmax(400px,1fr))]",
        minWith === "600px" && "grid-cols-[repeat(auto-fit,minmax(600px,1fr))]",
        "grid",
      )}
    >
      {children}
    </div>
  );
};

export default GridLayout;
