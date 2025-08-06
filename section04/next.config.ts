import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // consolg의 로그 설정
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
