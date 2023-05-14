// import { defineUserConfig } from 'vuepress'

import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import path from 'path';
import theme from "./theme.js";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Adam\'s Dev Site',
  description: 'Just playing around',
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  theme,
  // clientConfigFile: path.resolve(__dirname, "./client.js")
})
