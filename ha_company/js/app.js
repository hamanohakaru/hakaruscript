function NotScrollTop0__init() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
        $("html").addClass("not-scroll-top-0");
    } else {
        $("html").removeClass("not-scroll-top-0");
    }
}

$(window).scroll(NotScrollTop0__init);
NotScrollTop0__init();
