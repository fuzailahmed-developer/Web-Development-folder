/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'hips.hearstapps.com',
      },
    ],
  },
};

export default nextConfig;
