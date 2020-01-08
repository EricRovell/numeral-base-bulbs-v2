const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(__dirname, "src/components");
    config.resolve.alias["styles"] = path.join(__dirname, "src/styles");
    config.resolve.alias["pages"] = path.join(__dirname, "src/pages");

    return config;
  },
};
