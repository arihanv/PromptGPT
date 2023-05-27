export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "PromptGPT",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Statistics",
      href: "/statistics",
    },
  ],
  links: {
    twitter: "/",
    github: "/",
    docs: "/",
  },
}
