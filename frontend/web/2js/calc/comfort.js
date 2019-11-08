const getArrayM = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "M1"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
};

const getL = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "L"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const getCoefAKB = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "coefAKB"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const getCoefSun = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "coefSun"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const getCoefNight = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "coefNight"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const getActualCourse = (currency) => {
	let tmp = null;
	$.ajax({
		method: 'get',
		url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=' + currency + '&date=' + new Date().toISOString().slice(0,10).replace(/-/g,"") + '&json',
		dataType: 'json',
		async: false,
		success: function(response) {
			tmp = response[0].rate.toFixed(3);
		},

        //костыль start
        error: function() {
            if(currency == 'USD'){
                tmp = 26;
            }else{
                tmp = 28;
            }

        }
//Костыль end
	});
	return tmp;
}

const pushToTemplate = (price, power) => {
	$('.result-value').text('$' + price.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	$('.power-value').text(power);
}

var M = null,
	L = null,
	coefAKB = null,
	coefNight = null,
	coefSun = null,
	USD = null,
	EUR = null,
	chart        = null,
    canvas       = $('#comfort-graphic'),
    chartOption  = {
		layout: {
			padding: {
				left: 10,
				right: 10,
				top: 10,
			}
		},
		legend: {
			display: false,
		},
		responsive: false,
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			yAxes: [{
				display: false,
			}],
			xAxes: [{
				display: false,
			}]
		},
	},
	chartPlugins = [{
		afterDatasetsDraw: function (chart) {
			chart_type = chart.config.type;
			
			if (chart.tooltip._active && chart.tooltip._active.length && chart_type === 'line') {
				var activePoint = chart.tooltip._active[0],
					ctx = chart.chart.ctx,
					y_axis = chart.scales['y-axis-0'],
					x = activePoint.tooltipPosition().x,
					yPoint = activePoint.tooltipPosition().y;
					topY = y_axis.top,
					bottomY = y_axis.bottom; 

				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, yPoint);
				ctx.lineTo(x, bottomY);
				ctx.lineWidth = 3;
				ctx.strokeStyle = '#808080';
				ctx.stroke();
				ctx.restore();
			}
		},
	}];

const getM = (x) => {
	let y = null;
	
	if (x > 0 && x < 6) {
		y = M.m1
	} else if (x > 6 && x < 12) {
		y = M.m2
	} else if (x > 12 && x < 18) {
		y = M.m3
	} else if (x > 18 && x < 24) {
		y = M.m4
	} else if (x > 24 && x < 100) {
		y = M.m5
	}

	return y;
}

const getPrice = (v, d, h) => {
	let R = 0,
		Q = 0;
	R = ((((d / 30) * 0.3) * 1.3) * h) * L;
	Q = v + R;
	return parseFloat(Q.toFixed(1));
}

const getPriceReserve = (n, m) => {
	let V = 0; 
	V = n * m;
	return parseFloat(V);
}

const getPower = (d) => {
	let N = 0;
	N = (d / 30) / 3.1;
	return parseFloat(N.toFixed(1));
}

const declOfNum = (number, titles) => {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const createChart = (canvas, house, days) => {
	let daysCount = 10,
		daysArr   = [1 + ' день'],
		D              = parseInt(house),
	    H              = parseInt(days),
	    N              = getPower(D),
	    M              = getM(N),
	    V              = getPriceReserve(N, M),
		Q              = getPrice(V, D, H),
		inc 		   = 1.2,
		chartPoint 	   = [],
		chartData 	   = [];
	
	for (let i = 1; i <= daysCount; i++) {
		Q = getPrice(V, D, i, L);
		chartPoint.push(Q.toFixed(0) * inc);
		chartData.push(parseInt(Q.toFixed(0)));
		inc++;
	}

	for (let i = 1; i < daysCount; i++)
		daysArr.push((i+1) + ' ' + declOfNum((i+1), [den, dni, dniv]));

	chart = new Chart(canvas, {
		type: 'line',
		data: {
			labels: daysArr,
			datasets: [
				{
					data: chartPoint,
					backgroundColor: ['#ffd100'],
					borderColor    : ['transparent'],
					borderWidth    : 0,
					pointRadius    : 0,
					fill           : true,
					showLines      : true,
				},
			]
		},
		options: chartOption,
		plugins: chartPlugins
	});
}

const updateChart = (chart, chartData) => {
	chart.options.tooltips = {
		displayColors: false,
		mode: 'nearest',
		axis: 'x',
		intersect: false,
		backgroundColor: 'transparent',
		titleFontFamily: '"Montserrat", sans-serif',
		titleFontSize: 16,
		titleFontColor: '#808080',
		bodyFontFamily: '"Montserrat", sans-serif',
		bodyFontSize: 16,
		bodyFontColor: '#808080',
		yAlign: 'bottom',
		callbacks: {
			label: function(tooltipItem, data) {
				let text = null;
				if (tooltipItem.index == 0) {
					text = chartData[0]
				} else if (tooltipItem.index == 1) {
					text = chartData[1]
				} else if (tooltipItem.index == 2) {
					text = chartData[2]
				} else if (tooltipItem.index == 3) {
					text = chartData[3]
				} else if (tooltipItem.index == 4) {
					text = chartData[4]
				} else if (tooltipItem.index == 5) {
					text = chartData[5]
				} else if (tooltipItem.index == 6) {
					text = chartData[6]
				} else if (tooltipItem.index == 7) {
					text = chartData[7]
				} else if (tooltipItem.index == 8) {
					text = chartData[8]
				} else if (tooltipItem.index == 9) {
					text = chartData[9]
				}
				return "$" + text;
			},
		}
	};
	chart.update();
}

Chart.elements.Line.prototype.draw = function () {
	this._chart.ctx.save();
	this._chart.ctx.strokeStyle = '#808080';

	var points = this._chart.getDatasetMeta(0).data,
		point_x = points[parseInt($('input#comfort-days').val()) - 1]._model.x,
		point_y = points[parseInt($('input#comfort-days').val()) - 1]._model.y,
		bottom = this._chart.scales['y-axis-0'].bottom;

	this._chart.ctx.beginPath();
	this._chart.ctx.lineWidth = 3;
	if ($(window).width() < 420) {
		if(parseInt($('input#comfort-days').val()) == 1) {
			this._chart.ctx.moveTo(point_x + 1.5, point_y);
			this._chart.ctx.lineTo(point_x + 1.5, bottom);
		} else if (parseInt($('input#comfort-days').val()) == 10 || parseInt($('input#comfort-days').val()) == 9) {
			this._chart.ctx.moveTo(point_x - 1.5, point_y);
			this._chart.ctx.lineTo(point_x - 1.5, bottom);
		} else {
			this._chart.ctx.moveTo(point_x, point_y);
			this._chart.ctx.lineTo(point_x, bottom);
		}
	} else {
		if(parseInt($('input#comfort-days').val()) == 1) {
			this._chart.ctx.moveTo(point_x + 1.5, point_y);
			this._chart.ctx.lineTo(point_x + 1.5, bottom);
		} else if (parseInt($('input#comfort-days').val()) == 10) {
			this._chart.ctx.moveTo(point_x - 1.5, point_y);
			this._chart.ctx.lineTo(point_x - 1.5, bottom);
		} else {
			this._chart.ctx.moveTo(point_x, point_y);
			this._chart.ctx.lineTo(point_x, bottom);
		}
	}


	let day = parseInt($('input#comfort-days').val()) + ' ' + declOfNum(parseInt($('input#comfort-days').val()), [den, dni, dniv]);

	if ($(window).width() < 420) {
		this._chart.ctx.font = '500 12px "Montserrat", sans-serif';
		this._chart.ctx.fillStyle = '#808080';
		this._chart.ctx.textBaseline = 'bottom';
	
		if(parseInt($('input#comfort-days').val()) == 10 || parseInt($('input#comfort-days').val()) == 9) {
			this._chart.ctx.textAlign = 'right';
			this._chart.ctx.fillText(day, point_x - 5, bottom);
		} else {
			this._chart.ctx.textAlign = 'left';
			this._chart.ctx.fillText(day, point_x + 5, bottom);
		}
	} else {
		this._chart.ctx.font = '500 16px "Montserrat", sans-serif';
		this._chart.ctx.fillStyle = '#808080';
		this._chart.ctx.textBaseline = 'bottom';

		if(parseInt($('input#comfort-days').val()) == 10) {
			this._chart.ctx.textAlign = 'right';
			this._chart.ctx.fillText(day, point_x - 5, bottom);
		} else {
			this._chart.ctx.textAlign = 'left';
			this._chart.ctx.fillText(day, point_x + 5, bottom);
		}
	}
	
	this._chart.ctx.stroke();
	this._chart.ctx.restore();
}

const calculatuion = (house, days) => {
	let D              = parseInt(house),
	    H              = parseInt(days),
	    N              = getPower(D),
	    M              = getM(N),
	    V              = getPriceReserve(N, M),
		Q              = getPrice(V, D, H),
		inc 		   = 1.2,
		daysCount      = 10,
		chartPoint 	   = [],
		chartData 	   = [];
	
	pushToTemplate(Q, N.toFixed(0));

	for (let i = 1; i <= daysCount; i++) {
		Q = getPrice(V, D, i, L);
		chartPoint.push(Q.toFixed(0) * inc);
		chartData.push(parseInt(Q.toFixed(0)));
		inc++;
	}

	updateChart(chart, chartData);
}

(function() {
	$("input#comfort-houseEnergy, input#comfort-days").ionRangeSlider({
		skin: "round",
		onChange: function(data) {
			if($(window).width() < 1024)
				$('body').css('overflow-y', 'hidden');

			let house = parseInt($('input#comfort-houseEnergy').val()),
				days = parseInt($('input#comfort-days').val());

			calculatuion(house, days);
		},
		onFinish: function (data) {
			if($(window).width() < 1024)
				$('body').css('overflow-y', 'scroll');
        }
	});
})();

$(window).on('load', function() {
	$('body').animate({
		opacity: 1
	});

	if ($(window).width() <= 1024) {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).removeClass('active');
	} else {
		$('.work__content-info__item').filter(function() {
			return $(this).data('id') == '1';
		}).addClass('active');
	}

	USD = getActualCourse('USD');
	EUR = getActualCourse('EUR');
	M = getArrayM();
	L = getL();
	coefNight = getCoefNight();
	coefAKB = getCoefAKB();
	coefSun = getCoefSun();

	animateCss('.header', 'fadeInDown');

	let house = parseInt($('input#comfort-houseEnergy').val()),
		days  = parseInt($('input#comfort-days').val());

	createChart(canvas, house, days);
	calculatuion(house, days);
});