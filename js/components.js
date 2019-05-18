
let customElementRegistry = window.customElements;
let arrCustomElements = [
	'code-type', 
	'alert-ok', 'alert-info', 'alert-warn', 'alert-error',
	'bg-code', 'bg-code-accent', 'bg-code-warn', 'bg-code-wrapper',  
	'bg-menu', 'bg-menu-code', 'bg-menu-accent', 'bg-menu-border',
	'bg-npm', 'bg-map', 'bg-header', 'bg-list', 'bg-mass', 'bg-methods', 'bg-define', 'bg-link', 
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
    template:  `<div class="container-flex"><div class="container-half"><pre><code :class="textType[0]"><code-type v-text="textComment[0]"></code-type><slot name="first">User Default1</slot></code></pre></div><div class="container-half"><pre><code :class="textType[1]"><code-type v-text="textComment[1]"></code-type><slot name="last">User Default2</slot></code></pre></div></div>`,
    // template:  `
    // 	<div class="container-flex">
    // 		<div class="container-half">
    // 			<pre><code :class="textType[0]">
    // 				<code-type v-text="textComment[0]"></code-type>
    // 				<slot name="first">User Default1</slot>
    // 			</code></pre>
    // 		</div>
    // 		<div class="container-half">
    // 			<pre><code :class="textType[1]">
    // 				<code-type v-text="textComment[1]"></code-type>
    // 				<slot name="last">User Default2</slot>
    // 			</code></pre>
    // 		</div>
    // 	</div>`
});

Vue.component('v-two', {
    template:
		`<div class="container-flex">
			<div class="container-half">
				<slot name="first">User Default1</slot>
			</div>
			<div class="container-half">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})

var app = new Vue({
	el: '#content'
})

