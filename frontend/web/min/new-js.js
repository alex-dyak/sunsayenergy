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
        console.log(thisModal);
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

    $(document).on('click', '.adv-banner', function () {
        event.preventDefault();
        if ($(window).width() <= '1279') {
            $('html,body').scrollTop($('#connect').offset().top);
        } else {
            $('html,body').animate({scrollTop:$('#connect').offset().top - 60},500);
        }
        $(this).hide();
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

$( window ).resize(function() {
    $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
});