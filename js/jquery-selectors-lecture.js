// the new $(document).ready;; waits until page is loaded to load this code
$(function (){
    const refToLibrary = $("#library")
    // id selector to alter content
    refToLibrary.text("jQuery makes life easier");
//    get reference to content
    console.log(refToLibrary.text())

    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content'
    });

    const selector = "p, li";
    //type list with chained methods
    $("p, li").text("I've taken over").css("color", "hotpink");

});


