import { motion } from "framer-motion";
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
  FiExternalLink,
  FiGithub,
  FiMaximize2,
} from "react-icons/fi";
import ImageModal from "~/components/ImageModal/ImageModal";
import { PROJECTS } from "~/hardcoded";
import type { ProjectType } from "~/types/project.types";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: PROJECTS.filter((project) => project.details).map((project) => ({
    params: { slug: project.aboutLink },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ project: ProjectType }> = ({
  params,
}) => {
  const project = PROJECTS.find(
    (project) => project.aboutLink === params?.slug && project.details,
  );

  if (!project) return { notFound: true };
  return { props: { project } };
};

export default function ProjectDetails({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedImage, setSelectedImage] = useState<number>();
  const screenshots = project.screenshots ?? [];
  const isMobileApp = project.aboutLink === "math-mews";

  return (
    <div className="min-h-screen">
      <Head>
        <title>{project.title} | Aigars Peda</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Aigars Peda`} />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:image"
          content={`https://www.aigarspeda.com${project.coverImage}`}
        />
      </Head>

      <header className="border-primary-light/10 bg-primary-dark/80 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <Link
            href="/#projects"
            className="text-primary-light/70 hover:text-primary-accent inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-accent mb-3 text-sm font-medium">
            {project.category}
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="text-primary-light/70 max-w-3xl text-lg leading-relaxed">
            {project.description}
          </p>

          {(project.link || project.codeLink) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-accent text-primary-dark hover:bg-primary-accent/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                  Visit website
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary-light/20 text-primary-light/80 hover:bg-primary-light/5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  <FiGithub aria-hidden="true" className="h-4 w-4" />
                  View code
                </a>
              )}
            </div>
          )}

          <div
            className={`border-primary-light/10 relative mt-10 overflow-hidden rounded-xl border ${isMobileApp ? "aspect-[8/5]" : "aspect-video"}`}
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} project overview`}
              fill
              priority
              unoptimized={isMobileApp}
              sizes="(min-width: 1024px) 976px, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <section aria-labelledby="technologies-heading" className="my-12">
          <h2
            id="technologies-heading"
            className="text-primary-light/50 mb-4 text-sm font-semibold tracking-wider uppercase"
          >
            Technologies used
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-primary-light/5 text-primary-light/80 rounded-full px-4 py-2 text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about-heading" className="mb-14">
          <h2
            id="about-heading"
            className="text-primary-light/50 mb-6 text-sm font-semibold tracking-wider uppercase"
          >
            About the project
          </h2>
          <div className="text-primary-light/80 max-w-3xl space-y-5 text-lg leading-relaxed">
            {project.details?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="screenshots-heading">
          <h2
            id="screenshots-heading"
            className="text-primary-light/50 mb-6 text-sm font-semibold tracking-wider uppercase"
          >
            Screenshots
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {screenshots.map((screenshot, index) => (
              <figure key={screenshot.src}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Enlarge image: ${screenshot.caption}`}
                  className={`group border-primary-light/10 hover:border-primary-accent/50 focus-visible:outline-primary-accent relative block w-full overflow-hidden rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${isMobileApp ? "aspect-[4/5] bg-[#fff5e9]" : "bg-primary-dark-light/30 aspect-video"}`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(min-width: 1024px) 476px, (min-width: 768px) 50vw, 100vw"
                    className={
                      isMobileApp
                        ? "phone-screenshot-mask object-contain p-4"
                        : "object-cover"
                    }
                  />
                  <span className="bg-primary-dark/80 absolute right-3 bottom-3 rounded-full p-2.5">
                    <FiMaximize2 aria-hidden="true" className="h-4 w-4" />
                  </span>
                </button>
                <figcaption className="text-primary-light/60 mt-3 text-sm leading-relaxed">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ImageModal
          imageClassName={isMobileApp ? "phone-screenshot-mask" : undefined}
          startImageIndex={selectedImage ?? 0}
          isModalVisible={selectedImage !== undefined}
          handleModalClose={() => setSelectedImage(undefined)}
          images={screenshots.map((screenshot) => ({
            original: screenshot.src,
            thumbnail: screenshot.src,
          }))}
        />
      </main>
    </div>
  );
}
