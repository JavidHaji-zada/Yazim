/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return process.env.NODE_ENV !== "production"
      ? [
          {
            source: "/v1/:path*",
            destination: `http://localhost:8080/v1/:path*`,
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
