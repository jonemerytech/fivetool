/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/fivetool',
  assetPrefix: '/fivetool',
  reactStrictMode: true,
  images: {
    domains: ['files.stripe.com'],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
