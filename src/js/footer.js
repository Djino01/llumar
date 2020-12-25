$('.footer__arrow').on("click", function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top - 132;
    jQuery('html:not(:animated),body:not(:animated)').animate(
      { scrollTop: destination },
      600
    );
    return false;
  });