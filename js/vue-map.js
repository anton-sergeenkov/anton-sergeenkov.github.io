
var app = new Vue({
	el: '#content',
	data: { 
		category: [
			['Assessment', arrAssessment ],
			['React.js',   arrReactjs],
			['JS',         arrJavaScript],
			['JS Object',  arrJsObjects],
			['JS Tasks',   arrJsTasks],
			['Теория',     arrTheory],
			['HTML',       arrHTML],
			['CSS',        arrCSS],
			['Git',        arrGit],
			['Vue.js',     arrVuejs],
			['Webpack',    arrWebpack],
			['NPM',        arrNpm ],
			['Sass',       arrSass ],
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

// arrOther
// arrLinux
// arrJquery
// arrCanvas
// arrEnglish
