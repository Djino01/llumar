$('.product--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#product-modal',
		baseClass: 'modal-fancybox',
		touch: false,
	});
});

// Phone mask
$('.phone-mask').mask('+7 (999)999-99-99');

if ($('.tilt').length > 0) {
	if ($(window).width() >= '1010'){
		const elements = document.querySelectorAll(".tilt");
		VanillaTilt.init(elements);
	}
}