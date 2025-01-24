/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'], // Adicionando ambos os domínios do Unsplash
  },
  typescript: {
    ignoreBuildErrors: true, // Temporariamente para desenvolvimento
  }
}

module.exports = nextConfig 