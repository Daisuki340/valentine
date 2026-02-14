$(document).ready(function() {

    var envelope = $("#envelope");

    envelope.click(function () {

        if (envelope.hasClass("open")) {
            envelope.removeClass("open").addClass("close");
        } else {
            envelope.removeClass("close").addClass("open");
        }

    });

});
