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
          <div>
            <h1 className="text-4xl font-bold">
              Hi! My name is Aigars, I am FRONT-END developer.
            </h1>
          </div>
          <div>Staff</div>
        </GridLayout>
      </main>
    </>
  );
};

export default Home;
