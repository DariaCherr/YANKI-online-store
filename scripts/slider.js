$(function() {
    $('.category-slider').slick({
        infinite: false,
        slidesToShow: 4,
        appendArrows: $('.category-slider__arrows'),
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});