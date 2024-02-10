/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
     sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
}

module.exports = nextConfig
