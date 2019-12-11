function showModal(id) {
    $(id).fadeIn(300);
    $('body').addClass('no-overflow');
}
function hideModal(id) {
    $('.modal').fadeOut(300);
    $('body').removeClass('no-overflow');
}

$(document).ready(function(){
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

    $(document).on('click', '#order-form', function () {
        event.preventDefault();
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($('#connect').offset().top);
            $('body').removeClass("nav-active");
        } else {
            $('html,body').animate({scrollTop:$('#connect').offset().top - 60},500);
        }
    });

    $(document).on('click', '.electrostation-section .button', function () {
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
});

var height;
$(window).scroll(function() {
    height = $(window).scrollTop();
    if(height > 40){
        $('.header').addClass('scrolled');
    } else{
        $('.header').removeClass('scrolled');
    }
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
