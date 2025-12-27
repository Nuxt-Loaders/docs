interface PageData {
  title: string;
  description: string;
}

export const usePageData = () => {
  const activeLink = useState("sidebar-active-link", () => "");
  const pageData = useState<PageData>("page-data", () => ({
    title: "Quick Setup",
    description: "Here you will find a quick setup guide for Nuxt Loaders.",
  }));

  const setPageData = (data: Partial<PageData>) => {
    pageData.value = { ...pageData.value, ...data };
  };

  useNuxtApp().hooks.hook("page:finish", () => {
    activeLink.value = window.location.pathname;
  });

  return {
    pageData,
    activeLink,
    setPageData,
  };
};
