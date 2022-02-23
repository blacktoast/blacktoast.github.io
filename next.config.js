const { withContentlayer } = require("next-contentlayer");

const debug = process.env.NODE_ENV !== "production";
const name = "small-magic-project-deployment";
module.exports = {
  assetPrefix: !debug ? `/${name}/` : "",
};
module.exports = withContentlayer()({});
