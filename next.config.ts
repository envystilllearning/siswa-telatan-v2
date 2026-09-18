import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/siswa-telatan-v2",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
