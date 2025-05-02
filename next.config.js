const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveExtensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
