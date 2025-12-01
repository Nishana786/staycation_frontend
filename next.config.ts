/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sreestours.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sreestours.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.scchomes.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scchomes.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
