import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/homepage-blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "xlxu lab",
      description: "xlxu lab",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "xlxu lab",
      description: "许小龙的实验室",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
