import { motion } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  // const { windowSize } = useWindowSize();
  // const isMobile = windowSize.width <= 500;

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row">
      {PROJECTS.map((project, i) => {
        return (
          <motion.div
            key={getUniqueId()}
            initial={"hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: {
                y: 0,
                x: 0,
                opacity: 1,
                // rotate: isOdd(num) ? 1 : -1,
                transition: {
                  bounce: 0.2,
                  duration: 1.2,
                  delay: i / 2,
                  type: "spring",
                },
              },
              hidden: { y: 200, opacity: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
