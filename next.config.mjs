import chalk from 'chalk'
import checkEnvVariables from './scripts/check-env-variables.js'

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        '*.scss': {
          loaders: ['sass-loader'],
        },
      },
    },
    scrollRestoration: true,
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-cloud.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.us-east-1.amazonaws.com',
      },
    ],
  },
  env: {
    'Store Name': process.env.NEXT_PUBLIC_STORE_NAME,
    'Storefront URL': process.env.NEXT_PUBLIC_BASE_URL,
    'Admin Dashboard': `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/dashboard`,
    'Search Enabled': process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED,
  },
}

export default nextConfig

console.log(
  Object.entries(nextConfig.env)
    .map(([key, value]) => `  - ${chalk.green(key)}: ${value}`)
    .join('\n')
)
