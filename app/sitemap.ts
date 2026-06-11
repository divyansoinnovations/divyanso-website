import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.divyanso.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.divyanso.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.divyanso.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.divyanso.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.divyanso.com/contact",
      lastModified: new Date(),
    },
  ];
}
