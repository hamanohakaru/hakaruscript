$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 1200);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme2").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 1200);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme .me_1").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 2400);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme .me_2").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 3000);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme2 .me_3").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 7000);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $(".hideme2 .me_4").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ opacity: "1" }, 8000);
            }
        });
    });
});
