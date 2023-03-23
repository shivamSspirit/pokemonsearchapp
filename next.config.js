/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {  
        hostname: 'img.pokemondb.net',
      },
    ],
  },
}

module.exports = nextConfig
