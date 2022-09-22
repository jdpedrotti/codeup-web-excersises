$(function (){

        const listItems = $("li")

    listItems.each(function (index){
        if (index % 2 !== 0){
            $(this).css("font-style", "italic");
        }
    });

    listItems.first().css("font-size", "larger")

    $("li a").last().css("text-decoration", "underline dotted")

    $("button").on('click', function (){
        // $("main").children.css("font-family", "sans-serif");
        $("main ul").toggleClass("sansSerif")
    });

    $("h2").css({
        "color": "blue",
        "text-decoration": "underline",
        "cursor": "pointer"
    }).on('click',function (){
        $(this).next().slideToggle();
    });

    $("header p").hover(function (){
        $(this).parent().toggleClass("darkMode")
    });

});