/* const path = require("path");
const withPWA = require("next-pwa");
const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withPWA(withMDX({
  pwa: { dest: "public" },
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["style"] = path.join(__dirname, "src/style");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["utility"] = path.join(__dirname, "src/utility");
    config.resolve.alias["articles"] = path.join(__dirname, "src/articles");

    return config;
  },
}));
 */

const path = require("path");
const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["style"] = path.join(__dirname, "src/style");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["utility"] = path.join(__dirname, "src/utility");
    config.resolve.alias["articles"] = path.join(__dirname, "src/articles");
    config.resolve.alias["locale"] = path.join(__dirname, "src/locale");

    return config;
  },
});
