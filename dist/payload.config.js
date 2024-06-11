"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var config_1 = require("payload/config");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var Cards_1 = require("./collections/Cards/Cards");
var Media_1 = require("./collections/Media");
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env"),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    cors: [process.env.NEXT_PUBLIC_SERVER_URL || "*"],
    csrf: [process.env.NEXT_PUBLIC_SERVER_URL || "*"].filter(Boolean),
    collections: [Cards_1.Cards, Media_1.Media],
    routes: {
        admin: "/admin",
    },
    admin: {
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "Anime test payload project",
            favicon: "/logo.svg",
            ogImage: "/logo.svg",
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGO_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
});
