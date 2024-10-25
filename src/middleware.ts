import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // 認証が必要なルートのみを指定
    "/transformations/:path*",
    "/profile",
    "/credits",
    // APIルートは維持
    "/(api|trpc)(.*)",
  ],
};
