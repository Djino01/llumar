if ($(window).width() < '760'){
	if ($(".sidebar").length > 0){
        $('.sidebar__caption').on("click", function(){
            $(this).parent().toggleClass('active');
            if( $(this).parent().hasClass('active')) {
                $(this).next().slideDown();
            } else {
                $('.sidebar__menu').slideUp();
                $(".sidebar__box").removeClass("active");
            }
        });
        $(function ($) {
            $(document).mouseup(function (e) {
            var div = $(".sidebar__box.active");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.removeClass("active");
                }
            });
        });
        $(function ($) {
            $(document).mouseup(function (e) {
                var div = $(".sidebar__menu");
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.slideUp();
                }
            });
        });
    }
  }