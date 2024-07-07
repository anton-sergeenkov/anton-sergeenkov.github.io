# Readme

## ⭐️ TODO

**Global**
- Добавить TypeScript
- Добавить tslint

**Feature**
- Добавить секцию с репозиториями

**Fix**
- CV. Ссылка не на всю ширину. Можно кликнуть вне ссылки
- Общие стили для выпадающего списка CV и меню
- Не подсвечиваются ошибки в VSCode: использование неимпортированного компонента и т.д.

**Refactoring**
- Проверить именование onClick -> handleClick

---

## ⭐️ Development

### Development
- Настроить проект `-sawyer-react-lib-` https://github.com/anton-sergeenkov/-sawyer-react-lib-/blob/main/readme.md

### Deploy
1. Остановить dev server
2. Запустить команду `npm run deploy`

### Состав `npm run deploy`
1. `npm run build` - сборка приложения
2. `npm run create-nojekyll` - создание файла ".nojekyll" в директории "out"
3. `npm run copy-cv` - копирование файлов cv в директории "out"
4. `npm run gh-pages` - commit и push файлов из директории out в ветку "gh-pages" на удаленном репозитории
5. `npm run commit` - commit и push в ветку "master" на удаленном репозитории