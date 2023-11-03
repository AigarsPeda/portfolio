import { motion, type Variants } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();

  const variant = (i: number): Variants => {
    return {
      hidden: { y: 200, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          bounce: 0.2,
          delay: i / 2,
          duration: 1.2,
          type: "spring",
        },
      },
    };
  };

  const mobVariant = (i: number): Variants => {
    return {
      hidden: { x: 200, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          bounce: 0.2,
          delay: i / 2,
          duration: 1.2,
          type: "spring",
        },
      },
    };
  };

  if (windowSize.width < 768) {
    return (
      <div className="flex flex-col flex-wrap gap-10 md:flex-row">
        {PROJECTS.map((project, i) => {
          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={mobVariant(i)}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row">
      {PROJECTS.map((project, i) => {
        return (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={variant(i)}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
