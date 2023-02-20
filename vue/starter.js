
/*
Let's Code
› Сайт             https://anton-sergeenkov.github.io
› Контакты         https://anton-sergeenkov.github.io/contacts
› Стек технологий  https://anton-sergeenkov.github.io/stack
› Scan QR          https://anton-sergeenkov.github.io/qr
› CV               https://docs.google.com/document/d/1bFV29u7COEo9mzoAMLKWbKo87WfZn4VpkRHE3SQ25FA
*/

const ARR_LINKS_MAIN = [
    { name: '› CV',        link: 'https://anton-sergeenkov.github.io/files/cv.pdf' },
    { name: '› GitHub',    link: 'https://github.com/anton-sergeenkov' },
    { name: '› LinkedIn',  link: 'https://www.linkedin.com/in/sergeenkov-anton' },
    { name: '› Telegram',  link: 'https://t.me/anton_sergeenkov' },
];

const PATH_IMG = 'img/';

const ARR_PROJECTS = [
    {
        title: "Courses \"Let's Code\"",
        link: 'https://letscode-dev.github.io/',
        img: PATH_IMG+'projects/letscode.png',
        description: 'School of programming, courses and mentoring',
        links: [
            { name: 'Website', link: 'https://letscode-dev.github.io/' },
            { name: 'YouTube', link: 'https://www.youtube.com/c/letscode-dev' },
        ],
    },
    {
        title: "Blog \"Berserker\"",
        link: 'https://dzen.ru/berserker',
        img: PATH_IMG+'projects/berserker.png',
        description: 'Blog about Scandinavian and Slavic mythology',
        links: [
            { name: 'Yandex Dzen', link: 'https://dzen.ru/berserker' },
        ],
    },
    {
        title: "Habr Publications",
        link: 'https://habr.com/ru/users/anton-sergeenkov/posts/',
        img: PATH_IMG+'projects/habr.png',
        description: 'Publications on website Habr',
        links: [
            { name: 'Habr', link: 'https://habr.com/ru/users/anton-sergeenkov/posts/' },
        ],
    },
    {
        title: "Web studio \"Panda\"",
        link: 'https://workshop-panda.github.io/',
        img: PATH_IMG+'projects/panda.png',
        description: 'Website development web studio and Freelance projects',
        links: [
            { name: 'Website', link: 'https://workshop-panda.github.io/' },
            { name: 'VKontakte Community', link: 'https://vk.com/workshop_panda' },
        ],
    },
];

const socialIconsPath = 'img/social-icons/';

const ARR_SOCIAL_ICONS = [
    {
        img: socialIconsPath+'linkedin.png',
        title:'Linkedin',
        link: 'https://www.linkedin.com/in/sergeenkov-anton'
    },
    {
        img: socialIconsPath+'github.png',
        title:'GitHub',
        link: 'https://github.com/anton-sergeenkov'
    },
    {
        img: socialIconsPath+'telegram.png',
        title:'Telegram',
        link: 'https://t.me/anton_sergeenkov'
    },
    {
        img: socialIconsPath+'skype.png',
        title:'Skype',
        link: 'https://join.skype.com/invite/hZmBtAZQ0EXY'
    },
    {
        img: socialIconsPath+'facebook.png',
        title:'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100002126643722'
    },
    {
        img: socialIconsPath+'instagram.png',
        title:'Instagram',
        link: 'https://www.instagram.com/anton.sergeenkov'
    },
    {
        img: socialIconsPath+'vk.png',
        title:'VKontakte',
        link: 'https://vk.com/anton.sergeenkov'
    },
];

new Vue({
    el: '#root',
    data: {
        linksMain: null,
        sectionProjects: null,
        socialIcons: null,
    },
    mounted() {
        this.linksMain = ARR_LINKS_MAIN;
        this.sectionProjects = ARR_PROJECTS;
        this.socialIcons = ARR_SOCIAL_ICONS;
    },
});
