/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  i18n: {
    locales: ['en-US', 'id-ID'],
    defaultLocale: 'en-US',
  },
  transpilePackages: ['@antd/icons'],
};

export default nextConfig;
