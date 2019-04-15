var arrCategory = [
	['theme-js',           'JS'], 
	['theme-objects',      'JS Object'], 
	['theme-vue',          'Vue.js'],
	['theme-html',         'Верстка'],
	['theme-theory',       'Теория'],
	['theme-tasks',        'Задачи'],
	['theme-technologies', 'Технологии']
];

var arrThemes = [
	{
		//---------------------------------------------
		// JavaScript
		//---------------------------------------------
		name: 'theme-js',
		data: [
			[1, 'Типы данных'],
			[false, 'js', 'type',       'Типы данных'],
			[false, 'js', 'let-const',  'var, let, const'],
			[false, 'js', 'typeof',     'typeof'],
			[false, 'js', 'wrappers',   'Autoboxing (Object Wrappers)'],
			[false, 'js', 'number',     'Числа'],
			[false, 'js', 'str',        'Строки'],
			[false, 'js', 'date',       'Дата и время'],
			[false, 'js', 'json',       'JSON'],
			[false, 'js', 'comparison', 'Сравнение и логические значения'],
			[false, 'js', 'operators',  'Остаток от деления / Инкремент и декремент'],

			[1, 'Primary'],
			[false, 'js', 'methods-this',                 'this, call, apply, bind'],
			[false, 'js_functions', 'closures-theory',    'Замыкания (теория)'],
			[false, 'js_functions', 'closures',           'Замыкания'],
			[false, 'js_functions', 'announcement',       'FD / FE / IIFE / new Function'],
			[false, 'theory', 'js-architecture-runtime',  'Event Loop'],

			[1, 'ES6'],
			[false, 'js_functions', 'arrow',              'Стрелочные функции'],
			[false, 'js', 'promise',                      'Promise'],
			[false, 'js', 'module-es6',                   'Модули'],
			[false, 'js_functions', 'default-parameters', 'Функции. Параметры по умолчанию'],
			[false, 'js_functions', 'rest-parameters',    'Функции. Оставшиеся параметры'],
			[false, 'js', 'spread',                       'Оператор разворота'],
			[false, 'js', 'destructive-array',            'Деструктивное присваивание array'],
			[false, 'js', 'destructive-obj',              'Деструтивное присваивание object'],
			[false, 'js', 'pattern',                      'Шаблонные строки'],
			[false, 'js', 'map',                          'Map и WeakMap'],
			[false, 'js', 'set',                          'Set и WeakSet'],
			[false, 'js', 'proxy',                        'Proxy'],
			[false, 'js', 'symbol',                       'Symbol'],
			[false, 'js', 'iterators',                    'Iterators'],

			[1, 'Асинхронный код'],
			[false, 'js', 'collback',   '1. Collback Function'],
			[false, 'js', 'promise',    '2. Promise (ES6)'],
			[false, 'js', 'generators', '3. Generators (ES6)'],
			[false, 'js', 'async-func', '4. Async Function (ES2017)'],
			[false, 'js', 'timeout',    'setTimeout, setInterval'],

			[1, 'AJAX'],
			[false, 'js', 'ajax-request',      'Описание'],
			[false, 'js', 'xmlhttprequest',    '1. XMLHttpRequest'],
			[false, 'js', 'fetch',             '2. Fetch'],
			[false, 'js', 'axios',             '3. Axios'],
			[false, 'js', 'ajax-request-js',   'Request JS'],
			[false, 'js', 'ajax-response-php', 'Response PHP'],
			[false, 'js', 'jsonp',             'JSONP'],
			[false, 'js', 'cors',              'CORS'],
			[false, 'js', 'websocket',         'WebSocket'],
			[false, 'js', 'comet',             'Comet'],

			[1, 'Клиент-сервер'],
			[false, 'theory', 'client-server-desc',  'Клиент-сервер'],
			[false, 'theory', 'client-server-http',  'HTTP'],
			[false, 'theory', 'client-server-https', 'HTTPS'],
			[false, 'theory', 'client-server-rest',  'REST API'],

			[1, 'Циклы и массивы'],
			[false, 'js', 'cycle',       'Циклы'],
			[false, 'js', 'cycle-array', 'Перебор массива (forEach, filter, map, every/some, reduce/reduceRight)'],
			[false, 'js', 'map',         'Map'],
			[false, 'js', 'array',       'Массивы'],
			[false, 'js', 'array-obj',   'Массивы обьектов'],

			[1, 'Функции'],
			[false, 'js_functions', 'special',            'Особенности'],
			[false, 'js_functions', 'announcement',       'FD / FE / IIFE / new Function'],
			[false, 'js_functions', 'arguments',          'Arguments'],
			[false, 'js_functions', 'default-parameters', 'Default Parameters (ES6)'],
			[false, 'js_functions', 'rest-parameters',    'Rest Parameters (ES6)'],
			[false, 'js_functions', 'arrow',              'Стрелочные функции (ES6)'],
			[false, 'js_functions', 'recursion',          'Рекурсия'],
			[false, 'js_functions', 'named',              'Named Function Expression'],

			[1, 'Модули'],
			[false, 'js', 'module-system', 'Модульная система'],
			[false, 'js', 'module-es6',    'Модули ES6'],

			[1, 'Client Storage'],
			[false, 'js', 'data-storage', 'localStorage, sessionStorage'],
			[false, 'js', 'data-db',      'IndexedDB'],
			[false, 'js', 'data-cookie',  'cookie'],

			[1, 'DOM События'],
			[false, 'js', 'actions-modal',   'Модель распространения событий'],
			[false, 'js', 'actions',         'Назначение обработчиков событий'],
			[false, 'js', 'actions-target',  'Делегирование событий'],
			[false, 'js', 'actions-params',  'Передаваемый параметр (Event)'],
			[false, 'js', 'actions-list',    'Список событий'],
			[false, 'js', 'prevent',         'Отмена обычного поведения'],
			[false, 'js', 'actions-samples', 'Примеры'],

			[1, 'DOM'],
			[false, 'js', 'select',      'Выборка элементов'],
			[false, 'js', 'methods',     'Методы элементов страницы'],
			[false, 'js', 'dom-element', 'createElement, appendChild, ...'],
			[false, 'js', 'form',        'Web Forms'],

			[1, 'Веб-компоненты'],
			[false, 'js', 'web-components-theory',          'Теория'],
			[false, 'js', 'web-components-virtual-dom',     'Virtual DOM'],
			[false, 'js', 'web-components-shadow-dom',      '1. Shadow DOM'],
			[false, 'js', 'web-components-template',        '2. HTML Templates'],
			[false, 'js', 'web-components-custom-elements', '3. Custom Elements'],
			[false, 'js', 'web-components-imports',         '4. HTML Imports'],

			[1, 'Secondary'],
			[false, 'js', 'case',                 'Условные операторы'],
			[false, 'js', 'catch',                'Исключения'],
			[false, 'js', 'regexr',               'Регулярные выражения'],
			[false, 'js', 'css',                  'classList, style'],
			[false, 'js', 'attribute',            'attributes'],
			[false, 'js', 'web-workers',          'Web Workers'],
			[false, 'js', 'eval',                 'eval'],
			[false, 'js', 'notifications-api',    'Notifications API'],
			[false, 'js', 'custom-properties-js', 'Custom Properties JS'],
			[false, 'js', 'math',                 'Math'],
			[false, 'js', 'external-script',      'Асинхронные скрипты: defer/async'],
			[false, 'js', 'method-chaining',      'Цепные вызовы методов'],
			[false, 'js', 'ecmascript',           'ECMAScript'],

			[1, 'Window'],
			[false, 'js', 'web-api',        'Web API'],
			[false, 'js', 'document-open',  'open, location'],
			[false, 'js', 'document-width', 'innerWidth/Height, clientWidth/Height'],
			[false, 'js', 'document-media', 'Media queries']
		]
	},
	{
		//---------------------------------------------
		// Классы и Объекты
		//---------------------------------------------
		name: 'theme-objects',
		data: [
			[1, 'Объекты'],
			[false, 'js_objects', 'obj-main-theory',      'Теория'],
			[false, 'js_objects', 'obj-main-methods',     'Методы'],
			[false, 'js_objects', 'obj-create',           'Литеральная нотация'],
			[false, 'js_objects', 'obj-for',              'Перебор объекта'],
			[false, 'js_objects', 'obj-constructor',      'Конструктор создания объекта'],
			[false, 'js_objects', 'obj-prototype-create', 'Создание прототипа'],
			[false, 'js_objects', 'descriptor',           'Дескрипторы свойств'],
			[false, 'js_objects', 'extends-obj',          'Расширяемость объектов'],
			[false, 'js_objects', 'object-conversion',    'toString и valueOf'],
			[false, 'js_objects', 'class-instanceof',     'instanceof'],
			[false, 'js_objects', 'obj-samples',          'Примеры'],

			[1, 'Классы ES6'],
			[false, 'js_objects', 'class-theory',     'Теория'],
			[false, 'js_objects', 'class-create',     'Объявление'],
			[false, 'js_objects', 'class-inherit',    'Наследование'],
			[false, 'js_objects', 'class-expression', 'Выражения классов'],

			[1, 'Классы ES5 (функциональный стиль)'],
			[false, 'js_objects', 'class-es5-theory',  'Теория'],
			[false, 'js_objects', 'class-es5-func"',   'Объявление'],
			[false, 'js_objects', 'class-es5-private', 'Приватный метод'],
			[false, 'js_objects', 'class-es5-getters', 'Геттеры и сеттеры'],
			[false, 'js_objects', 'class-es5-inherit', 'Наследование'],
			[false, 'js_objects', 'class-es5-return',  'Правила обработки return'],

			[1, 'Классы ES5 (прототипный стиль)'],
			[false, 'js_objects', 'class-es5-proto-main',      'Основное'],
			[false, 'js_objects', 'class-es5-proto-prototype', 'Свойство prototype'],
			[false, 'js_objects', 'class-es5-proto-methods',   'Добавление методов'],
			[false, 'js_objects', 'class-es5-proto-inherit',   'Наследование классов'],
			[false, 'js_objects', 'class-mixins',              'Примеси (mixins)']
		]
	},
	{
		//---------------------------------------------
		// Vue.js
		//---------------------------------------------
		name: 'theme-vue',
		data: [
		    [1, 'Информация'],
		    [true, 'vue-js', 'main', 'info',              'Информация'],
		    [true, 'vue-js', 'main', 'instance-vue',      'Экземпляр Vue'],
		    [true, 'vue-js', 'main', 'project-structure', 'Структура проекта'],

		    [1, 'Директивы'],
		    [true, 'vue-js', 'directives', 'v-text_v-html', '<bg-menu>v-text</bg-menu> <bg-menu>v-html</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-show_v-if',   '<bg-menu>v-show</bg-menu> <bg-menu>v-if</bg-menu> <bg-menu>v-else</bg-menu> <bg-menu>v-else-if</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-for',         '<bg-menu>v-for</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-on',          '<bg-menu>v-on:</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-bind',        '<bg-menu>v-bind:</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-model',       '<bg-menu>v-model</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-pre',         '<bg-menu>v-pre</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-cloak',       '<bg-menu>v-cloak</bg-menu>'],
		    [true, 'vue-js', 'directives', 'v-once',        '<bg-menu>v-once</bg-menu>'],

		    [1, 'Опции и прочее'],
		    [true, 'vue-js', 'options-and-other', 'computed',   '<bg-menu>computed</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'created',    '<bg-menu>created</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'watch',      '<bg-menu>watch</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'filters',    '<bg-menu>filters</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'refs',       '<bg-menu>$refs</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'transition', '<bg-menu>&lt;transition&gt;</bg-menu>'],
		    [true, 'vue-js', 'options-and-other', 'set',        '<bg-menu>set</bg-menu>'],

		    [1, 'Компоненты'],
		    [true, 'vue-js', 'components', 'component-simple',       'Простой компонент'],
		    [true, 'vue-js', 'components', 'component-registration', 'Регистрация компонента'],
		    [true, 'vue-js', 'components', 'component-global',       'Глобальный компонент'],
		    [true, 'vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
		    [true, 'vue-js', 'components', 'props',                  '<bg-menu>props</bg-menu>'],
		    [true, 'vue-js', 'components', 'slot',                   '<bg-menu>&lt;slot&gt;</bg-menu>'],
		    [true, 'vue-js', 'components', 'template',               '<bg-menu>&lt;template&gt;</bg-menu>'],
		    [true, 'vue-js', 'components', 'emit',                   '<bg-menu>$emit</bg-menu>'],

		    [1, 'Vuex'],
		    [true, 'vue-js', 'vuex', 'info',      'Информация'],
		    [true, 'vue-js', 'vuex', 'src',       'Подключение'],
		    [true, 'vue-js', 'vuex', 'store',     '<bg-menu>state</bg-menu> <bg-menu>store</bg-menu>'],
		    [true, 'vue-js', 'vuex', 'getters',   '<bg-menu>getters</bg-menu>'],
		    [true, 'vue-js', 'vuex', 'mutations', '<bg-menu>mutations</bg-menu>'],
		    [true, 'vue-js', 'vuex', 'actions',   '<bg-menu>actions</bg-menu>'],
		    [true, 'vue-js', 'vuex', 'samples',   'Примеры'],

		    [1, 'Vue CLI'],
		    [true, 'vue-js', 'vue-cli', 'info',              'Информация'],
		    [true, 'vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
		    [true, 'vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
		    [true, 'vue-js', 'vue-cli', 'import_export',     '<bg-menu>import</bg-menu> <bg-menu>export</bg-menu>'],
		    [true, 'vue-js', 'vue-cli', 'render',            '<bg-menu>render</bg-menu>'],
		    [true, 'vue-js', 'vue-cli', 'sample-structure',  'Пример структуры'],
		    [true, 'vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

		    [1, 'Vue Router'],
		    [true, 'vue-js', 'vue-router', 'info',                 'Информация'],
		    [true, 'vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
		    [true, 'vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
		    [true, 'vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
		    [true, 'vue-js', 'vue-router', 'path-static',          'Статический путь'],
		    [true, 'vue-js', 'vue-router', 'path-dynamic',         'Динамический путь'],
		    [true, 'vue-js', 'vue-router', 'path-comparison',      'Сопоставление путей'],
		    [true, 'vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

		    [1, 'Плагины'],
		    [true, 'vue-js', 'plugins', 'vuetify',     'Vuetify'],
		    [true, 'vue-js', 'plugins', 'fontawesome', 'FontAwesome'],

		    [1, 'Примеры'],
		    [true, 'vue-js', 'samples', 'cart',   'Добавить / удалить из корзины']
		]
	},
	{
		//---------------------------------------------
		// Верстка
		//---------------------------------------------
		name: 'theme-html',
		data: [
			[1, 'Селекторы и элементы'],
			[false, 'css', 'selectors',         'Селекторы'],
			[false, 'css', 'pseudo-classes',    'Псевдоклассы'],
			[false, 'css', 'pseudo-elements',   'Псевдоэлементы'],

			[1, 'Остальное'],
			[false, 'css', 'measurement',       'Единицы измерения'],
			[false, 'css', 'adaptive-html',     'HTML viewport'],
			[false, 'css', 'adaptive-css',      'Media queries'],
			[false, 'css', 'custom-properties', 'Custom Properties'],
			[false, 'css', 'import',            '@import'],
			[false, 'css', 'transition',        'Transition'],
			[false, 'css', 'transform',         'Transform'],
			[false, 'css', 'animation',         'Animation'],
			[false, 'css', 'shadow',            'Box-Shadow и Text-Shadow'],
			[false, 'css', 'font',              'Font / Text'],
			[false, 'css', 'list',              'Списки'],

			[1, 'Технологии'],
			[false, 'sass', 'sass',         'Sass'],
			[false, 'css_flex', 'flex',     'Flexbox'],
			[false, 'css_grid', 'grid',     'CSS Grid']
		]
	},
	{
		//---------------------------------------------
		// Теория
		//---------------------------------------------
		name: 'theme-theory',
		data: [
			[1, 'JavaScript'],
			[false, 'theory', 'js-architecture-runtime',  'Архитектура среды выполнения (Event Loop)'],
			[false, 'theory', 'js-garbage-collection',    'Сборщик мусора'],
			[false, 'theory', 'js-dictionary',            'Словарь'],

			[1, 'Клиент-сервер'],
			[false, 'theory', 'client-server-desc',  'Клиент-сервер'],
			[false, 'theory', 'client-server-http',  'HTTP'],
			[false, 'theory', 'client-server-https', 'HTTPS'],
			[false, 'theory', 'client-server-rest',  'REST API'],

			[1, 'Паттерны проектирования'],
			[false, 'theory', 'patterns',                  'Паттерны проектирования'],
			[false, 'theory', 'pattern-singleton',         'Порожд. «Синглтон»'],
			[false, 'theory', 'pattern-builder',           'Порожд. «Строитель»'],
			[false, 'theory', 'pattern-simple-factory"',   'Порожд. «Простая фабрика»'],
			[false, 'theory', 'pattern-decorator',         'Структурн. «Декоратор»'],
			[false, 'theory', 'pattern-facade',            'Структурн. Фасад'],
			[false, 'theory', 'pattern-observer',          'Поведен. «Наблюдатель»'],
			[false, 'theory', 'pattern-module',            'Неизвестно. «Модуль»'],
			[false, 'theory', 'pattern-revealing-module"', 'Неизвестно. «Открытый модуль»'],

			[1, 'Парадигмы программирования'],
			[false, 'theory', 'paradigms',       'Парадигмы программирования'],
			[false, 'theory', 'paradigms-imper', 'Императивное'],
			[false, 'theory', 'paradigms-decl',  'Декларативное'],
			[false, 'theory', 'paradigms-func',  'Функциональное'],
			[false, 'theory', 'paradigms-oop',   'Объектно-ориентированное'],
			[false, 'theory', 'composition',     'Композиция'],
			[false, 'theory', 'currying',        'Каррирование / Частичное применение функций'],
			[false, 'theory', 'ddd',             'DDD'],
			[false, 'theory', 'cqrs',            'CQRS'],
			[false, 'theory', 'event-sourcing',  'Event Sourcing'],

			[1, 'Алгоритмы и структуры данных'],
			[false, 'theory', 'big-o-notation',       'Big-O Notation (сложность алгоритмов)'],
			[false, 'theory', 'structure-data',       'Структуры данных'],
			[false, 'theory', 'basic-algoritms-sort', 'Алгоритмы сотрировки'],

			[1, 'Принципы программирования'],
			[false, 'theory', 'solid',         'SOLID'],
			[false, 'theory', 'dry',           'DRY'],
			[false, 'theory', 'kiss',          'KISS'],
			[false, 'theory', 'yagni',         'YAGNI'],
			[false, 'theory', 'code-smell',    'Запахи кода'],
			[false, 'theory', 'refactoring',   'Рефакторинг'],
			[false, 'theory', 'code-standart', 'Стандарты кода'],

			[1, 'Deployment'],
			[false, 'theory', 'deployment-ci',         '1. Continuous Integration'],
			[false, 'theory', 'deployment-cd',         '2. Continuous Delivery'],
			[false, 'theory', 'deployment-continuous', '3. Continuous Deployment'],
			[false, 'theory', 'deployment-software',   'Software Deployment'],

			[1, 'Тестирование'],
			[false, 'theory', 'testing-test',        'Тестирование'],
			[false, 'theory', 'testing-pyramid',     'Пирамида тестирования'],
			[false, 'theory', 'testing-unit',        '1. Юнит-тесты'],
			[false, 'theory', 'testing-integration', '2. Интеграционные тесты'],
			[false, 'theory', 'testing-e2e',         '3. E2E-тесты'],
			[false, 'theory', 'testing-tdd',         'TDD'],
			[false, 'theory', 'testing-bdd',         'BDD'],
			[false, 'js',     'chrome-dev-tools',    'Chrome DevTools'],

			[1, 'Методологии разработки'],
			[false, 'theory', 'method-dev',       'Методологии разработки'],
			[false, 'theory', 'method-waterfall', 'Waterfall'],
			[false, 'theory', 'method-agile',     'Agile / Scrum / Kanban'],
			[false, 'theory', 'estimation',       'Эстимация'],

			[1, 'Системы контроля версий'],
			[false, 'git', 'vcs',      'Системы управления версиями'],
			[false, 'git', 'terminal', 'Git-команды'],
			[false, 'git', 'gitflow',  'Gitflow']
		]
	},
	{
		//---------------------------------------------
		// Задачи
		//---------------------------------------------
		name: 'theme-tasks',
		data: [
			[1, 'Замыкания'],
			[false, 'js_tasks', '2', 'Сумма произвольного кол-ва скобок'],

			[1, 'Объекты'],
			[false, 'theory', 'pattern-singleton', 'Паттерн «Синглтон»'],
			[false, 'js_tasks', '1', 'Обращение к функции как к объекту'],
			[false, 'js_tasks', '6', 'Прототипное наследование'],

			[1, 'Полифилы'],
			[false, 'js_tasks', '5', 'Object.create'],
			[false, 'js_tasks', '7', 'Object.create (JSR)'],
			[false, 'js_tasks', '16', 'bind()'],

			[1, 'Массивы'],
			[false, 'js_tasks', '8', 'Всплытие и значение массива'],
			[false, 'js_tasks', '15', 'reduceRight и создание объекта'],
			[false, 'js_tasks', '10', 'map и перебор массива объектов'],
			[false, 'js_tasks', '13', 'Метод дублирующий массив'],

			[1, 'Асинхронность'],
			[false, 'js_tasks', '11', 'Promise и setTimeout'],
			[false, 'js_tasks', '12', 'Promise и аргументы then'],

			[1, 'Прочее'],
			[false, 'js_tasks', '14', 'Приведение типов'],
			[false, 'js_tasks', '9', 'Всплытие функции и переменной']
		]
	},
	{
		//---------------------------------------------
		// Технологии
		//---------------------------------------------
		name: 'theme-technologies',
		data: [
			[false, 'npm', 'npm-command', 'NPM Команды'],
			[false, 'npm', 'webpack-package', 'Webpack NPM'],
			[false, 'npm', 'webpack-package-json', 'Webpack package.json']
		]
	}
];


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


buildHeader();
function buildHeader() {
	var html = '';
	arrCategory.forEach(function(element) {
		html += `<div class="map-header-menu" data-theme="${element[0]}" onclick="buildThemes(this);">${element[1]}</div>`;
	});
	document.querySelector('#map-header').innerHTML = html;
}

function buildThemes(element) {
	var theme = element.getAttribute('data-theme');
	arrThemes.forEach(function(element) {
		if (element.name == theme) {

			var html = '';
			element.data.forEach(function(item) {
				if (item[0] === 1) {
					html += `<h2>${item[1]}</h2>`;
				}
				if (item[0] !== 1) {
					if (item[0]) {
						// новая тема
						// item[1] - folder main     - 'vue-js'
						// item[2] - folder sub-main - 'main'
						// item[3] - name file       - 'project-structure'
						// item[4] - name theme      - 'Структура проекта'

						html += `
							<div 
								class="map-themes-menu" 
								data-path="themes/${item[1]}/${item[2]}/${item[3]}.html" 
								onclick="buildContent(this);
							">${item[4]}</div>`;

					} else {
						// старая тема
						// item[1] - page         - 'js'
						// item[2] - id container - 'module-es6'
						// item[3] - name theme   - 'Модули ES6' 
						html += `<div class="map-themes-menu" data-page="${item[1]}" data-theme="${item[2]}" onclick="buildContentOld(this);">${item[3]}</div>`;
					}
				}
			});
			document.querySelector('#map-themes').innerHTML = html;
		}
	});
}

function buildContentOld(element) {
	var page = element.getAttribute('data-page');
	var theme = element.getAttribute('data-theme');

	$.ajax({
		type: "GET",
		url: page+".html",
		async: false,  
		success: function(data) {
			var parser = new DOMParser();
			var doc = parser.parseFromString(data, 'text/html');

			var close = document.createElement('div');
			close.setAttribute('class', 'map-content-close');
			close.addEventListener('click', function() {
				var content = document.querySelector('#map-content');
				content.innerHTML = '';
				content.style.display = 'none';
			});

			var content = document.querySelector('#map-content');
			content.appendChild(doc.querySelector('#ct-'+theme));
			content.appendChild(close);
			content.style.display = 'block';

			document.querySelectorAll('pre code').forEach((block) => {
				hljs.highlightBlock(block);
			});
		}          
	});
}

function buildContent(element) {
	var path = element.getAttribute('data-path');

	$.ajax({
		type: "GET",
		url: path,
		async: false,  
		success: function(data) {

			var close = document.createElement('div');
			close.setAttribute('class', 'map-content-close');
			close.addEventListener('click', function() {
				var content = document.querySelector('#map-content');
				content.innerHTML = '';
				content.style.display = 'none';
			});

			var content = document.querySelector('#map-content');
			content.innerHTML = data;
			content.appendChild(close);
			content.style.display = 'block';

			document.querySelectorAll('pre code').forEach((block) => {
				hljs.highlightBlock(block);
			});
		}          
	});
}

// var hover = {
// 	page: null,
// 	theme: null
// };
// $('.element-menu').hover(function() {
// 	hover.page = this.getAttribute('data-page');
// 	hover.theme = this.getAttribute('data-theme');
// });
// var hoverLink = '';
// $('.elements-menu-link').hover(function() {
// 	hoverLink = this.getAttribute('data-id');
// });

// window.onkeydown = function(event) {
// 	if (event.keyCode == 27) {
// 		$('.element-content').css('display', 'none');
// 		$('.content-close').css('display', 'none');	
// 	}
// 	if (event.keyCode == 87) {
// 		$('.element-content').css('display', 'none');
// 		$('#'+hover.page+hover.theme).css('display', 'block');
// 		$('.content-close').css('display', 'block');
// 	}
// 	if (event.keyCode == 68) {
// 		showElement(hoverLink);
// 	}
// }
