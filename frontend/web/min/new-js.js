$(document).ready(function(){
    var height;
    $(document).on('click', '[data-toggle="modal"]',  function(){
        event.preventDefault();
        var thisModal = $(this).data('modal-id');
        showModal(thisModal);
    });

    $(document).on('click', '.subscribe-close, .overlay',  function(){
        hideModal();
    });

    $(document).on('click', '.newsletter-opener',  function(){
        event.preventDefault();
        var thisModal = $('#footer-newsletter');
        showModal(thisModal);
    });

    $(document).on('click', '.modal-close',  function(){
        hideModal();
    });

    $(document).on('click', '#header .contact-opener', function(){
        event.preventDefault();
        var parent = $(this).parents('.contact-block');
        if (!parent.hasClass('show-block')) {
            parent.addClass('show-block');
            $('body').removeClass('nav-active');
        } else {
            parent.removeClass('show-block');
        }
    });

    $(document).on('click','#nav-opener',  function () {
        event.preventDefault();
        var body = $('body');
        if (!body.hasClass('nav-active')) {
            body.addClass('nav-active');
            body.find('.contact-block').removeClass('show-block');
        } else {
            body.removeClass('nav-active');
        }
    });

    $(document).mouseup(function (e){
        var div = $("#header .contact-block");
        var header = $("#header");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("show-block");
        }
        if (!header.is(e.target) && header.has(e.target).length === 0) {
            $('body').removeClass("nav-active");
        }
    });

    $('#to-top-link').click(function() {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })

    $(document).on('click', '.to_contact a', function () {
        event.preventDefault();
        var block = $(this).attr('href');
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($(block).offset().top);
            $('body').removeClass("nav-active");
        } else {
            $('html,body').animate({scrollTop:$(block).offset().top - 100},500);
        }
    });

    $(document).on('click', '.anchor-list a', function () {
        event.preventDefault();
        var block = $(this).attr('href');

        $('html,body').animate({scrollTop:$(block).offset().top - 100},500);
    });

    $(document).on('click', '#order-form', function () {
        event.preventDefault();
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($('#connect').offset().top);
            $('body').removeClass("nav-active");
        } else {
            $('html,body').animate({scrollTop:$('#connect').offset().top - 60},500);
        }
    });

    $(document).on('click', '.consult-btn , .order-btn', function () {
        event.preventDefault();
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($('#connect').offset().top);
        } else {
            $('html,body').animate({scrollTop:$('#connect').offset().top - 60},500);
        }
    });

    $(document).on('click', '.adv-banner p', function () {
        event.preventDefault();
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($('#connect').offset().top);
        } else {
            $('html,body').animate({scrollTop:$('#connect').offset().top - 60},500);
        }

        $('.adv-banner').hide();
    });

    $(document).on('click', '.adv-banner .close-banner', function () {
        event.preventDefault();
        $('.adv-banner').hide(300);
    });

    $(document).on('click', '.open-close-opener', function () {
        if ($('.mobile-open-close').hasClass('show')) {
            $('.mobile-open-close').removeClass('show');
        } else {
            $('.mobile-open-close').addClass('show');
        }
    });

    $(document).on('click', '.seo-article-opener',  function(){
        $('.seo-article').toggleClass('collapsed');
    });

    $(document).on('click', '.staff-slider .slide',  function(){
        var index = $(this).attr("data-slick-index");
        $(".staff-slider").slick("slickGoTo", index);
    });

    initTabs($('.video-page .tab-navigation'), $('.video-page .tab-container'));
    initLoadMore ($('.load-all'), 3, 3);
    initLoadMore ($('.load-finished'), 3, 3);
    initLoadMore ($('.load-approach'), 3, 3);
    initLoadMore ($('.load-technology'), 3, 3);
    headerBg();
    loadPros();

    if($('.video-review-slider').length) {
        $('.video-review-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 3,
            arrows: false,
            dots: true,
            infinite: false,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    if($('.staff-slider').length) {
        $('.staff-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 5,
            arrows: false,
            dots: true,
            infinite: true,
            centerMode: true,
            centerPadding: "10px",
            autoPlay: true,
            autoplaySpeed: 4000,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    autoPlay: false

                }
            },{
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }]
        });
    }
    if($('.price-slider').length) {
        $('.price-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 3,
            arrows: false,
            dots: false,
            infinite: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dots: true,
                    dotsClass: 'slick-dots'
                }
            }]
        });
    }
    if($('.work-stages-slider').length) {
        $('.work-stages-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 3,
            arrows: false,
            dots: false,
            infinite: false,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    dots: true,
                    dotsClass: 'slick-dots'
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    dots: true,
                    dotsClass: 'slick-dots'
                },

            }]
        });
    }
    if($('.equipment-nav').length) {
        $('.equipment-nav').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            rows: 0,
            arrows: false,
            dots: false,
            infinite: false,
            variableWidth: true,
            asNavFor: '.equipment-slider',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "0",
                },
            }]
        });
    }
    if($('.equipment-slider').length) {
        $('.equipment-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            arrows: false,
            dots: false,
            infinite: false,
            swipe: false,
            touchMove: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.equipment-nav'
        });
    }
    if($('.equipment-slick').length) {
        $('.equipment-slick').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="next" /></div>',
            prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="prev" /></div>',
            dots: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'slick-dots'
                },

            }]
        });
    }
    if($('.pannel-slick').length) {
        $('.pannel-slick').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="next" /></div>',
            prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="prev" /></div>',
            dots: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'slick-dots'
                },

            }]
        });
    }
    if($('.mount-slick').length) {
        $('.mount-slick').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="next" /></div>',
            prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="prev" /></div>',
            dots: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false
                },

            }]
        });
    }
    if($('.battery-slick').length) {
        $('.battery-slick').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="next" /></div>',
            prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="prev" /></div>',
            dots: false,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false
                },

            }]
        });
    }
    if($('.service-types-nav').length) {
        $('.service-types-nav').slick({
            slidesToScroll: 1,
            slidesToShow: 3,
            rows: 0,
            arrows: false,
            dots: false,
            infinite: false,
            variableWidth: true,
            asNavFor: '.service-types-slider',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "0",
                },
            }]
        });
    }
    if($('.service-types-slider').length) {
        $('.service-types-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            rows: 0,
            arrows: false,
            dots: false,
            swipe: false,
            touchMove: false,
            fade: true,
            focusOnSelect: true,
            asNavFor: '.service-types-nav',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    adaptiveHeight: true,
                    swipe: true,
                    touchMove: true,
                    dots: true,
                    dotsClass: 'slick-dots'
                }
            }]
        });
    }

    if($('.reason-slider').length) {
        $('.reason-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            infinite: false,
            mobileFirst: true,
            responsive: [{
                breakpoint: 767,
                settings: "unslick"
            }]
        });
    }
    if($('.clients-slider').length) {
        $('.clients-slider').slick({
            slidesToScroll: 1,
            rows: 0,
            slidesToShow: 1,
            dots: false,
            nextArrow: '<div class="next-arrow"><img src="/img/icon/Arrow.svg" alt="next" /></div>',
            prevArrow: '<div class="prev-arrow"><img src="/img/icon/Arrow.svg" alt="prev" /></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'slick-dots'
                },
            }]
        });
    }

});

var lastWidth = $(window).width();
$(window).resize(function() {
    if($(window).width()!=lastWidth){
        initLoadMore ($('.load-all'), 3, 3);
        initLoadMore ($('.load-finished'), 3, 3);
        initLoadMore ($('.load-approach'), 3, 3);
        initLoadMore ($('.load-technology'), 3, 3);

        lastWidth = $(window).width();
        loadPros();
    }
});

$(window).scroll(function() {
    headerBg();
});

var scrollPrev = 0;
$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 200 && scrolled < scrollPrev ) {
        $("#to_top_block").addClass('visible');
    } else {
        $("#to_top_block").removeClass('visible');
    }
    scrollPrev = scrolled;
});


function initTabs(tabNav, tabContainer) {
    $(tabNav).find('a').on('click', function () {
        event.preventDefault();
        var tabID = $(this).attr('href');
        $(tabNav).find('a').each(function () {
            $(this).removeClass('active');
        });
        $(tabContainer).find('.tab-box').each(function () {
            $(this).removeClass('active');
            $(this).hide();
        });
        $(this).addClass('active');
        $(tabID).show().addClass('active');
    })
}

function initLoadMore (btnWrap, defVal, loadVal) {
    var count = 0,
        num = defVal - 1,
        resValue = defVal,
        btn = btnWrap.find('.button'),
        wrap = btn.parents('.load-more-wrap'),
        list = wrap.find('.video-row');
    if($(window).width() < 1024) {
        if (list.find('.video-col').length <= defVal) {
            btnWrap.hide();
        } else {
            btnWrap.show();
        }
        list.find('.video-col:gt(' + num + ')').hide();
        btn.on('click', function () {
            count++;
            resValue += loadVal;
            list.find('.video-col').slice(0, resValue).show();
            if (list.find('.video-col:hidden').length === 0) {
                count = 0;
                btnWrap.slideUp(400);
                resValue = defVal;
            }
            return false;
        });
    } else {
        list.find('.video-col').show();
        btnWrap.hide();
    }
}

function showModal(id) {
    $(id).fadeIn(300);
    $('body').addClass('no-overflow');
}
function hideModal(id) {
    $('.modal').fadeOut(300);
    $('body').removeClass('no-overflow');
}

function headerBg() {
    height = $(window).scrollTop();
    if (height > 40) {
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }
}

function loadPros() {
    if($('.pros-list').length && window.matchMedia("(max-width: 767px)").matches) {
        $('.pros-list li:gt(2)').hide();
        $('.load-pros-button').show(300);
        $(document).on('click', '.load-pros-button', function(){
            $('.pros-list li').show(300);
            $(this).hide();
            return false;
        })
    } else {
        $('.load-pros-button').hide();
        $('.pros-list li').show(300);
    }
}