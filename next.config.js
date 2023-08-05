/** @type {import('next').NextConfig} */
const withFRAMER = require("next-transpile-modules")(["framer-motion-3d"]);
const nextConfig = {
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config;
  },
};
