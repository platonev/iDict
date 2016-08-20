function search(word) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://m.youdao.com/singledict?q=' + word + '&dict=ee&le=eng&more=false');
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            document.getElementById('ee').innerHTML = request.responseText;
        }
    }
    request.send();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://m.youdao.com/singledict?q=' + word + '&dict=collins&le=eng&more=false');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById('collins').innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}

function suggest() {
    var q = document.getElementById('search_input').value;
    var suggest = document.getElementById('suggest_list');

    if (q.length > 0) {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://dict.youdao.com/suggest?type=DESKDICT&num=5&q=' + q);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {

                suggest.innerHTML = '';

                var responseXML = request.responseXML;

                var items = responseXML.getElementsByTagName('item');

                for (var i = 0; i < items.length; i++) {

                    suggest.innerHTML += '<li class="item">' + items[i].getElementsByTagName("title")[0].firstChild.nodeValue + '</li>'
                }
            }
        }
        request.send();
    } else {
        suggest.innerHTML = '';
    }
}

document.getElementById('search_input').onkeyup = function (e) {
    if (e.keyCode == 13) {
        document.getElementById('suggest_list').innerHTML = '';
        search(document.getElementById('search_input').value);
    } else {
        suggest();
    }
};