import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import GridLayout from "~/components/GridLayout/GridLayout";
import ImageModal from "~/components/ImageModal/ImageModal";
import { PROJECTS } from "~/hardcoded";
import classNames from "~/utils/classNames";
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
    <div className="p-2">
      <Link
        href="/"
        className="text-primary-accent mt-2 ml-2 flex items-center transition-all duration-200 hover:underline"
      >
        <IoMdArrowRoundBack
          className={classNames("text-primary-accent mr-2 h-4 w-4")}
        />
        Go back
      </Link>
      <div className="mt-14 flex w-full justify-center">
        <div>
          <div className="relative m-2 mx-auto h-36 w-56 rounded-lg">
            <Image
              fill
              alt="kids learning app"
              className="rounded-lg object-cover"
              src={
                images[0] || "/asset/kids_learning_app/kids_learning_app_0.jpg"
              }
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 mb-20 max-w-2xl text-lg">
        <p>
          This app is a learning platform for kids. It is a react native app and
          will be available on both iOS and Android. The app is currently in
          development and is not yet available on the app store.
        </p>

        <p className="mt-10">
          I have used Expo to create this app. Expo is a framework and a
          platform for universal React applications. It is a set of tools and
          services built around React Native and native platforms that help you
          develop, build, deploy, and quickly iterate on iOS, Android, and web
          apps from the same JavaScript/TypeScript codebase.
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {project?.technologies.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 mb-8">
          <p className="text-sm font-semibold">Links:</p>
          <div className="flex space-x-2 text-sm">
            {project?.link && (
              <Link
                target="_blank"
                href={project?.link || "#"}
                className="text-primary-accent flex items-center transition-all duration-200 hover:underline"
              >
                Website{" "}
                <FiExternalLink
                  className={classNames("text-primary-accent ml-2 h-4 w-4")}
                />
              </Link>
            )}
            {project?.codeLink && (
              <Link
                target="_blank"
                href={project?.codeLink || "#"}
                className="text-primary-accent flex items-center transition-all duration-200 hover:underline"
              >
                Code{" "}
                <FiExternalLink
                  className={classNames("text-primary-accent ml-2 h-4 w-4")}
                />
              </Link>
            )}
          </div>
        </div>

        <GridLayout isGap minWith="200px">
          {images.map((image, i) => (
            <button key={i} onClick={() => setIsModalVisible(i)}>
              <Image
                alt="canvas"
                src={image}
                width={220}
                height={150}
                className="max-h-64 rounded-lg md:max-h-40"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </button>
          ))}
        </GridLayout>
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
      </div>
    </div>
  );
};

export default AboutProject;
