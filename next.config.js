const path = require("path");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["style"] = path.join(__dirname, "src/style");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");

    return config;
  },
});
