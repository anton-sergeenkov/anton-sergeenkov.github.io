// const api = 'https://raw.githubusercontent.com/anton-sergeenkov/anton-sergeenkov.github.io/master/%40api/tech-stack.json';
const api = '/@api/tech-stack.json';

new Vue({
    el: '#stack',
    data: {
        stackContent: null
    },
	created() {
		fetch(api)
			.then(res => res.json())
			.then(body => {
				this.stackContent = body
			})
	}
});
