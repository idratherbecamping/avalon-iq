/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // /exit was briefly its own page; its pitch now lives on the homepage.
  async redirects() {
    return [{ source: '/exit', destination: '/', permanent: true }]
  },
}

module.exports = nextConfig 