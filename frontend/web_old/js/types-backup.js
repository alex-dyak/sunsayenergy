(function () {
	$('.type-item__content-title').click(function(e) {
		e.preventDefault();

		var activeClass = 'active',
			isTypeItem = $(this).parents('.type__content-list__item').data('type'),
			itemContent = $(this).parents('.type-item__content'),
			item = $(this).parents('.type__content-list__item'),
			svg = {
				network: {
					id: '#networkBack',
					idPath: '#networkPath',
					size: {
						pc: {
							width: 437.3,
							height: 415.3,
						},
						mobile: {
							width: 310,
							height: 230.007,
						}
					},
					path: {
						pc: 'M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201',
						activePc: 'M1.7,186.8C9.3,110.7,30.6,29.2,172.3,3.3c127.1-23.3,260.4,80.9,264.9,223.9c2.9,92.8-60.1,179.5-183,187.1 C94.8,424.2-15.1,355.6,1.7,186.8z',
						mobile: 'M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z',
						activeMobile: 'M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z',
					}
				},
				standalone: {
					id: '#standaloneBack',
					idPath: '#standalonePath',
					size: {
						pc: {
							width: 524.1,
							height: 408,
						},
						laptop: {
							width: 430,
							height: 334.7,
						},
						mobile: {
							width: 310,
							height: 230.007,
						}
					},
					path: {
						pc: 'M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z',
						activePc: 'M1.3,178.7c0,0,5.5-189.5,252.5-178.2c117.6,5.4,295.1,105.7,267.4,229.3S395.8,408.8,271.5,408 S-15.8,352.4,1.3,178.7z',
						laptop: 'M104.1,160.4c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6 c-11.7,34.3-53.3,49.6-106.2,49.3S96.9,208.5,104.1,160.4L104.1,160.4',
						activeLaptop: 'M1.1,146.6c0,0,4.5-155.5,207.2-146.2c96.5,4.4,242.1,86.7,219.4,188.1 S324.7,335.4,222.8,334.7C120.8,334.1-13,289.1,1.1,146.6z',
						mobile: 'M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z',
						activeMobile: 'M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z',
					}
				},
				hybrid: {
					id: '#hybridBack',
					idPath: '#hybridPath',
					size: {
						pc: {
							width: 440,
							height: 415.1,
						},
						mobile: {
							width: 310,
							height: 230.007,
						}
					},
					path: {
						pc: 'M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z',
						activePc: 'M440,209.2c1.1,108.6-62.8,210.3-209.2,205.7S-48.9,305.6,17.6,123.2C65.1-7.3,173.8-9.5,260.7,7.3 C334.1,21.4,438.7,72.3,440,209.2z',
						mobile: 'M40.5,107c0.8-7.9,3.9-20,15.1-31c25.7-25.2,73.5-24.9,95.2-24.8c11.8,0.1,89.5,0.8,112.6,36.1 c7,10.7,8.3,23,4.3,35.8c-12.1,38.7-54.8,56.1-109.1,55.8C104.3,178.6,33.1,161.4,40.5,107z',
						activeMobile: 'M0.728,100.581C1.85,86.37,5.927,64.603,21.133,44.678 C55.722-0.646,120.224-0.179,149.458,0.032c15.956,0.115,120.675,1.407,151.704,64.965c9.385,19.224,11.234,41.352,5.839,64.444 c-16.303,69.776-73.827,101.02-147.058,100.56C86.711,229.541-9.319,198.596,0.728,100.581z',
					}
				}
			};

		$('.type__content-list__item').filter(function() {
			return $(this).data('type') != isTypeItem;
		}).removeClass(activeClass)
		.delay(300).find('.type-item__content-text, .type-item__content-button').fadeOut(150);
		item.addClass(activeClass);

		if ($(window).width() <= 1440 && $(window).width() > 1024) {
			changeSize(svg.standalone.id, svg.standalone.size.laptop.width, svg.standalone.size.laptop.height);
			changeSize(svg.network.id, svg.network.size.pc.width, svg.network.size.pc.height);
			changeSize(svg.hybrid.id, svg.hybrid.size.pc.width, svg.hybrid.size.pc.height);
		} else if ($(window).width() <= 1024) {
			changeSize(svg.network.id, svg.network.size.mobile.width, svg.network.size.mobile.height);
			changeSize(svg.standalone.id, svg.standalone.size.mobile.width, svg.standalone.size.mobile.height);
			changeSize(svg.hybrid.id, svg.hybrid.size.mobile.width, svg.hybrid.size.mobile.height);
		} else if ($(window).width() > 1440) {
			changeSize(svg.network.id, svg.network.size.pc.width, svg.network.size.pc.height);
			changeSize(svg.standalone.id, svg.standalone.size.pc.width, svg.standalone.size.pc.height);
			changeSize(svg.hybrid.id, svg.hybrid.size.pc.width, svg.hybrid.size.pc.height);
		}

		item.find('.type-item__content-text, .type-item__content-button').delay(500).fadeIn(500);

		if (isTypeItem == 'network') {
			if ($(window).width() <= 1440 && $(window).width() > 1024) {
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.laptop);
				animateType(svg.network.id, svg.network.idPath, svg.network.path.activePc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.pc);
			} else if ($(window).width() <= 1024) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.activeMobile);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.mobile);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.mobile);
			} else if ($(window).width() > 1440) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.activePc);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.pc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.pc);
			}
		} else if (isTypeItem == 'standalone') {
			if ($(window).width() <= 1440 && $(window).width() > 1024) {
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.activeLaptop);
				animateType(svg.network.id, svg.network.idPath, svg.network.path.pc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.pc);
			} else if ($(window).width() <= 1024) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.mobile);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.activeMobile);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.mobile);
			} else if ($(window).width() > 1440) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.pc);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.activePc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.pc);
			}

		} else if (isTypeItem == 'hybrid') {
			if ($(window).width() <= 1440 && $(window).width() > 1024) {
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.laptop);
				animateType(svg.network.id, svg.network.idPath, svg.network.path.pc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.activePc);
			} else if ($(window).width() <= 1024) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.mobile);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.mobile);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.standalone.path.activeMobile);
			} else if ($(window).width() > 1440) {
				animateType(svg.network.id, svg.network.idPath, svg.network.path.pc);
				animateType(svg.standalone.id, svg.standalone.idPath, svg.standalone.path.pc);
				animateType(svg.hybrid.id, svg.hybrid.idPath, svg.hybrid.path.activePc);
			}
		}
	});
})();
