import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import classNames from "utils/classNames";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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

        <div className="mt-10 mb-8">
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

        <CarouselProvider
          dragEnabled
          totalSlides={6}
          className="relative"
          naturalSlideWidth={350}
          naturalSlideHeight={200}
        >
          <Slider className="">
            <Slide index={0}>
              <div className="mx-auto w-80">
                <Image
                  width={390}
                  height={390}
                  alt="wupzy"
                  src="/asset/wupzy/wupzy_create.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="mx-auto max-w-[34rem]">
                <Image
                  alt="wupzy"
                  width={500}
                  height={500}
                  src="/asset/wupzy/wupzy_desktop_view.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="mx-auto w-80">
                <Image
                  alt="wupzy"
                  width={390}
                  height={390}
                  src="/asset/wupzy/wupzy_new_games_a.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="flex h-full items-center justify-center px-10">
                <Image
                  alt="wupzy"
                  width={390}
                  height={390}
                  src="/asset/wupzy/wupzy_score_a.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
            <Slide index={4}>
              <div className="mx-auto w-80">
                <Image
                  alt="wupzy"
                  width={390}
                  height={390}
                  src="/asset/wupzy/wupzy_share_mob_link_a.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
            <Slide index={5}>
              <div className="flex h-full items-center justify-center px-10">
                <Image
                  width={450}
                  height={250}
                  alt="wupzy"
                  src="/asset/wupzy/wupzy_table.webp"
                  className="rounded-lg object-cover"
                />
              </div>
            </Slide>
          </Slider>
          <ButtonBack className="absolute left-0 top-1/2 -translate-y-1/2 transform">
            <FaChevronLeft className="h-8 w-8 text-gray-900" />
          </ButtonBack>
          <ButtonNext className="absolute right-0 top-1/2 -translate-y-1/2 transform">
            <FaChevronRight className="h-8 w-8 text-gray-900" />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default AboutProject;
