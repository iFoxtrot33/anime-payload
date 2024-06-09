import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "hero_banner",
        width: 1280,
        height: 720,
        position: "centre",
      },
      {
        name: "card",
        width: 250,
        height: 400,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [],
};
