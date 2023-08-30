import { type NextPage } from "next";
import Head from "next/head";
import Projects from "~/components/projects/Projects";
import Mailto from "~/components/Mailto/Mailto";
import Image from "next/image";

const Home: NextPage = () => {
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

      <main className="mx-auto max-w-7xl items-center px-11">
        <div className="flex flex-col justify-between pt-10 md:flex-row md:pt-40">
          <div className="w-full md:max-w-2xl">
            <h1 className="mb-5 text-4xl md:mb-4 md:text-5xl">
              Hey! My name is Aigars and I am front-end developer.
            </h1>

            <Mailto body="From: aigarspeda.com" email="aigarspeda@gmail.com">
              <p className="mb-8 tracking-wider text-primary-accent md:mb-0">
                aigarspeda@gmail.com
              </p>
            </Mailto>
          </div>

          <div className="flex w-full justify-center rounded bg-opacity-25 bg-gradient-to-r from-primary-dark via-purple-900/50 to-primary-dark md:ml-10">
            <div className="flex items-start justify-start ">
              <Image
                width={280}
                height={280}
                // priority={true}
                alt="Picture wupzy dashboard"
                className="rounded"
                src="/asset/me/aigars.png"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  objectFit: "scale-down",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-[15%]">
          <h2 className="mb-5 text-3xl text-primary-light/50 md:mb-8 md:text-4xl">
            Projects
          </h2>

          <Projects />
        </div>
      </main>
    </>
  );
};

export default Home;
