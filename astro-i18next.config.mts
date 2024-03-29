/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "en",
  locales: ["en", "da", "zh"],
  namespaces: [
    "common",
    "home",
    "about",
    "blog",
    "contact",
    "error",
    "services",
    "pricing",
  ],
  defaultNamespace: "common",
  // i18nextServer: {
  //   debug: true,
  //   // Translations loadpath on Windows
  //   backend: {
  //     loadPath: "./public/locales/{{lng}}/{{ns}}.json",
  //   },
  // },
};
