import { motion } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import useWindowSize from "~/hooks/useWindowSize";

const Projects: FC = () => {
  const { windowSize } = useWindowSize();
  const isMobile = windowSize.width <= 500;

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row">
      {PROJECTS.map((project, i) => {
        // if (isMobile) {
        //   return (
        //     <div key={i}>
        //       <ProjectCard project={project} />
        //     </div>
        //   );
        // }

        return (
          <motion.div
            key={i}
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
                y: 150,
                opacity: 0,
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
