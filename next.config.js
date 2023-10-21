/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
}

module.exports = nextConfig
