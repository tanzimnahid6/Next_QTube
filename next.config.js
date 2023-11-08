/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i3.ytimg.com",
       
      }
    ],
  },
}

module.exports = nextConfig
