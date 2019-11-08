$(window).on('load', function() {
	if ($(window).width() <= 1024) {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).removeClass('active');
	} else {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).addClass('active');
	};

	animateCss('.greenwhy__content-info', 'fadeIn');
	animateCss('.greenwhy__content-image', 'fadeIn');
});
