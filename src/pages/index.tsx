import Head from "next/head";
import { FiArrowDownRight } from "react-icons/fi";
import Projects from "~/components/projects/Projects";
import SiteFooter from "~/components/SiteFooter/SiteFooter";
import SiteHeader from "~/components/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>Aigars Peda | Full-stack developer</title>
        <meta
          name="description"
          content="I'm Aigars, a full-stack developer building websites and mobile apps. Explore my work with React, React Native, Next.js, and WordPress."
        />
        <meta
          property="og:title"
          content="Aigars Peda | Websites & mobile apps"
        />
        <meta
          property="og:description"
          content="A selection of websites, mobile apps, and tools I've built."
        />
        <link rel="canonical" href="https://www.aigarspeda.com/" />
      </Head>
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-layout">
            <h1 id="hero-heading" className="hero-heading">
              I build websites
              <br />
              and mobile apps<span className="accent-period">.</span>
            </h1>
            <a className="circle-link fill-button" href="#projects">
              <FiArrowDownRight aria-hidden="true" />
              <span>Explore work</span>
            </a>
          </div>
        </section>
        <section
          id="projects"
          className="work-section page-width"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <h2 id="work-heading">Selected work</h2>
          </div>
          <Projects />
        </section>
        <section
          id="about"
          className="about-section page-width"
          aria-labelledby="about-heading"
        >
          <div className="about-intro">
            <h2 id="about-heading">
              A little
              <br />
              about me.
            </h2>
            <div className="about-copy">
              <p className="about-lead">
                I&apos;m a full-stack developer who enjoys building things
                people can use.
              </p>
              <p>
                I&apos;m currently working with LVM Geo on OpenLayers map
                layers and an inventory application with web and mobile
                versions.
              </p>
              <p>
                My work includes business websites, a volleyball tournament app,
                a drawing tool, and a math game with a virtual cat. I work
                across the interface, application logic, and backend.
              </p>
              <div className="capabilities">
                <div>
                  <h3>Web & backend</h3>
                  <p>
                    React, Next.js, Vue, OpenLayers, WordPress, PHP, tRPC,
                    Prisma, MySQL
                  </p>
                </div>
                <div>
                  <h3>Mobile</h3>
                  <p>
                    React Native, Expo, TypeScript, Supabase, native 3D
                    rendering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
