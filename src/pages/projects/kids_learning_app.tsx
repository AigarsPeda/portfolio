import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import ImageModal from "~/components/ImageModal/ImageModal";
import { PROJECTS } from "~/hardcoded";
import getImagesFromFolder from "~/utils/getImagesFromFolder";

const AboutProject: NextPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<number | undefined>(
    undefined,
  );
  const project = PROJECTS.find(
    (project) => project.aboutLink === "kids_learning_app",
  );

  useEffect(() => {
    if (!project) return;

    const fetchImages = async (): Promise<void> => {
      const imagePaths = await getImagesFromFolder<string[]>(project.aboutLink);
      setImages(imagePaths);
    };
    fetchImages().catch((err) => console.error(err));
  }, [project, project?.aboutLink]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-primary-light/10 bg-primary-dark/80 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
          <Link
            href="/"
            className="group text-primary-light/70 hover:text-primary-accent flex items-center gap-2 text-sm font-medium transition-all duration-300"
          >
            <IoMdArrowRoundBack className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            {/* Project Logo */}
            <div className="border-primary-light/10 relative h-24 w-24 overflow-hidden rounded-2xl border shadow-lg md:h-32 md:w-32">
              <Image
                fill
                alt="kids learning app"
                src={
                  // images[0] ||
                  project?.logo ||
                  "/asset/kids_learning_app/kids_learning_app_6.jpg"
                }
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
                {project?.title}
              </h1>
              <p className="text-primary-light/60 mb-4 text-lg">
                {project?.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project?.link && (
                  <Link
                    target="_blank"
                    href={project.link}
                    className="bg-primary-accent text-primary-dark hover:bg-primary-accent/90 hover:shadow-primary-accent/20 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
                {project?.codeLink && (
                  <Link
                    target="_blank"
                    href={project.codeLink}
                    className="border-primary-light/20 text-primary-light/80 hover:border-primary-light/40 hover:bg-primary-light/5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300"
                  >
                    <FiGithub className="h-4 w-4" />
                    View Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-primary-light/50 mb-4 text-sm font-semibold tracking-wider uppercase">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project?.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-primary-light/5 text-primary-light/80 hover:bg-primary-accent/10 hover:text-primary-accent rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-primary-light/50 mb-6 text-sm font-semibold tracking-wider uppercase">
            About the Project
          </h2>
          <div className="text-primary-light/80 space-y-6 text-lg leading-relaxed">
            <p>
              A mobile app designed to make math practice fun for kids. It generates bite-sized arithmetic challenges and tracks progress, keeping children engaged through quick, rewarding rounds.
            </p>
            <p>
              Built with React Native and Expo, the app runs on both iOS and Android from a single TypeScript codebase. It&apos;s currently in active development and not yet on the app stores.
            </p>
          </div>
        </motion.div>

        {/* Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-primary-light/50 mb-6 text-sm font-semibold tracking-wider uppercase">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                onClick={() => setIsModalVisible(i)}
                className="group border-primary-light/10 bg-primary-dark-light/30 hover:border-primary-accent/30 hover:shadow-primary-accent/5 relative aspect-video overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  alt={`${project?.title} screenshot ${i + 1}`}
                  src={image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="from-primary-dark/60 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-primary-dark/80 text-primary-light rounded-full px-4 py-2 text-sm font-medium">
                    View
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <ImageModal
          startImageIndex={isModalVisible || 0}
          isModalVisible={isModalVisible !== undefined}
          handleModalClose={() => setIsModalVisible(undefined)}
          images={
            images.map((image) => ({
              original: image,
              thumbnail: image,
            })) || []
          }
        />
      </main>
    </div>
  );
};

export default AboutProject;
