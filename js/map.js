var arrCategory = [
	['theme-react',    'React.js'],  // arrReactjs
	['theme-js',       'JS'],        // arrJavaScript
	['theme-objects',  'JS Object'], // arrJsObjects
	['theme-tasks',    'JS Tasks'],  // arrJsTasks
	['theme-theory',   'Теория'],    // arrTheory
	['theme-html',     'HTML'],      // arrHTML
	['theme-css',      'CSS'],       // arrCSS
	['theme-git',      'Git'],       // arrGit
	['theme-vue',      'Vue.js'],    // arrVuejs
	['theme-webpack',  'Webpack'],   // arrWebpack
	['theme-npm',      'NPM'],       // arrNpm
];

// arrOther
// arrLinux
// arrJquery
// arrCanvas
// arrEnglish

var arrThemes = [
	{ name: 'theme-react',   data: [ ...arrReactjs,    ] },
	{ name: 'theme-js',      data: [ ...arrJavaScript, ] },
	{ name: 'theme-objects', data: [ ...arrJsObjects,  ] },
	{ name: 'theme-tasks',   data: [ ...arrJsTasks,    ] },
	{ name: 'theme-theory',  data: [ ...arrTheory,     ] },
	{ name: 'theme-html',    data: [ ...arrHTML,       ] },
	{ name: 'theme-css',     data: [ ...arrCSS,        ] },
	{ name: 'theme-git',     data: [ ...arrGit,        ] },
	{ name: 'theme-webpack', data: [ ...arrWebpack,    ] },
	{ name: 'theme-npm',     data: [ ...arrNpm,        ] },
	{ name: 'theme-vue',     data: [ ...arrVuejs       ] },
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
				}
			});
			document.querySelector('#map-themes').innerHTML = html;
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
}
