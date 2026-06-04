import type { NextConfig } from "next";
import { withAxiom } from "next-axiom";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/skills", destination: "/#skills", permanent: false },
      { source: "/projects", destination: "/#all-projects", permanent: false },
      { source: "/experience", destination: "/#experience", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default withAxiom(nextConfig);