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

---

## ⭐️ Known Issues

### Ошибка MUI для компонента <Menu />
- Описание проблемы: При клике на кнопку открывается выпадающий список, при этом скрывается скролл и происходит смещение части интерфейса
- Что происходит в коде: На body навешивается `<body style="padding-right: 11px; overflow: hidden;">`
- Решение 1: резервировать место для скролла, чтобы он был виден всегда. Реализовано в https://letscode-dev.github.io/
- Решение 2: добавить стили
```css
body {
  overflow: auto !important;
  padding-right: 0 !important;
}
```
