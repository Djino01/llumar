$("[data-product-info]").on("click", function(e){
	$(".product-info__tab").removeClass('active');
	$(".product-info__block").removeClass('active');
	$(this).addClass('active');
	var product = $(this).data('product-info');
	$('[data-product-info-block="'+product+'"]').addClass('active');
  });