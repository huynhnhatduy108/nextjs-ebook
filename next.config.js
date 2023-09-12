/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    formats:["image/avif", "image/webp"],
    domains:["manybooks.net", "bloganchoi.com", "static.8cache.com","blogapp-320606.web.app", "vnn-imgs-f.vgcloud.vn"]
  }
}

module.exports = nextConfig
