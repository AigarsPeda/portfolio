import { type NextPage } from "next";
import Head from "next/head";
import Projects from "~/components/projects/Projects";
import Mailto from "../components/Mailto/Mailto";

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

      <main className="mx-auto max-w-7xl px-11">
        <div className="w-full pt-10 md:max-w-2xl md:pt-40">
          <h1 className="mb-5 text-4xl md:mb-4 md:text-5xl">
            Hey! My name is Aigars and I am front-end developer.
          </h1>

          <Mailto body="From: aigarspeda.com" email="aigarspeda@gmail.com">
            <p className="tracking-wider text-primary-accent">
              aigarspeda@gmail.com
            </p>
          </Mailto>
        </div>

        <div className="mt-[10%]">
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
