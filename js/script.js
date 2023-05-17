$(document).ready(function () {

    var $bar,
        $slick,
        tick

    var $slick = $('.hero_slider');
    var $status = $('.pagingInfo');


    $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html('<span>0' + i + '</span>' + '<span class="line"></span> 0' + slick.slideCount);
    });

    $slick.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: '<button type="button" class="slick-custom-buttom slick-next"><div data-slick-index="0" class="progressBar"></div></button>',
        useTransform: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false, 
    });
    setTimeout(function () {
        $('.slick-next').append('<span>Next</span><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="thumb"></div>');
        get_next_slick_img();
    }, 500);

    $slick.on('swipe', function(event, slick, direction) {
        if (direction == 'left') {
            get_next_slick_img();
        }
        else {
          get_next_slick_img();
        }
    });
    
    $slick.on('click', '.slick-next', function () {
        get_next_slick_img();
    });
    
    function get_next_slick_img() {
        var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
    }


    $bar = $('.progressBar');

    function startProgressbar() {
        resetProgressbar();
        tick = setInterval(interval, 30);
    }

    function interval() {
        $bar.css({
            Animation: "progress 4s linear forwards"
          });
      }
    
      function resetProgressbar() {
        $bar.css({
            Animation: "stop 4s linear forwards"
        });
        clearTimeout(tick);
      }
    

    startProgressbar();

    $slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        startProgressbar();
    });

});
