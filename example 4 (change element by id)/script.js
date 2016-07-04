var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}  else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.txt');

/* Создаём йункцию которая будет вызвана после учадного выполнения запроса */
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var modify = document.getElementById("update");
        modify.innerHTML = request.responseText;
    }
}


request.send();


