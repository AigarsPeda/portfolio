import { Variants, motion } from "framer-motion";
import { type FC } from "react";
import GridLayout from "~/components/GridLayout/GridLayout";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();

  const isOdd = (num: number) => num % 2 === 1;
  const isMobile = windowSize.width <= 500;

  const animationVariants = (num: number): Variants => {
    if (isMobile) {
      return {
        offscreen: {
          x: isOdd(num) ? 200 : -200,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          x: 0,
          opacity: 1,
          // rotate: isOdd(num) ? 1 : -1,
          transition: {
            bounce: 0.2,
            duration: 1.2,
            delay: num / 2 - 0.2,
            type: "spring",
          },
        },
      };
    }

    return {
      offscreen: {
        y: 200,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        x: 0,
        opacity: 1,
        // rotate: isOdd(num) ? 1 : -1,
        transition: {
          bounce: 0.2,
          duration: 1.2,
          delay: num / 2,
          type: "spring",
        },
      },
    };
  };

  return (
    <GridLayout isGap minWith="250px">
      {PROJECTS.map((project, i) => {
        return (
          <motion.div
            key={getUniqueId()}
            initial="offscreen"
            whileInView="onscreen"
            className="mb-8 w-full"
            variants={animationVariants(i)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </GridLayout>
  );
};

export default Projects;
