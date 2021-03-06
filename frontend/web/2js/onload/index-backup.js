$(window).on('load', function () {
	if ($(window).width() <= 1024) {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).removeClass('active');
	} else {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).addClass('active');
	}

	$('.electrostation__house').height($(window).innerHeight());

	var activeClass = 'active';
	var item = $('.type__content-list__item').filter(function () {
		return $(this).data('type') == 'network';
	});

	item.addClass(activeClass);

	if ($(window).width() <= 1440  && $(window).width() > 1024) {
		changeSize('#standaloneBack', '430', '334.7');
		changeSize('#networkBack', '437.3', '415.3');
		changeSize('#hybridBack', '440', '415.1');
		animateType('#standaloneBack', '#standalonePath', 'M104.1,160.4c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6 c-11.7,34.3-53.3,49.6-106.2,49.3S96.9,208.5,104.1,160.4L104.1,160.4');
		animateType('#networkBack', '#networkPath', 'M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z');
		animateType('#hybridBack', '#hybridPath', 'M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z');
	} else if ($(window).width() <= 1024) {
		changeSize('#networkBack', '310', '230.007');
		changeSize('#standaloneBack', '310', '230.007'); 
		changeSize('#hybridBack', '310', '230.007');
		animateType('#networkBack', '#networkPath', 'M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z');
		animateType('#standaloneBack', '#standalonePath', 'M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z');
		animateType('#hybridBack', '#hybridPath', 'M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z');
	} else if ($(window).width() > 1440) {
		changeSize('#networkBack', '437.3', '415.3');
		changeSize('#standaloneBack', '524.1', '408');
		changeSize('#hybridBack', '440', '415.1');
		animateType('#networkBack', '#networkPath', 'M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z');
		animateType('#standaloneBack', '#standalonePath', 'M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z');
		animateType('#hybridBack', '#hybridPath', 'M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z');
	}

	setTimeout(function () {
		item.children('.type-item__content')
			.children('.type-item__content-text, .type-item__content-button')
			.fadeIn();
	}, 500);

	animateSVG('#electroBack', '#electroFrom', 'M988.9,0c0,0,0.1,882.6,0.1,994.8c-24.3,73.6-98,200.2-320.5,233.8 c-723.2,109.3-950.2-628.8-217.2-867.4C745.7,265.2,749.9,74,803,0H988.9L988.9,0L988.9,0', 700);

	$('.electrostation__title, .electrostation__description, .electrostation__button, .electrostation__contact, .electrostation__switch, .header').css('animation-delay', '.6s');
	$('.electrostation__house-img').css('animation-delay', '1.2s');
	$('.electrostation__house-img').css('animation-duration', '.5s');

	animateCss('.electrostation__house-img', 'fadeIn');
	animateCss('.electrostation__title', 'fadeIn');
	animateCss('.electrostation__description', 'fadeIn');
	animateCss('.electrostation__button', 'fadeIn');
	animateCss('.electrostation__contact', 'fadeInUp');
	// animateCss('.electrostation__switch', 'fadeInDown');
});
