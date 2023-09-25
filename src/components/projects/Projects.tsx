import { motion } from "framer-motion";
import { type FC } from "react";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import { PROJECTS } from "~/hardcoded";
import getUniqueId from "~/utils/getUniqueId";

const Projects: FC = () => {
  // const { windowSize } = useWindowSize();

  // const isOdd = (num: number) => num % 2 === 1;
  // const isMobile = windowSize.width <= 500;

  // const animationVariants = (num: number): Variants => {
  //   if (isMobile) {
  //     return {
  //       offscreen: {
  //         x: isOdd(num) ? 200 : -200,
  //         opacity: 0,
  //       },
  //       onscreen: {
  //         y: 0,
  //         x: 0,
  //         opacity: 1,
  //         // rotate: isOdd(num) ? 1 : -1,
  //         transition: {
  //           bounce: 0.2,
  //           duration: 1.2,
  //           delay: num / 2 - 0.2,
  //           type: "spring",
  //         },
  //       },
  //     };
  //   }

  //   return {
  //     offscreen: {
  //       y: 200,
  //       opacity: 0,
  //     },
  //     onscreen: {
  //       y: 0,
  //       x: 0,
  //       opacity: 1,
  //       // rotate: isOdd(num) ? 1 : -1,
  //       transition: {
  //         bounce: 0.2,
  //         duration: 1.2,
  //         delay: num / 2,
  //         type: "spring",
  //       },
  //     },
  //   };
  // };

  return (
    <div className="flex flex-col flex-wrap gap-10 md:flex-row">
      {PROJECTS.map((project, i) => {
        return (
          <motion.div
            key={getUniqueId()}
            // initial="offscreen"
            // whileInView="onscreen"
            // variants={animationVariants(i)}
            // viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
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
