function now(format) {
    var now = new Date();

    function fomatted(param) {
        var value = eval('now.get' + param + '()');
        return value < 10 ? ('0' + value) : String(value);
    }
    format = format.replace('%Y', now.getFullYear()).replace('%m', fomatted('Month')).replace('%d', fomatted('Date'));
    format = format.replace('%H', fomatted('Hours')).replace('%M', fomatted('Minutes')).replace('%S', fomatted('Seconds'));
    return format;
}

function randomLocate() {
    location.href = '/random.html';
}

var time = 0;
function showTime() {
    time++;
    document.getElementById('time').innerHTML = now('%Y/%m/%d %H:%M:%S');
    setTimeout('showTime()', 1000);
}

function indexOnload() {
    function loadArticles(index) {
        var xhr = new XMLHttpRequest();
        index = Math.floor(Math.random() * index)
        var path = './assets/articles/' + index + '.html'
        if (index == 5) {
            document.body.removeEventListener('click', randomLocate);
        }
        xhr.open('get', path);
        xhr.send();
        xhr.onload = function() {
            var article = xhr.responseText;
            document.getElementById('ariticle').innerHTML = article;
        }
    }
    document.body.addEventListener('click', randomLocate);
    showTime();
    loadArticles(10);
    setInterval(function() {
        if (time == 3) {
            randomLocate()
        }
    })
}

function aboutOnload() {
    showTime();
    loadUrls();
    document.body.addEventListener('click', randomLocatoin);
    setInterval(function() {
        document.getElementById('time-past').innerText = time;
    })
}