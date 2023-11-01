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
  const project = PROJECTS.find((project) => project.aboutLink === "canvas");

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
        className="ml-2 mt-2 flex items-center text-primary-accent transition-all duration-200 hover:underline"
      >
        <IoMdArrowRoundBack
          className={classNames("mr-2 h-4 w-4 text-primary-accent")}
        />
        Go back
      </Link>
      <div className="mt-14 flex w-full justify-center">
        <div>
          <div className="relative m-2 mx-auto h-36 w-56 rounded-lg">
            <Image
              fill
              alt="canvas"
              src="/asset/canvas/canvas_logo.webp"
              className="rounded-lg object-cover"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 mt-10 max-w-2xl text-lg">
        <p>
          In this project, I&apos;ve embarked on a learning journey to deepen my
          understanding of Vue.js and canvas rendering. The key technologies and
          tools I&apos;ve employed include Vue.js, TypeScript, Pinia, GitHub
          Pages, and Fabric.js.
        </p>

        <p className="mt-10">
          One of the standout features of this project is the custom free
          drawing mode I&apos;ve developed. This mode enhances the user&apos;s
          drawing experience by providing a smoother and more fluid interaction
          when using a mouse or touch input. Furthermore, users have the freedom
          to select an SVG background for both the canvas itself and individual
          canvas objects. They can also explore a rich palette of colors to
          customize their creations and add text elements.
        </p>

        <p className="mt-10">
          It&apos;s important to note that this project is still a work in
          progress. I&apos;m actively refining and expanding its capabilities to
          deliver an even more compelling and feature-rich experience. Stay
          tuned for updates and improvements as I continue to refine this
          exciting project!
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {project?.technologies.map((tech, i) => <p key={i}>{tech}</p>)}
          </div>
        </div>

        <div className="mb-8 mt-10">
          <p className="text-sm font-semibold">Links:</p>
          <div className="flex space-x-2 text-sm">
            <Link
              target="_blank"
              href={project?.link || "#"}
              className="flex items-center text-primary-accent transition-all duration-200 hover:underline"
            >
              Website{" "}
              <FiExternalLink
                className={classNames("ml-2 h-4 w-4 text-primary-accent")}
              />
            </Link>
            <Link
              target="_blank"
              href={project?.codeLink || "#"}
              className="flex items-center text-primary-accent transition-all duration-200 hover:underline"
            >
              Code{" "}
              <FiExternalLink
                className={classNames("ml-2 h-4 w-4 text-primary-accent")}
              />
            </Link>
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
                  objectFit: "fill",
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
