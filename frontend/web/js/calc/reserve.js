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

const getArrayM = () => {
	let tmp = null;
	$.ajax({
		type: "get",
		url: "/site/calculator",
		data: {
			"type": "M"
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
			"type": "J"
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

const pushToTemplate = (Q, W) => {
	$('.result-value').text('$' + Q.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	$('.income-value').text('$' + W.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
}

var F = null,
	Y = null,
	M = null,
	J = null,
	G = null,
	L = null,
	USD = getActualCourse('USD'),
	EUR = getActualCourse('EUR');

const iconVisualization = (element, iconNumber) => {
	$.each(iconNumber, function (indexInArray, valueOfElement) { 
		element.filter(function() {
			return $(this).data('icon') == valueOfElement;
		}).addClass('active');
	});
}

const visualization = (powerReserv) => {
	let element = $('.service-miscount__content-icons__list-item'),
		iconsId = [
			[1, 2, 3],
			[9, 5],
			[4, 6, 7],
			[8, 10, 11, 12],
			[13, 14],
		];

	element.removeClass('active');
	
	switch(powerReserv) {
		case 3: {
			iconVisualization(element, iconsId[0])
			break;
		}
		case 5: {
			for (let i = 0; i < 2; i++)
				iconVisualization(element, iconsId[i])
			break;
		}
		case 8: {
			for (let i = 0; i < 3; i++)
				iconVisualization(element, iconsId[i])
			break;
		}
		case 10: {
			for (let i = 0; i < 4; i++)
				iconVisualization(element, iconsId[i])
			break;
		}
		case 15: {
			for (let i = 0; i < 5; i++)
				iconVisualization(element, iconsId[i])
			break;
		}
	}
}

const calculatuion = (houseEnergy, powerSes, powerReserv, timeReserv) => { 
    let D   = parseInt(houseEnergy),
        X   = parseFloat(powerSes),
        N   = parseInt(powerReserv),
        H   = parseInt(timeReserv),
        usd = USD,
        eur = EUR,
        M   = getM(N),
        F   = getF(X),
        Y   = getY(X),
        Z   = getPriceSES(X, Y),
        R   = getPriceAKB(N, H),
        V   = getPriceReserv(N, M),
        W   = getIncome(usd, eur, D, F),
        Q   = getPrice(Z, V, R);

	pushToTemplate(Q, W);
}


function getY(x) {
    let y = null;

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

function getF(x) {
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

function getM(n) {
    let m = null;

    switch(n) {
        case 3:
            m = M.m1;
            break;
        case 5:
            m = M.m2;
            break;
        case 8:
            m = M.m3;
            break;
        case 10:
            m = M.m4;
            break;
        case 15:
            m = M.m5;
            break;
    }

    return m;
}

const getPrice = (z, v, r) => {
    let Q = 0,
        Z = z,
        V = v,
        R = r;
    Q = Z + V + R;
    return parseInt(Q);
}

const getPriceSES = (x, y) => {
    let Z = 0,
        X = x,
        Y = y;
    Z = X * Y;
    return parseInt(Z);
}

const getPriceReserv = (n) => {
    let V = 0,
        N = n,
        M = getM(N);
    V = M;
    return parseInt(V);
}

const getPriceAKB = (n, h) => {
    let R = 0,
        N = n,
        H = h;
    R = (N * L) * H;
    return parseInt(R);
}

const getIncome = (usd, eur, x, f) => {
	let W = null,
		D = x,
		E = usd,
		C = eur,
		F = f,
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

	F = getArrayF();
	Y = getArrayY();
	M = getArrayM();
	J = getJ();
	G = getG();
	L = getL();

    animateCss('.header', 'fadeInDown');
    
    let houseEnergy = $('input#reserve-houseEnergy').val(),
        powerSes    = $('input#reserve-powerSes').val(),
        powerReserv = $('input#reserve-powerReserv').val(),
        timeReserv  = $('input#reserve-timeReserv').val();

    calculatuion(houseEnergy, powerSes, powerReserv, timeReserv);
	visualization(parseInt(powerReserv));
});

(function() {
    $("input#reserve-houseEnergy, input#reserve-timeReserv, input#reserve-powerSes, input#reserve-powerReserv").ionRangeSlider({
		skin: "round",
		onChange: function(data) {
			if($(window).width() < 1024)
				$('body').css('overflow-y', 'hidden');
				
			let houseEnergy = $('input#reserve-houseEnergy').val(),
			    powerSes    = $('input#reserve-powerSes').val(),
			    powerReserv = $('input#reserve-powerReserv').val(),
			    timeReserv  = $('input#reserve-timeReserv').val();

			calculatuion(houseEnergy, powerSes, powerReserv, timeReserv);
			visualization(parseInt(powerReserv));
		},
		onFinish: function (data) {
			if($(window).width() < 1024)
				$('body').css('overflow-y', 'scroll');
        }
	});
})();