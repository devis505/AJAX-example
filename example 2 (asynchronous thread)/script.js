var request = new XMLHttpRequest();

request.open('GET', 'data.txt', false);

/* Создаём йункцию которая будет вызвана после учадного выполнения запроса */
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        console.log(request);
        document.writeln(request.responseText);
    }
}


request.send();


