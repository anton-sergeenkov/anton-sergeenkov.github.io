# ⭐️ Development

## Development
- Настроить проект `-sawyer-react-lib-` https://github.com/anton-sergeenkov/-sawyer-react-lib-/blob/main/docs/dev.md

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
npm i --save react react-dom next esm dotenv classnames
npm i --save @mui/material @mui/icons-material @emotion/react @emotion/styled

npm i --save-dev typescript gh-pages
npm i --save-dev @types/react @types/react-dom @types/node
npm i --save-dev eslint eslint-config-next eslint-plugin-prettier prettier
```
