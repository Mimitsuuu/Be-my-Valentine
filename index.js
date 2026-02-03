$(document).ready(function () {
    const envelope = $("#envelope");
    const buttons = $(".reset");

    envelope.on("click", function () {
        if (envelope.hasClass("open")) {
            envelope.addClass("close").removeClass("open");
            buttons.removeClass("show");
        } else {
            envelope.addClass("open").removeClass("close");
            buttons.addClass("show");
        }
    });
});

function moveRandomEl(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 98 + 5)
    + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5)
    + "%";
}

const moveRandom = document.querySelector
("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});