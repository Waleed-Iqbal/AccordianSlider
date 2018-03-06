


var action = "click"; // can be hover, double-click etc
var speed = "500"; // milliseconds


$(function () {
    $("li.q").on(action, function () {
        $(this).next() // next element will be the answer
            .slideToggle(speed) // opens the answer (slides down)
            .siblings("li.a")
            .slideUp(); // closes all of the other opened answers

        var img = $(this).children('img');

        $('img').not(img).removeClass("rotate"); // every imaage except the image of clicked element

        img.toggleClass("rotate");
    });
});