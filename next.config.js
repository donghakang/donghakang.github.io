/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
}

module.exports = nextConfig
