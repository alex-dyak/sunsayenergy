var isEvent = false;

$(window).scroll(function () {
    let height = $('.electrostation').height();
    if ($(window).scrollTop() > height) {
        if (!isEvent) {
            animateSVG('#buttonBack', '#buttonFrom', 'M0,0c0,0-0.4,80,180,80c0-46.9,0-80,0-80H0z', 300);
            $('.header').addClass("header__background");
            isEvent = true;
        }
    } else {
        if (isEvent) {
            animateSVG('#buttonBack', '#buttonFrom', 'M1718.4,0l-948,0', 1000);
            $('.header').removeClass("header__background");
            isEvent = false;
        }
    }
});
