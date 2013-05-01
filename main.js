$(document).ready(function(){
    jQuery.extend(
        jQuery.easing,
        {
            easeInExpo:function (x, t, b, c, d) {
                            return 9.8*t*t/2;
                        },
        });

    $("#one_start").click(function() {
        $("#block").animate(
            {
                top:"500px",
            },
            "normal",
            "easeInQuart"
            );
    });

    $("#any_start").click(function() {
        $("<div />").addClass('block').appendTo($("#sandbox")).css({
            'top':0,
            'left':Math.random() * 500,
        }).animate(
            {
                top:"500px",
            },
            "normal",
            "easeInQuart"
        );
    });
});
