Vue.component('v-two', {
	props: ['type', 'comment'],
    template:  `<div class="container-flex"><div class="container-half"><pre><code class="{{type | split(0)}}"><code-type>{{comment | split(0)}}</code-type><slot name="first">User Default1</slot></code></pre></div><div class="container-half"><pre><code class="{{type | split(1)}}"><code-type>{{comment | split(1)}}</code-type><slot name="last">User Default2</slot></code></pre></div></div>`,
	filters: {
		split(value, num) {
			let arr = value.split(';');
			return arr[num];
		}
	}
})

var app = new Vue({
	el: '#content'
})

