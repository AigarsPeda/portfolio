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
  const project = PROJECTS.find((project) => project.aboutLink === "wupzy");

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
              alt="wupzy"
              src="/asset/wupzy/wupzy_logo.jpg"
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
          For a while now, I&apos;ve had an idea that I believe could greatly
          enhance our volleyball games. We frequently find ourselves in need of
          a method to keep track of scores, and although we usually resort to
          using paper, there are occasions when we forget to bring any. However,
          we always have our phones with us. This led me to envision the
          creation of a user-friendly website dedicated to saving and managing
          game scores, as well as displaying the results in a convenient and
          accessible manner.
        </p>

        <p className="mt-10">
          I have used React and Next.js for the frontend development of my
          website. For the backend, I implemented tRPC, Prisma, and MySQL. The
          website is currently hosted on Vercel, while the database is hosted by
          PlanetScale and payments is handled by Stripe.
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold">Technologies:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <p>React</p>
            <p>TypeScript</p>
            <p>Next.js</p>
            <p>tRPC</p>
            <p>Prisma</p>
            <p>MySQL</p>
            <p>Stripe</p>
            <p>Vercel</p>
            <p>PlanetScale</p>
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
                alt="wupzy"
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
