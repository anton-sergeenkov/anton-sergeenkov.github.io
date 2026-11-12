# ⭐️ Development

## Development
- Ui-Kit подключается как npm-пакет `sawyer-ui` https://www.npmjs.com/package/sawyer-ui
- Обновление пакета: `npm i sawyer-ui@latest`
- Компоненты sawyer-ui построены на Mantine и работают внутри `UiProvider` — он подключён в `app/layout.tsx`
- Next.js 16 запускается со сборщиком webpack (`next dev --webpack`, `next build --webpack`): опция `experimental.cssChunking` в `next.config.js` работает только с webpack
- Линтер: `npm run lint` (ESLint, flat config в `eslint.config.mjs`)
- Адреса страниц со слешем на конце (`trailingSlash: true` в `next.config.js`): `/stack/`. Пути в `routes/routes.ts` указываются так же — по ним подсвечивается активный пункт меню

## Deploy
1. Остановить dev server
2. Запустить команду `npm run deploy`

## Состав `npm run deploy`
1. `npm run build` - сборка приложения
2. `npm run create-nojekyll` - создание файла ".nojekyll" в директории "out"
3. `npm run copy-cv` - копирование файлов cv в директории "out"
4. `npm run gh-pages` - commit и push файлов из директории out в ветку "gh-pages" на удаленном репозитории
5. `npm run commit` - commit и push в ветку "master" на удаленном репозитории

## Packages
```bash
npm i --save react react-dom next dotenv classnames
npm i --save sawyer-ui # Mantine и иконки Phosphor устанавливаются вместе с пакетом

npm i --save-dev typescript@~6.0 gh-pages # TypeScript 7 пока не поддерживается typescript-eslint
npm i --save-dev @types/react @types/react-dom @types/node
npm i --save-dev eslint eslint-config-next eslint-plugin-prettier prettier
```
