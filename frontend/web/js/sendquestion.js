(function(){$('.request-popup-btn').click(function(e){e.preventDefault();let name=$('.request-question input[name="fullname"]'),type=$('.request-question select[name="consultation"]'),phone=$('.request-question input[name="phone"]'),email=$('.request-question input[name="email"]');var $selectedOption=type.find('option:selected');var esputnik=$selectedOption.data('type');if(name.val()!='')
name.css('border-color','#222')
else name.css('border-color','red')
if(type.val()!='')
type.css('border-color','#222')
else type.css('border-color','red')
if(phone.val()!='')
phone.css('border-color','#222')
else phone.css('border-color','red')
if(validateEmail(email.val()))
email.css('border-color','#222')
else email.css('border-color','red')
if(name.val()!=''&&type.val()!=''&&phone.val()!=''&&validateEmail(email.val())){dataLayer.push({'eventCategory':'form','eventAction':'sent','eventLabel':type.val(),'event':'autoEvent'});$.ajax({type:"post",url:"/site/request",data:{'name':name.val(),'type':type.val(),'esputnik':esputnik,'phone':phone.val(),'email':email.val()},dataType:"json",beforeSend:function(response){$(".request-popup-btn").attr("disabled","disabled").text('Відправлення...').removeClass('btn-primary').addClass('btn-primary-disable').css({cursor:'wait'})},complete:function(response){$(".request-popup-btn").text('Надіслано').css({cursor:'default'});if($(window).innerHeight()<768){$('.request-question .form-compelete').css('display','block;').hide().fadeIn()}else{$('.request-question .form-compelete').css('display','inline-flex;').hide().fadeIn()}}})}});$('.connect-btn').click(function(e){e.preventDefault();let name=$('.connect__content-question input[name="fullname"]'),type=$('.connect__content-question input[name="question"]'),phone=$('.connect__content-question input[name="phone"]'),email=$('.connect__content-question input[name="email"]');var $selectedOption=type.find('option:selected');var esputnik=$selectedOption.data('type');dataLayer.push({'eventCategory':'form','eventAction':'sent','eventLabel':type.val(),'event':'autoEvent'});if(name.val()!='')
name.css('border-color','#222')
else name.css('border-color','red')
if(type.val()!='')
type.css('border-color','#222')
else type.css('border-color','red')
if(phone.val()!='')
phone.css('border-color','#222')
else phone.css('border-color','red')
if(validateEmail(email.val()))
email.css('border-color','#222')
else email.css('border-color','red')
if(name.val()!=''&&type.val()!=''&&phone.val()!=''&&validateEmail(email.val())){$.ajax({type:"post",url:"/site/request",data:{'name':name.val(),'type':type.val(),'esputnik':esputnik,'phone':phone.val(),'email':email.val()},dataType:"json",beforeSend:function(response){$(".connect-btn").attr("disabled","disabled").text('Відправлення...').removeClass('btn-primary').addClass('btn-primary-disable').css({cursor:'wait'})},complete:function(response){$(".connect-btn").text('Надіслано').css({cursor:'default'});if($(window).innerHeight()<768){$('.connect__content-question .form-compelete').css('display','block;').hide().fadeIn()}else{$('.connect__content-question .form-compelete').css('display','inline-flex;').hide().fadeIn()}}})}});$('.btn-subscribe').click(function(e){e.preventDefault();let email=$('.subscribe input[name="email"]');if(validateEmail(email.val()))
email.css('border-color','#222')
else email.css('border-color','red')
if(validateEmail(email.val())){dataLayer.push({'eventCategory':'form','eventAction':'sent','eventLabel':'subscribe','event':'autoEvent'});$.ajax({type:"post",url:"/site/subscribe",data:{'email':email.val(),'esputnik':'Pidtverdzhennya_pidpysku',},dataType:"json",beforeSend:function(response){email.attr("disabled","disabled");$(".btn-subscribe").attr("disabled","disabled").removeClass('btn-secondary').addClass('btn-secondary-disable').css({cursor:'wait'})},complete:function(response){$(".btn-subscribe").text('Надіслано').css({cursor:'default'});$('.footer__content-info__subscribe .title').text('Дякуємо! Ми забезпечуватимемо вас найсвіжішими новинами')}})}})})();function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())}