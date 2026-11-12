// quiet: dotenv 17+ пишет в консоль при каждом вызове config()
require("dotenv").config({ quiet: true })

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Страница экспортируется как <путь>/index.html, адреса со слешем на конце: /stack/.
  // Next.js 16 кладёт рядом с каждой страницей папку с данными для предзагрузки
  // (stack/__next.*.txt). Без trailingSlash рядом оказались бы stack.html и папка stack/,
  // и статический хостинг (GitHub Pages) отвечал бы на /stack редиректом на /stack/
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // CSS подключается в порядке импорта: стили sawyer-ui из layout идут раньше
  // стилей страниц, и className страниц переопределяет стили компонентов.
  // Опция работает только со сборщиком webpack, поэтому dev и build запускаются
  // с флагом --webpack (в Next.js 16 по умолчанию Turbopack)
  experimental: {
    cssChunking: "strict",
  },
}

module.exports = nextConfig
