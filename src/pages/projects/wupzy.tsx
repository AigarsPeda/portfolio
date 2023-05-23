import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classNames from "utils/classNames";

const AboutProject: NextPage = () => {
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
      <div className="mx-auto mt-10 max-w-2xl text-lg">
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
          <div className="flex space-x-2 text-sm">
            <p>Next.js</p>
            <p>tRPC</p>
            <p>Prisma</p>
            <p>MySQL</p>
            <p>Stripe</p>
            <p>Vercel</p>
            <p>PlanetScale</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold">Links:</p>
          <div className="flex space-x-2 text-sm">
            <Link
              target="_blank"
              href="https://wupzy.com"
              className="flex items-center text-gray-900 transition-all duration-200 hover:underline"
            >
              Website <FiExternalLink className={classNames("ml-2 h-4 w-4")} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/AigarsPeda/wupzy"
              className="flex items-center text-gray-900 transition-all duration-200 hover:underline"
            >
              Code <FiExternalLink className={classNames("ml-2 h-4 w-4")} />
            </Link>
          </div>
        </div>

        <Carousel
          swipeable
          emulateTouch
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          className="mt-10 rounded-md bg-gray-50"
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={classNames(
                  hasPrev ? "absolute" : "hidden",
                  "top-0 bottom-0 left-0 z-20 flex cursor-pointer items-center justify-center p-3 opacity-50 transition-all duration-150 hover:opacity-100"
                )}
                onClick={clickHandler}
              >
                <FaChevronLeft className="h-9 w-9" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={classNames(
                  hasNext ? "absolute" : "hidden",
                  "top-0 bottom-0 right-0 z-20 flex cursor-pointer items-center justify-center p-3 opacity-50 transition-all duration-150 hover:opacity-100"
                )}
                onClick={clickHandler}
              >
                <FaChevronRight className="h-9 w-9" />
              </div>
            );
          }}
        >
          <div className="mx-auto mt-5 h-96 max-w-[24rem]">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_create.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 flex h-96 max-w-[34rem] items-center justify-center">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_desktop_view.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 max-w-[12rem]">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_new_games_a-1.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 max-w-[12rem]">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_new_games_a.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 flex h-96 max-w-[36rem] items-center justify-center">
            <Image
              width={450}
              height={450}
              alt="wupzy"
              src="/asset/wupzy/wupzy_playoffs.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 flex h-96 max-w-[24rem] items-center justify-center">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_table.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 max-w-[12rem]">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_share_mob_link_a.webp"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="mx-auto mt-5 flex h-96 max-w-[24rem] items-center justify-center">
            <Image
              width={350}
              height={350}
              alt="wupzy"
              src="/asset/wupzy/wupzy_score_a.webp"
              className="rounded-lg object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutProject;
