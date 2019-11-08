(function () {
	$('.example-carousel').slick({
		infinite      : false,
		slidesToShow  : 3,
		slidesToScroll: 3,
		arrows        : true,
		// variableWidth : true,
		touchMove     : false,
		accesibility  : false,
		draggable     : false,
		swipe         : false,
		speed         : 1000,
		nextArrow     : '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		asNavFor	  : '.popup-example',
		responsive	  : [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				},
			},
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow  : 1,
					slidesToScroll: 1,
					variableWidth : true,
					centerMode    : true,
					touchMove     : true,
					accesibility  : true,
					draggable     : true,
					swipe         : true,
				}
			}
		]
	});

	$('.popup-example').slick({
		infinite      : false,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : true,
		nextArrow     : '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		asNavFor      : '.example-carousel',
	});

	$('.complex__content-list').slick({
		infinite      : false,
		slidesToShow  : 3,
		arrows        : false,
		responsive	  : [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
					centerMode: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '30px'
				}
			}
		]
	});

	$('.review__content-list').slick({
		infinite      : false,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : true,
		adaptiveHeight: true,
		nextArrow     : '<div class="review-next"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="review-prev"><img src="/img/icon/Arrow.svg" alt="" /></div>',
	});

	$('.work__content-list-mobile').slick({
		infinite      : false,
		slidesToShow  : 3,
		slidesToScroll: 1,
		arrows		  : true,
		variableWidth : true,
		centerMode	  : true,
		nextArrow     : '<div class="review-next"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="review-prev"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		asNavFor	  : '.work__content-info',
		responsive	  : [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true
				}
			}
		]
	});

	if ($(window).width() <= 1024) {
		$('.work__content-info').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows		  : false,
			asNavFor	  : '.work__content-list-mobile',
		});

		$('.slider-equipment__list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
			asNavFor	  : '.slider-equipment__content',
		});

		$('.slider-types__list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
			asNavFor	  : '.slider-types__content',
		});

		$('.slider-equipment__content').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '0',
			arrows		  : false,
			asNavFor	  : '.slider-equipment__list',
		});

		$('.slider-types__content').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '0',
			arrows		  : false,
			asNavFor	  : '.slider-types__list',
		});
	}

	if ($(window).width() <= 768) {
		$('.services__list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
		});
		$('.slider-network-list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
			asNavFor	  : '.slider-network-content',
		});
		$('.slider-network-content').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode    : true,
			centerPadding : '0',
			arrows        : false,
			// adaptiveHeight: true,
			asNavFor      : '.slider-network-list',
		});
		$('.slider-standalone-list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
			asNavFor	  : '.slider-standalone-content',
		});
		$('.slider-standalone-content').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode    : true,
			centerPadding : '0',
			arrows        : false,
			// adaptiveHeight: true,
			asNavFor      : '.slider-standalone-list',
		});
		$('.slider-hybrid-list').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode	  : true,
			centerPadding : '15px',
			arrows		  : false,
			variableWidth : true,
			asNavFor	  : '.slider-hybrid-content',
		});
		$('.slider-hybrid-content').slick({
			infinite      : false,
			slidesToShow  : 1,
			slidesToScroll: 1,
			centerMode    : true,
			centerPadding : '0',
			arrows        : false,
			// adaptiveHeight: true,
			asNavFor      : '.slider-hybrid-list',
		});
	}

	$('.network-carousel, .standalone-carousel, .hybrid-carousel').slick({
		infinite      : true,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : false,
		nextArrow     : '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		responsive : [
			{
				breakpoint: 768,
				settings: {
					touchMove     : false,
					accesibility  : false,
					draggable     : false,
					swipe         : false,
					adaptiveHeight: true,
				}
			}
		]
	});

	
	$('.project-info__slider-nav').slick({
		infinite      : false,
		slidesToShow  : 5,
		slidesToScroll: 1,
		focusOnSelect : true,
		arrows        : false,
		vertical      : true,
		dots          : false,
		asNavFor      : '.project-info__slider',
		responsive : [
			{
				breakpoint: 420,
				settings: {
					slidesToShow : 3,
				}
			}
		]
	});

	$('.project-info__slider').slick({
		infinite      : false,
		slidesToShow  : 1,
		slidesToScroll: 1,
		arrows        : true,
		fade          : true,
		nextArrow     : '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		prevArrow     : '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
		asNavFor      : '.project-info__slider-nav',
	});
})();
