$("#search").keyup(function() {
    
    /* Вынимаем значение из поля */
    var searchField = $("#search").val();
    var myExp = new RegExp(searchField, "i");
                   
    /* Загружаем элементы JSON */
    $.getJSON("data.json", function(data) {
    
        var output = "<ul>";

        /* Пробегаемся по элементам массива */
        $.each(data, function(key, val) {
            
            /* если есть совподения в имени возвращаем элемент */
            if (val.name.search(myExp) != -1) {
                output += "<li>";
                output += "<h2>" + val.name + "</h2>";
                output += "<img alt='"+ val.name +"' src='images/"+ val.image +"' />";
                output += "<b>" + val.reknown + "</b>";
                output += "<p>" + val.bio + "</p>";
                output += "</li>";
            }
        });

        output += "</ul>";

        /* Добавлем текст в конец */
        $(".update").html(output);
    
    }); /* get JSON */           

}); /*  keyup */



