$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".page-top").fadeIn();
    } else {
        $(".page-top").fadeOut();
    }
});
