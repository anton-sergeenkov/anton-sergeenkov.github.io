var arrCategory = [
	['theme-js',           'JS'],
	['theme-objects',      'JS Object'],
	['theme-vue',          'Vue.js'],
	['theme-react',        'React.js'],
	['theme-html',         'Верстка'],
	['theme-theory',       'Теория'],
	['theme-tasks',        'Задачи'],
	['theme-technologies', 'Технологии']
];

var arrThemes = [
	{
		name: 'theme-js', // JavaScript
		data: [
			...arrJavaScript,
		]
	},
	{
		name: 'theme-objects', // Классы и Объекты
		data: [
			...arrJsObjects,
		]
	},
	{
		name: 'theme-vue', // Vue.js
		data: [
			...arrVuejs,
			['theory', 'application-architecture', 'mvc',  'MVC'],
			['theory', 'application-architecture', 'mvvm', 'MVVM'],
		]
	},
	{
		name: 'theme-react', // React.js
		data: [
			...arrReactjs,
		]
	},
	{
		name: 'theme-theory', // Теория
		data: [
			...arrTheory,
		]
	},
	{
		name: 'theme-tasks', // Задачи
		data: [
			...arrJsTasks,
		]
	},
	{
		name: 'theme-html', // Верстка
		data: [
			[1, 'Селекторы и элементы'],
			[false, '+css', 'selectors',         'Селекторы'],
			[false, '+css', 'pseudo-classes',    'Псевдоклассы'],
			[false, '+css', 'pseudo-elements',   'Псевдоэлементы'],

			[1, 'Остальное'],
			[false, '+css', 'measurement',       'Единицы измерения'],
			[false, '+css', 'adaptive-html',     'HTML viewport'],
			[false, '+css', 'adaptive-css',      'Media queries'],
			[false, '+css', 'custom-properties', 'Custom Properties'],
			[false, '+css', 'import',            '@import'],
			[false, '+css', 'transition',        'Transition'],
			[false, '+css', 'transform',         'Transform'],
			[false, '+css', 'animation',         'Animation'],
			[false, '+css', 'shadow',            'Box-Shadow и Text-Shadow'],
			[false, '+css', 'font',              'Font / Text'],
			[false, '+css', 'list',              'Списки'],

			[1, 'Технологии'],
			[false, '+sass', 'sass',        'Sass'],
			[false, '+css-flexbox', 'flex', 'Flexbox'],
			[false, '+css-grid', 'grid',    'CSS Grid']
		]
	},
];


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

var hoverHeaderMenu; // пункт HeaderMenu на который навели
var hoverThemesMenu; // пункт ThemesMenu на который навели

buildHeader();
function buildHeader() {
	var html = '';
	arrCategory.forEach(function(element) {
		html += `<div class="map-header-menu" data-theme="${element[0]}" onclick="buildThemes(this);" onmouseover="hoverHeaderMenu=this">${element[1]}</div>`;
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
					if (item[0] !== false) {
						// новая тема
						// item[0] - folder main     - 'vue-js'
						// item[1] - folder sub-main - 'main'
						// item[2] - name file       - 'project-structure'
						// item[3] - name theme      - 'Структура проекта'
						html += `
							<div
								class="map-themes-menu"
								data-path="themes/${item[0]}/${item[1]}/${item[2]}.html"
								onclick="buildContent(this);"
								onmouseover="hoverThemesMenu=this"
							>${item[3]}</div>`;

					} else {
						// старая тема
						// item[0] - old version  - false
						// item[1] - page         - 'js'
						// item[2] - id container - 'module-es6'
						// item[3] - name theme   - 'Модули ES6'
						html += `
							<div
								class="map-themes-menu"
								data-page="${item[1]}"
								data-theme="${item[2]}"
								onclick="buildContentOld(this);"
								onmouseover="hoverThemesMenu=this"
							>${item[3]}</div>`;
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

window.onkeydown = function(event) {
	// ESC
	if (event.keyCode == 27) {
		var content = document.querySelector('#map-content');
		content.innerHTML = '';
		content.style.display = 'none';
	}
	// W - HeaderMenu
	if (event.keyCode == 87) {
		buildThemes(hoverHeaderMenu);
	}
	// D - ThemesMenu
	if (event.keyCode == 68) {
		buildContent(hoverThemesMenu);
	}
	// A - ThemesMenu-Old
	if (event.keyCode == 65) {
		buildContentOld(hoverThemesMenu);
	}
}
