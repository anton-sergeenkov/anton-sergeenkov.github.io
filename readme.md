# Readme

## ⭐️ TODO

### Ui-компоненты

**Из файла "app\local.css" создать Ui-компоненты**
- section
- textGradient
- h1, h2, h3

### Fix
- CV. Ссылка не на всю ширину
- Общие стили для выпадающего списка CV и меню

### Refactoring
- Проверить именование onClick -> handleClick

### Глобальные
- Добавить TypeScript

### Меню
- Элементы меню выделяьть серым цветом, а не фиолетовым
- Пример https://reactflow.dev/learn
- `color: rgb(75, 85, 99)` - неактивный элемент
- `color: rgb(15, 23, 42)` - активный элемент

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
