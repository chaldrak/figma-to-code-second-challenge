/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "started-bucket.s3.us-east-2.amazonaws.com",
        pathname: "/figma-to-code/**",
      },
    ],
  },
}

export default nextConfig
