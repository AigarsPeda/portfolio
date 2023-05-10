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
          <div className="mt-5 ml-3 p-2 md:ml-14 md:mt-40">
            <div>
              <h1 className="text-6xl font-semibold leading-[3.8rem]">
                Hi! My name is Aigars.
              </h1>
              <p className="mt-7 text-xl text-gray-800">
                I am front-end developer with a solid understanding of back-end
                technologies.
              </p>
              <p className="mt-10 text-xl text-gray-800 md:mt-20">
                Contact me if you have any questions or want to work together.
              </p>
              <p className="mt-3 text-2xl">aigarspeda@gmail.com</p>
            </div>
          </div>
          <div className="p-2">
            <ProjectContainer />
          </div>
        </GridLayout>
      </main>
    </>
  );
};

export default Home;
