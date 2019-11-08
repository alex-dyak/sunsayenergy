(function() {
    $('.question-list ul li a, .work__content-info__item-info .btn, .type-info__content-info .more a').click(function (e) {
		e.preventDefault();
		var id    = $(this).attr('href'),
		    block = $(id).offset().top - 100;
		$('html, body').animate({
			scrollTop: block
		}, 1500);
	});
})();
