if ($("#where-buy").length > 0) {
	const containerID = '#where-buy';
	const scrollbar = Scrollbar.init(document.querySelector(containerID), {
		damping: 0.1,
		alwaysShowTracks: true
	});
}

if ($(".where-buy__choice").length > 0) {
	$(".where-buy__choice").on("click", function(){
		if( $(".where-buy__colors").hasClass('toning')) {
			$(".where-buy__colors").removeClass("toning");
			$(".where-buy__colors").addClass("antigravel");
			$(".where-buy__block_toning, .where-buy__map-block_toning").removeClass("active");
			$(".where-buy__block_antigravel, .where-buy__map-block_antigravel").addClass("active");
			$(".option-1").removeClass("active");
			$(".option-2").addClass("active");
		} else {
			$(".where-buy__colors").addClass("toning");
			$(".where-buy__colors").removeClass("antigravel");
			$(".where-buy__block_antigravel, .where-buy__map-block_antigravel").removeClass("active");
			$(".where-buy__block_toning, .where-buy__map-block_toning").addClass("active");
			$(".option-1").addClass("active");
			$(".option-2").removeClass("active");
		}
	});
}