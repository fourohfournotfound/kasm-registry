/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Local Kasm ML',
    description: 'Repository to use my own images in kasm',
    icon: '/img/logo.svg',
    listUrl: 'https://fourohfournotfound/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
