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

var time = 0;
function showTime() {
    time++;
    document.getElementById('time').innerHTML = now('%Y/%m/%d %H:%M:%S');
    setTimeout('showTime()', 1000);
}
function indexOnload() {
    document.body.addEventListener('click', randomLocatoin);
    showTime();
    loadUrls();
    loadArticles(10);
    setInterval(function() {
        if (time == 2) {
            randomLocatoin();
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