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

document.getElementById('search_input').onkeyup = function (e) {
    if (e.keyCode == 13) {

        search(document.getElementById('search_input').value);
    }
};