import { motion, type Variants } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Mailto from "~/components/Mailto/Mailto";
import ProgrammerDesktop from "~/components/programmer/ProgrammerDesktop";
import ProgrammerMob from "~/components/programmer/ProgrammerMob";
import Projects from "~/components/projects/Projects";
import useWindowSize from "~/hooks/useWindowSize";

const Home: NextPage = () => {
  const { windowSize } = useWindowSize();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        // staggerChildren: 0.5,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        velocity: 0.8,
        bounce: 0.2,
        duration: 1.7,
        type: "spring",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Aigars</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Aigars Peda portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl items-center px-8 pt-8 md:pt-16">
        <motion.div
          animate="show"
          initial="hidden"
          variants={container}
          className="grid w-full md:h-72 md:grid-cols-10"
        >
          <div className="col-span-5 mb-5 flex h-full w-full items-center justify-center">
            <motion.div variants={item} className="w-full">
              <h1 className="mb-5 text-4xl md:mb-4 md:text-5xl">
                Hey! My name is Aigars and I am front-end developer.
              </h1>

              <Mailto body="From: aigarspeda.com" email="aigarspeda@gmail.com">
                <p className="mb-4 tracking-wider text-primary-accent md:mb-0">
                  aigarspeda@gmail.com
                </p>
              </Mailto>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="col-span-5 h-full w-full max-w-lg md:ml-10"
          >
            {windowSize.width <= 415 ? (
              <ProgrammerMob />
            ) : (
              <ProgrammerDesktop />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            velocity: 1,
            bounce: 0.1,
            duration: 1.5,
            type: "spring",
          }}
          className="mt-[15%]"
        >
          <h2 className="mb-5 text-3xl text-primary-light/50 md:mb-8 md:pt-0 md:text-4xl">
            Projects
          </h2>

          <Projects />
        </motion.div>
      </main>
    </>
  );
};

export default Home;
