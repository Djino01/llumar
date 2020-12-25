// Main menu open
if ($(".header__burger").length > 0) {
	$(".header__burger").on("click", function(){
		$("body").toggleClass("lock");
		$(".header__mobile").toggleClass("active");
	});
	$(".header__closed").on("click", function(){
		$("body").removeClass("lock");
		$(".header__mobile").removeClass("active");
	});
}