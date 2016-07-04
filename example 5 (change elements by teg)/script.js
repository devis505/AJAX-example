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
        
        /* Находим массив всех элементов li */
        var modify = document.getElementsByTagName('li');
        
        /* Проставляем значение всем элементам массива */
        for (var i = 0; i < modify.length; i++) {
            modify[i].innerHTML = request.responseText;
        }
        
    }
}

request.send();


