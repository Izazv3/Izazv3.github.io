/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",

  images: { unoptimized: true },
};

module.exports = nextConfig;

// experimental: {
//   serverActions: true,
// },

// images: {
//   remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "images.unsplash.com",
//     },
//   ],
// },
