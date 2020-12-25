if ($(".video").length > 0){
	$('.video__slick').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
}
$(".video__play").fancybox({
	backFocus: false
});