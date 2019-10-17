const getArrayF = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "F"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
};

const getArrayY = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "Y"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
};

const getJ = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "J",
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const getG = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "G"
		},
		dataType: "json",
		async: false,
		success: function (data) {
			tmp = data;
		}
	});
	return tmp;
}

const years = () => {
	let yearArray = [new Date().getFullYear() + rik];
	for (let i = 1; i < 20; i++)
		yearArray.push((new Date().getFullYear() + i) + rik);
	return yearArray;
}

const pushToTemplate = (price, income) => {
	$('.result-value').text('$' + price.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	$('.income-value').text('$' + income.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
}

var F           = null,
    Y           = null,
    J           = null,
    G           = null,
    USD         = null,
    EUR         = null,
    chart       = null,
    canvas      = $('#income-graphic'),
    chartOption = {
		layout: {
			padding: {
				left : 10,
				right: 10,
				top  : 50
			}
		},
		legend: {
			display: false,
		},
		responsive: false,
		hover     : {
			mode     : 'nearest',
			intersect: true
		},
		scales: {
			yAxes: [{
				display: false,
			}],
			xAxes: [{
				display: false,
			}]
		}
	},
	chartPlugins = [{
		afterDatasetsDraw: function (chart) {
			chart_type = chart.config.type;

			if (chart.tooltip._active && chart.tooltip._active.length && chart_type === 'line') {
				let activePoint = chart.tooltip._active[0],
				    ctx         = chart.chart.ctx,
				    y_axis      = chart.scales['y-axis-0'],
				    x           = activePoint.tooltipPosition().x,
				    yPoint      = activePoint.tooltipPosition().y;
				    topY        = y_axis.top,
				    bottomY     = y_axis.bottom;

				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, yPoint);
				ctx.lineTo(x, bottomY);
				ctx.lineWidth   = 3;
				ctx.strokeStyle = '#808080';
				ctx.stroke();
				ctx.restore();
			}
		},
	}],
	chartDataSetStyle = [
		{
			backgroundColor: ['#c7c9c7'],
			borderColor    : ['transparent'],
			borderWidth    : 0,
			pointRadius    : 0,
			fill           : true,
		},
		{
			backgroundColor: ['#ffd100'],
			borderColor    : ['transparent'],
			borderWidth    : 0,
			pointRadius    : 0,
			fill           : true,
		},
	];

const getActualCourse = (currency) => {
	var tmp = null;
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

const getY = (x) => {
	var y = null;

	switch(x) {
		case 5:
			y = Y.y1
			break;
		case 7.5:
			y = Y.y2
			break;
		case 10:
			y = Y.y3
			break;
		case 12.5:
			y = Y.y4
			break;
		case 15:
			y = Y.y5
			break;
		case 17.5:
			y = Y.y6
			break;
		case 20:
			y = Y.y7
			break;
		case 22.5:
			y = Y.y8
			break;
		case 25:
			y = Y.y9
			break;
		case 27.5:
			y = Y.y10
			break;
		case 30:
			y = Y.y11
			break;
		case 32.5:
			y = Y.y12
			break;
		case 35:
			y = Y.y13
			break;
	}

	return y;
}

const getF = (x) => {
	let f = null;

	switch(x) {
		case 5:
			f = F.f1
			break;
		case 7.5:
			f = F.f2
			break;
		case 10:
			f = F.f3
			break;
		case 12.5:
			f = F.f4
			break;
		case 15:
			f = F.f5
			break;
		case 17.5:
			f = F.f6
			break;
		case 20:
			f = F.f7
			break;
		case 22.5:
			f = F.f8
			break;
		case 25:
			f = F.f9
			break;
		case 27.5:
			f = F.f10
			break;
		case 30:
			f = F.f11
			break;
		case 32.5:
			f = F.f12
			break;
		case 35:
			f = F.f13
			break;
	}

	return f;
}

const getPrice = (x, y) => {
	let Z = 0,
		X = x,
		Y = y;

	Z = X * Y;

	return parseInt(Z);
}

const getIncome = (usd, eur, x, f) => {
	let W = null,
		D = x,
		F = f,
		E = usd,
		C = eur,
		A = 0,
		B = 0;

	if ((D * 12) < F) {
		A = (D * 12 * J) / E;
		B = ((F - (D * 12)) * (G * C)) / E;
	} else {
		A = (F * J) / E;
		B = 0;
	}

	W = A + B;

	return parseInt(W.toFixed(0));
}

const getPayback = (price, income) => {
	let K = 0,
		Z = price,
		W = income;
		
	K = Z / W;

	return parseInt(K.toFixed(0));
}

const createGraphic = (canvas, house, power) => {
	let incomeHouse    = parseInt(house),
		incomePower    = parseFloat(power),
		usd            = USD,
		eur            = EUR,
		f              = getF(incomePower),
		y              = getY(incomePower),
		price          = getPrice(incomePower, y),
		income         = getIncome(usd, eur, J, G, incomeHouse, f),
		payback        = getPayback(price, income),
		increment      = 2,
		years          = [new Date().getFullYear() + rik],
		graphicIncomes = [0],
		toolTipIncomes = [0],
		paybackYears   = [0];

	for (let i = 1; i < 20; i++) {
		years.push((new Date().getFullYear() + i) + rik);
		toolTipIncomes.push(parseInt(income * i));
		graphicIncomes.push(parseInt(((i * increment) + (parseInt(incomePower) / 1600)).toFixed(0)));
		increment++;
	}

	for (let j = 1; j <= payback; j++) {
		paybackYears.push(graphicIncomes[j]);
		graphicIncomes[j-1] = null;
	}

	chart = new Chart(canvas, {
		type: 'line',
		data: {
			labels: years,
			datasets: chartDataSetStyle
		},
		options: chartOption,
		plugins: chartPlugins
	});
}

Chart.elements.Line.prototype.draw = function () {
	this._chart.ctx.save();
	this._chart.ctx.strokeStyle = '#808080';

	let points  = this._chart.getDatasetMeta(0).data,
	    point_x = points[points.length - 1]._model.x,
	    point_y = points[points.length - 1]._model.y,
		bottom  = this._chart.scales['y-axis-0'].bottom,
		text 	= okupn + points.length + rokiv;

	this._chart.ctx.beginPath();
	this._chart.ctx.lineWidth = 3;

	this._chart.ctx.moveTo(point_x, point_y);
	this._chart.ctx.lineTo(point_x, bottom);

	this._chart.ctx.fillStyle = '#808080';

	if ($(window).width() < 420) {
		this._chart.ctx.font = '500 12px "Montserrat", sans-serif';
		this._chart.ctx.textBaseline = 'bottom';
		if (points.length > 11) {
			this._chart.ctx.textAlign = 'right';
			this._chart.ctx.fillText(text, point_x - 2, bottom);
		} else {
			this._chart.ctx.textAlign = 'left';
			this._chart.ctx.fillText(text, point_x + 2, bottom);
		}
	} else {
		this._chart.ctx.font = '500 16px "Montserrat", sans-serif';
		this._chart.ctx.textBaseline = 'bottom';
		if (points.length > 14) {
			this._chart.ctx.textAlign = 'right';
			this._chart.ctx.fillText(text, point_x - 5, bottom);
		} else {
			this._chart.ctx.textAlign = 'left';
			this._chart.ctx.fillText(text, point_x + 5, bottom);
		}
	}

	this._chart.ctx.stroke();
	this._chart.ctx.restore();
}

const updateChart = (chart, paybackYears, chartIncomes, toolTipIncomes) => {
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
		yPadding: 0,
		callbacks: {
			label: function(tooltipItem, data) {
				if (tooltipItem.index == 0) {
					data = toolTipIncomes[0]
				} else if (tooltipItem.index == 1) {
					data = toolTipIncomes[1]
				} else if (tooltipItem.index == 2) {
					data = toolTipIncomes[2]
				} else if (tooltipItem.index == 3) {
					data = toolTipIncomes[3]
				} else if (tooltipItem.index == 4) {
					data = toolTipIncomes[4]
				} else if (tooltipItem.index == 5) {
					data = toolTipIncomes[5]
				} else if (tooltipItem.index == 6) {
					data = toolTipIncomes[6]
				} else if (tooltipItem.index == 7) {
					data = toolTipIncomes[7]
				} else if (tooltipItem.index == 8) {
					data = toolTipIncomes[8]
				} else if (tooltipItem.index == 9) {
					data = toolTipIncomes[9]
				} else if (tooltipItem.index == 10) {
					data = toolTipIncomes[10]
				} else if (tooltipItem.index == 11) {
					data = toolTipIncomes[11]
				} else if (tooltipItem.index == 12) {
					data = toolTipIncomes[12]
				} else if (tooltipItem.index == 13) {
					data = toolTipIncomes[13]
				} else if (tooltipItem.index == 14) {
					data = toolTipIncomes[14]
				} else if (tooltipItem.index == 15) {
					data = toolTipIncomes[15]
				} else if (tooltipItem.index == 16) {
					data = toolTipIncomes[16]
				} else if (tooltipItem.index == 17) {
					data = toolTipIncomes[17]
				} else if (tooltipItem.index == 18) {
					data = toolTipIncomes[18]
				} else if (tooltipItem.index == 19) {
					data = toolTipIncomes[19]
				} else if (tooltipItem.index == 20) {
					data = toolTipIncomes[20]
				}
				return "$" + data;
			}
		}
	};
	chart.data.datasets[0].data = paybackYears;
	chart.data.datasets[1].data = chartIncomes;
	chart.update();
}

const calculatuion = (house, power) => {
	let incomeHouse    = parseInt(house),
		incomePower    = parseFloat(power),
		usd            = USD,
		eur            = EUR,
		f              = getF(incomePower),
		y              = getY(incomePower),
		price          = getPrice(incomePower, y),
		income         = getIncome(usd, eur, incomeHouse, f),
		payback        = getPayback(price, income),
		increment      = 2,
		years          = [new Date().getFullYear()],
		graphicIncomes = [0],
		toolTipIncomes = [0],
		paybackYears   = [0];

	for (let i = 1; i < 20; i++) {
		years.push(new Date().getFullYear() + i);
		toolTipIncomes.push(parseInt(income * i));
		graphicIncomes.push(parseInt(((i * increment) + (parseInt(incomePower) / 1600)).toFixed(0)));
		increment++;
	}

	for (let j = 1; j <= payback; j++) {
		paybackYears.push(graphicIncomes[j]);
	}

	pushToTemplate(price, income);
	updateChart(chart, paybackYears, graphicIncomes, toolTipIncomes);
}

(function() {
	$("input#income-house, input#income-power").ionRangeSlider({
		skin: "round",
		onChange: function(data) {
			if($(window).width() < 1024)
				$('body').css('overflow-y', 'hidden');

			let house = $('input#income-house').val(),
				power = $('input#income-power').val();

			calculatuion(house, power);
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

	animateCss('.header', 'fadeInDown');

	F = getArrayF();
	Y = getArrayY();
	J = getJ();
	G = getG();
	USD = getActualCourse('USD');
	EUR = getActualCourse('EUR');

	// First init graphic
	let house = parseInt($('input#income-house').val()),
		power = parseFloat($('input#income-power').val());

	createGraphic(canvas, house, power);
	calculatuion(house, power);
	// -----
});