/** @type {import('next').NextConfig} */

// Repo name — the site is served from https://<user>.github.io/<repo>/
const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  // Served from a subpath on github.io, so prefix assets/links in prod only.
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // GitHub Pages has no image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Emit /page/index.html so refreshes and deep links resolve on Pages.
  trailingSlash: true,
};

export default nextConfig;
