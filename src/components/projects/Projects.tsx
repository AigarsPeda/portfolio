import { Variants, motion } from "framer-motion";
import { type FC } from "react";
import GridLayout from "~/components/GridLayout/GridLayout";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS, PROJECT_APPEARED_DELAY } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();

  const isOdd = (num: number) => num % 2 === 1;

  const animationVariants = (num: number): Variants => ({
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 1,
      opacity: 1,
      // rotate: isOdd(num) ? 1 : -1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        // delay: PROJECT_APPEARED_DELAY + 0.5 * num,
        delay: num / 2,
      },
    },
  });

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <GridLayout isGap minWith="250px">
        {PROJECTS.map((project, i) => {
          const delay =
            windowSize.width <= 500 ? i / 2 : PROJECT_APPEARED_DELAY + 0.5 * i;

          return (
            <motion.div
              key={getUniqueId()}
              className="mb-8 w-full"
              variants={animationVariants(i)}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </GridLayout>
    </motion.div>
  );
};

export default Projects;
