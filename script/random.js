// var path = require("path")
var urls;
function loadUrls() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/assets/urls.json');
    xhr.send();
    xhr.onload = function() {
        urls = JSON.parse(xhr.responseText);
    }
}
function randomLocatoin() {
    window.location = urls[Math.floor(Math.random() * urls.length)]
}
function loadArticles(index) {
    var xhr = new XMLHttpRequest();
    index = Math.floor(Math.random() * index)
    var path = '/assets/article/' + index + '.txt'
    console.log(path)
    xhr.open('get', path);
    xhr.send();
    xhr.onload = function() {
        article = xhr.responseText;
        console.log(article)
        document.getElementById('ariticle').innerText = article;
        if (!index) {
            document.getElementById('ariticleInfo').remove()
        }
    }
}