/* Загружаем элементы JSON */
$.getJSON("data.json", function(data) {
    var output = "<ul>";
    
    /* Пробегаемся по элементам массива */
    $.each(data, function(key, val) {
        output += "<li>" + val.name + "</li>";
    })
    
    output += "</ul>";
    
    /* Добавлем текст в конец */
    $(".update").append(output);
});


