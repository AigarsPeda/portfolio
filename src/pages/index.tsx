import ProjectContainer from "components/containers/ProjectContainer/ProjectContainer";
import GridLayout from "components/layouts/GridLayout/GridLayout";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aigars</title>
        <meta name="description" content="Aigars Peda portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GridLayout minWith="250px">
          <div className="px-40 py-64">
            <h1 className="text-6xl font-semibold leading-[3.8rem]">
              Hi! My name is Aigars.
            </h1>
            <p className="mt-4 text-2xl">I am front-end developer.</p>
          </div>
          <div>
            <ProjectContainer />
          </div>
        </GridLayout>
      </main>
    </>
  );
};

export default Home;
