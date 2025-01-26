import { motion, type Variants } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";

const Projects: FC = () => {
  // const { windowSize } = useWindowSize();

  const variant = (i: number): Variants => {
    return {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
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

  return (
    <div className="mx-auto flex flex-col flex-wrap justify-center gap-10 md:flex-row">
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
