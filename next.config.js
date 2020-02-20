const path = require("path");
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],

  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["style"] = path.join(__dirname, "src/style");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["utility"] = path.join(__dirname, "src/utility");
    config.resolve.alias["tutorial"] = path.join(__dirname, "src/tutorial");

    return config;
  },
});
