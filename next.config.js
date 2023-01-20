module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://vsmandal-docs.vercel.app/",
      },
    ];
  },
};
