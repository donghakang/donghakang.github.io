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
};
