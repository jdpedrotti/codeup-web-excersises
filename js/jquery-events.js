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
            $(this).addClass("hotpink");
        },
        function (){
            $(this).removeClass("hotpink");
        });


});

