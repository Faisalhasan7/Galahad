$(function () {

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    
    //  2. easeScroll
    $("html").easeScroll();
    
    var scroll = new SmoothScroll('a[href*="#"]');

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-75            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    
    
    
    
    
    
    
    
    
    
});
