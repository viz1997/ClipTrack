import type { NextConfig } from "@/node_modules/next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist', // 指定输出目录为 'dist'
  reactStrictMode: true, // 启用 React 严格模式
  swcMinify: true, // 使用 SWC 进行代码压缩
 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 249856; // 设置最大块大小为 249.856 KiB
    }
    return config;
  },
};

export default nextConfig;
