// Макса для номера телефона
jQuery(function($){
	$('input[name="phone"]').mask("+38 (099) 999-99-99");
});

$(window).on('load', function() {
	$('body').animate({
		opacity: 1
	});
	animateCss('.header', 'fadeInDown');
});

(function () {
	// Tabs init
	$('.tabs__content').height($('.tabs__content').height());
	tabs('.tabs-equipment');
	tabs('.tabs-types');
	tabs('.tabs-types');
	tabsType('.tabs-network');
	tabsType('.tabs-standalone');
	tabsType('.tabs-hybrid');
	// -----

	$('.navbar__right-item').click(function (e) {
		e.preventDefault();
		var id    = $(this).attr('href'),
			block = $(id).offset().top - 80;
		$('html, body').animate({
			scrollTop: block
		}, 3000);
	});

	$('.electrostation__button a').click(function (e) {
		e.preventDefault();
		var id    = $(this).attr('href'),
		    block = $(id).offset().top;
		$('html, body').animate({
			scrollTop: block
		}, 2000);
	});

	$('.service-info__content-info .btn, .greenwhy__content-info__more .btn').click(function (e) {
		e.preventDefault();
		var id    = $(this).attr('href'),
		    block = $(id).offset().top - 100;
		$('html, body').animate({
			scrollTop: block
		}, 1000);
	});

	// Request popup desktop
	$('.header__request a').click(function (e) {
		e.preventDefault();
		$('body').css('overflow-y', 'hidden');

		$('.request-btn, #buttonBack').fadeOut();
		$('.request-btn, #buttonBack').hide();

		$('.request-close').fadeIn();
		$('.request-popup').css('display', 'flex').hide().fadeIn(300, 'linear', function() {
			$('.request-close').show();
			$('.header__reques').css('background-image', '');
		});
	});

	$('.navbar-contacts a').click(function() {
		var id    = $(this).attr('href'),
			block = $(id).offset().top;

		$('.navbar-mobile').fadeOut();

		if ($('.request-popup').css('display', 'flex')) {
			$('.request-popup').fadeOut();
			$('.request-close').hide();
		}

		$('html, body').animate({
			scrollTop: block
		}, 1500);
	});

	$('.request-popup').click(function() {
		$('body').css('overflow-y', 'hidden');
	});

	$('.navbar-request a').click(function (e) {
		e.preventDefault();
		$('body').css('overflow-y', 'hidden');

		$('.header__button').fadeOut();

		$('.header__button').hide();
		$('.request-popup').css('display', 'flex').hide().fadeIn(300, 'linear', function() {
			$('.header__request, .request-close').show();
			$('.header-request-back').fadeIn();
			$('.navbar-mobile').fadeOut();
		});
	});

	$('.request-close .close').click(function (e) {
		e.preventDefault();
		$('body').css('overflow-y', 'scroll');

		$('.request-close').fadeOut();
		$('.header-request-back').fadeOut();

		$('.request-popup').fadeOut(300, 'linear', function() {
			$('.request-close').hide();
			if ($(window).width() > 1024)
				$('.request-btn, #buttonBack').fadeIn();
			else
				$('.header__button').fadeIn();
		});

	});

	$('.header-request-back').click(function() {
		$('.request-close').fadeOut();
		$('.header-request-back').fadeOut();
		$('.navbar-mobile').fadeIn(150);
		$('.request-popup').fadeOut(300, 'linear', function() {
			$('.request-close').hide();
		});
	})
	// -----------

	var linkServicesMobile = $('.navbar-item a').filter(function() {
		return $(this).data('popup') == 'services';
	}),
	linkServices = $('.navbar__list-item').filter(function() {
		return $(this).data('popup') == 'services';
	});

	$('.navbar__list-item-block').hover(function () {
			$('.header').addClass("header__background");
			$('.backgroundfade').delay(150).fadeIn();
			$(this).find('.navbar__list-item').addClass('active-menu');
			animateSVG('#buttonBack', '#buttonFrom', 'M0,0c0,0-0.4,80,180,80c0-46.9,0-80,0-80H0z', 1000);
			// $('.navbar__list-item-dropdown').delay(300).slideDown();
		}, function () {
			// $('.navbar__list-item-dropdown').slideUp();
			$(this).find('.navbar__list-item').removeClass('active-menu');
			$('.backgroundfade').fadeOut();
			if ($(window).scrollTop() < $('.electrostation').height()) {
				animateSVG('#buttonBack', '#buttonFrom', 'M1718.4,0l-948,0', 1000);
				$('.header').removeClass("header__background");
			}
		}
	);

	$(linkServices).click(function (e) {
		e.preventDefault();
	});

	$(linkServicesMobile).click(function (e) {
		e.preventDefault();
		$('.navbar-item-dropdown').slideToggle();
	});

	$(document).mouseup(function (e) {
		var container = $('.services-popup');
		if (container.has(e.target).length === 0) {
			container.fadeOut();
			$('body').css('overflow-y', 'scroll');
			$('.header').animate().attr('style', '');
			if ($('.header__button').css('opacity') == 0) {
				$('.header__button').animate({
					opacity: 1,
					top: 0,
				});
			}
		}
	});

	$('.work__content-list__item').click(function() {
		let id = $(this).data('id'),
			isActive = $('.work__content-info__item.active'),
			activation = $('.work__content-info__item').filter(function() {
				return $(this).data('id') == id;
			});

		$('.work__content-list__item').removeClass('active');
		$(this).addClass('active');

		activation.children('.work__content-info__item-info').children('.message').hide();
		activation.children('.work__content-info__item-info').children('.days').hide();
		activation.children('.work__content-info__item-info').children('.button').hide();
		activation.children('.work__content-info__item-image').hide();

		isActive.children('.work__content-info__item-info').children('.message').fadeOut(750, function() {
			activation.children('.work__content-info__item-info').children('.message').fadeIn(1000);
		});
		isActive.children('.work__content-info__item-info').children('.days').fadeOut(750, function() {
			activation.children('.work__content-info__item-info').children('.days').fadeIn(1000);
		});
		isActive.children('.work__content-info__item-info').children('.button').fadeOut(750, function() {
			activation.children('.work__content-info__item-info').children('.button').fadeIn(1000);
		});
		isActive.children('.work__content-info__item-image').fadeOut(750, function() {
			activation.children('.work__content-info__item-image').fadeIn(1500);
		});

		setTimeout(function() {
			$('.work__content-info__item').removeClass('active');
			activation.addClass('active');
		}, 750);
	});

	$('.work__content-list-mobile__item').click(function() {
		let index = $(this).data('slick-index');
		// $('.work__content-info').slick("refresh");
		$('.work__content-info').slick('slickGoTo', parseInt(index), true);
	});

	$('.slider-network-list .slider-type__list-item').click(function() {
		let index = $(this).data('slick-index');
		// $('.work__content-info').slick("refresh");
		$('.slider-network-content').slick('slickGoTo', parseInt(index), true);
	});

	$('.slider-hybrid-list .slider-type__list-item').click(function() {
		let index = $(this).data('slick-index');
		// $('.work__content-info').slick("refresh");
		$('.slider-hybrid-content').slick('slickGoTo', parseInt(index), true);
	});	

	$('.slider-standalone-list .slider-type__list-item').click(function() {
		let index = $(this).data('slick-index');
		// $('.work__content-info').slick("refresh");
		$('.slider-standalone-content').slick('slickGoTo', parseInt(index), true);
	});

	$('.request-btn').hover(function () {
			$('#buttonBack').css('transform', 'scale(1.2)')
		}, function () {
			$('#buttonBack').css('transform', 'scale(1)')
		}
	);

	$('#nav-icon').click(function (e) {
		e.preventDefault();
		$('.navbar-mobile').fadeIn();
		$('body').css('overflow-y', 'hidden');
	});

	$('.navbar-close').click(function (e) {
		e.preventDefault();
		$('.navbar-mobile').fadeOut();
		$('.header__button').fadeIn();
		$('body').css('overflow-y', 'scroll');
	})
})();

function animateType(back, path, pathPoints) {
	var s = Snap(back);
	var path = s.select(path);
	var pathPoints = pathPoints;
	path.animate({
		d: pathPoints
	}, 500, mina.linear);
}

function changeSize(item, width, height) {
	$(item).attr({
		'width': width,
		'height': height
	});
}

function animateSVG(element, path, points, delay) {
	var s = Snap(element);
	var path = s.select(path);
	var pathPoints = points;
	path.animate({
		d: pathPoints
	}, delay, mina.linear);
}

function animateCss(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function autoHeightAnimate(element, time){
	var curHeight = element.height(),
		autoHeight = element.css('height', 'auto').height();
	element.height(curHeight);
	element.stop().animate({
		height: autoHeight
	}, time);
}

function tabs(element) {
	var selector = $(element),
		linkItem = selector.find('.tabs__list-item'),
		contentItem = selector.find('.tabs__content-item'),
		imageBlock = selector.parent().parent().children('.service-image').children();

	$(linkItem).click(function (e) {
		e.preventDefault();
		let id = $(this).data('tab'),
			imageSrc = $(this).data('image-desktop'),
			imageScrset = $(this).data('image-srcset');

		linkItem.filter(function() {
			return $(this).data('tab') != id;
		}).removeClass('active');
		$(this).addClass('active');

		imageBlock.fadeOut(function() {
			imageBlock.attr({
				'src': imageSrc,
				'srcset': imageScrset
			}).fadeIn();
		});

		contentItem.filter(function() {
			return $(this).data('id') != id;
		}).fadeOut(300, function() {
			$(this).removeClass('active');
		});

		contentItem.filter(function() {
			return $(this).data('id') == id;
		}).delay(290).fadeIn(300, function() {
			$(this).addClass('active');
		});
	});
}

function tabsType(element) {
	var selector = $(element),
		linkItem = selector.find('.tabs__list-item'),
		contentItem = selector.find('.tabs__content-item');

	$(linkItem).click(function (e) {
		e.preventDefault();
		var id = $(this).data('tab');

		linkItem.filter(function() {
			return $(this).data('tab') != id;
		}).removeClass('active');
		
		$(this).addClass('active');

		contentItem.filter(function() {
			return $(this).data('id') != id;
		}).fadeOut(300, function() {
			$(this).removeClass('active');
			$('.tabs__content-item').children().slick("refresh");
		});

		contentItem.filter(function() {
			return $(this).data('id') == id;
		}).delay(290).fadeIn(300, function() {
			$(this).addClass('active');
		});
	});
}
