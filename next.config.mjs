/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:slug*',
            destination: '/pages/:slug*',
          },
        ];
      },
};

export default nextConfig;
