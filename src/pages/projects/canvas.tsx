import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import GridLayout from "~/components/GridLayout/GridLayout";
import ImageModal from "~/components/ImageModal/ImageModal";
import { PROJECTS } from "~/hardcoded";
import classNames from "~/utils/classNames";

const AboutProject: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<number | undefined>(
    undefined,
  );
  const project = PROJECTS.find((project) => project.aboutLink === "canvas");

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
          This is still a work in progress. I wanted to learn more about vue3
          and canvas so I decided to make a website that allows you to draw on a
          canvas and save your drawings. I am currently working on the website
          and the backend and adding feature. The website is currently live, but
          the backend is not yet finished.
        </p>

        <p className="mt-10">
          I have used Vue3 and TypeScript for the frontend.
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <p>Vue</p>
            <p>TypeScript</p>
            <p>Pinia</p>
            <p>Github page</p>
            <p>Fabric.js</p>
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
          {project?.imagesAssets.map((image, i) => (
            <button key={i} onClick={() => setIsModalVisible(i)}>
              <Image
                alt="canvas"
                src={image}
                width={220}
                height={150}
                className="max-h-64 rounded-lg object-contain md:max-h-40"
                style={{
                  width: "100%",
                  height: "100%",
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
            project?.imagesAssets.map((image) => ({
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
