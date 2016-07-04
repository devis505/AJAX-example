var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}  else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.xml');

/* Создаём функцию, которая будет вызвана после удачного выполнения запроса */
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        
        /* Получаем массив элементов name из XML */
        var items = request.responseXML.getElementsByTagName('name');
        var output = "<ul>";
        
        /* Проставляем в переменную output значение всех элементов массива items */
        for (var i = 0; i < items.length; i++) {
            output += "<li>" + items[i].firstChild.nodeValue + "</li>";
        }
        
        output += "</ul>";
        
        /* Находим элемент с ID update и записываем в него результат*/
        document.getElementById("update").innerHTML = output;
    }
}

request.send();


