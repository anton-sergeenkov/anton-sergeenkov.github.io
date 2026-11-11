require("dotenv").config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // CSS подключается в порядке импорта: стили sawyer-ui из layout идут раньше
  // стилей страниц, и className страниц переопределяет стили компонентов
  experimental: {
    cssChunking: "strict",
  },
}

module.exports = nextConfig
