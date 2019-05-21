
let customElementRegistry = window.customElements;
let arrCustomElements = [
	'u-code-text', 'u-code-list', 'u-code-comment', 'u-code', 'u-text-define',
	'u-text-header', 'u-code-wrapper', 'u-link-wrapper',
	'u-message-ok', 'u-message-info', 'u-message-warn', 'u-message-error',

	'code-type',
	'u-code-accent', 'u-code-warn',
	'bg-menu', 'bg-menu-code', 'bg-menu-accent', 'bg-menu-border',
	'bg-npm', 'bg-map', 'bg-list', 'bg-mass', 'bg-methods',
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
    template:  `<div class="v-two-wrapper"><div class="v-two-column"><pre><code :class="textType[0]"><code-type v-text="textComment[0]"></code-type><slot name="first">User Default1</slot></code></pre></div><div class="v-two-column"><pre><code :class="textType[1]"><code-type v-text="textComment[1]"></code-type><slot name="last">User Default2</slot></code></pre></div></div>`,
    // template:  `
    // 	<div class="v-two-wrapper">
    // 		<div class="v-two-column">
    // 			<pre><code :class="textType[0]">
    // 				<code-type v-text="textComment[0]"></code-type>
    // 				<slot name="first">User Default1</slot>
    // 			</code></pre>
    // 		</div>
    // 		<div class="v-two-column">
    // 			<pre><code :class="textType[1]">
    // 				<code-type v-text="textComment[1]"></code-type>
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

var app = new Vue({
	el: '#content'
})
