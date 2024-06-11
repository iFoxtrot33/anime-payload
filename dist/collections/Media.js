"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    access: {
        read: function () { return true; },
    },
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
