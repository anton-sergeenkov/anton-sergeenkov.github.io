// themes/vue-js/main/info.html

var arrVuejs = [
    [1, 'Информация'],
    ['vue-js', 'main', 'info',              'Информация'],
    ['vue-js', 'main', 'instance-vue',      'Экземпляр Vue'],
    ['vue-js', 'main', 'project-structure', 'Структура проекта'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'v-text_v-html', '<bg-menu>v-text</bg-menu> <bg-menu>v-html</bg-menu>'],
    ['vue-js', 'directives', 'v-show_v-if',   '<bg-menu>v-show</bg-menu> <bg-menu>v-if</bg-menu> <bg-menu>v-else</bg-menu> <bg-menu>v-else-if</bg-menu>'],
    ['vue-js', 'directives', 'v-for',         '<bg-menu>v-for</bg-menu>'],
    ['vue-js', 'directives', 'v-on',          '<bg-menu>v-on:</bg-menu>'],
    ['vue-js', 'directives', 'v-bind',        '<bg-menu>v-bind:</bg-menu>'],
    ['vue-js', 'directives', 'v-model',       '<bg-menu>v-model</bg-menu>'],
    ['vue-js', 'directives', 'v-pre',         '<bg-menu>v-pre</bg-menu>'],
    ['vue-js', 'directives', 'v-cloak',       '<bg-menu>v-cloak</bg-menu>'],
    ['vue-js', 'directives', 'v-once',        '<bg-menu>v-once</bg-menu>'],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   '<bg-menu>computed</bg-menu>'],
    ['vue-js', 'options-and-other', 'created',    '<bg-menu>created</bg-menu>'],
    ['vue-js', 'options-and-other', 'watch',      '<bg-menu>watch</bg-menu>'],
    ['vue-js', 'options-and-other', 'filters',    '<bg-menu>filters</bg-menu>'],
    ['vue-js', 'options-and-other', 'refs',       '<bg-menu>$refs</bg-menu>'],
    ['vue-js', 'options-and-other', 'transition', '<bg-menu>&lt;transition&gt;</bg-menu>'],
    ['vue-js', 'options-and-other', 'set',        '<bg-menu>set</bg-menu>'],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  '<bg-menu>props</bg-menu>'],
    ['vue-js', 'components', 'slot',                   '<bg-menu>&lt;slot&gt;</bg-menu>'],
    ['vue-js', 'components', 'template',               '<bg-menu>&lt;template&gt;</bg-menu>'],
    ['vue-js', 'components', 'emit',                   '<bg-menu>$emit</bg-menu>'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     '<bg-menu>state</bg-menu> <bg-menu>store</bg-menu>'],
    ['vue-js', 'vuex', 'getters',   '<bg-menu>getters</bg-menu>'],
    ['vue-js', 'vuex', 'mutations', '<bg-menu>mutations</bg-menu>'],
    ['vue-js', 'vuex', 'actions',   '<bg-menu>actions</bg-menu>'],
    ['vue-js', 'vuex', 'samples',   'Примеры'],

    [1, 'Vue CLI'],
    ['vue-js', 'vue-cli', 'info',              'Информация'],
    ['vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
    ['vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
    ['vue-js', 'vue-cli', 'import_export',     '<bg-menu>import</bg-menu> <bg-menu>export</bg-menu>'],
    ['vue-js', 'vue-cli', 'render',            '<bg-menu>render</bg-menu>'],
    ['vue-js', 'vue-cli', 'sample-structure',  'Пример структуры'],
    ['vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

    [1, 'Vue Router'],
    ['vue-js', 'vue-router', 'info',                 'Информация'],
    ['vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
    ['vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
    ['vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
    ['vue-js', 'vue-router', 'path-static',          'Статический путь'],
    ['vue-js', 'vue-router', 'path-dynamic',         'Динамический путь'],
    ['vue-js', 'vue-router', 'path-comparison',      'Сопоставление путей'],
    ['vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

    [1, 'Плагины'],
    ['vue-js', 'plugins', 'vuetify',     'Vuetify'],
    ['vue-js', 'plugins', 'fontawesome', 'FontAwesome'],

    [1, 'Примеры'],
    ['vue-js', 'samples', 'cart',   'Добавить / удалить из корзины']
];


build();
function build() {
    let wrapperMenu = document.createElement('slot');
    let wrapperContent = document.createElement('slot');

    arrVuejs.forEach(function(item){

        if (item[0] !== 1) {
            let elementMenu = document.createElement('a');
            elementMenu.setAttribute('href', `#${item[1]}-${item[2]}`);
            elementMenu.innerHTML = item[3];

            let path = `themes/${item[0]}/${item[1]}/${item[2]}.html`;

            $.ajax({
                type: "GET",
                url: path,
                async: false,  
                success: function (data) {
                    let elementContent = document.createElement('div');
                    elementContent.setAttribute('id', `${item[1]}-${item[2]}`);
                    elementContent.innerHTML = data;
                    wrapperContent.appendChild(elementContent);
                }          
            });

            wrapperMenu.appendChild(elementMenu);
        }

        if (item[0] === 1) {
            let elementMenu = document.createElement('div');
            elementMenu.setAttribute('class', 'theme');
            elementMenu.innerHTML = item[1];
            wrapperMenu.appendChild(elementMenu);
        }

    });

    document.querySelector('#menu-build').appendChild(wrapperMenu); 
    document.querySelector('#content').appendChild(wrapperContent); 
}

$('#menu-build a').on('click', function() {
    $('#menu-build a').removeClass('active');
    $(this).addClass('active');
});
