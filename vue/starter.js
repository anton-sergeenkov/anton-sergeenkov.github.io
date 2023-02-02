
/*
Let's Code
› Сайт             https://anton-sergeenkov.github.io
› Контакты         https://anton-sergeenkov.github.io/contacts
› Стек технологий  https://anton-sergeenkov.github.io/stack
› Scan QR          https://anton-sergeenkov.github.io/qr
› CV               https://docs.google.com/document/d/1bFV29u7COEo9mzoAMLKWbKo87WfZn4VpkRHE3SQ25FA
*/

const ARR_LINKS_MAIN = [
    { name: '› Сайт',             link: 'https://anton-sergeenkov.github.io' },
    { name: '› Контакты',         link: 'https://anton-sergeenkov.github.io/contacts' },
    { name: '› Стек технологий',  link: 'https://anton-sergeenkov.github.io/stack' },
    { name: '› Scan QR',          link: 'https://anton-sergeenkov.github.io/qr' },
    { name: '› CV',               title: 'Google Doc', link: 'https://docs.google.com/document/d/1bFV29u7COEo9mzoAMLKWbKo87WfZn4VpkRHE3SQ25FA' },
];

const PATH_IMG = 'img/';

const ARR_PROJECTS = [
    {
        title: "Школа Let's Code",
        link: 'https://letscode-dev.github.io/',
        img: PATH_IMG+'projects/letscode.png',
        description: 'Школа программирования, курсы и менторство',
        links: [
            { name: 'Сайт', link: 'https://letscode-dev.github.io/' },
            { name: 'YouTube', link: 'https://www.youtube.com/c/letscode-dev' },
        ],
    },
    {
        title: "Веб-мастерская Panda",
        link: 'https://workshop-panda.github.io/',
        img: PATH_IMG+'projects/panda.png',
        description: 'Веб-мастерская по созданию сайтов и Freelance проекты',
        links: [
            { name: 'Сайт', link: 'https://workshop-panda.github.io/' },
            { name: 'Группа ВКонтакте', link: 'https://vk.com/workshop_panda' },
        ],
    },
    {
        title: "Блог Berserker",
        link: 'https://dzen.ru/berserker',
        img: PATH_IMG+'projects/berserker.png',
        description: 'Блог по скандинавской и славянской мифологии',
        links: [
            { name: 'Яндекс Дзен', link: 'https://dzen.ru/berserker' },
        ],
    },
];

new Vue({
    el: '#root',
    data: {
        linksMain: null,
        sectionProjects: null,
    },
    mounted() {
        this.linksMain = ARR_LINKS_MAIN;
        this.sectionProjects = ARR_PROJECTS;
    },
});
