import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Xlxu lab",
      description: "xlxu lab",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Xlxu lab",
      description: "许小龙的实验室",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
