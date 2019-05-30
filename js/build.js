var point = '<div class="circle-menu"></div> ';
var code = '<u-menu-code>&lt;/&gt;</u-menu-code> ';

function setBorder(arr) {
    let result = arr.map(function(element) {
        return '<u-menu-border>'+element+'</u-menu-border>'
    });
    return result.join(' ');
}

function setBg(arr) {
    let result = arr.map(function(element) {
        return '<u-menu>'+element+'</u-menu>'
    });
    return result.join(' ');
}



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
    ['react-js', 'main', 'refs-and-dom',          point+'Рефы и DOM'],
    ['react-js', 'main', 'create-react-app',      point+setBg(['react', 'react-dom', 'create-react-app'])],
    ['react-js', 'main', 'error-boundaries',      'Предохранители'],
    ['react-js', 'main', 'react-developer-tools', 'React Developer Tools'],

    [1, 'Компоненты'],
    ['react-js', 'components', 'info',                  'Информация'],
    ['react-js', 'components', 'components-and-props',  point+'Компоненты и пропсы'],
    ['react-js', 'components', 'lifting-state-up',      point+'Подъём состояния'],
    ['react-js', 'components', 'composition',           point+'Композиция'],
    ['react-js', 'components', 'context',               point+'Контекст'],

    [1, 'Обработка и вывод данных'],
    ['react-js', 'processing-data-output', 'css',                   point+'CSS'],
    ['react-js', 'processing-data-output', 'handling-events',       point+'Обработка событий'],
    ['react-js', 'processing-data-output', 'conditional-rendering', point+'Условный рендеринг'],
    ['react-js', 'processing-data-output', 'lists-and-keys',        point+'Списки и ключи'],
    ['react-js', 'processing-data-output', 'forms',                 point+'Формы'],

    [1, 'Redux'],
    ['react-js', 'redux', 'info',                  'Информация'],
    ['react-js', 'redux', 'structure',             code+'Структура'],
    ['react-js', 'redux', 'elements',              point+'View | Store | Reducer | Actions'],
    ['react-js', 'redux', 'react-redux',           point+setBg(['react', 'react-redux'])],
    ['react-js', 'redux', 'connect',               point+'Connect'],
    ['react-js', 'redux', 'middleware',            point+'Middleware'],
    ['react-js', 'redux', 'redux-developer-tools', 'Redux DevTools'],

    [1, 'Redux Plugins'],
    ['react-js', 'redux-plugins', 'redux-thunk',    setBg(['redux-thunk', 'redux-devtools-extension'])],
    ['react-js', 'redux-plugins', 'prop-types',     setBg(['prop-types'])],
    ['react-js', 'redux-plugins', 'redux-form',     setBg(['redux-form'])],
    ['react-js', 'redux-plugins', 'formik',         setBg(['formik'])],
    ['react-js', 'redux-plugins', 'redux-actions',  setBg(['redux-actions'])],
    ['react-js', 'redux-plugins', 'redux-saga',     setBg(['redux-saga'])],
    ['react-js', 'redux-plugins', 'redux-logger',   setBg(['redux-logger'])],

    [1, 'React Router'],
    ['react-js', 'react-router', 'react-router',      setBg(['react-router', 'react-router-dom'])],
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
    ['webpack', 'plugins', 'webpack',                 '<u-menu-border>webpack</u-menu-border> <u-menu-border>webpack-cli</u-menu-border>'],
    ['webpack', 'plugins', 'webpack-dev-server',      '<u-menu-border>webpack-dev-server</u-menu-border>'],
    ['webpack', 'plugins', 'babel',                   '<u-menu-border>babel-loader</u-menu-border>'],
    ['webpack', 'plugins', 'css-loader',              '<u-menu-border>css-loader</u-menu-border>'],
    ['webpack', 'plugins', 'mini-css-extract-plugin', '<u-menu-border>mini-css-extract-plugin</u-menu-border>'],
    ['webpack', 'plugins', 'style-loader',            '<u-menu>style-loader</u-menu>'],
    ['webpack', 'plugins', 'sass-loader',             '<u-menu>sass-loader</u-menu>'],
    ['webpack', 'plugins', 'file-loader',             '<u-menu-border>file-loader</u-menu-border>'],
    ['webpack', 'plugins', 'image-webpack-loader',    '<u-menu-border>image-webpack-loader</u-menu-border>'],
    ['webpack', 'plugins', 'html-webpack-plugin',     '<u-menu-border>html-webpack-plugin</u-menu-border>'],
    ['webpack', 'plugins', 'clean-webpack-plugin',    '<u-menu>clean-webpack-plugin</u-menu>'],
    ['webpack', 'plugins', 'react',                   '<u-menu>react</u-menu>'],

    [1, 'postcss'],
    ['webpack', 'postcss', 'postcss-loader', '<u-menu>postcss-loader</u-menu>'],
    ['webpack', 'postcss', 'autoprefixer',   '<u-menu>autoprefixer</u-menu>'],
    ['webpack', 'postcss', 'cssnano',        '<u-menu>cssnano</u-menu>'],
    ['webpack', 'postcss', 'css-mqpacker',   '<u-menu>css-mqpacker</u-menu>'],

    [1, 'options'],
    ['webpack', 'options', 'mode',         '<u-menu>mode</u-menu>'],
    ['webpack', 'options', 'devtool',      '<u-menu>devtool</u-menu>'],
    ['webpack', 'options', 'entry-output', '<u-menu>entry</u-menu> <u-menu>output</u-menu>'],
    ['webpack', 'options', 'library',      '<u-menu>library</u-menu>'],
    ['webpack', 'options', 'watch',        '<u-menu>watch</u-menu> <u-menu>watchOptions</u-menu>'],
    ['webpack', 'options', 'resolve',      '<u-menu>resolve</u-menu>'],
];

//---------------------------------------------------------------------
// GIT
//---------------------------------------------------------------------
var arrGit = [
    [1, 'Terminal'],
    ['git', 'command', 'push_',   '<u-menu>init</u-menu> <u-menu>add</u-menu> <u-menu>commit</u-menu> <u-menu>remote</u-menu> <u-menu>push</u-menu>'],
    ['git', 'command', 'pull_',   '<u-menu>clone</u-menu> <u-menu>pull</u-menu>'],
    ['git', 'command', 'branch',  '<u-menu>branch</u-menu> <u-menu>checkout</u-menu> <u-menu>merge</u-menu>'],
    ['git', 'command', 'diff',    '<u-menu>diff</u-menu>'],
    ['git', 'command', 'config',  '<u-menu>config</u-menu>'],
    ['git', 'command', 'status_', '<u-menu>status</u-menu> <u-menu>log</u-menu>'],
    ['git', 'command', 'fetch',   '<u-menu>fetch</u-menu>'],
    ['git', 'command', 'other',   '<u-menu>...</u-menu>'],

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
    ['npm', 'npm-package', 'http-server', '<u-menu>http-server</u-menu>'],

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
    ['js', 'functions', 'arrow',            point+'Стрелочные функции (ES6)'],
    ['js', 'modules', 'module-es6',         point+'Модули ES6'],
    ['js', 'ajax', 'axios',                 point+'Axios'],
    ['js', 'async', 'promise',              point+'Promise'],
    ['js', 'async', 'async-func',           point+'Async Function'],
    ['js', 'type-data', 'json',             point+'JSON'],
    ['js', 'array', 'array-cycle',          point+'forEach <u-menu>...</u-menu>'],
    ['js', 'es6', 'map',                    point+'map'],
    ['js', 'main', 'context',               point+'call <u-menu>...</u-menu>'],
    ['js', 'es6', 'spread',                 point+'Spread Operator'],
    ['js', 'es6', 'destructive-array',      point+'Деструктивное присваивание массивов'],
    ['js', 'es6', 'destructive-obj',        point+'Деструтивное присваивание объектов'],
    ['js', 'client-storage', 'web-storage', point+'WebStorage'],


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
    ['js', 'type-data', 'variables',         '<u-menu>var</u-menu> <u-menu>let</u-menu> <u-menu>const</u-menu>'],
    ['js', 'type-data', 'typeof',            '<u-menu>typeof</u-menu>'],
    ['js', 'type-data', 'number',            'Числа'],
    ['js', 'type-data', 'math',              'Math'],
    ['js', 'type-data', 'string',            'Строки'],
    ['js', 'type-data', 'json',              '<u-menu>JSON</u-menu>'],
    ['js', 'type-data', 'date-time',         'Дата и время'],
    ['js', 'type-data', 'comparison-values', 'Сравнение и логические значения'],
    ['js', 'type-data', 'regexr',            'Регулярные выражения'],
    ['js', 'type-data', 'object-wrappers',   'Autoboxing (Object Wrappers)'],

    [1, 'Основное'],
    ['js', 'main', 'context',                '<u-menu>this</u-menu> <u-menu>call</u-menu> <u-menu>apply</u-menu> <u-menu>bind</u-menu>'],
    ['js', 'main', 'cycle',                  'Циклы'],
    ['js', 'main', 'css',                    '<u-menu>classList</u-menu> <u-menu>style</u-menu>'],
    ['js', 'main', 'attribute',              '<u-menu>attributes</u-menu>'],
    ['js', 'main', 'exceptions',             'Исключения'],
    ['js', 'main', 'conditional-statements', 'Условные операторы'],

    [1, 'Массивы'],
    ['js', 'array', 'array-cycle', '<u-menu>forEach</u-menu> <u-menu>filter</u-menu> <u-menu>map</u-menu> <u-menu>every/some</u-menu> <u-menu>reduce/reduceRight</u-menu>'],
    ['js', 'array', 'array',       'Массивы'],
    ['js', 'array', 'array-obj',   'Массивы обьектов'],

    [1, 'ES6'],
    ['js', 'es6', 'map',               'Коллекции <u-menu>Map</u-menu> <u-menu>WeakMap</u-menu>'],
    ['js', 'es6', 'set',               'Коллекции <u-menu>Set</u-menu> <u-menu>WeakSet</u-menu>'],
    ['js', 'es6', 'spread',            'Оператор разворота'],
    ['js', 'es6', 'destructive-array', 'Деструктивное присваивание массивов'],
    ['js', 'es6', 'destructive-obj',   'Деструтивное присваивание объектов'],
    ['js', 'es6', 'pattern-string',    'Шаблонные строки'],
    ['js', 'es6', 'proxy',             'Proxy'],
    ['js', 'es6', 'symbol',            'Symbol'],
    ['js', 'es6', 'iterators',         'Iterators'],

    [1, 'Асинхронный код'],
    ['js', 'async', 'collback',   '<u-menu-accent>1.</u-menu-accent> Collback Function'],
    ['js', 'async', 'promise',    '<u-menu-accent>2.</u-menu-accent> Promise (ES6)'],
    ['js', 'async', 'generators', '<u-menu-accent>3.</u-menu-accent> Generators (ES6)'],
    ['js', 'async', 'async-func', '<u-menu-accent>4.</u-menu-accent> Async Function (ES2017)'],
    ['js', 'async', 'timeout',    '<u-menu>setTimeout</u-menu> <u-menu>setInterval</u-menu>'],

    [1, 'AJAX'],
    ['js', 'ajax', 'info',           'Описание'],
    ['js', 'ajax', 'xmlhttprequest', '<u-menu-accent>1.</u-menu-accent> XMLHttpRequest'],
    ['js', 'ajax', 'fetch',          '<u-menu-accent>2.</u-menu-accent> Fetch'],
    ['js', 'ajax', 'axios',          '<u-menu-accent>3.</u-menu-accent> Axios'],
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
    ['js', 'dom', 'create-element',  '<u-menu>createElement</u-menu> <u-menu>appendChild</u-menu> ...'],
    ['js', 'dom', 'web-forms',       'Web Forms'],

    [1, 'Модули'],
    ['js', 'modules', 'module-system', 'Модульная система'],
    ['js', 'modules', 'module-es6',    'Модули ES6'],

    [1, 'Веб-компоненты'],
    ['js', 'web-components', 'info',            'Теория'],
    ['js', 'web-components', 'shadow-dom',      '<u-menu-accent>1.</u-menu-accent> Shadow DOM'],
    ['js', 'web-components', 'template',        '<u-menu-accent>2.</u-menu-accent> HTML Templates'],
    ['js', 'web-components', 'custom-elements', '<u-menu-accent>3.</u-menu-accent> Custom Elements'],
    ['js', 'web-components', 'imports',         '<u-menu-accent>4.</u-menu-accent> HTML Imports'],

    [1, 'Клиентское хранилище'],
    ['js', 'client-storage', 'web-storage', '<u-menu>localStorage</u-menu> <u-menu>sessionStorage</u-menu>'],
    ['js', 'client-storage', 'indexed-db',  '<u-menu>IndexedDB</u-menu>'],
    ['js', 'client-storage', 'cookie',      '<u-menu>cookie</u-menu>'],

    [1, 'Web API'],
    ['js', 'web-api', 'web-api',       'Web API'],
    ['js', 'web-api', 'location',      '<u-menu>open</u-menu> <u-menu>location</u-menu>'],
    ['js', 'web-api', 'inner-width',   '<u-menu>innerWidth/Height</u-menu> <u-menu>clientWidth/Height</u-menu>'],
    ['js', 'web-api', 'media-queries', 'Media queries'],

    [1, 'Дополнительно'],
    ['js', 'additional', 'asynchronous-scripts',   'Асинхронные скрипты: defer/async'],
    ['js', 'additional', 'console',                'Console'],
    ['js', 'additional', 'method-chaining',        'Цепные вызовы методов'],
    ['js', 'additional', 'web-workers',            'Web Workers'],
    ['js', 'additional', 'eval',                   '<u-menu>eval</u-menu>'],
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
    ['js-objects', 'objects', 'conversion',       '<u-menu>toString</u-menu> <u-menu>valueOf</u-menu>'],
    ['js-objects', 'objects', 'samples',          'Примеры'],

    [1, 'Классы ES6'],
    ['js-objects', 'class-es6', 'info',        'Теория'],
    ['js-objects', 'class-es6', 'create',      'Объявление'],
    ['js-objects', 'class-es6', 'inherit',     'Наследование'],
    ['js-objects', 'class-es6', 'expression',  'Выражения классов'],
    ['js-objects', 'class-es6', 'instanceof',  '<u-menu>instanceof</u-menu>'],

    [1, 'Классы ES5 «Функциональный стиль»'],
    ['js-objects', 'class-es5-functional', 'info',                'Теория'],
    ['js-objects', 'class-es5-functional', 'create',              'Объявление'],
    ['js-objects', 'class-es5-functional', 'methods-private',     'Приватный метод'],
    ['js-objects', 'class-es5-functional', 'getters-and-setters', 'Геттеры и сеттеры'],
    ['js-objects', 'class-es5-functional', 'inherit',             'Наследование'],
    ['js-objects', 'class-es5-functional', 'return',              'Правила обработки return'],

    [1, 'Классы ES5 «Прототипный стиль»'],
    ['js-objects', 'class-es5-prototype', 'info',        'Теория'],
    ['js-objects', 'class-es5-prototype', 'proto',       '<u-menu>__proto__</u-menu>'],
    ['js-objects', 'class-es5-prototype', 'prototype',   '<u-menu>prototype</u-menu> <u-menu>new</u-menu>'],
    ['js-objects', 'class-es5-prototype', 'constructor', '<u-menu>constructor</u-menu>'],
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
    ['vue-js', 'reactivity', 'set',          '<u-menu>vm.$set</u-menu> - добаление реакт. элементов'],
    ['vue-js', 'reactivity', 'next-tick',    '<u-menu>vm.$nextTick</u-menu> - обновление'],
    ['vue-js', 'reactivity', 'force-update', '<u-menu>vm.$forceUpdate</u-menu> - переотрисовка'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'info',          'Шаблоны и директивы'],
    ['vue-js', 'directives', 'v-text_v-html', '<u-menu>v-text</u-menu> <u-menu>v-html</u-menu>'],
    ['vue-js', 'directives', 'v-show_v-if',   '<u-menu>v-show</u-menu> <u-menu>v-if</u-menu> <u-menu>v-else</u-menu> <u-menu>v-else-if</u-menu>'],
    ['vue-js', 'directives', 'v-for',         '<u-menu>v-for</u-menu>'],
    ['vue-js', 'directives', 'v-on',          '<u-menu>v-on:</u-menu>'],
    ['vue-js', 'directives', 'v-bind',        '<u-menu>v-bind:</u-menu> :class :style'],
    ['vue-js', 'directives', 'v-model',       '<u-menu>v-model</u-menu>'],
    ['vue-js', 'directives', 'v-pre',         '<u-menu>v-pre</u-menu>'],
    ['vue-js', 'directives', 'v-cloak',       '<u-menu>v-cloak</u-menu>'],
    ['vue-js', 'directives', 'v-once',        '<u-menu>v-once</u-menu>'],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'info',                   'Информация'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  '<u-menu>props</u-menu>'],
    ['vue-js', 'components', 'slot',                   '<u-menu>&lt;slot&gt;</u-menu>'],
    ['vue-js', 'components', 'template',               '<u-menu>&lt;template&gt;</u-menu>'],
    ['vue-js', 'components', 'emit',                   '<u-menu>$emit</u-menu>'],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   '<u-menu>computed</u-menu>'],
    ['vue-js', 'options-and-other', 'watch',      '<u-menu>watch</u-menu>'],
    ['vue-js', 'options-and-other', 'created',    '<u-menu>created</u-menu>'],
    ['vue-js', 'options-and-other', 'transition', '<u-menu>&lt;transition&gt;</u-menu>'],
    ['vue-js', 'options-and-other', 'vue-extend', '<u-menu>Vue.extend</u-menu>'],

    [1, 'DOM'],
    ['vue-js', 'dom', 'event',  '<u-menu>$event</u-menu> - доступ к событию'],
    ['vue-js', 'dom', 'refs',   '<u-menu>$refs</u-menu> - ссылка на dom элемент'],

    [1, 'Переиспользование и композиция'],
    ['vue-js', 'composition', 'mixins',          'Примеси'],
    ['vue-js', 'composition', 'user-directives', 'Пользовательские директивы'],
    ['vue-js', 'composition', 'render',          'Render-функции'],
    ['vue-js', 'composition', 'plugins',         'Плагины'],
    ['vue-js', 'composition', 'filters',         'Фильтры'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     '<u-menu-accent>0.</u-menu-accent> Хранилище (store)'],
    ['vue-js', 'vuex', 'state',     '<u-menu-accent>1.</u-menu-accent> Состояние (state)'],
    ['vue-js', 'vuex', 'getters',   '<u-menu-accent>2.</u-menu-accent> Геттеры (getters)'],
    ['vue-js', 'vuex', 'mutations', '<u-menu-accent>3.</u-menu-accent> Мутации (mutations)'],
    ['vue-js', 'vuex', 'actions',   '<u-menu-accent>4.</u-menu-accent> Действия (actions)'],
    ['vue-js', 'vuex', 'modules',   '<u-menu-accent>5.</u-menu-accent> Модули (modules)'],
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
    ['vue-js', 'vue-cli', 'import_export',     '<u-menu>import</u-menu> <u-menu>export</u-menu>'],
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
    ['theory', 'design-patterns', 'singleton',        '<u-menu>[1]</u-menu> Порожд. «Синглтон»'],
    ['theory', 'design-patterns', 'builder',          '<u-menu>[1]</u-menu> Порожд. «Строитель»'],
    ['theory', 'design-patterns', 'simple-factory',   '<u-menu>[1]</u-menu> Порожд. «Простая фабрика»'],
    ['theory', 'design-patterns', 'decorator',        '<u-menu>[2]</u-menu> Структурн. «Декоратор»'],
    ['theory', 'design-patterns', 'facade',           '<u-menu>[2]</u-menu> Структурн. «Фасад»'],
    ['theory', 'design-patterns', 'observer',         '<u-menu>[3]</u-menu> Поведен. «Наблюдатель»'],
    ['theory', 'design-patterns', 'module',           '<u-menu>[?]</u-menu> Неизвестно. «Модуль»'],
    ['theory', 'design-patterns', 'module-revealing', '<u-menu>[?]</u-menu> Неизвестно. «Открытый модуль»'],

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
    ['theory', 'testing', 'unit-test',        '<u-menu>1</u-menu> Юнит-тесты'],
    ['theory', 'testing', 'integration-test', '<u-menu>2</u-menu> Интеграционные тесты'],
    ['theory', 'testing', 'e2e-test',         '<u-menu>3</u-menu> E2E-тесты'],
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
    ['other', 'main', 'server-online', 'Server Online'],
    ['other', 'main', 'name-case',     'Соглашение по именованию'],
    ['other', 'main', 'prefix',        'Префиксы'],
    ['other', 'main', 'emmet',         'Emmet'],
    ['other', 'main', 'photoshop',     'Adobe Photoshop'],
    ['other', 'main', 'denwer',        'Denwer'],
    ['other', 'main', 'google-chrome', 'Google Chrome'],
];

//---------------------------------------------------------------------
// LINUX
//---------------------------------------------------------------------
var arrLinux = [
    [1, 'Ubuntu (Debian)'],
    ['linux', 'ubuntu', 'command', 'Команды'],
    ['linux', 'ubuntu', 'package', 'Пакеты'],
    ['linux', 'ubuntu', 'nodejs',  point+'Node.js'],
    ['linux', 'ubuntu', 'npm',     point+'Npm'],
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
    ['canvas', 'main', 'other',  'Остальное'],
];

//---------------------------------------------------------------------
// HTML
//---------------------------------------------------------------------
var arrHTML = [
    [1, 'Основное'],
    ['html', 'main', 'info',            'Информация'],
    ['html', 'main', 'custom-elements', 'Custom Elements'],
    ['html', 'main', 'html5-layout',    'Теги HTML5 Layout'],
    ['html', 'main', 'web-forms',       'Web Forms'],
    ['html', 'main', 'element-link',    'Ссылки'],
    ['html', 'main', 'element-media',   'Видео и аудио'],
    ['html', 'main', 'yandex-map',      'Яндекс Карты'],
    ['html', 'main', 'element-table',   'Таблицы'],
    ['html', 'main', 'element-iframe',  'iframe'],
    ['html', 'main', 'samples',         'Примеры'],
];


//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
var arrCSS = [
    [1, 'CSS Selectors'],
    ['css', 'selectors', 'selectors',       'Селекторы'],
    ['css', 'selectors', 'pseudo-classes',  'Псевдоклассы'],
    ['css', 'selectors', 'pseudo-elements', 'Псевдоэлементы'],

    [1, 'Основное'],
    ['css', 'main', 'info',              'Информация'],
    ['css', 'main', 'custom-properties', 'Custom Properties'],
    ['css', 'main', 'mixins',            'Native CSS Mixins'],
    ['css', 'main', 'import',            '@import'],
    ['css', 'main', 'supports',          '@supports'],
    ['css', 'main', 'transition',        'Transition'],
    ['css', 'main', 'transform',         'Transform'],
    ['css', 'main', 'animation',         'Animation'],
    ['css', 'main', 'shadow',            'Box-Shadow, Text-Shadow'],
    ['css', 'main', 'overflow',          'Overflow'],
    ['css', 'main', 'px',                'Единицы измерения'],
    ['css', 'main', 'font',              'Font / Text'],
    ['css', 'main', 'viewport',          'Viewport width / height'],
    ['css', 'main', 'display',           'Display'],
    ['css', 'main', 'position',          'Position'],
    ['css', 'main', 'background',        'Background'],
    ['css', 'main', 'lists',             'Списки'],
    ['css', 'main', 'samples',           'Примеры'],

    [1, 'Адаптивность'],
    ['css', 'adaptive', 'html',          'HTML'],
    ['css', 'adaptive', 'media-queries', 'CSS Media queries'],

    [1, 'Графика'],
    ['css', 'graphics', 'blend-mode',      'CSS Blend Modes'],
    ['css', 'graphics', 'filter',          'CSS Filters'],
    ['css', 'graphics', 'backdrop-filter', 'CSS Backdrop-Filter'],
    ['css', 'graphics', 'clip-path',       'CSS Clipping (Clip-path)'],
    ['css', 'graphics', 'css-shapes',      'CSS Shapes'],
    ['css', 'graphics', 'css-masking',     'CSS Masking'],
];


//---------------------------------------------------------------------
// ENGLISH
//---------------------------------------------------------------------
var arrEnglish = [
    [1, 'Основное'],
    ['english', 'main', 'to-be',       setBg(['1'])+' Verb To Be'],
    ['english', 'main', 'articles',    setBg(['2'])+' Articles'],
    ['english', 'main', 'phrases',     code+'Phrases'],
    ['english', 'main', 'nationality', 'Nationality'],
    ['english', 'main', 'other',       'Other'],
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
    case 'english.html':    var arrCurrent = arrEnglish;    break;
    case 'html.html':       var arrCurrent = arrHTML;       break;
    case 'css.html':        var arrCurrent = arrCSS;        break;
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
