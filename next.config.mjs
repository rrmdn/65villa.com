/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'id-ID'],
    defaultLocale: 'en-US',
  },
  transpilePackages: ['@antd/icons'],
};

export default nextConfig;
