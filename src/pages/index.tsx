import { type NextPage } from "next";
import Head from "next/head";
import Mailto from "~/components/Mailto/Mailto";
import ProgrammerDesktop from "~/components/programmer/ProgrammerDesktop";
import ProgrammerMob from "~/components/programmer/ProgrammerMob";
import Projects from "~/components/projects/Projects";
import useWindowSize from "~/hooks/useWindowSize";

const Home: NextPage = () => {
  const { windowSize } = useWindowSize();

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

      <main className="mx-auto max-w-7xl items-center px-8 pt-8">
        <div className="grid w-full md:h-96 md:grid-cols-10">
          <div className="col-span-5 mb-5 flex h-full w-full items-center justify-center">
            <div className="w-full">
              <h1 className="mb-5 text-4xl md:mb-4 md:text-5xl">
                Hey! My name is Aigars and I am front-end developer.
              </h1>

              <Mailto body="From: aigarspeda.com" email="aigarspeda@gmail.com">
                <p className="mb-8 tracking-wider text-primary-accent md:mb-0">
                  aigarspeda@gmail.com
                </p>
              </Mailto>
            </div>
          </div>

          <div className="col-span-5 h-full w-full">
            {windowSize.width <= 385 ? (
              <ProgrammerMob />
            ) : (
              <ProgrammerDesktop />
            )}
          </div>
        </div>

        <div className="mt-[15%]">
          <h2 className="mb-5 text-3xl text-primary-light/50 md:mb-8 md:pt-0 md:text-4xl">
            Projects
          </h2>

          <Projects />
        </div>
      </main>
    </>
  );
};

export default Home;
