function now(format) {
    var now = new Date();

    function fomatted(param) {
        var value = eval('now.get' + param + '()');
        return value < 10 ? ('0' + value) : String(value);
    }

    var year  = now.getFullYear();
    var month = fomatted('Month');
    var day   = fomatted('Date');
    format = format.replace('%Y', year).replace('%m', month).replace('%d', day);

    var hour   = fomatted('Hours');
    var minute = fomatted('Minutes');
    var second = fomatted('Seconds');
    format = format.replace('%H', hour).replace('%M', minute).replace('%S', second);

    console.log(now.getTimezoneOffset())

    return format;
}

var time = 0;
function show() {
    if (time == 2) {
        randomLocatoin();
    }
    time++;
    var str = "現在時間 " + now('%Y/%m/%d %H:%M:%S') + '<br / >' + Date();
    document.getElementById("time").innerHTML = str;
    setTimeout("show()", 1000);
}

window.onload = function() {
    show();
    loadUrls();
    loadArticles(10);
    document.body.addEventListener("click", randomLocatoin);
}
