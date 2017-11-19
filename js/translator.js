function translate(language) {
    $.getJSON(`./res/${language}.json`, function(json) {         
        $.each(json, function(key, value){
            console.log(key, value);
            $(`#${key}`).html(value);
        });
    });
}

$( document ).ready(function() {
    translate("french");    
});
