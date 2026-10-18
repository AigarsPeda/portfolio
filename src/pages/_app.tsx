import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "~/styles/globals.css";
import { Manrope } from "next/font/google";
import { useSyncExternalStore } from "react";
import PageTransition from "~/components/PageTransition/PageTransition";
import ProjectCursor from "~/components/ProjectCursor/ProjectCursor";
import type { ProjectType } from "~/types/project.types";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

// The hostname stays fixed until the next page load.
const subscribeToHostname = () => () => {};
const isPublicHost = () =>
  !["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

const MyApp: AppType = ({ Component, pageProps }) => {
  const analyticsEnabled = useSyncExternalStore(
    subscribeToHostname,
    isPublicHost,
    () => false,
  );

  return (
    <div className={manrope.className}>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico?v=ap"
          sizes="16x16 32x32 48x48 64x64"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=ap"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=ap"
        />
      </Head>
      <PageTransition
        title={
          (pageProps as { project?: ProjectType }).project?.title ??
          "Aigars Peda"
        }
      >
        <Component {...pageProps} />
      </PageTransition>
      <ProjectCursor />
      {analyticsEnabled && <Analytics />}
    </div>
  );
};

export default MyApp;
