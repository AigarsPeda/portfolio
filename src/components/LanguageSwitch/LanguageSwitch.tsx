import Link from "next/link";
import { useRouter } from "next/router";
import { useCopy } from "~/i18n";
import {
  animateInterfaceChange,
  waitForLocaleCommit,
} from "~/utils/interfaceTransition";

export default function LanguageSwitch() {
  const router = useRouter();
  const copy = useCopy();
  const targetLocale = router.locale === "lv" ? "en" : "lv";

  return (
    <Link
      className="language-switch"
      href={router.asPath}
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
