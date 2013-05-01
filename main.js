$(document).ready(function(){
    //    $("#block").animate(
    //        {
    //            left:"+50px",
    //        }
    //        );

    jQuery.extend(
        jQuery.easing,
        {
            easeInExpo:function (x, t, b, c, d) {
                            return t*t;
//                            return 9.8*t*t/2;
                        },
        });

    $("#one_fall").click(function() {
        $("#block").animate(
            {
                top:"500px",
            },
            "normal",
            "easeInCirc"
            );
    });

    $("#any_fall").click(function() {
        $("<div />").addClass('block').appendTo($("#sandbox")).css({
            'left':Math.random() * 500,
        }).animate(
            {
                top:"500px",
            },
            "normal",
            "easeInCirc"
        );
    });

    $("#any_up").click(function() {
        $("<div />").addClass('block').appendTo($("#sandbox")).css({
            top:"500px",
            'left':Math.random() * 500,
        }).animate(
            {
                top:"0px",
            },
            "normal",
            "easeOutCirc"
        ).animate(
            {
                top:"500px",
            },
            "normal",
            "easeInCirc"
        );
    });

    $("#any_arrow").click(function() {
        $("<div />").addClass('block').appendTo($("#sandbox")).css({
            top:"500px",
            'left':'0px'
        }).animate(
            {
                top:"0px",
                left:"300px",
            },
            "normal",
            "easeOutCirc"
        ).animate(
            {
                top:"500px",
                left:"600px",
            },
            "normal",
            "easeInCirc"
        );
    });
});
