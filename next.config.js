/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/fivetool.vercel.app',
  assetPrefix: '/fivetool.vercel.app',
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com'],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
