const {i18n} = require('./next-i18next.config')
const withVideos = require('next-videos')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  swcMinify: false,
}

module.exports = withVideos(nextConfig)
