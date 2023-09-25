const relayConfig = require('./relay.config');

const compilerRelay = {
  src: relayConfig.src,
  artifactDirectory: relayConfig.artifactDirectory,
  language: relayConfig.language,
  eagerEsModules: false,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    relay: compilerRelay,
  },
};

module.exports = nextConfig;
