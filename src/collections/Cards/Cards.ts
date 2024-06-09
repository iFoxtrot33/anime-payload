import { CollectionConfig } from "payload/types";

export const Cards: CollectionConfig = {
  slug: "cards",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "name",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "episodes",
      label: "Number of Episodes",
      type: "number",
      min: 1,
      required: true,
    },
    {
      name: "rating",
      label: "Rating",
      type: "number",
      min: 1,
      required: true,
    },
    {
      name: "card_image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
