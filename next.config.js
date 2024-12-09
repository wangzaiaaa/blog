/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add custom page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ensure clean URLs
  cleanDistDir: true,
  // Add assetPrefix if you're using a custom domain
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://blog.keepdev.fun' : '',
}

module.exports = nextConfig

