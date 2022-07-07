
$(".home-products__slider1").slick({
    slide: ".card",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-products__prev1",
    nextArrow: ".home-products__next1",
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});
$(".home-products__slider2").slick({
    slide: ".card",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-products__prev2",
    nextArrow: ".home-products__next2",
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});
$('.home-products__slider1').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).closest('.container').find('.home-products__curr').html(currentSlide + 1);
});
$('.home-products__slider2').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).closest('.container').find('.home-products__curr').html(currentSlide + 1);
});
$(".home-cats__slider").slick({
    slide: ".home-cats__block",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-cats__prev",
    nextArrow: ".home-cats__next",
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});
$(".lic__slider").slick({
    slide: "a",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-products__prev1",
    nextArrow: ".home-products__next1",
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});
$('.lic__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).closest('.container').find('.home-products__curr').html(currentSlide + 1);
});
$(".main__slider").slick({
    slide: "a",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".main__prev",
    nextArrow: ".main__next"
});

(function ($) {
    $(function () {

        $('.prod__tabs-top').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.prod__tabs').find('.prod__tabs-cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);