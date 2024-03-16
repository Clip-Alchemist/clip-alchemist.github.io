import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["GPTBot", "Google-Extended"], //block for AI training
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
