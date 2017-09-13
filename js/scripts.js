$(document).ready(function() {
	// INIT
    menuMobile();
    fullSlide();
    backToTop();
    backToContent();

    $(window).resize(function(e) {
        fullSlide();
    });

	// FUNCTION
	gallerySlide();
	galleryFilter();
});

function gallerySlide() {
    if( $('.slide-gallery .owl-carousel').length ) {
    	var owl = $('.slide-gallery .owl-carousel');
        owl.owlCarousel({
            items: 1,
            margin: 0,
            nav: true,
            dots: false,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
          navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
        });
    }
}

function galleryFilter() {
    if( $('.gallery-filter').length ) {
    	setTimeout(function() {
            $('.gallery-filter .gallery-items').isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
            });
            
            $('.gallery-filter .gallery-options button').click(function() {
                $('.gallery-filter .title-filter h1').text( $(this).text() );
                $('.gallery-filter .gallery-options button').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.gallery-filter .gallery-items').isotope({
                    filter: selector
                });
                return false;
            });
        }, 500);
    }
}

function menuMobile() {
    $('nav#menu').mmenu({
        extensions              : [ 'effect-slide-menu', 'shadow-page'],
        keyboardNavigation      : false,
        screenReader            : false,
        counters                : false,
        navbar      : {
                        title       : 'MENU'
        },
        navbars     : [
            {
                position    : 'bottom',
                content     : [
                    "<a href='#' target='_blank'>QUEEN'S NAILS</a>"
                ]
            }
        ]           
    });
}

function fullSlide() {
    setTimeout(function() {
        var height = $('.full-slide-style img').height();
        $('.full-slide-style').css('height', height);
        var swiper = new Swiper('.full-slide-style .swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            mousewheelControl: false,
            autoHeight: true,
            simulateTouch: false,
            onlyExternal: true,
        });
    }, 500);
}

function backToContent() {
    if ($('#back-to-content').length) {
        $('#back-to-content').on('click', function (e) {
            e.preventDefault();
            var height_slide = $('.full-slide-style').height();
            console.log(height_slide);

            $('html,body').animate({
                scrollTop: height_slide
            }, 700);
        });
    }
}

function backToTop() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
        };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}