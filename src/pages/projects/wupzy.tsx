import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "~/hardcoded";
import classNames from "~/utils/classNames";

const AboutProject: NextPage = () => {
  const project = PROJECTS.find((project) => project.aboutLink === "wupzy");

  return (
    <div className="p-2">
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
              href="https://wupzy.com"
              className="flex items-center text-primary-accent transition-all duration-200 hover:underline"
            >
              Website{" "}
              <FiExternalLink
                className={classNames("ml-2 h-4 w-4 text-primary-accent")}
              />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/AigarsPeda/wupzy"
              className="flex items-center text-primary-accent transition-all duration-200 hover:underline"
            >
              Code{" "}
              <FiExternalLink
                className={classNames("ml-2 h-4 w-4 text-primary-accent")}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project?.imagesAssets.map((image, i) => (
            <div key={i}>
              <Image
                alt="wupzy"
                src={image}
                width={220}
                height={150}
                className="max-h-64 rounded-lg object-cover md:max-h-32"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
