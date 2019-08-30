
var app = new Vue({
	el: '#content',
	data: {
		category: [
			['React.js',          arrReactjs,    'menu-html'],
			['JavaScript',        arrJavaScript, 'menu-html'],
			['JavaScript Class',  arrJsObjects,  'menu-html'],

			['Git',               arrGit,        'menu-js'],
			['Flow',              arrFlow,       'menu-js'],
			['Webpack',           arrWebpack,    'menu-js'],

			['Vue.js',            arrVuejs,      'menu-php'],
			['Bootstrap',         arrBootstrap,  'menu-php'],
			['HTML',              arrHTML,       'menu-php'],
			['CSS',               arrCSS,        'menu-php'],
			['NPM',               arrNpm,        'menu-php'],
			['Sass',              arrSass,       'menu-php'],
			['Canvas',            arrCanvas,     'menu-php'],

			['Assessment',        arrAssessment, 'menu-other'],
			['Задачи',            arrJsTasks,    'menu-other'],
			['Теория',            arrTheory,     'menu-other'],

			['jQuery',            arrJquery,     'menu-other'],
			['Other',             arrOther,      'menu-other'],
			['Linux',             arrLinux,      'menu-other'],

			['SVG',               arrSvg,        'menu-php'],
			// ['Flexbox',           arrCssFlexbox, 'menu-php'],
			// ['CSS Grid',          arrCssGrid,    'menu-php'],
			// ['MySQL',             arrMySql,      'menu-php'],
			// ['Node.js',           arrNodejs,     'menu-other'],
			// ['PHP',               arrPhp,        'menu-other'],
			// ['Python',            arrPython,     'menu-other'],
		],
		themesContent: null,
		pageContent: '',
		pageBuild: false,
		hoverHeaderMenu: '', // пункт HeaderMenu на который навели
		hoverThemesMenu: []  // пункт ThemesMenu на который навели
	},

	methods: {
		buildThemes(theme) {
			this.themesContent = theme;
		},
		buildContent(category, section, theme) {
			var path = 'themes/'+category+'/'+section+'/'+theme+'.html';
			$.ajax({
				type: "GET",
				url: path,
				async: false,
				success: function(data) {
					var MyComponent = Vue.extend({
						template: `
							<div>
								${data}
							</div>
						`
					});
					var component = new MyComponent().$mount();
					var wrapper = document.getElementById('question-content');
					wrapper.innerHTML = '';
					wrapper.appendChild(component.$el);

					app.pageBuild = true;
				}
			});
		},
        handleEscapeKey(e) {
        	// ESC
			if (event.keyCode == 27) {
				this.pageBuild = false;
			}
			// W - HeaderMenu
			if (event.keyCode == 87) {
				this.buildThemes(this.hoverHeaderMenu);
			}
			// D - ThemesMenu
			if (event.keyCode == 68) {
				this.buildContent(this.hoverThemesMenu[0], this.hoverThemesMenu[1], this.hoverThemesMenu[2]);
			}
        }
	},
	updated() {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	},
    mounted() {
        if (typeof document !== 'undefined') {
            document.body.addEventListener('keyup', this.handleEscapeKey);
        }
    },
    destroyed() {
        if (typeof document !== 'undefined') {
            document.body.removeEventListener('keyup', this.handleEscapeKey);
        }
    }
})
