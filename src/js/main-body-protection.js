// Price accordion
if ($(".main-body-protection__top").length > 0){
	$('.main-body-protection__top').on("click", function(){
		$(this).parent().toggleClass('active');
		if( $(this).parent().hasClass('active')) {
			$(this).next().slideDown();
		} else {
			$('.main-body-protection__text').slideUp();
			$(".main-body-protection__item").removeClass("active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".main-body-protection__item.active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".main-body-protection__text");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});
}