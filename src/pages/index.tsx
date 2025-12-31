import { motion, type Variants } from "framer-motion";
import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Mailto from "~/components/Mailto/Mailto";
import Projects from "~/components/projects/Projects";

// Dynamically import ThreeScene to avoid SSR issues
const ThreeScene = dynamic(() => import("~/components/ThreeScene/ThreeScene"), {
  ssr: false,
});

const Home: NextPage = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
        <meta
          name="description"
          content="Aigars - Full Stack Developer specializing in React, TypeScript, and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 3D Background - Fixed across all sections */}
      <ThreeScene />

      <main className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-8 md:px-8 md:py-12">
        {/* Hero Section - Compact */}
        <motion.section
          animate="show"
          initial="hidden"
          variants={container}
          className="mb-12 md:mb-16"
        >
          {/* Main heading */}
          <motion.h1
            variants={item}
            className="mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Hey, I&apos;m{" "}
            <span className="from-primary-accent bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
              Aigars
            </span>
          </motion.h1>

          {/* Subtitle */}
          {/* <motion.p
            variants={item}
            className="text-primary-light/70 mb-6 text-base md:text-lg"
          >
            Full Stack Developer crafting{" "}
            <span className="text-primary-accent font-medium">beautiful</span> &{" "}
            <span className="text-primary-accent font-medium">functional</span>{" "}
            digital experiences
          </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <Mailto body="From: aigarspeda.com" email="aigarspeda@gmail.com">
              <span className="group bg-primary-accent hover:bg-primary-accent/90 text-primary-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in touch
              </span>
            </Mailto>

            <a
              href="https://github.com/AigarsPeda"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary-light/30 bg-primary-dark/50 text-primary-light hover:border-primary-light/50 hover:bg-primary-dark/70 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* Projects Section - Visible immediately */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Featured Projects
            </h2>
            <p className="text-primary-light/60">
              Some things I&apos;ve built recently
            </p>
          </motion.div>

          <Projects />
        </section>
      </main>
    </>
  );
};

export default Home;
