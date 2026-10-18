import Link from "next/link";
import { useRouter } from "next/router";
import { useCopy } from "~/i18n";

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
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${targetLocale}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
      }}
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
