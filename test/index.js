
var xhr = new XMLHttpRequest();
xhr.open('GET', 'json.json', true);

xhr.onload = function() {
    console.log(this.responseText);
}
xhr.onerror = function() {
    console.log(this.status);
}

xhr.send();

