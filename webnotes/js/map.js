var mapHTML1 = '';
var mapHTML2 = '';
var currentHTML = 1;

////////////////////////////////////////////////////////////////
currentHTML = 1;
h1('JavaScript');

h2('Client Storage');
div('js', 'data-storage', 'localStorage / sessionStorage');
div('js', 'data-db',      'IndexedDB');
div('js', 'data-cookie',  'Cookie');

h2('Функции');
div('js_functions', 'special',            'Особенности');
div('js_functions', 'announcement',       'FD / FE / IIFE / new Function');
div('js_functions', 'arguments',          'Arguments');
div('js_functions', 'default-parameters', 'Default Parameters (ES6)');
div('js_functions', 'rest-parameters',    'Rest Parameters (ES6)');
div('js_functions', 'arrow',              'Стрелочные функции (ES6)');
div('js_functions', 'closures-theory',    'Замыкания (теория)');
div('js_functions', 'closures',           'Замыкания');
div('js_functions', 'recursion',          'Рекурсия');
div('js_functions', 'named',              'Named Function Expression');

h2('Объекты');
div('js_objects', 'obj-main-theory',      'Теория');
div('js_objects', 'obj-main-methods',     'Методы');
div('js_objects', 'obj-create',           'Литеральная нотация');
div('js_objects', 'obj-for',              'Перебор объекта');
div('js_objects', 'obj-constructor',      'Конструктор создания объекта');
div('js_objects', 'obj-prototype-create', 'Создание прототипа');
div('js_objects', 'descriptor',           'Дескрипторы свойств');
div('js_objects', 'extends-obj',          'Расширяемость объектов');
div('js_objects', 'object-conversion',    'toString и valueOf');
div('js_objects', 'class-instanceof',     'instanceof');
div('js_objects', 'obj-samples',          'Примеры');

h2('Классы ES6');
div('js_objects', 'class-theory',     'Теория');
div('js_objects', 'class-create',     'Объявление');
div('js_objects', 'class-inherit',    'Наследование');
div('js_objects', 'class-expression', 'Выражения классов');

h2('Классы ES5 (функциональный стиль)');
div('js_objects', 'class-es5-theory',  'Теория');
div('js_objects', 'class-es5-func"',   'Объявление');
div('js_objects', 'class-es5-private', 'Приватный метод');
div('js_objects', 'class-es5-getters', 'Геттеры и сеттеры');
div('js_objects', 'class-es5-inherit', 'Наследование');
div('js_objects', 'class-es5-return',  'Правила обработки return');

h2('Классы ES5 (прототипный стиль)');
div('js_objects', 'class-es5-proto-main',      'Основное');
div('js_objects', 'class-es5-proto-prototype', 'Свойство prototype');
div('js_objects', 'class-es5-proto-methods',   'Добавление методов');
div('js_objects', 'class-es5-proto-inherit',   'Наследование классов');
div('js_objects', 'class-mixins',              'Примеси (mixins)');


////////////////////////////////////////////////////////////////
currentHTML = 2;
h1('Theory');

h2('Клиент-сервер');
div('js', 'client-server-desc',  'Клиент-сервер');
div('js', 'client-server-http',  'HTTP');
div('js', 'client-server-https', 'HTTPS');
div('js', 'client-server-rest',  'REST API');

h2('Паттерны проектирования');
div('theory', 'patterns',                  'Паттерны проектирования');
div('theory', 'pattern-singleton',         'Порожд. «Синглтон»');
div('theory', 'pattern-builder',           'Порожд. «Строитель»');
div('theory', 'pattern-simple-factory"',   'Порожд. «Простая фабрика»');
div('theory', 'pattern-decorator',         'Структурн. «Декоратор»');
div('theory', 'pattern-facade',            'Структурн. Фасад');
div('theory', 'pattern-observer',          'Поведен. «Наблюдатель»');
div('theory', 'pattern-module',            'Неизвестно. «Модуль»');
div('theory', 'pattern-revealing-module"', 'Неизвестно. «Открытый модуль»');

h2('Парадигмы программирования');
div('theory', 'paradigms',       'Парадигмы программирования');
div('theory', 'paradigms-imper', 'Императивное');
div('theory', 'paradigms-decl',  'Декларативное');
div('theory', 'paradigms-func',  'Функциональное');
div('theory', 'paradigms-oop',   'Объектно-ориентированное');
div('theory', 'composition',     'Композиция');
div('theory', 'currying',        'Каррирование / Частичное применение функций');

h2('Алгоритмы и структуры данных');
div('theory', 'big-o-notation',       'Big-O Notation (сложность алгоритмов)');
div('theory', 'structure-data',       'Структуры данных');
div('theory', 'basic-algoritms-sort', 'Алгоритмы сотрировки');

h2('Принципы программирования');
div('theory', 'solid',       'SOLID');
div('theory', 'dry',         'DRY');
div('theory', 'kiss',        'KISS');
div('theory', 'yagni',       'YAGNI');
div('theory', 'code-smell',  'Запахи кода');
div('theory', 'refactoring', 'Рефакторинг');

h2('Методологии разработки');
div('theory', 'method-dev',       'Методологии разработки');
div('theory', 'method-waterfall', 'Waterfall');
div('theory', 'method-agile',     'Agile / Scrum / Kanban');
div('theory', 'estimation',       'Эстимация');

h2('Системы контроля версий');
div('git', 'vcs',      'Системы управления версиями');
div('git', 'terminal', 'Git-команды');
div('git', 'gitflow',  'Gitflow');







document.querySelector('#elements-menu1').innerHTML = mapHTML1;
document.querySelector('#elements-menu2').innerHTML = mapHTML2;
document.querySelector('#elements-menu2').innerHTML += '<div id="menu-top"></div>';

function h1(content) {
	var el = `<h1>${content}</h1>`;
	if (currentHTML == 1) {
		mapHTML1 += el;
	} else {
		mapHTML2 += el;
	}
}
function h2(content) {
	var el = `<h2>${content}</h2>`;
	if (currentHTML == 1) {
		mapHTML1 += el;
	} else {
		mapHTML2 += el;
	}
}
function div(page, theme, content) {
	var el = `<div class="element-menu" data-page="${page}" data-theme="${theme}">${content}</div>`;
	if (currentHTML == 1) {
		mapHTML1 += el;
	} else {
		mapHTML2 += el;
	}
}



