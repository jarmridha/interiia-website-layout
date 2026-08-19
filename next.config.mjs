/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/interiia-website-layout" : "",
  assetPrefix: isGitHubPages ? "/interiia-website-layout/" : "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
