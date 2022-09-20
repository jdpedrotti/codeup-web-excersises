// $(document).ready(function (){
//     jQuery("h3").click(function (){
//         $(this).next().slideToggle(500);
//     });
// });

//      $ is shortcut for jQuery
//      use $(document) to load entire page before it applies jquery stuff to it,, use when jquery link is in the head of html

function init() {
    jQuery("h3").click(function (){
        $(this).next().slideToggle(500);
    });
}

window.onload = init;

// above is done using vanilla javascript