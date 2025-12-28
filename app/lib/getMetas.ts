export function getMetas(description: string, title: string) {
  return [
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
      content: title,
    },
    {
      name: "og:description",
      content: description,
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
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: "/logo_wide.png",
    },
  ];
}
