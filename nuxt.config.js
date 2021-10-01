export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hacktoberfest-2021",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/styles/global.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Sen", "Roboto Mono", "Inter", "Poppins:400,600,700,800"] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  styleResources: {
    scss: ["./assets/styles/setup/_mixins.scss"]
  },
  server: {
    port: 8000 // default: 3000
  }
};
