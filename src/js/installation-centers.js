$("[data-installation]").on("click", function(e){
	$(".installation-centers__tab").removeClass('active');
	$(".installation-centers__block").removeClass('active');
	$(this).addClass('active');
	var installation = $(this).data('installation');
	$('[data-installation-block="'+installation+'"]').addClass('active');
  });