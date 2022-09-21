$(function (){

    $("#clickMe").on('click', function (){
        alert('You clicked me');
    });

    $("#create-an-element").on('click', function (){

        $(this).after("<button class='will-this-work'>Click Me</button>");
    });

        // $(document).on('click', '.will-this-work', function (){
        //
        // alert("ooooooh yeahhhh")

        $("#dynamic-content").on('click', 'will-this-work', function (){
            alert("ooooooh yeahhhh");
        });

        // changes color of box when hovering
        // uses class made in css instead of using .css to clean up js
        $(".box").hover(function (){
            $(this).toggleClass('hotpink');
        }),
        // function (){
        //     $(this).removeClass("hotpink");
        // });

        $(document).keydown(function (e){
            console.log(e.originalEvent.key);
        })

    console.log($("div").text()); // <- only produces text
    console.log($("div").html()); // <- produces text and html tags
    $("div p").text("I can set the content like this");
    $("p").before("<ul><li>Hi I am a list</li></ul>");

});

