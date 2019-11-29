<?php

/* @var $this \yii\web\View */

/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use \frontend\controllers\BaseController;


$contacts = \backend\models\Contact::getContact();
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">


<head>
<?php //Critical CSS ?>
<style>
	/*html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}a{background-color:transparent}img{border-style:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}body{font:normal 1rem/100% Montserrat,sans-serif;line-height:1.5;color:#222;overflow-y:auto;overflow-x:hidden!important;scroll-behavior:smooth}a{text-decoration:none;color:#222}.btn{position:relative;z-index:1;font-family:Montserrat,sans-serif;font-weight:500;border:0;background:0 0}.btn-primary{padding:10px 30px}.btn-primary:before{content:'';position:absolute;height:100%;width:100%;top:0;left:0;z-index:-1;background-color:#ffd100;border-radius:2px}.section,main{position:relative;background-color:#fff}.backgroundfade{display:none;position:fixed;z-index:999;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.5)}.header{position:fixed;z-index:9999;width:100%;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500}.header-request-back{display:none;position:absolute;top:15px;right:70px;z-index:99999}.header-request-back img{width:10px;height:18px}.header__logotype{position:relative;z-index:2;-webkit-box-flex:1;-ms-flex:1 10%;flex:1 10%;-ms-flex-item-align:center;align-self:center;margin-left:30px;padding-top:10px;padding-bottom:10px}.header__logotype>a,.header__logotype>a img{vertical-align:middle;width:150px;height:auto}.header__navbar{position:relative;z-index:2;-webkit-box-flex:1;-ms-flex:1 90%;flex:1 90%;-ms-flex-item-align:center;align-self:center}.header__navbar>.navbar{display:-webkit-box;display:-ms-flexbox;display:flex}.electrostation{height:100vh;width:100%;position:fixed;top:0;right:0}.electrostation__info{position:relative;z-index:10;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;margin-left:30px}.electrostation__right{position:absolute;top:0;right:0}.electrostation__house{position:absolute;z-index:5;right:0;top:0;height:100vh}.electrostation__house-img{position:absolute;bottom:0;right:-200px;z-index:7;width:1100px;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-duration:1s;animation-duration:1s}.electrostation__title>h1{font:normal 4.25rem "Bebas Neue Cyrillic",sans-serif;line-height:1.2;text-transform:uppercase;margin:0;max-width:60%}.electrostation__description{font-size:1.125rem;margin-top:100px;margin-bottom:100px;max-width:600px}@media (max-width:1366px){.electrostation__description{max-width:450px}}.electrostation__contact{-webkit-animation-duration:1s;animation-duration:1s;position:absolute;bottom:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-left:30px;top:60px;right:200px;z-index:100}.electrostation__contact>div:not(:last-of-type){margin-right:30px}.electrostation__contact>.email,.electrostation__contact>.phone{position:relative}.electrostation__contact>.phone{font-size:1.5rem}.electrostation__contact>.address{display:inline-flex;align-items:center}.electrostation__contact>.email span,.electrostation__contact>.phone span{position:relative;z-index:3}.electrostation__contact>div>a{position:relative;z-index:2;color:#222}.electrostation__contact>div>a:hover{cursor:pointer}.electrostation__contact>.phone:before{display:block;position:absolute;z-index:2;content:'';height:12px;width:0;background-color:#ffe863;-webkit-transition:width .5s ease-in-out;-o-transition:width .5s ease-in-out;transition:width .5s ease-in-out;left:0;bottom:5px}.electrostation__contact>div:hover:before{width:100%}.electrostation__switch{position:absolute;z-index:10;right:30px;top:100px;display:-webkit-box;display:-ms-flexbox;display:flex}.electrostation__switch>a{-webkit-transition:color .3s ease-in-out;-o-transition:color .3s ease-in-out;transition:color .3s ease-in-out}.electrostation__switch>a.active,.electrostation__switch>a:hover{color:#fff}.electrostation__switch>a:not(:last-of-type){margin-right:15px}@media (max-width:1536px){.electrostation__house-img{width:900px}.electrostation__contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:1rem;font-weight:500}.electrostation__contact>.phone{font-size:1.5rem}.electrostation__contact>.mail{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.electrostation__contact>div:not(:last-of-type){margin-right:0}.electrostation__description{margin-top:50px;margin-bottom:50px}}@media (max-width:1440px){.electrostation__contact>.email{display:none}.electrostation__house-img{width:850px}}@media (max-width:1366px){.electrostation__house-img{width:800px}.electrostation #electroBack{margin-right:-30px}.electrostation__description{margin-top:15px;margin-bottom:30px}.electrostation__contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.electrostation__contact>div:not(:last-of-type){margin-right:10px}}@media (max-width:1024px){.electrostation #electroBack{display:none}.electrostation__title>h1{font-size:2.5rem;max-width:100%}.electrostation__description{font-size:1rem;margin-top:30px;margin-bottom:30px}.electrostation__house{background-image:url(../img/m_header_background.svg);background-repeat:no-repeat;background-position:right bottom;background-size:60%;width:100%}.electrostation__house-img{width:500px;right:0}.electrostation__contact{margin-bottom:50px}.electrostation__switch{display:none}}@media (max-width:768px){.electrostation__contact{display:none}.electrostation__info{position:relative;z-index:15;margin-left:15px;margin-right:15px}}@media (max-width:420px){.electrostation__house-img{width:350px!important}.electrostation__title>h1{font-size:2rem}.electrostation__description{font-size:.875rem;margin-top:45px;margin-bottom:60px}.electrostation__info{margin-top:-100px}.electrostation__button>a>.btn{font-size:.875rem}}@media (max-width:375px){.electrostation__house-img{width:300px!important}.electrostation__description{margin-top:30px;margin-bottom:45px}}@media (max-width:320px){.electrostation__house-img{width:250px!important}.electrostation__title>h1{font-size:2rem}.electrostation__description{font-size:.875rem;margin-top:15px;margin-bottom:15px}.electrostation__info{margin-top:0;top:50px;transform:none;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none}.electrostation__button .btn-primary{font-size:.875rem;padding:7px 20px}}.info{z-index:100;padding:100px 30px;margin-top:100vh}.header__navbar .navbar__list{-webkit-box-flex:1;-ms-flex:1 85%;flex:1 85%}.header__navbar .navbar__list-item{margin-left:40px;position:relative}.header__navbar .navbar__list-item-block{display:inline-block;position:relative;padding-top:15px;padding-bottom:15px}.header__navbar .navbar__list-item:before{display:block;position:absolute;z-index:2;content:'';height:10px;width:0;background-color:#ffe863;left:0;bottom:0}.header__navbar .navbar__list-item>span{position:relative;z-index:5}.header__navbar .navbar__list-item-dropdown{display:none;background-color:#fff;width:320px;position:absolute;top:100%;margin-left:15px;padding:15px 30px 30px 30px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.header__navbar .navbar__list-item-dropdown>a{display:block;position:relative}.header__navbar .navbar__list-item-dropdown>a:not(:last-of-type){margin-bottom:15px;padding-bottom:15px;border-bottom:1px solid #c7c9c7}.header__navbar .navbar__list-item-dropdown>a>span{position:relative}.header__navbar .navbar__list-item-dropdown>a>span:before{display:block;position:absolute;z-index:2;content:'';height:10px;width:0;background-color:#ffe863;left:0;bottom:0}.header__navbar .navbar__list-item-dropdown>a>span>span{position:relative;z-index:5}.header__navbar .navbar__right{-webkit-box-flex:1;-ms-flex:1 20%;flex:1 20%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header__navbar .navbar__right-item{margin-left:40px;position:relative}.header__navbar .navbar__right-item:before{display:block;position:absolute;z-index:2;content:'';height:10px;width:0;background-color:#ffe863;left:0;bottom:0}.header__navbar .navbar__right-item>span{position:relative;z-index:5;margin-right:30px}.header__request{position:relative;z-index:5;-webkit-box-flex:1;-ms-flex:1 10%;flex:1 10%;-ms-flex-item-align:center;align-self:center;text-align:right}.header__request a{position:relative;z-index:1;top:5px;right:30px}.header__request .request-close{display:none;position:fixed;z-index:1000;top:0;right:0;background:url(../img/close_background.svg);width:55px;height:55px}.header__request .request-close>.close{position:relative;z-index:1001;top:12px;right:10px;width:18px}.header__request>#buttonBack{position:absolute;z-index:1;top:-10px;right:0}.header__button{position:absolute;z-index:10;right:0;top:0;opacity:1}.header__button #nav-icon{display:none;position:absolute;top:6px;right:15px;width:22px;height:22px}.navbar-mobile{display:none}@media (max-width:1536px){.header__navbar{-webkit-box-flex:1;-ms-flex:1 75%;flex:1 75%}.header__request{-webkit-box-flex:1;-ms-flex:1 15%;flex:1 15%}}@media (max-width:1440px){.header__navbar .navbar__list{-webkit-box-flex:1;-ms-flex:1 90%;flex:1 90%}.header__navbar .navbar__list-item{font-size:.875rem}.header__navbar .navbar__right{-webkit-box-flex:1;-ms-flex:1 10%;flex:1 10%}.header__navbar .navbar__right-item{font-size:.875rem}.header__request a{font-size:.875rem}}@media (max-width:1366px){.header__navbar .navbar__list,.header__navbar .navbar__right{font-size:.875rem}.header__navbar .navbar__right{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media (max-width:1024px){.header__navbar{display:none}.header__logotype{margin-left:15px}.header__request #buttonBack,.header__request .request-btn{display:none}.header__button{background-image:url(../img/m_button_background.svg);background-repeat:no-repeat;background-size:cover;width:55px;height:55px;top:0;opacity:1}.header__button #nav-icon{display:block}.navbar-mobile{background-color:#fff;height:100%;width:100%;position:fixed;top:0;left:0;z-index:9999}.navbar-mobile-container{margin:10px 15px}.navbar-mobile-container .navbar-logotype img{width:auto;height:32px}.navbar-mobile-container .navbar-close img{position:absolute;z-index:2;top:12px;right:10px;width:18px}.navbar-mobile-container .navbar-close:before{content:'';background-image:url(../img/close_background.svg);background-repeat:no-repeat;background-position:center;position:absolute;z-index:1;width:55px;height:55px;right:0;top:0}.navbar-mobile-container .navbar-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:30px}.navbar-mobile-container .navbar-list-top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-mobile-container .navbar-item-dropdown{display:none;flex-direction:column;margin-left:15px;margin-top:10px;position:relative}.navbar-mobile-container .navbar-item-dropdown>a{display:inline-block}.navbar-mobile-container .navbar-item-dropdown>a:not(:last-of-type){margin-bottom:10px}.navbar-mobile-container .navbar-item:not(:last-of-type){margin-bottom:15px}.navbar-item-link::before,.navbar-list a::before,.navbar-mobile-container .navbar-item-dropdown a::before{display:block;position:absolute;z-index:2;content:'';height:10px;width:0;background-color:#ffe863;left:0;bottom:0}.navbar-item-link,.navbar-list a,.navbar-mobile-container .navbar-item-dropdown a{position:relative}.navbar-item-link span,.navbar-list a span,.navbar-mobile-container .navbar-item-dropdown a span{position:relative;z-index:5}.navbar-mobile-container .navbar-bottom{position:absolute;bottom:30px;left:15px;right:15px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.navbar-mobile-container .navbar-language{-webkit-box-flex:1;-ms-flex:1 55%;flex:1 55%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.navbar-mobile-container .navbar-language>a:not(:last-of-type){margin-right:15px}.navbar-mobile-container .navbar-language .active{color:#ffd100}.navbar-mobile-container .navbar-request{-webkit-box-flex:1;-ms-flex:1 45%;flex:1 45%;margin-top:60px}.navbar-mobile-container .navbar-request>.btn{font-size:.75rem;padding:10px 15px}.navbar-mobile-container .navbar-contacts{position:relative;margin-top:15px}}@media (max-width:768px){.header__request{z-index:5!important}}@media (max-width:420px){.header__logotype{margin-top:0;margin-left:15px}.header__logotype>a img{height:32px}.navbar-logotype{height:24px}.navbar-contacts a,.navbar-list a{font-size:.875rem}}.electrostation{height:100vh;width:100%;position:fixed;top:0;right:0}.electrostation__info{position:relative;z-index:10;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;margin-left:30px}.electrostation__house{position:absolute;z-index:5;right:0;top:0;height:100vh}.electrostation__title>h1{font:normal 4.25rem "Bebas Neue Cyrillic",sans-serif;line-height:1.2;text-transform:uppercase;margin:0;max-width:60%}.electrostation__description{font-size:1.125rem;margin-top:100px;margin-bottom:100px;max-width:600px}@media (max-width:1366px){.electrostation__description{max-width:450px}}.electrostation__contact{-webkit-animation-duration:1s;animation-duration:1s;position:absolute;bottom:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-left:30px}.electrostation__contact>div:not(:last-of-type){margin-right:30px}.electrostation__contact>.phone{position:relative}.electrostation__contact>.phone{font-size:1.2rem}.electrostation__contact>.address{display:inline-flex;align-items:center}.electrostation__contact>div>a{position:relative;z-index:2;color:#222}.electrostation__contact>.phone:before{display:block;position:absolute;z-index:2;content:'';height:12px;width:0;background-color:#ffe863;left:0;bottom:5px}.electrostation__switch{position:absolute;z-index:10;right:30px;top:100px;display:-webkit-box;display:-ms-flexbox;display:flex}.electrostation__switch>a.active{color:#fff}.electrostation__switch>a:not(:last-of-type){margin-right:15px}@media (max-width:1536px){.electrostation__contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:1rem;font-weight:500}.electrostation__contact>.phone{font-size:1.5rem}.electrostation__contact>div:not(:last-of-type){margin-right:0}.electrostation__description{margin-top:50px;margin-bottom:50px}}@media (max-width:1366px){.electrostation #electroBack{margin-right:-30px}.electrostation__description{margin-top:15px;margin-bottom:30px}.electrostation__contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.electrostation__contact>div:not(:last-of-type){margin-right:10px}}@media (max-width:1024px){.electrostation #electroBack{display:none}.electrostation__title>h1{font-size:2.5rem;max-width:100%}.electrostation__description{font-size:1rem;margin-top:30px;margin-bottom:30px}.electrostation__house{background-image:url(../img/m_header_background.svg);background-repeat:no-repeat;background-position:right bottom;background-size:60%;width:100%}.electrostation__contact{display:none}.electrostation__switch{display:none}}@media (max-width:768px){.electrostation__contact{display:none}.electrostation__info{position:relative;z-index:15;margin-left:15px;margin-right:15px}}@media (max-width:420px){.electrostation__title>h1{font-size:2rem}.electrostation__description{font-size:.875rem;margin-top:45px;margin-bottom:60px}.electrostation__info{margin-top:-100px}}@media (max-width:375px){.electrostation__description{margin-top:30px;margin-bottom:45px}}@media (max-width:320px){.electrostation__title>h1{font-size:2rem}.electrostation__description{font-size:.875rem;margin-top:15px;margin-bottom:15px}.electrostation__info{margin-top:0;top:50px;transform:none;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none}.electrostation__button .btn-primary{font-size:.875rem;padding:7px 20px}}@media (max-width:320px){.electrostation{height:auto}}@media (max-width:1000px) and (orientation:landscape) and (max-height:560px){.electrostation__info{margin-top:0!important}.electrostation__contact{display:none}.page-container{padding-top:80px}.electrostation__title>h1{font-size:2rem;max-width:100%}}@media (max-width:640px) and (orientation:landscape){.electrostation{height:auto;top:60px}.electrostation__description{font-size:1rem;margin-top:20px;margin-bottom:30px}}*/
</style>

    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PSSRL4V');</script>
    <!-- End Google Tag Manager -->
    

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="white"/>
	<link rel="shortcut icon" href="/img/favicon.ico">

    <!--  Preconnecting  -->
    <meta rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <meta rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta rel="preconnect" href="https://maps.googleapis.com" crossorigin>
    <meta rel="preconnect" href="https://connect.facebook.net" crossorigin>
    <meta rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    <!--  End Preconnecting  -->
    <link rel="canonical" href="https://sunsayenergy.com<?= \yii\helpers\Url::to(); ?>" />

    <?php
    $request_uri = $_SERVER['REQUEST_URI'];
    $lang_array = ['/ru', '/en'];
    $final_uri = str_replace($lang_array, '', $request_uri);
    ?>

    <link rel="alternate" hreflang="uk" href="https://sunsayenergy.com<?= $final_uri; ?>" />
    <link rel="alternate" hreflang="ru" href="https://sunsayenergy.com/ru<?= $final_uri; ?>" />
    <link rel="alternate" hreflang="en" href="https://sunsayenergy.com/en<?= $final_uri; ?>" />
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic" rel="stylesheet">
	<link rel="stylesheet" href="/min/all.min.css">
<!--	<link rel="stylesheet" href="/min/header.css">-->
</head>

<body style="opacity:1;" <?php if ( BaseController::is_mobile()  ): ?> class="mobile" <?php endif; ?>>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSSRL4V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<?php $this->beginBody() ?>
	<header class="header" id="header">
		<div class="container">
			<div class="header-wrap">
				<div class="mobile-top-block">
					<div class="contact-block">
						<a class="contact-opener" href="#contact-opener">
							<i class="icon-phone"></i>
							<i class="icon-close"></i>
                            <?= BaseController::getMessage('8') ?>
						</a>
						<ul class="header-contact-list">
							<li><a class="binct-phone-number-1" href="tel:<?= $contacts->phone; ?>"><?= $contacts->phone; ?></a></li>
							<li><a class="" href="tel:<?= $contacts->mobile_1; ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a class="" href="tel:<?= $contacts->mobile_2; ?>"><?= $contacts->mobile_2; ?></a></li>
						</ul>
					</div>
					<div id="nav-opener">
						<span><?= BaseController::getMessage('405') ?></span>
						<i class="icon-menu"></i>
						<i class="icon-close"></i>
					</div>
				</div>
				<strong class="main-logo">
					<a href="<?= \yii\helpers\Url::to(['/']); ?>">
						<img class="logo-def" src="/img/logo.svg" width="184" alt="sunsay energy">
						<img class="logo-white" src="/img/logo-navbar.svg" width="184" alt="sunsay energy">
						<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
					</a>
				</strong>
				<nav class="header-nav">
					<ul class="nav-list">
						<li class="logo-wrap">
							<strong class="nav-logo">
								<a href="<?= \yii\helpers\Url::to(['/']); ?>">
									<img data-src="/img/logo-navbar.svg" width="148" alt="sunsay energy">
								</a>
							</strong>
						</li>
						<li class="dropdown-wrapper">
                  <span><?= BaseController::getMessage('1') ?> <i class="icon-angle-down"></i>
                  </span>
							<ul class="dropdown header-drop-list">
								<li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"><?= BaseController::getMessage('2') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><?= BaseController::getMessage('3') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><?= BaseController::getMessage('4') ?></a></li>
							</ul>
						</li>
						<li class="subnav"><?= BaseController::getMessage('12') ?></li>
						<li class="<?= (Yii::$app->controller->route == 'site/green') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"><?= BaseController::getMessage('5') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'technology/technology') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/technology']); ?>"><?= BaseController::getMessage('6') ?></a>
						</li>
						<li class="subnav"><?= BaseController::getMessage('11') ?></li>
						<li class="<?= (Yii::$app->controller->route == 'site/project') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('320') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/about']); ?>"><?= BaseController::getMessage('7') ?></a>
						</li>
						<li>
							<a href="#contact"><?= BaseController::getMessage('8') ?></a>
						</li>
						<li class="btn-wrap">
							<a class="button header-btn" href="#" data-toggle="modal" data-modal-id="#modal-order"><?= BaseController::getMessage('9') ?></a>
						</li>
					</ul>
					<ul class="language-switch">
						<li><a <?= (Yii::$app->language=='ua')?'class="active"':''   ?>  href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a></li>
						<li><a <?= (Yii::$app->language=='ru')?'class="active"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<div class="to-top-block" id="to_top_block">
		<div class="logo-block">
			<a href="<?= \yii\helpers\Url::to(['/']); ?>">
				<img data-src="/img/logo.svg" alt="sunsay energy" width="120">
			</a>
		</div>
		<a href="#" id="to-top-link"><i class="icon-angle-top"></i></a>
	</div>
<?= $content ?>
<?php if (Yii::$app->controller->route != 'site/error'): ?>
    <!-- start footer -->
    <footer class="footer" id="contact">
        <div class="footer__content">
            <div class="footer__content-map">
                <div id="map"></div>
                <div class="footer__content-map__address">
                    <div class="footer__content-map__address-content">
                        <div class="phone"><a class="binct-phone-number-1" href="tel:<?= $contacts->phone ?>"><?= $contacts->phone ?></a></div>
                        <div class="email"><a href="mailto:<?= $contacts->email ?>"><?= $contacts->email ?></a></div>
                        <div class="address"><?= $contacts->address ?></div>
                        <div class="social">
                            <?php if (!empty($contacts->link_fb)): ?>
                                <a href="<?= $contacts->link_fb ?>" target="_blank">
                                    <svg class="facebook" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                         y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512;">
                                        <path d="M0,50v412c0,27.614,22.386,50,50,50h222.671V314.225h-66.656v-80.737h66.656v-67.805c0-49.312,39.976-89.288,89.288-89.288 h69.683v72.601h-49.862c-15.669,0-28.372,12.703-28.372,28.372v56.121h76.981l-10.639,80.737h-66.342V512H462 c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if (!empty($contacts->link_linkedin)): ?>
                                <a href="<?= $contacts->link_linkedin ?>" target="_blank">
                                    <svg class="linkedin" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                         y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512;">
                                        <path d="M0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z M157.218,422.383c0,6.521-5.286,11.807-11.807,11.807H95.169c-6.521,0-11.807-5.286-11.807-11.807V208.044	c0-6.521,5.286-11.807,11.807-11.807h50.243c6.521,0,11.807,5.286,11.807,11.807V422.383z M120.209,163.455	c-22.815,0.462-42.866-18.595-42.861-42.903c0-23.576,19.416-42.81,43.15-42.791c23.45,0.019,42.791,19.388,42.74,42.955 C163.182,145.392,142.703,163.992,120.209,163.455z M434.652,429.337c0,2.708-2.195,4.902-4.903,4.901l-64.209-0.016 c-2.706-0.001-4.901-2.195-4.901-4.902V296.968c0-11.44-4.635-21.803-12.136-29.299c-7.773-7.777-18.626-12.475-30.572-12.116 c-22.491,0.677-40.156,19.591-40.156,42.092v131.66c0,2.708-2.195,4.902-4.903,4.901l-64.05-0.016 c-2.706-0.001-4.899-2.195-4.899-4.901v-228.15c0-2.707,2.195-4.902,4.902-4.902h62.684c2.707,0,4.902,2.195,4.902,4.902v26.309	c0.006-0.011,0.253,0.02,0.673,0.084c1.211-2.191,2.53-4.313,3.955-6.357c13.064-18.748,34.783-31.015,59.366-31.015h12.886 c44.935,0,81.362,36.427,81.362,81.362v157.814H434.652z"></path>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if (!empty($contacts->link_viber)): ?>
                                <a href="<?= $contacts->link_viber ?>" target="_blank">
                                    <svg class="viber" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                         y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512;">
                                        <g>
                                            <path d="M332.632,118.392c-50.848-9.673-102.415-9.673-153.275,0c-22.245,4.955-50.23,31.772-55.702,53.342 c-9.1,41.737-9.1,84.047,0,125.784c5.471,21.571,33.457,48.388,55.702,53.342c0.006,0.001,0.011,0.002,0.017,0.003 c0.991,0.194,1.713,1.053,1.713,2.063v61.141c0,3.056,3.73,4.561,5.853,2.348l29.042-29.806c0,0,23.142-23.757,27.304-28.028 c0.407-0.418,0.968-0.644,1.55-0.628c29.321,0.812,58.674-1.556,87.796-7.092c22.245-4.955,50.242-31.772,55.702-53.342 c9.111-41.737,9.111-84.047,0-125.784C382.873,150.164,354.888,123.347,332.632,118.392z M333.408,300.632 c-4.449,9.446-10.922,17.305-20.261,22.321c-2.635,1.416-5.784,1.873-8.757,2.788c-3.42-1.038-6.679-1.736-9.706-2.992 c-31.363-13.012-60.227-29.799-83.091-55.532c-13.002-14.633-23.179-31.154-31.781-48.637c-4.079-8.291-7.517-16.907-11.021-25.467 c-3.196-7.806,1.511-15.87,6.467-21.751c4.65-5.52,10.634-9.744,17.114-12.857c5.058-2.43,10.047-1.029,13.741,3.258 c7.986,9.269,15.321,19.011,21.261,29.755c3.652,6.608,2.65,14.686-3.969,19.183c-1.609,1.093-3.075,2.376-4.574,3.611 c-1.314,1.082-2.551,2.175-3.452,3.64c-1.647,2.679-1.726,5.842-0.665,8.756c8.163,22.433,21.922,39.878,44.502,49.273 c3.614,1.503,7.242,3.254,11.404,2.768c6.971-0.815,9.228-8.461,14.113-12.456c4.775-3.904,10.876-3.956,16.02-0.701 c5.144,3.256,10.131,6.751,15.088,10.283c4.866,3.467,9.71,6.859,14.198,10.811C334.351,290.487,335.838,295.473,333.408,300.632z M292.913,227.528c-1.947,0.035-1.182-0.003-0.442-0.025c-3.138-0.11-4.844-1.957-5.181-4.96c-0.246-2.194-0.44-4.417-0.964-6.552 c-1.031-4.204-3.266-8.1-6.801-10.676c-1.669-1.217-3.561-2.104-5.543-2.675c-2.518-0.727-5.132-0.527-7.644-1.143 c-2.728-0.667-4.237-2.877-3.809-5.436c0.39-2.329,2.656-4.147,5.201-3.962c15.905,1.148,27.272,9.371,28.895,28.096 c0.115,1.321,0.249,2.717-0.044,3.98c-0.476,2.055-1.945,3.124-3.429,3.319C293.273,227.496,293.249,227.506,292.913,227.528z M283.023,184.703c-4.88-2.39-10.158-3.875-15.508-4.76c-2.338-0.386-4.701-0.621-7.05-0.948c-2.847-0.395-4.366-2.21-4.232-5.015 c0.126-2.629,2.047-4.52,4.912-4.358c9.415,0.535,18.508,2.569,26.878,7.001c17.021,9.014,26.743,23.241,29.581,42.239 c0.129,0.861,0.335,1.713,0.4,2.577c0.162,2.132,0.262,4.268,0.426,7.08c-0.067,0.512-0.103,1.717-0.402,2.851 c-1.089,4.119-7.333,4.634-8.771,0.477c-0.426-1.234-0.49-2.637-0.492-3.965c-0.015-8.689-1.903-17.369-6.285-24.929 C297.976,195.187,291.093,188.655,283.023,184.703z M335.615,243.417c-3.288,0.039-4.768-2.712-4.981-5.661 c-0.422-5.838-0.715-11.701-1.52-17.49c-4.247-30.56-28.615-55.842-59.032-61.267c-4.577-0.817-9.263-1.031-13.898-1.518 c-2.931-0.308-6.77-0.485-7.419-4.129c-0.545-3.055,2.033-5.487,4.942-5.643c0.791-0.043,1.586-0.007,2.381-0.003 c39.394,1.104,2.404,0.085,0.106,0.006c40.975,1.194,74.617,28.405,81.832,68.926c1.23,6.91,1.668,13.976,2.215,20.99 C340.47,240.575,338.799,243.378,335.615,243.417z"></path>
                                            <path d="M0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z M417.926,304.214l-0.101,0.404c-8.179,33.064-45.051,68.543-78.913,75.924l-0.382,0.079c-27.379,5.224-54.96,7.831-82.53,7.831 c-8.115,0-16.23-0.253-24.34-0.707l-37.395,38.871c-9.257,9.639-25.536,3.078-25.536-10.28v-36.908 c-32.597-9.309-66.724-43.157-74.565-74.811l-0.09-0.404c-10.111-46.175-10.111-93.001,0-139.175l0.09-0.404 c8.19-33.064,45.062-68.543,78.913-75.924l0.393-0.079c54.758-10.448,110.291-10.448,165.06,0l0.382,0.079 c33.861,7.381,70.734,42.86,78.913,75.924l0.101,0.404C428.038,211.213,428.038,258.04,417.926,304.214z"></path>
                                        </g>
                                    </svg>
                                </a>
                            <?php endif; ?>
                            <?php if (!empty($contacts->link_mail)): ?>
                                <a href="<?= $contacts->link_mail ?>" target="_blank">
                                    <svg class="mail" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                         y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512;">
                                        <g>
                                            <path d="M406.987,176.549c-1.61-0.974-3.613-1.039-5.282-0.167l-142.34,74.503c-1.997,1.039-4.684,1.039-6.66,0.005 L110.29,176.377c-2.278-1.191-5.188-0.636-6.841,1.596c-0.713,0.963-1.036,2.163-1.036,3.362l0,26.904 c0,1.965,1.071,3.78,2.8,4.722l148.23,81.141c0.808,0.436,1.696,0.662,2.584,0.662c0.888,0,1.782-0.226,2.579-0.668l150.97-82.669 v-30.275C409.587,179.268,408.602,177.524,406.987,176.549z"></path>
                                            <path d="M462,0H50C22.386,0,0,22.386,0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50 C512,22.386,489.614,0,462,0z M428.732,144.752v222.496H83.268V144.752H428.732z"></path>
                                        </g>
                                    </svg>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__content-map__address-mobile">
                <div class="footer__content-map__address-mobile-content">
                    <div class="address"><?= $contacts->address ?></div>
                    <div class="phone"><a class="binct-phone-number-1" href="tel:<?= $contacts->phone ?>"><?= $contacts->phone ?></a></div>
                    <div class="email"><a href="mailto:<?= $contacts->email ?>"><?= $contacts->email ?></a></div>

                    <div class="social">
                        <?php if (!empty($contacts->link_fb)): ?>
                            <a href="<?= $contacts->link_fb ?>" target="_blank">
                                <svg class="facebook" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                     style="enable-background:new 0 0 512 512;">
                                    <path d="M0,50v412c0,27.614,22.386,50,50,50h222.671V314.225h-66.656v-80.737h66.656v-67.805c0-49.312,39.976-89.288,89.288-89.288 h69.683v72.601h-49.862c-15.669,0-28.372,12.703-28.372,28.372v56.121h76.981l-10.639,80.737h-66.342V512H462 c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z"></path>
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if (!empty($contacts->link_linkedin)): ?>
                            <a href="<?= $contacts->link_linkedin ?>" target="_blank">
                                <svg class="linkedin" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                     y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                     style="enable-background:new 0 0 512 512;">
                                    <path d="M0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z M157.218,422.383c0,6.521-5.286,11.807-11.807,11.807H95.169c-6.521,0-11.807-5.286-11.807-11.807V208.044	c0-6.521,5.286-11.807,11.807-11.807h50.243c6.521,0,11.807,5.286,11.807,11.807V422.383z M120.209,163.455	c-22.815,0.462-42.866-18.595-42.861-42.903c0-23.576,19.416-42.81,43.15-42.791c23.45,0.019,42.791,19.388,42.74,42.955 C163.182,145.392,142.703,163.992,120.209,163.455z M434.652,429.337c0,2.708-2.195,4.902-4.903,4.901l-64.209-0.016 c-2.706-0.001-4.901-2.195-4.901-4.902V296.968c0-11.44-4.635-21.803-12.136-29.299c-7.773-7.777-18.626-12.475-30.572-12.116 c-22.491,0.677-40.156,19.591-40.156,42.092v131.66c0,2.708-2.195,4.902-4.903,4.901l-64.05-0.016 c-2.706-0.001-4.899-2.195-4.899-4.901v-228.15c0-2.707,2.195-4.902,4.902-4.902h62.684c2.707,0,4.902,2.195,4.902,4.902v26.309	c0.006-0.011,0.253,0.02,0.673,0.084c1.211-2.191,2.53-4.313,3.955-6.357c13.064-18.748,34.783-31.015,59.366-31.015h12.886 c44.935,0,81.362,36.427,81.362,81.362v157.814H434.652z"></path>
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if (!empty($contacts->link_viber)): ?>
                            <a href="viber://pa?chatURI=<?= $contacts->link_viber ?>" target="_blank">
                                <svg class="viber" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                     x="0px"
                                     y="0px" width="32px" height="32px" viewBox="0 0 512 512"
                                     style="enable-background:new 0 0 512 512;">
                                    <g>
                                        <path d="M332.632,118.392c-50.848-9.673-102.415-9.673-153.275,0c-22.245,4.955-50.23,31.772-55.702,53.342 c-9.1,41.737-9.1,84.047,0,125.784c5.471,21.571,33.457,48.388,55.702,53.342c0.006,0.001,0.011,0.002,0.017,0.003 c0.991,0.194,1.713,1.053,1.713,2.063v61.141c0,3.056,3.73,4.561,5.853,2.348l29.042-29.806c0,0,23.142-23.757,27.304-28.028 c0.407-0.418,0.968-0.644,1.55-0.628c29.321,0.812,58.674-1.556,87.796-7.092c22.245-4.955,50.242-31.772,55.702-53.342 c9.111-41.737,9.111-84.047,0-125.784C382.873,150.164,354.888,123.347,332.632,118.392z M333.408,300.632 c-4.449,9.446-10.922,17.305-20.261,22.321c-2.635,1.416-5.784,1.873-8.757,2.788c-3.42-1.038-6.679-1.736-9.706-2.992 c-31.363-13.012-60.227-29.799-83.091-55.532c-13.002-14.633-23.179-31.154-31.781-48.637c-4.079-8.291-7.517-16.907-11.021-25.467 c-3.196-7.806,1.511-15.87,6.467-21.751c4.65-5.52,10.634-9.744,17.114-12.857c5.058-2.43,10.047-1.029,13.741,3.258 c7.986,9.269,15.321,19.011,21.261,29.755c3.652,6.608,2.65,14.686-3.969,19.183c-1.609,1.093-3.075,2.376-4.574,3.611 c-1.314,1.082-2.551,2.175-3.452,3.64c-1.647,2.679-1.726,5.842-0.665,8.756c8.163,22.433,21.922,39.878,44.502,49.273 c3.614,1.503,7.242,3.254,11.404,2.768c6.971-0.815,9.228-8.461,14.113-12.456c4.775-3.904,10.876-3.956,16.02-0.701 c5.144,3.256,10.131,6.751,15.088,10.283c4.866,3.467,9.71,6.859,14.198,10.811C334.351,290.487,335.838,295.473,333.408,300.632z M292.913,227.528c-1.947,0.035-1.182-0.003-0.442-0.025c-3.138-0.11-4.844-1.957-5.181-4.96c-0.246-2.194-0.44-4.417-0.964-6.552 c-1.031-4.204-3.266-8.1-6.801-10.676c-1.669-1.217-3.561-2.104-5.543-2.675c-2.518-0.727-5.132-0.527-7.644-1.143 c-2.728-0.667-4.237-2.877-3.809-5.436c0.39-2.329,2.656-4.147,5.201-3.962c15.905,1.148,27.272,9.371,28.895,28.096 c0.115,1.321,0.249,2.717-0.044,3.98c-0.476,2.055-1.945,3.124-3.429,3.319C293.273,227.496,293.249,227.506,292.913,227.528z M283.023,184.703c-4.88-2.39-10.158-3.875-15.508-4.76c-2.338-0.386-4.701-0.621-7.05-0.948c-2.847-0.395-4.366-2.21-4.232-5.015 c0.126-2.629,2.047-4.52,4.912-4.358c9.415,0.535,18.508,2.569,26.878,7.001c17.021,9.014,26.743,23.241,29.581,42.239 c0.129,0.861,0.335,1.713,0.4,2.577c0.162,2.132,0.262,4.268,0.426,7.08c-0.067,0.512-0.103,1.717-0.402,2.851 c-1.089,4.119-7.333,4.634-8.771,0.477c-0.426-1.234-0.49-2.637-0.492-3.965c-0.015-8.689-1.903-17.369-6.285-24.929 C297.976,195.187,291.093,188.655,283.023,184.703z M335.615,243.417c-3.288,0.039-4.768-2.712-4.981-5.661 c-0.422-5.838-0.715-11.701-1.52-17.49c-4.247-30.56-28.615-55.842-59.032-61.267c-4.577-0.817-9.263-1.031-13.898-1.518 c-2.931-0.308-6.77-0.485-7.419-4.129c-0.545-3.055,2.033-5.487,4.942-5.643c0.791-0.043,1.586-0.007,2.381-0.003 c39.394,1.104,2.404,0.085,0.106,0.006c40.975,1.194,74.617,28.405,81.832,68.926c1.23,6.91,1.668,13.976,2.215,20.99 C340.47,240.575,338.799,243.378,335.615,243.417z"></path>
                                        <path d="M0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50c0-27.614-22.386-50-50-50H50C22.386,0,0,22.386,0,50z M417.926,304.214l-0.101,0.404c-8.179,33.064-45.051,68.543-78.913,75.924l-0.382,0.079c-27.379,5.224-54.96,7.831-82.53,7.831 c-8.115,0-16.23-0.253-24.34-0.707l-37.395,38.871c-9.257,9.639-25.536,3.078-25.536-10.28v-36.908 c-32.597-9.309-66.724-43.157-74.565-74.811l-0.09-0.404c-10.111-46.175-10.111-93.001,0-139.175l0.09-0.404 c8.19-33.064,45.062-68.543,78.913-75.924l0.393-0.079c54.758-10.448,110.291-10.448,165.06,0l0.382,0.079 c33.861,7.381,70.734,42.86,78.913,75.924l0.101,0.404C428.038,211.213,428.038,258.04,417.926,304.214z"></path>
                                    </g>
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if (!empty($contacts->link_mail)): ?>
                            <a href="<?= $contacts->link_mail ?>" target="_blank">
                                <svg class="mail" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink"
                                     x="0px" y="0px"
                                     width="32px" height="32px" viewBox="0 0 512 512"
                                     style="enable-background:new 0 0 512 512;">
                                    <g>
                                        <path d="M406.987,176.549c-1.61-0.974-3.613-1.039-5.282-0.167l-142.34,74.503c-1.997,1.039-4.684,1.039-6.66,0.005 L110.29,176.377c-2.278-1.191-5.188-0.636-6.841,1.596c-0.713,0.963-1.036,2.163-1.036,3.362l0,26.904 c0,1.965,1.071,3.78,2.8,4.722l148.23,81.141c0.808,0.436,1.696,0.662,2.584,0.662c0.888,0,1.782-0.226,2.579-0.668l150.97-82.669 v-30.275C409.587,179.268,408.602,177.524,406.987,176.549z"></path>
                                        <path d="M462,0H50C22.386,0,0,22.386,0,50v412c0,27.614,22.386,50,50,50h412c27.614,0,50-22.386,50-50V50 C512,22.386,489.614,0,462,0z M428.732,144.752v222.496H83.268V144.752H428.732z"></path>
                                    </g>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <div class="footer__content-info">
                <div class="footer__content-info__menu">
                    <div class="footer__content-info__item">
                        <div class="title"><?= BaseController::getMessage('1') ?></div>
                        <ul>
                            <li><a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']); ?>"><span><?= BaseController::getMessage('2') ?></span></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><span><?= BaseController::getMessage('3') ?></span></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><span><?= BaseController::getMessage('4') ?></span></a></li>
                        </ul>
                    </div>
                    <div class="footer__content-info__item">
                        <div class="title"><?= BaseController::getMessage('11') ?></div>
                        <ul>
                             <li><a href="<?= \yii\helpers\Url::to(['/project']); ?>"><span><?= BaseController::getMessage('320') ?></span></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/about']); ?>"><span><?= BaseController::getMessage('7') ?></span></a></li>
                        </ul>
                    </div>
                    <div class="footer__content-info__item">
                        <div class="title"><?= BaseController::getMessage('12') ?></div>
                        <ul>
                            <li><a href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"><span><?= BaseController::getMessage('5') ?></span></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/technology']); ?>"><span><?= BaseController::getMessage('6') ?></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__content-info__subscribe">
                    <div class="title"><?= BaseController::getMessage('13') ?></div>
                    <div class="form subscribe">
                        <input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
                        <button class="btn btn-subscribe btn-secondary"><?= BaseController::getMessage('14') ?></button>
                    </div>
                </div>

                <div class="footer__content-info__language">
                     <ul>
                         <li <?= (Yii::$app->language=='ua')?'class="active"':''   ?> ><a href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a></li>
                         <!--<li <?/*= (Yii::$app->language=='en')?'class="active"':''   */?> ><a href="/en/<?/*= \frontend\components\UrlTrimLang::widget() */?>">EN</a></li>-->
                         <li <?= (Yii::$app->language=='ru')?'class="active"':''   ?> ><a href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a></li>
                     </ul>
                    <div class="copyright"><?= BaseController::getMessage('15') ?><br/>© SUNSAY Energy 2019</div>
                </div>
            </div>
        </div>
    </footer>
    <!-- end footer -->

<?php endif; ?>
<!-- start request popup -->
<div class="request-popup modal" id="modal-order">
	<span class="modal-close"><i class="icon-close"></i></span>
    <div class="request-popup__container">
        <div class="request-content">
            <div class="request-title line-title">
                <h2><span><?= BaseController::getMessage('364') ?></span></h2>
            </div>
            <form class="request-question" data-post-url="index.html">

                <input class="custom-field" type="text" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">

                <input class="custom-field" type="text" name="phone" placeholder="+380">

                <input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
				<textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
                <div class="request-button">
                    <button class="btn btn-primary request-popup-btn"><?= BaseController::getMessage('14') ?></button>
                    <span class="form-compelete"><?= BaseController::getMessage('374') ?></span>
                </div>
            </form>
        </div>
        <div class="request-content-image">
            <?php if ( !BaseController::is_mobile()  ): ?>
                <picture>
                    <source data-srcset="/img/connect.webp" type="image/webp">
                    <img data-src="/img/connect.jpg" alt="">
                </picture>                
            <?php endif; ?>
        </div>
    </div>
</div>
<!-- end request popup -->

<?php if ( 0 && Yii::$app->controller->route != 'site/green' && Yii::$app->controller->route != 'site/types' && Yii::$app->controller->route != 'technology/technology' && Yii::$app->controller->route != 'technology/nine' && Yii::$app->controller->route != 'technology/detailed'): ?>
    <?php $projects = \backend\models\Project::find()->all(); ?>

    <!-- start example popup -->
    <div class="popup">
        <div class="popup__container">
            <div class="popup-close"><img data-src="/img/icon/Close.svg" alt=""></div>
            <div class="popup-example">
                <?php foreach ($projects as $item): ?>
                <div class="popup-example-item">
                    <picture>
                        <source media="(min-width: 800px)" data-srcset="<?= $item->getFirstImg(650); ?>" type="image/jpg">
                        <source media="(max-width: 799px)" data-srcset="<?= $item->getFirstImg(220); ?>" type="image/jpg">
                        <img data-src="<?= $item->getFirstImg(650); ?>" alt="">
                    </picture>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <!-- end example popup -->
<?php endif; ?>

<!-- start fade dropdown -->
<div class="backgroundfade" style="display:none;"></div>
<!-- end fade dropdown -->

<script>var cb = function() {
	// var l = document.createElement('link'); l.rel = 'stylesheet';
	// l.href = '/min/all.min.css';
	// var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	// };
	var raf = requestAnimationFrame || mozRequestAnimationFrame ||
	webkitRequestAnimationFrame || msRequestAnimationFrame;
	if (raf) raf(cb);
	else window.addEventListener('load', cb);</script>

<script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js/dist/defer_plus.min.js"></script>
<?php if ( BaseController::is_mobile()  ): ?>
    <script src="/min/main-mob.js?v=3"></script>
<?php else: ?>
    <script src="/min/main.js?v=3"></script>
<?php endif; ?>

<script src="/min/new-js.js"></script>


<script>deferimg('img[data-src],picture,video,audio', 100, 'lazied', function (img) {
    img.onload = function (e) {
        if ( img.className == 'check-slick lazied' ){
            if ($('.example__content-list.slick-slider').length ){
                console.log($('.example__content-list.slick-slider'));
                $('.example__content-list').slick("refresh");
            }
            if ($('.project-info__slider-nav.slick-slider').length ){
                $('.project-info__slider-nav').slick("refresh");
                $('.project-info__slider-nav .slick-list').css('height',$('.project-info__slider-nav .slick-list').height()-3+'px');
            }
            $('.check-slick').removeClass('check-slick');
        }
    }
});
</script>

<script>
    defer(function() {
        (function(w,d,u){

            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);

            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);

        })(window,document,'https://cdn.bitrix24.ua/b9504081/crm/site_button/loader_1_2svhj8.js');

        (function(d, w, s) {
          var widgetHash = 'sx43cntzz2qzbf66eje1', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
          ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
          var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
          })(document, window, 'script');

    }, 2000);
</script>

<script>
    defer(function() {
        $( "#map" ).lazyLoadGoogleMaps({key: 'AIzaSyB35Exje6kOhzSsEsUTg3V09ot0HILL-Qk',callback: initMap});
    }, 1500);
</script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
