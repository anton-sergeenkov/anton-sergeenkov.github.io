let customElementRegistry = window.customElements;
let arrCustomElements = [
	'u-code-text',    'u-code-list',     'u-code-comment', 'u-code',
	'u-text-define',  'u-text-header',   'u-code-wrapper', 'u-link-wrapper',
	'u-code-npm',     'u-code-title',    'u-message-ok',   'u-message-info',
	'u-message-warn', 'u-message-error', 'u-code-accent',  'u-menu',
	'u-menu-accent',  'u-menu-code',     'u-menu-border',  'u-text-underline',

	'bg-methods',     'bg-arguments',
];

arrCustomElements.forEach(function(element) {
	customElementRegistry.define(element,
		class extends HTMLElement {
			constructor() {
				super();
			}
		}
	);
});




Vue.component('v-two-code', {
	props: ['type', 'comment'],
	computed: {
		textType() {
			return this.type.split(';');
		},
		textComment() {
			return this.comment.split(';');
		}
	},
    template:  `<div class="v-two-wrapper"><div class="v-two-column"><pre><code :class="textType[0]"><u-code-title v-text="textComment[0]"></u-code-title><slot name="first">User Default1</slot></code></pre></div><div class="v-two-column"><pre><code :class="textType[1]"><u-code-title v-text="textComment[1]"></u-code-title><slot name="last">User Default2</slot></code></pre></div></div>`,
});

Vue.component('v-two', {
    template:
		`<div class="v-two-wrapper">
			<div class="v-two-column">
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})

Vue.component('v-pre-npm', {
	template: `<pre class="v-pre-npm"><code class="bash"><slot></slot></code></pre>`,
})

var app = new Vue({
	el: '#content',
	data: { 
		category: [
			['React.js',  arrReactjs],
			['JS',        arrJavaScript],
			['JS Object', arrJsObjects],
			['JS Tasks',  arrJsTasks],
			['Теория',    arrTheory],
			['HTML',      arrHTML],
			['CSS',       arrCSS],
			['Git',       arrGit],
			['Vue.js',    arrVuejs],
			['Webpack',   arrWebpack],
			['NPM',       arrNpm ],
		],
		themesContent: null,
		pageContent: '',
		pageBuild: false
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
		}
	},
	updated() {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}
})

// arrOther
// arrLinux
// arrJquery
// arrCanvas
// arrEnglish





// var hoverHeaderMenu; // пункт HeaderMenu на который навели
// var hoverThemesMenu; // пункт ThemesMenu на который навели

// <div class="map-header-menu" onmouseover="hoverHeaderMenu=this"></div>
// <div class=""map-themes-menu" onmouseover="hoverThemesMenu=this"></div>

window.onkeydown = function(event) {
	// ESC
	if (event.keyCode == 27) {
		app.pageBuild = false
	}
	// // W - HeaderMenu
	// if (event.keyCode == 87) {
	// 	buildThemes(hoverHeaderMenu);
	// }
	// // D - ThemesMenu
	// if (event.keyCode == 68) {
	// 	buildContent(hoverThemesMenu);
	// }
}
