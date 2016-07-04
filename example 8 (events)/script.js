/* Устанавливаем вызов функцию loadAJAX на событие "нажатие" */
var myButton = document.getElementById("loadbutton");
myButton.onclick = loadAJAX;

function loadAJAX() {
    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }  else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', 'data.json');

    /* Создаём функцию, которая будет вызвана после удачного выполнения запроса */
    request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {

            /* Получаем массив элементов из JSON */
            var items = JSON.parse(request.responseText);

            var output = "<ul>";

            /* Проставляем в переменную output значение всех элементов массива items.name */
            for (var key in items) {
                output += "<li>" + items[key].name + "</li>";
            }

            output += "</ul>";

            /* Находим элемент с ID update и записываем в него результат*/
            document.getElementById("update").innerHTML = output;
        }
    }

    request.send();
} //loadAJAX



