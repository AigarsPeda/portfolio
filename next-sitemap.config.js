const siteUrl = "https://www.aigarspeda.com";

module.exports = {
  siteUrl,
  exclude: ["/404", "/lv/404"],
  // Build time does not reliably represent when each page's content changed.
  autoLastmod: false,
  generateRobotsTxt: true,
  additionalPaths: async (config) => [await config.transform(config, "/lv")],
  transform: async (config, path) => {
    const route = path.replace(/^\/(en|lv)(?=\/|$)/, "") || "/";
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: [
        { href: `${siteUrl}${route}`, hreflang: "en", hrefIsAbsolute: true },
        {
          href: `${siteUrl}/lv${route === "/" ? "" : route}`,
          hreflang: "lv",
          hrefIsAbsolute: true,
        },
        {
          href: `${siteUrl}${route}`,
          hreflang: "x-default",
          hrefIsAbsolute: true,
        },
      ],
    };
  },
};
