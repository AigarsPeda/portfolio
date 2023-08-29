import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import "~/styles/globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            ----font-open-san: ${openSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} /> <Analytics />
    </>
  );
};

export default MyApp;
