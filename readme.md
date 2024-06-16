# Readme

### Development
- В родительской директории проекта должен быть репозиторий `@sawyer-react-lib`
```
> @sawyer-react-lib
> anton-sergeenkov.github.io
```
- У проекта `@sawyer-react-lib` должны быть установлены зависимости

### Deploy
1. Остановить dev server
2. Запустить команду `npm run deploy`

### Состав `npm run deploy`
1. `npm run commit` - commit и push в ветку "master" на удаленном репозитории
2. `npm run build` - сборка приложения
3. `npm run create-nojekyll` - создание файла ".nojekyll" в директории "out"
4. `npm run copy-cv` - копирование файлов cv в директории "out"
5. `gh-pages` - commit и push файлов из директории out в ветку "gh-pages" на удаленном репозитории
