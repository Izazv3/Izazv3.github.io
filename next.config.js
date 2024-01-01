/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Izazv3.github.io" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
