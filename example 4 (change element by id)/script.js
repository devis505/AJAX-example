var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}  else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.txt');

/* Создаём функцию, которая будет вызвана после удачного выполнения запроса */
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {

        /* Находим элемент по ID */
        var modify = document.getElementById("update");
        
        modify.innerHTML = request.responseText;
    }
}


request.send();


