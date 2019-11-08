(function() {
    // $('.example-carousel').slick({
    //     infinite: 0,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: !0,
    //     touchMove: 0,
    //     accesibility: 0,
    //     draggable: 0,
    //     swipe: 0,
    //     speed: 1000,
    //     nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
    //     prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
    //     // asNavFor: '.popup-example',
    //     responsive: [
    //     {
    //         breakpoint: 1536,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         },
    //     }, {
    //         breakpoint: 1366,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }, {
    //         breakpoint: 769,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             variableWidth: !0,
    //             centerMode: !0,
    //             touchMove: !0,
    //             accesibility: !0,
    //             draggable: !0,
    //             swipe: !0,
    //         }
    //     }]
    // });
    // $('.popup-example').slick({
    //     infinite: !1,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: !0,
    //     fade: !0,
    //     nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
    //     prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
    //     asNavFor: '.example-carousel',
    // });
    $('.complex__content-list').slick({
        infinite: !1,
        slidesToShow: 3,
        arrows: !1,
        responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: !0,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: !0,
                centerMode: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: !0,
                centerPadding: '30px'
            }
        }]
    });
    $('.review__content-list').slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        adaptiveHeight: !0,
        nextArrow: '<div class="review-next"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="review-prev"><img src="/img/icon/Arrow.svg" alt="" /></div>',
    });
    $('.work__content-list-mobile').slick({
        infinite: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        variableWidth: !0,
        centerMode: !0,
        nextArrow: '<div class="review-next"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="review-prev"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        asNavFor: '.work__content-info',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: !0
            }
        }]
    });
    if ($(window).width() <= 1024) {
        $('.work__content-info').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            asNavFor: '.work__content-list-mobile',
        });
        $('.slider-equipment__list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
            asNavFor: '.slider-equipment__content',
        });
        $('.slider-types__list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
            asNavFor: '.slider-types__content',
        });
        $('.slider-equipment__content').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '0',
            arrows: !1,
            asNavFor: '.slider-equipment__list',
        });
        $('.slider-types__content').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '0',
            arrows: !1,
            asNavFor: '.slider-types__list',
        })
    }
    if ($(window).width() <= 768) {
        $('.services__list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
        });
        $('.slider-network-list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
            asNavFor: '.slider-network-content',
        });
        $('.slider-network-content').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '0',
            arrows: !1,
            asNavFor: '.slider-network-list',
        });
        $('.slider-standalone-list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
            asNavFor: '.slider-standalone-content',
        });
        $('.slider-standalone-content').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '0',
            arrows: !1,
            asNavFor: '.slider-standalone-list',
        });
        $('.slider-hybrid-list').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '15px',
            arrows: !1,
            variableWidth: !0,
            asNavFor: '.slider-hybrid-content',
        });
        $('.slider-hybrid-content').slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: '0',
            arrows: !1,
            asNavFor: '.slider-hybrid-list',
        })
    }
    $('.network-carousel, .standalone-carousel, .hybrid-carousel').slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !1,
        nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        responsive: [{
            breakpoint: 768,
            settings: {
                touchMove: !1,
                accesibility: !1,
                draggable: !1,
                swipe: !1,
                adaptiveHeight: !0,
            }
        }]
    });
    $('.project-info__slider-nav').slick({
        infinite: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !1,
        vertical: !0,
        dots: !1,
        asNavFor: '.project-info__slider',
        responsive: [
		    {
		      breakpoint: 1700,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 385,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		  ]
    });
    $('.project-info__slider').slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="" /></div>',
        asNavFor: '.project-info__slider-nav',
    })
}
)();

setTimeout(function() {
    if ($('.example__content-list.slick-slider').length ){
		$('.complex__content-list').slick("refresh");
	}
    
    if ($('.example__content-list.slick-slider').length ){
    	$('.example__content-list').slick("refresh");
    }
}, 3500);

