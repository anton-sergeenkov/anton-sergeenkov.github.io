var category = [
	['cat-js',           'JS'], 
	['cat-objects',      'JS Object'], 
	['cat-vue',          'Vue.js'],
	['cat-html',         'Верстка'],
	['cat-theory',       'Theory'],
	['cat-tasks',        'Задачи'],
	['cat-technologies', 'Технологии']
];

generateMenu();
function generateMenu() {
	var htmlMenu = '';
	var htmlLink = '';
	for (var i=0; i<category.length; i++) {
		htmlMenu += `<div class="elements-menu-item" id="elements-menu-${category[i][0]}"></div>`;
		htmlLink += `<div class="elements-menu-link" onclick="showElement('elements-menu-${category[i][0]}');" data-id="elements-menu-${category[i][0]}">${category[i][1]}</div>`;
	}
	document.querySelector('#elements-menu').innerHTML = htmlMenu;
	document.querySelector('#elements-link').innerHTML = htmlLink;
}
	
var prevID = '';
function showElement(e) {
	if (prevID!='') {
		document.querySelector('#'+prevID).style.display = 'none';
	}
	document.querySelector('#'+e).style.display = 'block';
	prevID = e;
}
showElement('elements-menu-cat-js');

var position;



////////////////////////////////////////////////////////////////
// JavaScript
////////////////////////////////////////////////////////////////
position = 'cat-js';

h('Типы данных');
e('js', 'type',       'Типы данных');
e('js', 'let-const',  'var, let, const');
e('js', 'typeof',     'typeof');
e('js', 'wrappers',   'Autoboxing (Object Wrappers)');
e('js', 'number',     'Числа');
e('js', 'str',        'Строки');
e('js', 'date',       'Дата и время');
e('js', 'json',       'JSON');
e('js', 'comparison', 'Сравнение и логические значения');
e('js', 'operators',  'Остаток от деления / Инкремент и декремент');

h('Primary');
e('js', 'methods-this',                 'this, call, apply, bind');
e('js_functions', 'closures-theory',    'Замыкания (теория)');
e('js_functions', 'closures',           'Замыкания');

h('ES6');
e('js_functions', 'arrow',              'Стрелочные функции (ES6)');
e('js_functions', 'default-parameters', 'Функции. Параметры по умолчанию');
e('js_functions', 'rest-parameters',    'Функции. Оставшиеся параметры');
e('js', 'promise',                      'Promise (ES6)');
e('js', 'spread',                       'Оператор разворота');
e('js', 'destructive-array',            'Деструктивное присваивание array');
e('js', 'destructive-obj',              'Деструтивное присваивание object');
e('js', 'pattern',                      'Шаблонные строки');
e('js', 'map',                          'Map и WeakMap');
e('js', 'set',                          'Set и WeakSet');
e('js', 'proxy',                        'Proxy');
e('js', 'symbol',                       'Symbol');
e('js', 'iterators',                    'Iterators');

h('Модули');
e('js', 'module-system', 'Модульная система');
e('js', 'module-es6',    'Модули ES6');

h('Client Storage');
e('js', 'data-storage', 'localStorage, sessionStorage');
e('js', 'data-db',      'IndexedDB');
e('js', 'data-cookie',  'cookie');

h('Асинхронный код');
e('js', 'collback',   '1. Collback Function');
e('js', 'promise',    '2. Promise (ES6)');
e('js', 'generators', '3. Generators (ES6)');
e('js', 'async-func', '4. Async Function (ES2017)');
e('js', 'timeout',    'setTimeout, setInterval');

h('AJAX');
e('js', 'ajax-request',      'Описание');
e('js', 'xmlhttprequest',    '1. XMLHttpRequest');
e('js', 'fetch',             '2. Fetch');
e('js', 'axios',             '3. Axios');
e('js', 'ajax-request-js',   'Request JS');
e('js', 'ajax-response-php', 'Response PHP');
e('js', 'jsonp',             'JSONP');
e('js', 'cors',              'CORS');
e('js', 'websocket',         'WebSocket');
e('js', 'comet',             'Comet');

h('Клиент-сервер');
e('theory', 'client-server-desc',  'Клиент-сервер');
e('theory', 'client-server-http',  'HTTP');
e('theory', 'client-server-https', 'HTTPS');
e('theory', 'client-server-rest',  'REST API');

h('Циклы и массивы');
e('js', 'cycle',       'Циклы');
e('js', 'cycle-array', 'Перебор массива (forEach, filter, map, every/some, reduce/reduceRight)');
e('js', 'map',         'Map');
e('js', 'array',       'Массивы');
e('js', 'array-obj',   'Массивы обьектов');

h('Функции');
e('js_functions', 'special',            'Особенности');
e('js_functions', 'announcement',       'FD / FE / IIFE / new Function');
e('js_functions', 'arguments',          'Arguments');
e('js_functions', 'default-parameters', 'Default Parameters (ES6)');
e('js_functions', 'rest-parameters',    'Rest Parameters (ES6)');
e('js_functions', 'arrow',              'Стрелочные функции (ES6)');
e('js_functions', 'recursion',          'Рекурсия');
e('js_functions', 'named',              'Named Function Expression');

h('DOM')
e('js', 'select',      'Выборка элементов');
e('js', 'methods',     'Методы элементов страницы');
e('js', 'dom-element', 'createElement, appendChild, ...');
e('js', 'form',        'Web Forms');

h('DOM События');
e('js', 'actions-modal',   'Модель распространения событий');
e('js', 'actions',         'Назначение обработчиков событий');
e('js', 'actions-target',  'Делегирование событий');
e('js', 'actions-params',  'Передаваемый параметр (Event)');
e('js', 'actions-list',    'Список событий');
e('js', 'prevent',         'Отмена обычного поведения');
e('js', 'actions-samples', 'Примеры');

h('Веб-компоненты');
e('js', 'web-components-theory',          'Теория');
e('js', 'web-components-virtual-dom',     'Virtual DOM');
e('js', 'web-components-shadow-dom',      '1. Shadow DOM');
e('js', 'web-components-template',        '2. HTML Templates');
e('js', 'web-components-custom-elements', '3. Custom Elements');
e('js', 'web-components-imports',         '4. HTML Imports');

h('Secondary');
e('js', 'case',                 'Условные операторы');
e('js', 'catch',                'Исключения');
e('js', 'regexr',               'Регулярные выражения');
e('js', 'css',                  'classList, style');
e('js', 'attribute',            'attributes');
e('js', 'web-workers',          'Web Workers');
e('js', 'eval',                 'eval');
e('js', 'notifications-api',    'Notifications API');
e('js', 'custom-properties-js', 'Custom Properties JS');
e('js', 'math',                 'Math');
e('js', 'external-script',      'Асинхронные скрипты: defer/async');
e('js', 'method-chaining',      'Цепные вызовы методов');
e('js', 'ecmascript',           'ECMAScript');

h('Window');
e('js', 'web-api', 'Web API');
e('js', 'document-open',  'open, location');
e('js', 'document-width', 'innerWidth/Height, clientWidth/Height');
e('js', 'document-media', 'Media queries');


////////////////////////////////////////////////////////////////
// Классы и Объекты
////////////////////////////////////////////////////////////////
position = 'cat-objects';

h('Объекты');
e('js_objects', 'obj-main-theory',      'Теория');
e('js_objects', 'obj-main-methods',     'Методы');
e('js_objects', 'obj-create',           'Литеральная нотация');
e('js_objects', 'obj-for',              'Перебор объекта');
e('js_objects', 'obj-constructor',      'Конструктор создания объекта');
e('js_objects', 'obj-prototype-create', 'Создание прототипа');
e('js_objects', 'descriptor',           'Дескрипторы свойств');
e('js_objects', 'extends-obj',          'Расширяемость объектов');
e('js_objects', 'object-conversion',    'toString и valueOf');
e('js_objects', 'class-instanceof',     'instanceof');
e('js_objects', 'obj-samples',          'Примеры');

h('Классы ES6');
e('js_objects', 'class-theory',     'Теория');
e('js_objects', 'class-create',     'Объявление');
e('js_objects', 'class-inherit',    'Наследование');
e('js_objects', 'class-expression', 'Выражения классов');

h('Классы ES5 (функциональный стиль)');
e('js_objects', 'class-es5-theory',  'Теория');
e('js_objects', 'class-es5-func"',   'Объявление');
e('js_objects', 'class-es5-private', 'Приватный метод');
e('js_objects', 'class-es5-getters', 'Геттеры и сеттеры');
e('js_objects', 'class-es5-inherit', 'Наследование');
e('js_objects', 'class-es5-return',  'Правила обработки return');

h('Классы ES5 (прототипный стиль)');
e('js_objects', 'class-es5-proto-main',      'Основное');
e('js_objects', 'class-es5-proto-prototype', 'Свойство prototype');
e('js_objects', 'class-es5-proto-methods',   'Добавление методов');
e('js_objects', 'class-es5-proto-inherit',   'Наследование классов');
e('js_objects', 'class-mixins',              'Примеси (mixins)');

////////////////////////////////////////////////////////////////
// Vue.js
////////////////////////////////////////////////////////////////
position = 'cat-vue';


////////////////////////////////////////////////////////////////
// Верстка
////////////////////////////////////////////////////////////////
position = 'cat-html';

h('Селекторы и элементы');
e('css', 'selectors',         'Селекторы');
e('css', 'pseudo-classes',    'Псевдоклассы');
e('css', 'pseudo-elements',   'Псевдоэлементы');

h('Остальное');
e('css', 'measurement',       'Единицы измерения');
e('css', 'adaptive-html',     'HTML viewport');
e('css', 'adaptive-css',      'Media queries');
e('css', 'custom-properties', 'Custom Properties');
e('css', 'import',            '@import');
e('css', 'transition',        'Transition');
e('css', 'transform',         'Transform');
e('css', 'animation',         'Animation');
e('css', 'shadow',            'Box-Shadow и Text-Shadow');
e('css', 'font',              'Font / Text');
e('css', 'list',              'Списки');

h('Технологии');
e('sass', 'sass',         'Sass');
e('css_flex', 'flex',     'Flexbox');
e('css_grid', 'grid',     'CSS Grid');

////////////////////////////////////////////////////////////////
// Теория
////////////////////////////////////////////////////////////////
position = 'cat-theory';

h('JavaScript');
e('theory', 'js-architecture-runtime',  'Архитектура среды выполнения (Event Loop)');
e('theory', 'js-garbage-collection',    'Сборщик мусора');
e('theory', 'js-dictionary',            'Словарь');

h('Клиент-сервер');
e('theory', 'client-server-desc',  'Клиент-сервер');
e('theory', 'client-server-http',  'HTTP');
e('theory', 'client-server-https', 'HTTPS');
e('theory', 'client-server-rest',  'REST API');

h('Паттерны проектирования');
e('theory', 'patterns',                  'Паттерны проектирования');
e('theory', 'pattern-singleton',         'Порожд. «Синглтон»');
e('theory', 'pattern-builder',           'Порожд. «Строитель»');
e('theory', 'pattern-simple-factory"',   'Порожд. «Простая фабрика»');
e('theory', 'pattern-decorator',         'Структурн. «Декоратор»');
e('theory', 'pattern-facade',            'Структурн. Фасад');
e('theory', 'pattern-observer',          'Поведен. «Наблюдатель»');
e('theory', 'pattern-module',            'Неизвестно. «Модуль»');
e('theory', 'pattern-revealing-module"', 'Неизвестно. «Открытый модуль»');

h('Парадигмы программирования');
e('theory', 'paradigms',       'Парадигмы программирования');
e('theory', 'paradigms-imper', 'Императивное');
e('theory', 'paradigms-decl',  'Декларативное');
e('theory', 'paradigms-func',  'Функциональное');
e('theory', 'paradigms-oop',   'Объектно-ориентированное');
e('theory', 'composition',     'Композиция');
e('theory', 'currying',        'Каррирование / Частичное применение функций');
e('theory', 'ddd',             'DDD');
e('theory', 'cqrs',            'CQRS');
e('theory', 'event-sourcing',  'Event Sourcing');

h('Алгоритмы и структуры данных');
e('theory', 'big-o-notation',       'Big-O Notation (сложность алгоритмов)');
e('theory', 'structure-data',       'Структуры данных');
e('theory', 'basic-algoritms-sort', 'Алгоритмы сотрировки');

h('Принципы программирования');
e('theory', 'solid',         'SOLID');
e('theory', 'dry',           'DRY');
e('theory', 'kiss',          'KISS');
e('theory', 'yagni',         'YAGNI');
e('theory', 'code-smell',    'Запахи кода');
e('theory', 'erefactoring',   'Рефакторинг');
e('theory', 'code-standart', 'Стандарты кода');

h('Deployment');
e('theory', 'deployment-ci',         '1. Continuous Integration');
e('theory', 'deployment-cd',         '2. Continuous Delivery');
e('theory', 'deployment-continuous', '3. Continuous Deployment');
e('theory', 'deployment-software',   'Software Deployment');

h('Тестирование');
e('theory', 'testing-test',        'Тестирование');
e('theory', 'testing-pyramid',     'Пирамида тестирования');
e('theory', 'testing-unit',        '1. Юнит-тесты');
e('theory', 'testing-integration', '2. Интеграционные тесты');
e('theory', 'testing-e2e',         '3. E2E-тесты');
e('theory', 'testing-tdd',         'TDD');
e('theory', 'testing-bdd',         'BDD');
e('js',     'chrome-dev-tools',    'Chrome DevTools');

h('Методологии разработки');
e('theory', 'method-dev',       'Методологии разработки');
e('theory', 'method-waterfall', 'Waterfall');
e('theory', 'method-agile',     'Agile / Scrum / Kanban');
e('theory', 'estimation',       'Эстимация');

h('Системы контроля версий');
e('git', 'vcs',      'Системы управления версиями');
e('git', 'terminal', 'Git-команды');
e('git', 'gitflow',  'Gitflow');

////////////////////////////////////////////////////////////////
// Задачи
////////////////////////////////////////////////////////////////
position = 'cat-tasks';

h('Замыкания');
e('js_tasks', '2', 'Сумма произвольного кол-ва скобок');

h('Объекты');
e('theory', 'pattern-singleton', 'Паттерн «Синглтон»');
e('js_tasks', '1', 'Обращение к функции как к объекту');
e('js_tasks', '6', 'Прототипное наследование');

h('Полифилы');
e('js_tasks', '5', 'Object.create');
e('js_tasks', '7', 'Object.create (JSR)');
e('js_tasks', '16', 'bind()');

h('Массивы');
e('js_tasks', '8', 'Всплытие и значение массива');
e('js_tasks', '15', 'reduceRight и создание объекта');
e('js_tasks', '10', 'map и перебор массива объектов');
e('js_tasks', '13', 'Метод дублирующий массив');

h('Асинхронность');
e('js_tasks', '11', 'Promise и setTimeout');
e('js_tasks', '12', 'Promise и аргументы then');

h('Прочее');
e('js_tasks', '14', 'Приведение типов');
e('js_tasks', '9', 'Всплытие функции и переменной');

////////////////////////////////////////////////////////////////
// Технологии
////////////////////////////////////////////////////////////////
position = 'cat-technologies';

e('npm', 'npm-command', 'NPM Команды');
e('npm', 'webpack-package', 'Webpack NPM');
e('npm', 'webpack-package-json', 'Webpack package.json');










function h(content) {
	var container = document.querySelector('#elements-menu-'+position);
	var item = `<h2>${content}</h2>`;
	container.innerHTML += item;
}
function e(page, theme, content) {
	var container = document.querySelector('#elements-menu-'+position);
	var item = `<div class="element-menu" data-page="${page}" data-theme="${theme}">${content}</div>`;
	container.innerHTML += item;
}

var hover = {
	page: null,
	theme: null
};
$('.element-menu').hover(function() {
	hover.page = this.getAttribute('data-page');
	hover.theme = this.getAttribute('data-theme');
});
var hoverLink = '';
$('.elements-menu-link').hover(function() {
	hoverLink = this.getAttribute('data-id');
});

