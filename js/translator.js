function translate(language) {
    $.getJSON(`./res/${language}.json`, function(json) {         
        $.each(json, function(key, value){
            console.log(key, value);
            $(`#${key}`).html(value);
        });
    });
}

$( document ).ready(function() {
    //translate("french");

    $("#translate-french").on('click touchstart', function(){
        translate("french");
    });    

    $("#translate-english").on('click touchstart', function(){
        translate("english");
    }); 

    $("#translate-german").on('click touchstart', function(){
        translate("german");
    }); 
});
