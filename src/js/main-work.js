if ($(window).width() <= '1010') {
	var swiperHome = $('.main-work__row');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 1.4,
			spaceBetween: 10,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
			breakpoints: {
				100: {
					slidesPerView: 1.25,
					spaceBetween: 10,
					slidesPerGroup: 1,
				},
				760: {
					slidesPerView: 1.4,
					spaceBetween: 10,
					slidesPerGroup: 1,
				}
			}
		});
	});
}