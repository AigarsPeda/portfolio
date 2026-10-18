import {
  AnimatePresence,
  motion,
  useIsPresent,
  usePresenceData,
  useReducedMotion,
} from "framer-motion";
import { useRouter } from "next/router";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cancelSectionScroll } from "~/utils/sectionScroll";

type TransitionData = { title: string; scrollY: number };

function TransitionPage({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) {
  const isPresent = useIsPresent();
  const reducedMotion = useReducedMotion();
  const { title, scrollY } = usePresenceData() as TransitionData;
  const entryPath = useRef(path);

  // Next may try to scroll before AnimatePresence mounts the destination page.
  useLayoutEffect(() => {
    // Only position a newly mounted page. Same-page links animate their scroll.
    const hash = new URL(entryPath.current, window.location.origin).hash;
    if (hash) {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({
          behavior: "instant",
        });
    }
  }, []);

  return (
    <motion.div
      className="transition-page"
      data-exiting={!isPresent || undefined}
      inert={!isPresent}
      style={
        isPresent
          ? undefined
          : { position: "fixed", top: -scrollY, width: "100%" }
      }
      initial="arrive"
      animate="idle"
      exit="leave"
    >
      {children}
      <motion.div
        className="page-curtain"
        aria-hidden="true"
        variants={{
          arrive: { y: "0%" },
          idle: {
            y: "-100%",
            transition: {
              duration: reducedMotion ? 0 : 1.1,
              ease: [0.76, 0, 0.24, 1],
            },
          },
          leave: {
            y: ["100%", "0%"],
            transition: {
              duration: reducedMotion ? 0 : 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
      >
        <span className="page-curtain-title">
          <span className="page-curtain-dot" />
          {title}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function PageTransition({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  // Hash-only navigation keeps the mounted page and its normal anchor behavior.
  const routeKey = router.asPath.split(/[?#]/)[0];

  useEffect(() => {
    const rememberScroll = () => {
      cancelSectionScroll();
      setScrollY(window.scrollY);
    };
    router.events.on("routeChangeStart", rememberScroll);
    return () => router.events.off("routeChangeStart", rememberScroll);
  }, [router.events]);

  return (
    <AnimatePresence initial={false} mode="wait" custom={{ title, scrollY }}>
      <TransitionPage key={routeKey} path={router.asPath}>
        {children}
      </TransitionPage>
    </AnimatePresence>
  );
}
