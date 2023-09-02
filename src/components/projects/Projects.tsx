import { motion } from "framer-motion";
import { type FC } from "react";
import GridLayout from "~/components/GridLayout/GridLayout";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS, PROJECT_APPEARED_DELAY } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();

  return (
    <GridLayout isGap minWith="250px">
      {PROJECTS.map((project, i) => {
        const delay =
          windowSize.width <= 500 ? i / 2 : PROJECT_APPEARED_DELAY + 0.5 * i;

        return (
          <motion.div
            className="mb-8"
            key={getUniqueId()}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay,
              velocity: 1,
              bounce: 0.2,
              duration: 1,
              type: "spring",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </GridLayout>
  );
};

export default Projects;
