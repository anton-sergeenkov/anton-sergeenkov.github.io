
/*
Let's Code
› Сайт             https://anton-sergeenkov.github.io
› Контакты         https://anton-sergeenkov.github.io/contacts
› Стек технологий  https://anton-sergeenkov.github.io/stack
› Scan QR          https://anton-sergeenkov.github.io/qr
› CV               https://docs.google.com/document/d/1bFV29u7COEo9mzoAMLKWbKo87WfZn4VpkRHE3SQ25FA
*/

const ARR_MENU_LINKS = [
    {
        href: 'files/cv.pdf',
        title: 'CV',
        accent: true,
    },
    {
        href: 'stack.html',
        title: 'Technologies Stack',
    },
    {
        href: 'contacts.html',
        title: 'Contacts',
    },
    {
        href: 'qr.html',
        title: 'Scan QR',
    },
];

const ARR_STACK = [
    {
        title: 'Frontend',
        items: ['React.js', 'Vue.js', 'Next.js', 'TypeScript']
    },
    {
        title: 'Backend',
        items: ['Node.js']
    },
    {
        title: 'Tools',
        items: ['Git', 'Webpack', 'Jira']
    },
    {
        title: 'Methodology',
        items: ['Agile', 'Scrum', 'Gitflow']
    },
];

const PATH_IMG_PROJECTS = 'img/projects/';

const ARR_PROJECTS = [
    {
        title: "Courses \"Let's Code\"",
        link: 'https://letscode-dev.github.io/',
        img: PATH_IMG_PROJECTS+'letscode.svg',
        imgBig: true,
        description: 'School of programming, courses and mentoring',
        links: [
            { name: 'Website', link: 'https://letscode-dev.github.io/' },
            { name: 'YouTube', link: 'https://www.youtube.com/c/letscode-dev' },
        ],
    },
    {
        title: "Blog \"Berserker\"",
        link: 'https://dzen.ru/berserker',
        img: PATH_IMG_PROJECTS+'berserker.svg',
        description: 'Blog about Scandinavian and Slavic mythology',
        links: [
            { name: 'Yandex Dzen', link: 'https://dzen.ru/berserker' },
        ],
    },
    {
        title: "Habr Publications",
        link: 'https://habr.com/ru/users/anton-sergeenkov/posts/',
        img: PATH_IMG_PROJECTS+'habr.svg',
        description: 'Development publications on website Habr',
        links: [
            { name: 'Habr', link: 'https://habr.com/ru/users/anton-sergeenkov/posts/' },
        ],
    },
    {
        title: "Web Studio \"Panda\"",
        link: 'https://workshop-panda.github.io/',
        img: PATH_IMG_PROJECTS+'panda.svg',
        description: 'Website development web studio and Freelance projects',
        links: [
            { name: 'Website', link: 'https://workshop-panda.github.io/' },
            { name: 'VKontakte Community', link: 'https://vk.com/workshop_panda' },
        ],
    },
];

const PATH_ICONS_SOCIAL = 'img/social-icons/';

const ARR_SOCIAL_ICONS = [
    {
        img: PATH_ICONS_SOCIAL+'linkedin.png',
        title:'Linkedin',
        link: 'https://www.linkedin.com/in/sergeenkov-anton',
        active: true
    },
    {
        img: PATH_ICONS_SOCIAL+'github.png',
        title:'GitHub',
        link: 'https://github.com/anton-sergeenkov',
        active: true
    },
    {
        img: PATH_ICONS_SOCIAL+'telegram.png',
        title:'Telegram',
        link: 'https://t.me/anton_sergeenkov',
        active: true
    },
    {
        img: PATH_ICONS_SOCIAL+'skype.png',
        title:'Skype',
        link: 'https://join.skype.com/invite/hZmBtAZQ0EXY'
    },
    {
        img: PATH_ICONS_SOCIAL+'facebook.png',
        title:'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100002126643722'
    },
    {
        img: PATH_ICONS_SOCIAL+'instagram.png',
        title:'Instagram',
        link: 'https://www.instagram.com/anton.sergeenkov'
    },
    {
        img: PATH_ICONS_SOCIAL+'vk.png',
        title:'VKontakte',
        link: 'https://vk.com/anton.sergeenkov'
    },
];

const apiStack = 'https://raw.githubusercontent.com/anton-sergeenkov/anton-sergeenkov.github.io/master/%40api/stack.json';

new Vue({
    el: '#root',
    data: {
        menu: null,
        projects: null,
        socialIcons: null,
        stack: null,
        stackContent: null
    },
    mounted() {
        this.menu = ARR_MENU_LINKS;
        this.projects = ARR_PROJECTS;
        this.socialIcons = ARR_SOCIAL_ICONS;
        this.stack = ARR_STACK;
    },
	created() {
		fetch(apiStack)
			.then(res => res.json())
			.then(body => {
				this.stackContent = body
			})
	}
});
