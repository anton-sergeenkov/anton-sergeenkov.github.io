// const api = '/@api/contacts.json';
const api = 'https://raw.githubusercontent.com/anton-sergeenkov/anton-sergeenkov.github.io/master/%40api/contacts.json'

new Vue({
    el: '#contacts',
    data: {
        contactsContent: null
    },
	created() {
		fetch(api)
			.then(res => res.json())
			.then(body => {
				this.contactsContent = body
			})
	}
});
