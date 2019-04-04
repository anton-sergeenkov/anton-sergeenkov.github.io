
hljs.initHighlightingOnLoad();

var menu = `
    <a href="js.html"            class="menu menu-js">js</a>
    <a href="js_functions.html"  class="menu menu-js">functions</a>
    <a href="js_objects.html"    class="menu menu-js">objects</a>
    <a href="js_tasks.html"      class="menu menu-js">tasks</a>
    <a href="canvas.html"        class="menu menu-js">canvas</a>

    <a href="vue_js.html"        class="menu menu-jsfw">vue.js</a>
    <a href="jquery.html"        class="menu menu-jsfw">jquery</a>
    
    <a href="html.html"          class="menu menu-html">html</a>
    <a href="css.html"           class="menu menu-html">css</a>
    <a href="svg.html"           class="menu menu-html">svg</a>
    <a href="css_flex.html"      class="menu menu-html">flexbox</a>
    <a href="css_grid.html"      class="menu menu-html">css grid</a>

    <a href="sass.html"          class="menu menu-other">sass</a>
    <a href="npm.html"           class="menu menu-other">npm</a>
    <a href="git.html"           class="menu menu-other">git</a>
    <a href="other.html"         class="menu menu-other">other</a>
    <a href="theory.html"        class="menu menu-other">theory</a>

    <a href="nodejs.html"        class="menu menu-php">node.js</a>
    <a href="php.html"           class="menu menu-php">php</a>
    <a href="python.html"        class="menu menu-php">python</a>
    <a href="mysql.html"         class="menu menu-php">mysql</a>
`;
$('#menu-top').html(menu);

$('#menu-left > a').on('click', function() {
    $('#menu-left a').removeClass('active');
    $(this).addClass('active');
});

function localStorageService() {
    var value = localStorage.getItem('menu');
    if (value !== null) {
        if (value == 'true') {
            $('#menu-left').addClass('hide');
        } else {
            $('#menu-left').removeClass('hide');
        }
    }   
}
localStorageService();
    
$('#menu-left-show').on('click', function() {
    $('#menu-left').toggleClass('hide');
    var isHide = $('#menu-left').hasClass('hide');
    localStorage.setItem('menu', isHide);
});



$(window).on('resize', function() {
    setLineScroll();
});

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

setLineScroll();
function setLineScroll() {
    var lineScroll = $('#menu-left').hasScrollBar()
    if (!lineScroll) {
        $('#menu-left').css('border-right', '8px solid rgba(0,0,0,0.1)');
    } else {
        $('#menu-left').css('border-right', 'none');
    }
}



function get_vMethodsTemplate() {

// <v-methods>
//     <v-name>method</v-name>
//     <v-arg>arguments</v-arg>
//     <v-desc></v-desc>
//         <v-one-arg>arguments</v-one-arg><v-one-desc>description</v-one-desc>
// </v-methods>

    let vMethods = document.querySelector('v-methods');
    let vName    = vMethods.querySelector('v-name').innerText;
    let vArg     = vMethods.querySelector('v-arg').innerText;
    let vDesc    = vMethods.querySelector('v-desc').innerText;
    let vOneArg  = vMethods.querySelector('v-one-arg').innerText;
    let vOneDesc = vMethods.querySelector('v-one-desc').innerText;

    let vMethodsTemplate = `
    <pre><code class="js light">
    <table>
        <tr><td><bg-methods>${vName}</bg-methods><bg-arguments>${vArg}</bg-arguments></td><td>  // ${vDesc}</td></tr>
        <tr><td><em>    &#8226; ${vOneArg}</em></td><td>  // ${vOneDesc}</td></tr>
    </table></code></pre>`;
    document.querySelector('v-methods').innerHTML = vMethodsTemplate;   
}
