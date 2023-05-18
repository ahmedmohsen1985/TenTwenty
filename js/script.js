$(document).ready(function () {

    // Nav Menu for the Mobile version 414px

    $('.menuBtn').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        }
        else {
            $('.mainMenu').removeClass('act');
        }
    });

    // Hero Slider

    var $bar,
        $slick,
        tick

    var $slick = $('.hero_slider');
    var $status = $('.pagingInfo');


    $slick.on('init reInit afterChange', function (e, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span class="slideNumber">0' + i + '</span>' + '<span class="line"></span> 0' + slick.slideCount);
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
        swipe: false
    });

    //--- Hero Slider - Next Thumb

    setTimeout(function () {
        $('.slick-next').append('<span>Next</span><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="thumb"></div>');
        get_next_slick_img();
    }, 500);

    $slick.on('swipe', function (e) {
        get_next_slick_img();
    });

    $slick.on('change', '.slick-next', function (e) {
        get_next_slick_img();
    });

    $slick.on('click', '.slick-next', function (e) {
        get_next_slick_img();
    });

    function get_next_slick_img() {
        var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
    }

    //--- Hero Slider - Progress Bar 

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

    $slick.on('beforeChange', function () {
        startProgressbar();
    });

    // Swiper the product slider 

    const swiperImages = new Swiper('.products-items', {
        direction: 'horizontal',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 30,
        breakpoints: {
            640: {
                spaceBetween: 30
            },
            768: {
                spaceBetween: 60
            },
            1024: {
                spaceBetween: 180
            },
        },
    });

    const swiperContent = new Swiper('.products-content', {
        spaceBetween: 30,
        effect: "fade",
        allowTouchMove: false
    });
    
    swiperImages.controller.control = swiperContent;

    // Cursor

    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');
    var button = document.querySelectorAll('button');
    var img = document.querySelectorAll('.swiper-slide img');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('text-hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-hover');
        });
    })

    button.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('text-hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-hover');
        });
    })

    img.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })

});
