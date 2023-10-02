$(function() {
    $('.category-slider').slick({
        infinite: false,
        slidesToShow: 4,
        appendArrows: $('.category-slider__arrows'),
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});