
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://isawyer.ru/script.php', true);

xhr.onload = function() {
    console.log(this.responseText);
}
xhr.onerror = function() {
    console.log(this.status);
}

xhr.send();

