$(function () {
    // 1. jQuery Owl Carousel
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        fluidSpeed: 1500,
        autoplayHoverPause: true
    });

    // 2. Venobox Initialize plugin
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // 3. Animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500, );
                return false;
            }
        }
    });

    // 4. CounterUp Initialize
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    // 5. jQuery Slick Slider
    $('.slick').slick({
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        nextArrow: '.fa-angle-right',
        prevArrow: '.fa-angle-left',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //6. Back to TOp    
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    //7. Back top button fadein fadeout / menu add class  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back-to-top').fadeIn(500);
        } else {
            $('.back-to-top').fadeOut(500);
        }

        if (scrolling > 150) {
            $('.navbar').addClass('navauto');
        } else {
            $('.navbar').removeClass('navauto');
        }
    });
});
