
let customElementRegistry = window.customElements;
let arrCustomElements = [
	'u-code-text',    'u-code-list',     'u-code-comment', 'u-code',
	'u-text-define',  'u-text-header',   'u-code-wrapper', 'u-link-wrapper',
	'u-code-npm',     'u-code-title',    'u-message-ok',   'u-message-info',
	'u-message-warn', 'u-message-error', 'u-code-accent',  'u-menu',
	'u-menu-accent',  'u-menu-code',     'u-menu-border',

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
    // template:  `
    // 	<div class="v-two-wrapper">
    // 		<div class="v-two-column">
    // 			<pre><code :class="textType[0]">
    // 				<u-code-title v-text="textComment[0]"></u-code-title>
    // 				<slot name="first">User Default1</slot>
    // 			</code></pre>
    // 		</div>
    // 		<div class="v-two-column">
    // 			<pre><code :class="textType[1]">
    // 				<u-code-title v-text="textComment[1]"></u-code-title>
    // 				<slot name="last">User Default2</slot>
    // 			</code></pre>
    // 		</div>
    // 	</div>`
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
    // template:
	// 	`<pre class="v-pre-npm"><code class="bash">
	// 		<slot></slot>
	// 	</code></pre>`,
})

var app = new Vue({
	el: '#content'
})
