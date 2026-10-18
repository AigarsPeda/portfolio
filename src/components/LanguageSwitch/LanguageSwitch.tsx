import Link from "next/link";
import { useRouter } from "next/router";
import { useSyncExternalStore } from "react";
import { useCopy } from "~/i18n";
import {
  animateInterfaceChange,
  waitForLocaleCommit,
} from "~/utils/interfaceTransition";

const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export default function LanguageSwitch() {
  const router = useRouter();
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    clientSnapshot,
    serverSnapshot,
  );
  const copy = useCopy();
  const targetLocale = router.locale === "lv" ? "en" : "lv";
  // Fragments exist only in the browser, after the initial server render.
  const href = hydrated ? router.asPath : router.asPath.split(/[?#]/)[0]!;

  return (
    <Link
      className="language-switch"
      href={href}
      locale={targetLocale}
      scroll={false}
      lang={targetLocale}
      aria-label={copy.switchLanguage}
      title={targetLocale === "lv" ? "Latviski" : "English"}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return;
        event.preventDefault();
        document.cookie = `NEXT_LOCALE=${targetLocale}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
        void animateInterfaceChange("language", async () => {
          const changed = await router.push(router.asPath, router.asPath, {
            locale: targetLocale,
            scroll: false,
          });
          if (changed) await waitForLocaleCommit(targetLocale);
        });
      }}
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
