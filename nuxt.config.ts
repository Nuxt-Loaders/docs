import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-loaders"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  loaders: {
    routeRules: {
      "*": "PulseRailLoader",
      "/docs/*": "TripleBarLoader",
      "/docs/contributing": "TripleFlipLoader",
      "/docs/quick-setup": "TriDotLoader",
    },
  },
  app: {
    head: {
      title: "Nuxt Loaders",
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Documentation of nuxt-loaders",
        },
        {
          name: "author",
          content: "Haileab Tesfaye",
        },
        {
          name: "keywords",
          content: "nuxt, nuxt-loaders, nuxt-content, nuxtjs, loading screens",
        },
        {
          name: "og:title",
          content: "Nuxt Loaders",
        },
        {
          name: "og:description",
          content: "Documentation of nuxt-loaders",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://nuxt-loaders.vercel.app",
        },
        {
          name: "og:image",
          content: "/logo_wide.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Nuxt Loaders",
        },
        {
          name: "twitter:description",
          content: "Documentation of nuxt-loaders",
        },
        {
          name: "twitter:image",
          content: "/logo_wide.png",
        },
      ],
    },
  },
  $meta: {
    name: "Nuxt Loaders Docs",
    description: "Documentation of nuxt-loaders",
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "ayu-dark",
        },
      },
    },
  },
});
