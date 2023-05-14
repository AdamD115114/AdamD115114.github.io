// import { defineUserConfig } from 'vuepress'

// import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import path from 'path';
import theme from "./theme.js";

export default {
  lang: 'en-US',
  title: 'Adam\'s Dev Site',
  description: 'Just playing around',
  base: "/",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  // debug: true,
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  theme,
  // clientConfigFile: path.resolve(__dirname, "./client.js")
}
