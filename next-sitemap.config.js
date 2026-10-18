const siteUrl = "https://www.aigarspeda.com";

module.exports = {
  siteUrl,
  exclude: ["/404"],
  // Build time does not reliably represent when each page's content changed.
  autoLastmod: false,
  generateRobotsTxt: true,
};
