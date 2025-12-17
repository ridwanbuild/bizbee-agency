/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // output: "export",

  //  unoptimized: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.unitopled.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },


    ],
  },
}

module.exports = nextConfig;
