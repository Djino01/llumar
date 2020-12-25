$("[data-info]").on("click", function(e){
	$(".main-info__tab").removeClass('active');
	$(".main-info__box").removeClass('active');
	$(this).addClass('active');
	var info = $(this).data('info');
	$('[data-info-block="'+info+'"]').addClass('active');
  });

$(".main-info__article-btn").on("click", function(event){
	event.preventDefault();
	$(this).toggleClass("active");
	$(".main-info__article-box").toggleClass("active")
});

if ($(window).width() < '760'){
	if ($(".main-info__top").length > 0){
        $('.main-info__top').on("click", function(){
			$(this).parent().toggleClass('active');
            if( $(this).parent().hasClass('active')) {
				$(".video__slick").slick('setPosition');
				$(".reviews__slick").slick('setPosition');
                $(this).next().slideDown();
            } else {
                $('.main-info__block').slideUp();
                $(".main-info__box").removeClass("active");
            }
        });
        $(function ($) {
            $(document).mouseup(function (e) {
            var div = $(".main-info__box.active");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.removeClass("active");
                }
            });
        });
        $(function ($) {
            $(document).mouseup(function (e) {
                var div = $(".main-info__block");
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.slideUp();
                }
            });
        });
    }
  }