if ($(".reviews").length > 0){
	$('.reviews__slick').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1010,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.reviews__arrow.reviews__arrow_prev').on("click", function (event) {
		$(this).parents('.reviews').find('.reviews__slick').slick('slickPrev');
	});
	$('.reviews__arrow.reviews__arrow_next').on("click", function (event) {
		$(this).parents('.reviews').find('.reviews__slick').slick('slickNext');
	});
	
}