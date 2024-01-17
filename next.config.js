/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",

  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" }, // Change '/page' to the desired default page
  //   };
  // },
};

module.exports = nextConfig;
