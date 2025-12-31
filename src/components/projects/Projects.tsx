import { motion, type Variants } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";

const Projects: FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {PROJECTS.map((project, i) => {
        return (
          <motion.div key={project.id || i} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
