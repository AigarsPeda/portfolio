import LocalizedSeo from "~/components/LocalizedSeo/LocalizedSeo";
import { useCopy } from "~/i18n";
import { FiArrowDownRight } from "react-icons/fi";
import Projects from "~/components/projects/Projects";
import SiteFooter from "~/components/SiteFooter/SiteFooter";
import SiteHeader from "~/components/SiteHeader/SiteHeader";
import SectionLink from "~/components/SectionLink/SectionLink";

export default function Home() {
  const copy = useCopy();
  return (
    <div id="top">
      <LocalizedSeo
        path="/"
        title={copy.title}
        description={copy.description}
      />
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-layout">
            <h1 id="hero-heading" className="hero-heading">
              {copy.heroLine1}
              <br />
              {copy.heroLine2}
              <span className="accent-period">.</span>
            </h1>
            <SectionLink className="circle-link fill-button" href="#projects">
              <FiArrowDownRight aria-hidden="true" />
              <span>{copy.explore}</span>
            </SectionLink>
          </div>
        </section>
        <section
          id="projects"
          className="work-section page-width"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <h2 id="work-heading">{copy.selectedWork}</h2>
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
              {copy.aboutLine1}
              <br />
              {copy.aboutLine2}
            </h2>
            <div className="about-copy">
              <p className="about-lead">{copy.aboutLead}</p>
              <p>{copy.currentWork}</p>
              <p>{copy.experience}</p>
              <div className="capabilities">
                <div>
                  <h3>{copy.webBackend}</h3>
                  <p>
                    React, Next.js, Vue, OpenLayers, WordPress, PHP, tRPC,
                    Prisma, MySQL
                  </p>
                </div>
                <div>
                  <h3>{copy.mobile}</h3>
                  <p>
                    React Native, Expo, TypeScript, Supabase, {copy.native3d}
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
