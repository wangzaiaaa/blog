// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 禁用图片优化
  },
  exportTrailingSlash: true,
};

module.exports = nextConfig;
