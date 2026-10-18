import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiMaximize2,
} from "react-icons/fi";
import ImageModal from "~/components/ImageModal/ImageModal";
import ProjectPreview from "~/components/ProjectPreview/ProjectPreview";
import SiteFooter from "~/components/SiteFooter/SiteFooter";
import SiteHeader from "~/components/SiteHeader/SiteHeader";
import TextFill from "~/components/TextFill/TextFill";
import { PROJECTS } from "~/hardcoded";
import type { ProjectType } from "~/types/project.types";
import { moveMagnetic, resetMagnetic } from "~/utils/magnetic";

type PageProps = {
  project: ProjectType;
  nextProject: Pick<ProjectType, "title" | "aboutLink">;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: PROJECTS.map((project) => ({ params: { slug: project.aboutLink } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PageProps> = ({ params }) => {
  const index = PROJECTS.findIndex(
    (project) => project.aboutLink === params?.slug,
  );
  const project = PROJECTS[index];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  if (!project || !nextProject) return { notFound: true };
  return {
    props: {
      project,
      nextProject: {
        title: nextProject.title,
        aboutLink: nextProject.aboutLink,
      },
    },
  };
};

export default function ProjectDetails({
  project,
  nextProject,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedImage, setSelectedImage] = useState<number>();
  const screenshots = (project.screenshots ?? []).filter(
    (image) => image.src !== project.coverImage,
  );
  const isMobileApp = project.aboutLink === "math-mews";

  return (
    <div id="top">
      <Head>
        <title>{`${project.title} | Aigars Peda`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Aigars Peda`} />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:image"
          content={`https://www.aigarspeda.com${project.coverImage}`}
        />
        <link
          rel="canonical"
          href={`https://www.aigarspeda.com/projects/${project.aboutLink}`}
        />
      </Head>
      <SiteHeader />
      <main id="main-content" className="case-page">
        <div className="case-intro page-width">
          <Link href="/#projects" className="back-link">
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </Link>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-description">{project.description}</p>
          <dl className="project-facts">
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>{project.category}</dd>
            </div>
          </dl>
          {(project.link || project.codeLink) && (
            <div className="case-actions">
              {project.link && (
                <a
                  href={project.link}
                  className="action-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub aria-hidden="true" /> View code
                </a>
              )}
            </div>
          )}
        </div>
        <div className="case-hero page-width">
          <ProjectPreview project={project} priority />
        </div>
        <section
          className="case-story page-width"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading">The project</h2>
          <div className="story-copy">
            {project.details?.map((section) => (
              <div key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          className="tech-section page-width"
          aria-labelledby="technologies-heading"
        >
          <h2 id="technologies-heading">Built with</h2>
          <ul className="technology-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
        <section
          className="case-gallery page-width"
          aria-labelledby="screenshots-heading"
        >
          <h2 id="screenshots-heading">In detail</h2>
          <div
            className={
              screenshots.length % 2
                ? "gallery-grid gallery-grid--odd"
                : "gallery-grid"
            }
          >
            {screenshots.map((screenshot, index) => (
              <figure key={screenshot.src}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Enlarge image: ${screenshot.caption}`}
                  className={
                    isMobileApp
                      ? "gallery-media gallery-media--phone"
                      : screenshot.layout === "portrait"
                        ? "gallery-media gallery-media--portrait"
                        : "gallery-media"
                  }
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={
                      isMobileApp
                        ? "gallery-image phone-screenshot-mask"
                        : "gallery-image"
                    }
                  />
                  <span className="enlarge-icon">
                    <FiMaximize2 aria-hidden="true" />
                  </span>
                </button>
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section
          className="next-project-section page-width"
          aria-label="Next project"
        >
          <p>Next project</p>
          <Link
            href={`/projects/${nextProject.aboutLink}`}
            className="next-project"
            data-cursor-label="Next project"
          >
            <span className="next-project-label">
              <TextFill text={nextProject.title} />
            </span>
            <span
              className="next-project-icon magnetic-target"
              data-magnetic-strength="6"
              onPointerMove={moveMagnetic}
              onPointerLeave={resetMagnetic}
              onPointerCancel={resetMagnetic}
              aria-hidden="true"
            >
              <span className="magnetic-content">
                <FiArrowUpRight />
              </span>
            </span>
          </Link>
        </section>
        <ImageModal
          imageClassName={isMobileApp ? "phone-screenshot-mask" : undefined}
          startImageIndex={selectedImage ?? 0}
          isModalVisible={selectedImage !== undefined}
          handleModalClose={() => setSelectedImage(undefined)}
          images={screenshots.map((image) => ({
            original: image.src,
            thumbnail: image.src,
            alt: image.alt,
          }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
