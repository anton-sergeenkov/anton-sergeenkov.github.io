var point = '<div class="circle-menu"></div> ';
var code = '<bg-menu-code>&lt;/&gt;</bg-menu-code> ';

//---------------------------------------------------------------------
// REACT.JS
//---------------------------------------------------------------------
var arrReactjs = [
    [1, 'Информация'],
    ['react-js', 'main', 'info',                  'Информация'],
    ['react-js', 'main', 'structure',             code+'Структура'],
    ['react-js', 'main', 'create-element',        point+'React.createElement'],
    ['react-js', 'main', 'jsx',                   point+'JSX'],
    ['react-js', 'main', 'state',                 point+'Состояние'],
    ['react-js', 'main', 'lifecycle',             point+'Жизненный цикл'],
    ['react-js', 'main', 'create-react-app',      point+'Create React App'],
    ['react-js', 'main', 'react-developer-tools', point+'React Developer Tools'],

    [1, 'Компоненты'],
    ['react-js', 'components', 'info',                  'Информация'],
    ['react-js', 'components', 'components-and-props',  point+'Компоненты и пропсы'],
    ['react-js', 'components', 'lifting-state-up',      point+'Подъём состояния'],
    ['react-js', 'components', 'composition',           point+'Композиция'],

    [1, 'Обработка и вывод данных'],
    ['react-js', 'processing-data-output', 'css',                   point+'CSS'],
    ['react-js', 'processing-data-output', 'handling-events',       point+'Обработка событий'],
    ['react-js', 'processing-data-output', 'conditional-rendering', point+'Условный рендеринг'],
    ['react-js', 'processing-data-output', 'lists-and-keys',        point+'Списки и ключи'],
    ['react-js', 'processing-data-output', 'forms',                 point+'Формы'],

    [1, 'Redux'],
    ['react-js', 'redux', 'flux',                  'Flux'],
    ['react-js', 'redux', 'redux',                 point+'Redux'],
    ['react-js', 'redux', 'react-redux',           point+'React-Redux'],
    ['react-js', 'redux', 'structure',             code+'Структура'],
    ['react-js', 'redux', 'redux-developer-tools', 'Redux DevTools'],

    [1, 'React Router'],
    ['react-js', 'react-router', 'npm',               'Установка'],
    ['react-js', 'react-router', 'basic-routing',     point+'Basic Routing'],
    ['react-js', 'react-router', 'style-active-link', point+'Style Active Link'],
    ['react-js', 'react-router', 'url-parameters',    point+'URL Parameters'],
    ['react-js', 'react-router', 'page-404',          'Page 404'],
];

//---------------------------------------------------------------------
// WEBPACK
//---------------------------------------------------------------------
var arrWebpack = [
    [1, 'Информация'],
    ['webpack', 'main', 'info',      'Информация'],
    ['webpack', 'main', 'structure', 'Структура'],
    ['webpack', 'main', 'scripts',   'Скрипты'],

    [1, 'plugins'],
    ['webpack', 'plugins', 'webpack',                 '<bg-menu-border>webpack</bg-menu-border> <bg-menu-border>webpack-cli</bg-menu-border>'],
    ['webpack', 'plugins', 'webpack-dev-server',      '<bg-menu-border>webpack-dev-server</bg-menu-border>'],
    ['webpack', 'plugins', 'babel',                   '<bg-menu-border>babel-loader</bg-menu-border>'],
    ['webpack', 'plugins', 'css-loader',              '<bg-menu-border>css-loader</bg-menu-border>'],
    ['webpack', 'plugins', 'mini-css-extract-plugin', '<bg-menu-border>mini-css-extract-plugin</bg-menu-border>'],
    ['webpack', 'plugins', 'style-loader',            '<bg-menu>style-loader</bg-menu>'],
    ['webpack', 'plugins', 'sass-loader',             '<bg-menu>sass-loader</bg-menu>'],
    ['webpack', 'plugins', 'file-loader',             '<bg-menu-border>file-loader</bg-menu-border>'],
    ['webpack', 'plugins', 'image-webpack-loader',    '<bg-menu-border>image-webpack-loader</bg-menu-border>'],
    ['webpack', 'plugins', 'html-webpack-plugin',     '<bg-menu-border>html-webpack-plugin</bg-menu-border>'],
    ['webpack', 'plugins', 'clean-webpack-plugin',    '<bg-menu>clean-webpack-plugin</bg-menu>'],
    ['webpack', 'plugins', 'react',                   '<bg-menu>react</bg-menu>'],

    [1, 'postcss'],
    ['webpack', 'postcss', 'postcss-loader', '<bg-menu>postcss-loader</bg-menu>'],
    ['webpack', 'postcss', 'autoprefixer',   '<bg-menu>autoprefixer</bg-menu>'],
    ['webpack', 'postcss', 'cssnano',        '<bg-menu>cssnano</bg-menu>'],
    ['webpack', 'postcss', 'css-mqpacker',   '<bg-menu>css-mqpacker</bg-menu>'],

    [1, 'options'],
    ['webpack', 'options', 'mode',         '<bg-menu>mode</bg-menu>'],
    ['webpack', 'options', 'devtool',      '<bg-menu>devtool</bg-menu>'],
    ['webpack', 'options', 'entry-output', '<bg-menu>entry</bg-menu> <bg-menu>output</bg-menu>'],
    ['webpack', 'options', 'library',      '<bg-menu>library</bg-menu>'],
    ['webpack', 'options', 'watch',        '<bg-menu>watch</bg-menu> <bg-menu>watchOptions</bg-menu>'],
];

//---------------------------------------------------------------------
// GIT
//---------------------------------------------------------------------
var arrGit = [
    [1, 'Terminal'],
    ['git', 'command', 'push_',   '<bg-menu>init</bg-menu> <bg-menu>add</bg-menu> <bg-menu>commit</bg-menu> <bg-menu>remote</bg-menu> <bg-menu>push</bg-menu> <bg-menu></bg-menu>'],
    ['git', 'command', 'pull_',   '<bg-menu>clone</bg-menu> <bg-menu>pull</bg-menu>'],
    ['git', 'command', 'branch',  '<bg-menu>branch</bg-menu> <bg-menu>checkout</bg-menu> <bg-menu>merge</bg-menu>'],
    ['git', 'command', 'diff',    '<bg-menu>diff</bg-menu>'],
    ['git', 'command', 'config',  '<bg-menu>config</bg-menu>'],
    ['git', 'command', 'status_', '<bg-menu>status</bg-menu> <bg-menu>log</bg-menu>'],
    ['git', 'command', 'fetch',   '<bg-menu>fetch</bg-menu>'],
    ['git', 'command', 'other',   '<bg-menu>...</bg-menu>'],

    [1, 'GitHub'],
    ['git', 'github', 'terminal-connect', point+'Connect SSH'],
    ['git', 'github', 'info',             'Теория'],
    ['git', 'github', 'github-desktop',   'GitHub Desktop'],
    ['git', 'github', 'smart-git',        'SmartGit'],

    [1, 'Теория'],
    ['git', 'theory', 'info',    'Информация'],
    ['git', 'theory', 'vcs',     'Системы управления версиями'],
    ['git', 'theory', 'gitflow', 'Gitflow'],
];

//---------------------------------------------------------------------
// NPM
//---------------------------------------------------------------------
var arrNpm = [
    [1, 'NPM'],
    ['npm', 'npm', 'info',         'Информация'],
    ['npm', 'npm', 'command',      'Команды'],
    ['npm', 'npm', 'shortcut',     'Сокращения'],
    ['npm', 'npm', 'package-json', 'package.json'],

    [1, 'NPM'],
    ['npm', 'npm-package', 'http-server', '<bg-menu>http-server</bg-menu>'],

    [1, 'Gulp'],
    ['npm', 'gulp', 'npm',       'NPM'],
    ['npm', 'gulp', 'structure', 'Структура'],
    ['npm', 'gulp', 'gulp4',     'Gulp 4'],
    ['npm', 'gulp', 'gulpfile',  'gulpfile.js'],
    ['npm', 'gulp', 'other',     'Примечания'],
];

//---------------------------------------------------------------------
// JAVASCRIPT
//---------------------------------------------------------------------
var arrJavaScript = [

    [1, 'WORK'],
    ['js', 'modules', 'module-es6',         'Модули ES6'],
    ['js', 'ajax', 'axios',                 '<div class="circle-menu"></div> Axios'],
    ['js', 'ajax', 'fetch',                 '<div class="circle-menu"></div> Fetch'],
    ['js', 'async', 'promise',              '<div class="circle-menu"></div> Promise'],
    ['js', 'async', 'async-func',           '<div class="circle-menu"></div> Async Function'],
    ['js', 'type-data', 'json',             '<div class="circle-menu"></div> JSON'],
    ['js', 'array', 'array-cycle',          '<div class="circle-menu"></div> forEach <bg-menu>...</bg-menu>'],
    ['js', 'es6', 'map',                    '<div class="circle-menu"></div> map'],
    ['js', 'main', 'context',               '<div class="circle-menu"></div> call <bg-menu>...</bg-menu>'],
    ['js', 'es6', 'spread',                 '<div class="circle-menu"></div> Spread Operator'],
    ['js', 'es6', 'destructive-array',      '<div class="circle-menu"></div> Деструктивное присваивание массивов'],
    ['js', 'es6', 'destructive-obj',        '<div class="circle-menu"></div> Деструтивное присваивание объектов'],
    ['js', 'client-storage', 'web-storage', '<div class="circle-menu"></div> WebStorage'],


    [1, 'Функции'],
    ['js', 'functions', 'info',                      'Описание'],
    ['js', 'functions', 'announcement',              'Объявление'],
    ['js', 'functions', 'arguments',                 'Псевдомассив аргументов "arguments"'],
    ['js', 'functions', 'parameters',                'Параметры функции (ES6)'],
    ['js', 'functions', 'arrow',                     'Стрелочные функции (ES6)'],
    ['js', 'functions', 'closures',                  'Замыкания'],
    ['js', 'functions', 'recursion',                 'Рекурсия'],
    ['js', 'functions', 'named-function-expression', 'Named Function Expression'],

    [1, 'Типы данных'],
    ['js', 'type-data', 'type-data',         'Типы данных'],
    ['js', 'type-data', 'variables',         '<bg-menu>var</bg-menu> <bg-menu>let</bg-menu> <bg-menu>const</bg-menu>'],
    ['js', 'type-data', 'typeof',            '<bg-menu>typeof</bg-menu>'],
    ['js', 'type-data', 'number',            'Числа'],
    ['js', 'type-data', 'math',              'Math'],
    ['js', 'type-data', 'string',            'Строки'],
    ['js', 'type-data', 'json',              '<bg-menu>JSON</bg-menu>'],
    ['js', 'type-data', 'date-time',         'Дата и время'],
    ['js', 'type-data', 'comparison-values', 'Сравнение и логические значения'],
    ['js', 'type-data', 'regexr',            'Регулярные выражения'],
    ['js', 'type-data', 'object-wrappers',   'Autoboxing (Object Wrappers)'],

    [1, 'Основное'],
    ['js', 'main', 'context',                '<bg-menu>this</bg-menu> <bg-menu>call</bg-menu> <bg-menu>apply</bg-menu> <bg-menu>bind</bg-menu>'],
    ['js', 'main', 'cycle',                  'Циклы'],
    ['js', 'main', 'css',                    '<bg-menu>classList</bg-menu> <bg-menu>style</bg-menu>'],
    ['js', 'main', 'attribute',              '<bg-menu>attributes</bg-menu>'],
    ['js', 'main', 'exceptions',             'Исключения'],
    ['js', 'main', 'conditional-statements', 'Условные операторы'],

    [1, 'Массивы'],
    ['js', 'array', 'array-cycle', '<bg-menu>forEach</bg-menu> <bg-menu>filter</bg-menu> <bg-menu>map</bg-menu> <bg-menu>every/some</bg-menu> <bg-menu>reduce/reduceRight</bg-menu>'],
    ['js', 'array', 'array',       'Массивы'],
    ['js', 'array', 'array-obj',   'Массивы обьектов'],

    [1, 'ES6'],
    ['js', 'es6', 'map',               'Коллекции <bg-menu>Map</bg-menu> <bg-menu>WeakMap</bg-menu>'],
    ['js', 'es6', 'set',               'Коллекции <bg-menu>Set</bg-menu> <bg-menu>WeakSet</bg-menu>'],
    ['js', 'es6', 'spread',            'Оператор разворота'],
    ['js', 'es6', 'destructive-array', 'Деструктивное присваивание массивов'],
    ['js', 'es6', 'destructive-obj',   'Деструтивное присваивание объектов'],
    ['js', 'es6', 'pattern-string',    'Шаблонные строки'],
    ['js', 'es6', 'proxy',             'Proxy'],
    ['js', 'es6', 'symbol',            'Symbol'],
    ['js', 'es6', 'iterators',         'Iterators'],

    [1, 'Асинхронный код'],
    ['js', 'async', 'collback',   '<bg-menu-accent>1.</bg-menu-accent> Collback Function'],
    ['js', 'async', 'promise',    '<bg-menu-accent>2.</bg-menu-accent> Promise (ES6)'],
    ['js', 'async', 'generators', '<bg-menu-accent>3.</bg-menu-accent> Generators (ES6)'],
    ['js', 'async', 'async-func', '<bg-menu-accent>4.</bg-menu-accent> Async Function (ES2017)'],
    ['js', 'async', 'timeout',    '<bg-menu>setTimeout</bg-menu> <bg-menu>setInterval</bg-menu>'],

    [1, 'AJAX'],
    ['js', 'ajax', 'info',           'Описание'],
    ['js', 'ajax', 'xmlhttprequest', '<bg-menu-accent>1.</bg-menu-accent> XMLHttpRequest'],
    ['js', 'ajax', 'fetch',          '<bg-menu-accent>2.</bg-menu-accent> Fetch'],
    ['js', 'ajax', 'axios',          '<bg-menu-accent>3.</bg-menu-accent> Axios'],
    ['js', 'ajax', 'request-js',     'Request JS'],
    ['js', 'ajax', 'response-php',   'Response PHP'],
    ['js', 'ajax', 'jsonp',          'JSONP'],
    ['js', 'ajax', 'cors',           'CORS'],
    ['js', 'ajax', 'websocket',      'WebSocket'],
    ['js', 'ajax', 'comet',          'Comet'],

    [1, 'DOM-cобытия'],
    ['js', 'dom-events', 'propagation-model', 'Модель распространения событий'],
    ['js', 'dom-events', 'handlers',          'Назначение обработчиков событий'],
    ['js', 'dom-events', 'delegate',          'Делегирование событий'],
    ['js', 'dom-events', 'params-event',      'Передаваемый параметр (Event)'],
    ['js', 'dom-events', 'list-events',       'Список событий'],
    ['js', 'dom-events', 'prevent',           'Отмена обычного поведения'],
    ['js', 'dom-events', 'samples',           'Примеры'],

    [1, 'DOM'],
    ['js', 'dom', 'get-element',     'Выборка элементов'],
    ['js', 'dom', 'methods',         'Методы элементов страницы'],
    ['js', 'dom', 'create-element',  '<bg-menu>createElement</bg-menu> <bg-menu>appendChild</bg-menu> ...'],
    ['js', 'dom', 'web-forms',       'Web Forms'],

    [1, 'Модули'],
    ['js', 'modules', 'module-system', 'Модульная система'],
    ['js', 'modules', 'module-es6',    'Модули ES6'],

    [1, 'Веб-компоненты'],
    ['js', 'web-components', 'info',            'Теория'],
    ['js', 'web-components', 'shadow-dom',      '<bg-menu-accent>1.</bg-menu-accent> Shadow DOM'],
    ['js', 'web-components', 'template',        '<bg-menu-accent>2.</bg-menu-accent> HTML Templates'],
    ['js', 'web-components', 'custom-elements', '<bg-menu-accent>3.</bg-menu-accent> Custom Elements'],
    ['js', 'web-components', 'imports',         '<bg-menu-accent>4.</bg-menu-accent> HTML Imports'],

    [1, 'Клиентское хранилище'],
    ['js', 'client-storage', 'web-storage', '<bg-menu>localStorage</bg-menu> <bg-menu>sessionStorage</bg-menu>'],
    ['js', 'client-storage', 'indexed-db',  '<bg-menu>IndexedDB</bg-menu>'],
    ['js', 'client-storage', 'cookie',      '<bg-menu>cookie</bg-menu>'],

    [1, 'Web API'],
    ['js', 'web-api', 'web-api',       'Web API'],
    ['js', 'web-api', 'location',      '<bg-menu>open</bg-menu> <bg-menu>location</bg-menu>'],
    ['js', 'web-api', 'inner-width',   '<bg-menu>innerWidth/Height</bg-menu> <bg-menu>clientWidth/Height</bg-menu>'],
    ['js', 'web-api', 'media-queries', 'Media queries'],

    [1, 'Дополнительно'],
    ['js', 'additional', 'asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
    ['js', 'additional', 'console',                'Console'],
    ['js', 'additional', 'method-chaining',        'Цепные вызовы методов'],
    ['js', 'additional', 'web-workers',            'Web Workers'],
    ['js', 'additional', 'eval',                   '<bg-menu>eval</bg-menu>'],
    ['js', 'additional', 'notifications-api',      'Notifications API'],
    ['js', 'additional', 'custom-properties-js',   'Custom Properties JS'],
    ['js', 'additional', 'ecmascript',             'ECMAScript'],
    ['js', 'additional', 'jsdoc',                  'Синтаксис JSDoc'],
    ['js', 'additional', 'strict-mode',            'Strict Mode'],
];

//---------------------------------------------------------------------
// JAVASCRIPT OBJECTS
//---------------------------------------------------------------------
var arrJsObjects = [
    [1, 'Объекты ES6'],
    ['js-objects', 'objects', 'info',             'Теория'],
    ['js-objects', 'objects', 'methods',          'Методы'],
    ['js-objects', 'objects', 'literal-notation', 'Литеральная нотация'],
    ['js-objects', 'objects', 'for',              'Перебор объекта'],
    ['js-objects', 'objects', 'constructor',      'Конструктор создания объекта'],
    ['js-objects', 'objects', 'prototype',        'Прототип'],
    ['js-objects', 'objects', 'descriptor',       'Дескрипторы свойств'],
    ['js-objects', 'objects', 'extends',          'Расширяемость объектов'],
    ['js-objects', 'objects', 'conversion',       '<bg-menu>toString</bg-menu> <bg-menu>valueOf</bg-menu>'],
    ['js-objects', 'objects', 'samples',          'Примеры'],

    [1, 'Классы ES6'],
    ['js-objects', 'class-es6', 'info',        'Теория'],
    ['js-objects', 'class-es6', 'create',      'Объявление'],
    ['js-objects', 'class-es6', 'inherit',     'Наследование'],
    ['js-objects', 'class-es6', 'expression',  'Выражения классов'],
    ['js-objects', 'class-es6', 'instanceof',  '<bg-menu>instanceof</bg-menu>'],

    [1, 'Классы ES5 «Функциональный стиль»'],
    ['js-objects', 'class-es5-functional', 'info',                'Теория'],
    ['js-objects', 'class-es5-functional', 'create',              'Объявление'],
    ['js-objects', 'class-es5-functional', 'methods-private',     'Приватный метод'],
    ['js-objects', 'class-es5-functional', 'getters-and-setters', 'Геттеры и сеттеры'],
    ['js-objects', 'class-es5-functional', 'inherit',             'Наследование'],
    ['js-objects', 'class-es5-functional', 'return',              'Правила обработки return'],

    [1, 'Классы ES5 «Прототипный стиль»'],
    ['js-objects', 'class-es5-prototype', 'info',        'Теория'],
    ['js-objects', 'class-es5-prototype', 'proto',       '<bg-menu>__proto__</bg-menu>'],
    ['js-objects', 'class-es5-prototype', 'prototype',   '<bg-menu>prototype</bg-menu> <bg-menu>new</bg-menu>'],
    ['js-objects', 'class-es5-prototype', 'constructor', '<bg-menu>constructor</bg-menu>'],
    ['js-objects', 'class-es5-prototype', 'methods',     'Добавление методов'],
    ['js-objects', 'class-es5-prototype', 'inherit',     'Наследование классов'],
    ['js-objects', 'class-es5-prototype', 'mixins',      'Примеси'],
];

//---------------------------------------------------------------------
// VUE.JS
//---------------------------------------------------------------------
var arrVuejs = [
    [1, 'Информация'],
    ['vue-js', 'main', 'info',            'Информация'],
    ['vue-js', 'main', 'structure-files', 'Структура проекта'],
    ['vue-js', 'main', 'structure-code',  code+'Пример кода vue-cli'],
    ['vue-js', 'main', 'instance-vue',    code+'Экземпляр Vue'],
    ['vue-js', 'main', 'lifecycle-hooks', 'Хуки жизненного цикла'],
    ['vue-js', 'main', 'virtual-dom',     'Virtual DOM'],

    [1, 'Реактивность'],
    ['vue-js', 'reactivity', 'reactivity',   'Реактивность'],
    ['vue-js', 'reactivity', 'set',          '<bg-menu>vm.$set</bg-menu> - добаление реакт. элементов'],
    ['vue-js', 'reactivity', 'next-tick',    '<bg-menu>vm.$nextTick</bg-menu> - обновление'],
    ['vue-js', 'reactivity', 'force-update', '<bg-menu>vm.$forceUpdate</bg-menu> - переотрисовка'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'info',          'Шаблоны и директивы'],
    ['vue-js', 'directives', 'v-text_v-html', '<bg-menu>v-text</bg-menu> <bg-menu>v-html</bg-menu>'],
    ['vue-js', 'directives', 'v-show_v-if',   '<bg-menu>v-show</bg-menu> <bg-menu>v-if</bg-menu> <bg-menu>v-else</bg-menu> <bg-menu>v-else-if</bg-menu>'],
    ['vue-js', 'directives', 'v-for',         '<bg-menu>v-for</bg-menu>'],
    ['vue-js', 'directives', 'v-on',          '<bg-menu>v-on:</bg-menu>'],
    ['vue-js', 'directives', 'v-bind',        '<bg-menu>v-bind:</bg-menu> :class :style'],
    ['vue-js', 'directives', 'v-model',       '<bg-menu>v-model</bg-menu>'],
    ['vue-js', 'directives', 'v-pre',         '<bg-menu>v-pre</bg-menu>'],
    ['vue-js', 'directives', 'v-cloak',       '<bg-menu>v-cloak</bg-menu>'],
    ['vue-js', 'directives', 'v-once',        '<bg-menu>v-once</bg-menu>'],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'info',                   'Информация'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  '<bg-menu>props</bg-menu>'],
    ['vue-js', 'components', 'slot',                   '<bg-menu>&lt;slot&gt;</bg-menu>'],
    ['vue-js', 'components', 'template',               '<bg-menu>&lt;template&gt;</bg-menu>'],
    ['vue-js', 'components', 'emit',                   '<bg-menu>$emit</bg-menu>'],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   '<bg-menu>computed</bg-menu>'],
    ['vue-js', 'options-and-other', 'watch',      '<bg-menu>watch</bg-menu>'],
    ['vue-js', 'options-and-other', 'created',    '<bg-menu>created</bg-menu>'],
    ['vue-js', 'options-and-other', 'transition', '<bg-menu>&lt;transition&gt;</bg-menu>'],
    ['vue-js', 'options-and-other', 'vue-extend', '<bg-menu>Vue.extend</bg-menu>'],

    [1, 'DOM'],
    ['vue-js', 'dom', 'event',  '<bg-menu>$event</bg-menu> - доступ к событию'],
    ['vue-js', 'dom', 'refs',   '<bg-menu>$refs</bg-menu> - ссылка на dom элемент'],

    [1, 'Переиспользование и композиция'],
    ['vue-js', 'composition', 'mixins',          'Примеси'],
    ['vue-js', 'composition', 'user-directives', 'Пользовательские директивы'],
    ['vue-js', 'composition', 'render',          'Render-функции'],
    ['vue-js', 'composition', 'plugins',         'Плагины'],
    ['vue-js', 'composition', 'filters',         'Фильтры'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     '<bg-menu-accent>0.</bg-menu-accent> Хранилище (store)'],
    ['vue-js', 'vuex', 'state',     '<bg-menu-accent>1.</bg-menu-accent> Состояние (state)'],
    ['vue-js', 'vuex', 'getters',   '<bg-menu-accent>2.</bg-menu-accent> Геттеры (getters)'],
    ['vue-js', 'vuex', 'mutations', '<bg-menu-accent>3.</bg-menu-accent> Мутации (mutations)'],
    ['vue-js', 'vuex', 'actions',   '<bg-menu-accent>4.</bg-menu-accent> Действия (actions)'],
    ['vue-js', 'vuex', 'modules',   '<bg-menu-accent>5.</bg-menu-accent> Модули (modules)'],
    ['vue-js', 'vuex', 'samples',   'Примеры'],

    [1, 'Vue Router'],
    ['vue-js', 'vue-router', 'info',                 'Информация'],
    ['vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
    ['vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
    ['vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
    ['vue-js', 'vue-router', 'path-static',          point+'Статический путь'],
    ['vue-js', 'vue-router', 'path-dynamic',         point+'Динамический путь'],
    ['vue-js', 'vue-router', 'path-comparison',      point+'Сопоставление путей'],
    ['vue-js', 'vue-router', 'navigation',           point+'Программная навигация'],
    ['vue-js', 'vue-router', 'passing-props',        point+'Входные параметры (props)'],
    ['vue-js', 'vue-router', 'navigation-guards',    point+'Навигационные хуки'],
    ['vue-js', 'vue-router', 'scroll-behavior',      point+'Поведение прокрутки страницы'],
    ['vue-js', 'vue-router', 'lazy-loading',         point+'Леннивая загрузка маршрутов'],
    ['vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

    [1, 'Vue CLI'],
    ['vue-js', 'vue-cli', 'info',              'Информация'],
    ['vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
    ['vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
    ['vue-js', 'vue-cli', 'import_export',     '<bg-menu>import</bg-menu> <bg-menu>export</bg-menu>'],
    ['vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

    [1, 'Плагины'],
    ['vue-js', 'plugins', 'vuetify',     'Vuetify'],
    ['vue-js', 'plugins', 'fontawesome', 'FontAwesome'],

    [1, 'Тестирование'],
    ['vue-js', 'testing', 'unit-testing', 'Модульное тестирование'],
    ['vue-js', 'testing', 'vue-devtools', 'Vue-DevTools'],

    [1, 'Примеры'],
    ['vue-js', 'samples', 'cart',   'Добавить / удалить из корзины'],

    ['vue-js', '', 'map', 'map'],
];

//---------------------------------------------------------------------
// THEORY
//---------------------------------------------------------------------
var arrTheory = [
    [1, 'JavaScript'],
    ['theory', 'javascript', 'architecture-runtime', 'Архитектура среды выполнения (Event Loop)'],
    ['theory', 'javascript', 'garbage-collection',   'Сборщик мусора'],
    ['theory', 'javascript', 'dictionary',           'Словарь'],

    [1, 'Верстка'],
    ['theory', 'html', 'critical-rendering-path', 'Critical Rendering Path'],

    [1, 'Клиент-сервер'],
    ['theory', 'client-server', 'info',  'Клиент-сервер'],
    ['theory', 'client-server', 'http',  'HTTP'],
    ['theory', 'client-server', 'https', 'HTTPS'],
    ['theory', 'client-server', 'rest',  'REST API'],

    [1, 'Паттерны проектирования'],
    ['theory', 'design-patterns', 'info',             'Паттерны проектирования'],
    ['theory', 'design-patterns', 'singleton',        '<bg-menu>[1]</bg-menu> Порожд. «Синглтон»'],
    ['theory', 'design-patterns', 'builder',          '<bg-menu>[1]</bg-menu> Порожд. «Строитель»'],
    ['theory', 'design-patterns', 'simple-factory',   '<bg-menu>[1]</bg-menu> Порожд. «Простая фабрика»'],
    ['theory', 'design-patterns', 'decorator',        '<bg-menu>[2]</bg-menu> Структурн. «Декоратор»'],
    ['theory', 'design-patterns', 'facade',           '<bg-menu>[2]</bg-menu> Структурн. «Фасад»'],
    ['theory', 'design-patterns', 'observer',         '<bg-menu>[3]</bg-menu> Поведен. «Наблюдатель»'],
    ['theory', 'design-patterns', 'module',           '<bg-menu>[?]</bg-menu> Неизвестно. «Модуль»'],
    ['theory', 'design-patterns', 'module-revealing', '<bg-menu>[?]</bg-menu> Неизвестно. «Открытый модуль»'],

    [1, 'Парадигмы программирования'],
    ['theory', 'programming-paradigms', 'info',           'Парадигмы'],
    ['theory', 'programming-paradigms', 'imperative',     '1. Императивное'],
    ['theory', 'programming-paradigms', 'declarative',    '2. Декларативное'],
    ['theory', 'programming-paradigms', 'functional',     '3. Функциональное'],
    ['theory', 'programming-paradigms', 'oop',            '4. Объектно-ориентированное'],
    ['theory', 'programming-paradigms', 'composition',    'Композиция'],
    ['theory', 'programming-paradigms', 'currying',       'Каррирование / Частичное применение функций'],
    ['theory', 'programming-paradigms', 'ddd',            'DDD'],
    ['theory', 'programming-paradigms', 'cqrs',           'CQRS'],
    ['theory', 'programming-paradigms', 'event-sourcing', 'Event Sourcing'],

    [1, 'Алгоритмы и структуры данных'],
    ['theory', 'algorithms', 'big-o-notation',  'Big-O Notation (сложность алгоритмов)'],
    ['theory', 'algorithms', 'structure-data',  'Структуры данных'],
    ['theory', 'algorithms', 'algoritms-sort',  'Алгоритмы сотрировки'],

    [1, 'Принципы программирования'],
    ['theory', 'programming-principles', 'solid',         'SOLID'],
    ['theory', 'programming-principles', 'dry',           'DRY'],
    ['theory', 'programming-principles', 'kiss',          'KISS'],
    ['theory', 'programming-principles', 'yagni',         'YAGNI'],
    ['theory', 'programming-principles', 'code-smell',    'Запахи кода'],
    ['theory', 'programming-principles', 'refactoring',   'Рефакторинг'],
    ['theory', 'programming-principles', 'code-standart', 'Стандарты кода'],

    [1, 'Deployment'],
    ['theory', 'deployment', 'continuous-integration', '1. Continuous Integration'],
    ['theory', 'deployment', 'continuous-delivery',    '2. Continuous Delivery'],
    ['theory', 'deployment', 'continuous-deployment',  '3. Continuous Deployment'],
    ['theory', 'deployment', 'software-deployment',    'Software Deployment'],

    [1, 'Тестирование'],
    ['theory', 'testing', 'info',             'Тестирование'],
    ['theory', 'testing', 'pyramid',          'Пирамида тестирования'],
    ['theory', 'testing', 'unit-test',        '<bg-menu>1</bg-menu> Юнит-тесты'],
    ['theory', 'testing', 'integration-test', '<bg-menu>2</bg-menu> Интеграционные тесты'],
    ['theory', 'testing', 'e2e-test',         '<bg-menu>3</bg-menu> E2E-тесты'],
    ['theory', 'testing', 'tdd',              'TDD'],
    ['theory', 'testing', 'bdd',              'BDD'],
    ['theory', 'testing', 'chrome-dev-tools', 'Chrome DevTools'],

    [1, 'Методологии разработки'],
    ['theory', 'development-methodologies', 'info',       'Методологии разработки'],
    ['theory', 'development-methodologies', 'waterfall',  'Waterfall'],
    ['theory', 'development-methodologies', 'agile',      'Agile / Scrum / Kanban'],
    ['theory', 'development-methodologies', 'estimation', 'Эстимация'],

    [1, 'Шаблон проектирования архитектуры приложения'],
    ['theory', 'application-architecture', 'info', 'Шаблоны проектирования'],
    ['theory', 'application-architecture', 'mvc',  'MVC'],
    ['theory', 'application-architecture', 'mvvm', 'MVVM'],

    [1, 'Технологии'],
    ['theory', 'technology', 'jira', 'Jira'],

    [1, 'Прочее'],
    ['theory', 'other', 'web-applications',     'Виды веб-приложений'],
    ['theory', 'other', 'evolution-web-design', 'Эволюция веб-дизайна'],
    ['theory', 'other', 'frameworks',           'Фреймворки'],
];

//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
var arrOther = [
    [1, 'Информация'],
    ['other', 'main', 'code-editors',  'Редакторы кода'],
    ['other', 'main', 'name-case',     'Соглашение по именованию'],
    ['other', 'main', 'prefix',        'Префиксы'],
    ['other', 'main', 'emmet',         'Emmet'],
    ['other', 'main', 'photoshop',     'Adobe Photoshop'],
    ['other', 'main', 'denwer',        'Denwer'],
    ['other', 'main', 'google-chrome', 'Chrome'],
];

//---------------------------------------------------------------------
// LINUX
//---------------------------------------------------------------------
var arrLinux = [
    [1, 'Ubuntu (Debian)'],
    ['linux', 'ubuntu', 'command', 'Команды'],
    ['linux', 'ubuntu', 'package', 'Пакеты'],
    ['linux', 'ubuntu', 'nodejs',  'Node.js'],
    ['linux', 'ubuntu', 'setting', 'Настройка'],
    ['linux', 'ubuntu', 'other',   'Прочее'],
];

//---------------------------------------------------------------------
// JS-TASKS
//---------------------------------------------------------------------
var arrJsTasks = [
    [1, 'Замыкания'],
    ['js-task', 'closures', 'sum-brackets', 'Сумма произвольного кол-ва скобок'],

    [1, 'Объекты'],
    ['js-task', 'objects', 'calling-function-as-object', 'Обращение к функции как к объекту'],
    ['js-task', 'objects', 'prototype-inheritance',      'Прототипное наследование'],

    [1, 'Полифилы'],
    ['js-task', 'polyphyls', 'object-create',     'Object.create'],
    ['js-task', 'polyphyls', 'object-create-jsr', 'Object.create (JSR)'],
    ['js-task', 'polyphyls', 'bind',              'bind()'],

    [1, 'Массивы'],
    ['js-task', 'arrays', 'popup-and-array-value',         'Всплытие и значение массива'],
    ['js-task', 'arrays', 'reduceright-and-create-object', 'reduceRight и создание объекта'],
    ['js-task', 'arrays', 'map-and-enumerate-objects',     'map и перебор массива объектов'],
    ['js-task', 'arrays', 'duplicate-array-method',        'Метод дублирующий массив'],

    [1, 'Асинхронность'],
    ['js-task', 'asynchrony', 'promise-and-settimeout',     'Promise и setTimeout'],
    ['js-task', 'asynchrony', 'promise-and-arguments-then', 'Promise и аргументы then'],
    ['js-task', 'asynchrony', 'settimeout-for-var',         'setTimeout в for без let'],

    [1, 'Прочее'],
    ['js-task', 'other', 'type-casting',            'Приведение типов'],
    ['js-task', 'other', 'popup-func-and-variable', 'Всплытие функции и переменной'],
];

//---------------------------------------------------------------------
// JQUERY
//---------------------------------------------------------------------
var arrJquery = [
    [1, 'События'],
    ['jquery', 'actions', 'handling-events', 'Обработчики событий'],
    ['jquery', 'actions', 'hover-toggle',    'События hover() и toggle()'],
    ['jquery', 'actions', 'event-object',    'Объект события eventObject()'],

    [1, 'Основное'],
    ['jquery', 'main', 'info',        'Информация'],
    ['jquery', 'main', 'ajax',        'AJAX'],
    ['jquery', 'main', 'css',         'CSS'],
    ['jquery', 'main', 'methods',     'Методы'],
    ['jquery', 'main', 'attributes',  'Атрибуты. Object this'],
    ['jquery', 'main', 'input',       'Input'],
    ['jquery', 'main', 'include',     'Подключение файлов'],
    ['jquery', 'main', 'is',          'Псевдо-селекторы :visible и :hidden'],
    ['jquery', 'main', 'animation',   'Анимация'],
    ['jquery', 'main', 'get-element', 'Выборка элементов'],
    ['jquery', 'main', 'samples',     'Примеры'],
];

//---------------------------------------------------------------------
// CANVAS
//---------------------------------------------------------------------
var arrCanvas = [
    [1, 'Основное'],
    ['canvas', 'main', 'info',   'Информация'],
    ['canvas', 'main', 'html',   'HTML'],
    ['canvas', 'main', 'basic',  'Основы'],
    ['canvas', 'main', 'figure', 'Фигуры'],
    ['canvas', 'main', 'other', 'Остальное'],
];






var page = window.location.pathname.split('/');
var pageName = page[page.length-1];

switch(pageName) {
    case 'js.html':         var arrCurrent = arrJavaScript; break;
    case 'js-objects.html': var arrCurrent = arrJsObjects;  break;
    case 'vue-js.html':     var arrCurrent = arrVuejs;      break;
    case 'react-js.html':   var arrCurrent = arrReactjs;    break;
    case 'webpack.html':    var arrCurrent = arrWebpack;    break;
    case 'npm.html':        var arrCurrent = arrNpm;        break;
    case 'theory.html':     var arrCurrent = arrTheory;     break;
    case 'git.html':        var arrCurrent = arrGit;        break;
    case 'linux.html':      var arrCurrent = arrLinux;      break;
    case 'other.html':      var arrCurrent = arrOther;      break;
    case 'js-tasks.html':   var arrCurrent = arrJsTasks;    break;
    case 'jquery.html':     var arrCurrent = arrJquery;     break;
    case 'canvas.html':     var arrCurrent = arrCanvas;     break;
}

if (pageName != 'map.html') {
    build();
}

function build() {
    let wrapperMenu = document.createElement('slot');
    let wrapperContent = document.createElement('slot');

    arrCurrent.forEach(function(item){

        if (item[0] !== 1) {
            let elementMenu = document.createElement('a');
            elementMenu.setAttribute('href', `#${item[1]}-${item[2]}`);
            elementMenu.innerHTML = item[3];

            let path = `../themes/${item[0]}/${item[1]}/${item[2]}.html`;

            $.ajax({
                type: "GET",
                url: path,
                async: false,
                success: function (data) {
                    let elementContent = document.createElement('div');
                    elementContent.setAttribute('id', `${item[1]}-${item[2]}`);
                    elementContent.innerHTML = data;
                    wrapperContent.appendChild(elementContent);
                }
            });

            wrapperMenu.appendChild(elementMenu);
        }

        if (item[0] === 1) {
            let elementMenu = document.createElement('div');
            elementMenu.setAttribute('class', 'theme');
            elementMenu.innerHTML = item[1];
            wrapperMenu.appendChild(elementMenu);
        }

    });

    document.querySelector('#menu-build').appendChild(wrapperMenu);
    document.querySelector('#content').appendChild(wrapperContent);
}

$('#menu-build a').on('click', function() {
    $('#menu-build a').removeClass('active');
    $(this).addClass('active');
});
