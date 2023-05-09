import ProjectContainer from "components/containers/ProjectContainer/ProjectContainer";
import GridLayout from "components/layouts/GridLayout/GridLayout";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aigars</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Aigars Peda portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GridLayout minWith="350px">
          <div className="w-full bg-red-400 p-2">
            <h1 className="text-xl font-semibold leading-[3.8rem]">
              Hi! My name is Aigars.
            </h1>
            <p className="mt-4 text-xl">I am front-end developer.</p>
          </div>
          <div className="">
            <ProjectContainer />
          </div>
        </GridLayout>
      </main>
    </>
  );
};

export default Home;
