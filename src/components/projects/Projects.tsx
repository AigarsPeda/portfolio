import { motion, type Variants } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();
  const isMobile = windowSize.width <= 500;

  // const container: Variants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.1,
  //       // staggerChildren: 0.5,
  //     },
  //   },
  // };

  // const item: Variants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   show: {
  //     scale: 1,
  //     opacity: 1,
  //     transition: {
  //       velocity: 0.8,
  //       bounce: 0.2,
  //       duration: 1.8,
  //       type: "spring",
  //     },
  //   },
  // };

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row">
      {PROJECTS.map((project, i) => {
        return (
          <motion.div
            key={getUniqueId()}
            // variants={item}
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
              hidden: {
                // x: isMobile ? 0 : i % 2 === 0 ? -100 : 100,
                y: isMobile ? 0 : 100,
                opacity: isMobile ? 1 : 0,
              },
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
