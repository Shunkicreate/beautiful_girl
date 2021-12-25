// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
  publicPath: '/beautiful_girl',
  devServer: {
    proxy: {
      "/url/": {
        target: "https://hack-z-2021-9-prettygirl.azurewebsites.net",
      }
    },
  },
  publicPath: './',
  assetsDir: "",
  outputDir: "dist"
}
