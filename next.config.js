/** @type {import('next').NextConfig} */
// const debug = process.env.NODE_ENV !== 'production'
// const name = 'small-'
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = {
//   reactStrictMode: true,
// };

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "" : "",
  images: {
    loader: "akamai",
    path: "/",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./script/sitemap-generator");
    }
    return config;
  },

};
