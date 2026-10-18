import Head from "next/head";
import { useRouter } from "next/router";
import { localizedUrl } from "~/i18n";

export default function LocalizedSeo({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string | undefined;
  image?: string;
}) {
  const { locale } = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:locale"
        content={locale === "lv" ? "lv_LV" : "en_GB"}
      />
      {image && (
        <meta
          property="og:image"
          content={`https://www.aigarspeda.com${image}`}
        />
      )}
      <link rel="canonical" href={localizedUrl(locale, path)} />
      <link rel="alternate" hrefLang="en" href={localizedUrl("en", path)} />
      <link rel="alternate" hrefLang="lv" href={localizedUrl("lv", path)} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={localizedUrl("en", path)}
      />
    </Head>
  );
}
