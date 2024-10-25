import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// 開発環境の場合のみ Cloudflare Pages の設定を適用
if (process.env.NODE_ENV === "development") {
  try {
    await setupDevPlatform();
  } catch (e) {
    console.warn("Failed to setup dev platform:", e);
  }
}

export default nextConfig;
