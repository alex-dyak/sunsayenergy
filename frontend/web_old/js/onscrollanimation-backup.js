(function () {
	// Add index
	setScrollMagic('.info', -150, TweenMax.staggerTo('.electrostation__info, .electrostation__contact, .electrostation__switch', 1, { opacity: 0, marginTop: -150 }))

	setScrollMagic('.info', -200, TweenMax.to('.info__list-item:nth-child(1)', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.info', -200, TweenMax.to('.info__list-item:nth-child(2)', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.info', -200, TweenMax.to('.info__list-item:nth-child(3)', .5, { opacity: 1 }).delay(.9))

	setScrollMagic('.type', -25, TweenMax.to('.type__content-title', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.type', 0, TweenMax.to('.type__content-list__item:nth-child(1)', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.type', 0, TweenMax.to('.type__content-list__item:nth-child(2)', .5, { opacity: 1 }).delay(.8))
	setScrollMagic('.type', 0, TweenMax.to('.type__content-list__item:nth-child(3)', .5, { opacity: 1 }).delay(1))

	setScrollMagic('.work', 0, TweenMax.to('.work__content-info__item-info > .message', .4, { opacity: 1 }).delay(.6))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-info__item-info > .days', .4, { opacity: 1 }).delay(.7))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-info__item-info > .button', .4, { opacity: 1 }).delay(.8))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-info__item-image', .6, { opacity: 1 }).delay(1.5))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list-mobile', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(1)', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(2)', .5, { opacity: 1 }).delay(.4))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(3)', .5, { opacity: 1 }).delay(.5))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(4)', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(5)', .5, { opacity: 1 }).delay(.7))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(6)', .5, { opacity: 1 }).delay(.8))
	setScrollMagic('.work', 0, TweenMax.to('.work__content-list__item:nth-child(7)', .5, { opacity: 1 }).delay(.9))

	setScrollMagic('.rate', -25, TweenMax.to('.rate__content-image', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.rate', -25, TweenMax.to('.rate__content-info > .title', .5, { opacity: 1 }).delay(.5))
	setScrollMagic('.rate', -25, TweenMax.to('.rate__content-info > .description', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.rate', -25, TweenMax.to('.rate__content-info > .button', .5, { opacity: 1 }).delay(.7))

	setScrollMagic('.complex', 0, TweenMax.to('.complex__content-title', .5, { opacity: 1 }))
	setScrollMagic('.complex', 0, TweenMax.to('.complex__content-list__item:nth-child(1)', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.complex', 0, TweenMax.to('.complex__content-list__item:nth-child(2)', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.complex', 0, TweenMax.to('.complex__content-list__item:nth-child(3)', .5, { opacity: 1 }).delay(.9))

	setScrollMagic('.example', 0, TweenMax.to('.example__content-title', .5, { opacity: 1 }))
	setScrollMagic('.example', 0, TweenMax.to('.example__content-list', .5, { opacity: 1 }).delay(.4))

	setScrollMagic('.review', 0, TweenMax.to('.review__content-title', .6, { opacity: 1 }))
	setScrollMagic('.review', 0, TweenMax.to('.review__content-list__item-image', .6, { opacity: 1 }))
	setScrollMagic('.review', 0, TweenMax.to('.review__content-list__item-info', .5, { opacity: 1 }).delay(.5))

	setScrollMagic('.connect', -25, TweenMax.to('.connect__content-title', .5, { opacity: 1 }))
	setScrollMagic('.connect', -25, TweenMax.to('.connect__content-question', .5, { opacity: 1 }).delay(.4))
	setScrollMagic('.connect', -25, TweenMax.to('.connect__content-image', .5, { opacity: 1 }).delay(.8))

	setScrollMagic('.connect', -25, TweenMax.to('.footer__content', .5, { opacity: 1 }))
	// end index
	// add green
	setScrollMagic('.why', -25, TweenMax.to('.greenwhy__content-info', .5, { opacity: 1 }))
	setScrollMagic('.why', -25, TweenMax.to('.greenwhy__content-image', .5, { opacity: 1 }))

	setScrollMagic('.legislation', -25, TweenMax.to('.legislation__content-info', .5, { opacity: 1 }))
	setScrollMagic('.legislation', -25, TweenMax.to('.legislation__content-image', .5, { opacity: 1 }))

	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-info__item-info > .message', .4, { opacity: 1 }).delay(.6))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-info__item-info > .days', .4, { opacity: 1 }).delay(.7))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-info__item-info > .button', .4, { opacity: 1 }).delay(.8))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-info__item-image', .6, { opacity: 1 }).delay(1.5))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list-mobile', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(1)', .5, { opacity: 1 }).delay(.3))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(2)', .5, { opacity: 1 }).delay(.4))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(3)', .5, { opacity: 1 }).delay(.5))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(4)', .5, { opacity: 1 }).delay(.6))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(5)', .5, { opacity: 1 }).delay(.7))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(6)', .5, { opacity: 1 }).delay(.8))
	setScrollMagic('.greenwork', 0, TweenMax.to('.work__content-list__item:nth-child(7)', .5, { opacity: 1 }).delay(.9))
	// end green
})();

function setScrollMagic(element, offset, tween) {
	new ScrollMagic.Scene({
		triggerElement: element,
		offset: offset,
		reverse: true
	})
	.setTween(tween)
	// .addIndicators({ name: 'fadein' })
	.addTo(new ScrollMagic.Controller())
}

function animateSVG(element, path, points, delay) {
	var s = Snap(element);
	var path = s.select(path);
	var pathPoints = points;
	path.animate({
		d: pathPoints
	}, delay, mina.linear);
}