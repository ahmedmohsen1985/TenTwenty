$(document).ready(function () {

    // Scroll To ===================== 
    $(".scrollTo").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        //var headerHeight = $('header').outerHeight();
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 106)
        });
    });

    // Fixed Header ===================== 
    $(window).scroll(function () {
        var sticky = $('body.sticky-me'),
            scroll = $(window).scrollTop();

        if (scroll >= 1)
            sticky.addClass('fixed-header');
        else
            sticky.removeClass('fixed-header');

        if ($(window).width() < 991) {
            if (scroll >= 1)
                sticky.addClass('fixed-header');
            else
                sticky.removeClass('fixed-header');
        }
    });

});
