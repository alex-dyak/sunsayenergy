(function () {
    $('.example__content-list__item').click(function (e) {
        e.preventDefault();
        $('body').css('overflow-y', 'hidden');
        var index = $(this).data('slick-index');
        $('.popup').css('display', 'flex').hide().fadeIn();
        $('.popup-example').slick("refresh");
        $('.popup-example').slick('slickGoTo', parseInt(index), !0)
    });
    $('.popup-close').click(function (e) {
        e.preventDefault();
        $('body').css('overflow-y', 'auto');
        $('.popup').fadeOut()
    });
    $(document).mouseup(function (e) {
        var container = $('.popup');
        if (container.has(e.target).length === 0) {
            container.fadeOut();
            $('body').css('overflow-y', 'auto')
        }
    })
})()