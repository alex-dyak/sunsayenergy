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
<html lang="<?= (Yii::$app->language=='ua') ? 'uk': Yii::$app->language ?>">

<head>
	<?php //Critical CSS ?>


	<?= Html::csrfMetaTags() ?>
	<title><?= Html::encode($this->title) ?></title>
	<?php $this->head() ?>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
	<meta name="format-detection" content="telephone=no">
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="white"/>
	<link rel="shortcut icon" href="/img/favicon.ico">

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

	<!--  Preconnecting  -->
	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="preconnect" href="https://maps.googleapis.com" crossorigin>
	<link rel="preconnect" href="https://connect.facebook.net" crossorigin>
	<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
	<!--  End Preconnecting  -->
	<link rel="canonical" href="https://sunsayenergy.com<?= \yii\helpers\Url::to(); ?>" />

	<?php
	$request_uri = $_SERVER['REQUEST_URI'];
	$lang_array = ['/ru', '/en'];
	$final_uri = str_replace($lang_array, '', $request_uri);
	?>
	<link rel="stylesheet" href="/min/all.min.css">


	<link rel="alternate" hreflang="x-default" href="https://sunsayenergy.com<?= $final_uri; ?>" />
	<link rel="alternate" hreflang="uk-ua" href="https://sunsayenergy.com<?= $final_uri; ?>" />
	<link rel="alternate" hreflang="ru-ua" href="https://sunsayenergy.com/ru<?= $final_uri; ?>" />
	<link rel="alternate" hreflang="en-us" href="https://sunsayenergy.com/en<?= $final_uri; ?>" />


	<link href="https://fonts.googleapis.com/css?family=Prompt:900&display=swap" rel="stylesheet">

<!--	fullpage scroll -->
	<link rel="stylesheet" type="text/css" href="/style/lib/fullpage.min.css" />
	<script type="text/javascript" src="/js/lib/scrolloverflow.min.js"></script>
	<script type="text/javascript" src="/js/lib/fullpage.min.js"></script>

<!--	/ fullpage scroll -->
	<style>
		.preloader{display:flex;align-items:center;justify-content:center;position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;background:#fff}.sk-chasing-dots{width:90px;height:90px;position:relative;margin:auto;text-align:center;animation:sk-chasing-dots-rotate 2s infinite linear}.sk-child{width:calc(90px / 2);height:calc(90px / 2);display:inline-block;position:absolute;top:0;background-color:#ffd100;border-radius:100%;animation:sk-chasing-dots-bounce 2s infinite ease-in-out}.sk-dot-2{background-color:#dfedff;top:auto;bottom:0;animation-delay:calc(-2s / 2)}@keyframes sk-chasing-dots-rotate{100%{transform:rotate(360deg)}}@keyframes sk-chasing-dots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}
	</style>
	<script>
		window.addEventListener('load', function () {document.querySelector(".preloader").style = "display:none;";});
	</script>

	<meta name="google-site-verification" content="xxxLG9Hae7rnxth_CLJ3SBLXRhnRpnEg-DV95cNNyxI" />

    <!-- Marquiz script start -->
<!--    <script src="//script.marquiz.ru/v1.js" type="application/javascript"></script>-->
<!--    <script>-->
<!--        document.addEventListener("DOMContentLoaded", function() {-->
<!--            Marquiz.init({-->
<!--                host: '//quiz.marquiz.ru',-->
<!--                id: '5fa185757b366e00441631e0',-->
<!--                autoOpen: 80,-->
<!--                autoOpenFreq: 'once',-->
<!--                openOnExit: false-->
<!--            });-->
<!--        });-->
<!--    </script>-->
    <!-- Marquiz script end -->

    <!-- Hotjar Tracking Code for https://sunsayenergy.com -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2120169,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
</head>

<body style="opacity:1;" class="<?php if ( BaseController::is_mobile()  ): ?> mobile <?php endif; ?> <?= (Yii::$app->language=='ru')?'lang-ru':''?>">
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSSRL4V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="preloader">
    <div class="sk-chasing-dots">
        <div class="sk-child sk-dot-1"></div>
        <div class="sk-child sk-dot-2"></div>
    </div>
</div>
<?php $this->beginBody() ?>
<header class="header" id="header">
	<div class="container">
		<div class="header-wrap">
			<div class="mobile-top-block">
				<div class="contact-block" itemscope itemtype="http://schema.org/PostalAddress">
					<a class="contact-opener" href="#contact-opener">
						<i class="icon-phone"></i>
						<i class="icon-close"></i>
                        <?= BaseController::getMessage('8') ?>
					</a>
					<ul class="header-contact-list">
						<li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
						<li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
						<li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
						<li class="address-list">
							<i class="icon-envelope"></i>
							<a itemprop="email" href="mailto:<?= $contacts->email ?>">
                                <?= $contacts->email ?>
							</a>
						</li>
						<li class="address-list">
							<i class="icon-pin"></i>
							<address itemprop="streetAddress"><?= $contacts->address ?></address>
						</li>

						<li class="social-media">
                            <?= $this->render('../section/_social_links.php', compact('contacts')); ?>
						</li>
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
					<img oncontextmenu="return false" class="logo-def" src="/img/logo.svg" width="184" height="44" alt="SUNSAY Energy">
					<img oncontextmenu="return false" class="logo-white" src="/img/logo-navbar.svg" width="184" height="44" alt="SUNSAY Energy">
<!--					<span class="logo-text">--><?//= BaseController::getMessage('406') ?><!--</span>-->
				</a>
			</strong>
			<nav class="header-nav">
				<strong class="nav-logo">
					<a href="<?= \yii\helpers\Url::to(['/']); ?>">
						<img oncontextmenu="return false" src="/img/logo-navbar.svg" width="148" alt="SUNSAY Energy">
					</a>
				</strong>
				<ul class="nav-list">
                    <?php if (stripos($_SERVER['REQUEST_URI'], '/en/') === false) { ?>
					<li class="dropdown-wrapper">
						<span><?= BaseController::getMessage('1') ?> <i class="icon-angle-down"></i></span>
                        <ul class="dropdown header-drop-list">
                            <li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"><?= BaseController::getMessage('2') ?></a></li>
                            <li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><?= BaseController::getMessage('3') ?></a></li>
                            <li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><?= BaseController::getMessage('4') ?></a></li>
                            <li class="<?= (Yii::$app->controller->route == 'site/commercial') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/commercial_stations']); ?>"><?= BaseController::getMessage('531') ?></a></li>
                        </ul>
					</li>
					<li class="subnav"><?= BaseController::getMessage('12') ?></li>
					<li class="<?= (Yii::$app->controller->route == 'site/green') ? 'active' : ''; ?>">
						<a href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"><?= BaseController::getMessage('5') ?></a>
					</li>
                    <li class="dropdown-wrapper">
                        <span><a href="<?= \yii\helpers\Url::to(['/technology']); ?>"><?= BaseController::getMessage('6') ?></a> <i class="icon-angle-down"></i></span>
                        <ul class="dropdown header-drop-list">
                            <li><a href="<?= \yii\helpers\Url::to(['/technology/solnechnyye-paneli-pod-klyuch']); ?>"><?= BaseController::getMessage('748') ?></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/technology/solnechnyye-paneli-15-kvt']); ?>"><?= BaseController::getMessage('749') ?></a></li>
                            <li><a href="<?= \yii\helpers\Url::to(['/technology/solnechnaya-stantsiya-30-kvt']); ?>"><?= BaseController::getMessage('750') ?></a></li>
                        </ul>
                    </li>
                    <li class="<?= (Yii::$app->controller->route == 'site/video') ? 'active' : ''; ?>">
                        <a href="<?= \yii\helpers\Url::to(['/video']); ?>"><?= BaseController::getMessage('412') ?></a>
                    </li>
                    <li class="subnav"><?= BaseController::getMessage('11') ?></li>
                    <?php } ?>
                    <?php if (stripos($_SERVER['REQUEST_URI'], '/en/') !== false) { ?>
                        <li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
                            <a href="<?= \yii\helpers\Url::to(['/about']); ?>"><?= BaseController::getMessage('7') ?></a>
                        </li>
                    <?php } ?>
					<li class="<?= (Yii::$app->controller->route == 'project/project') ? 'active' : ''; ?>">
						<a href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('320') ?></a>
					</li>
                    <?php if (stripos($_SERVER['REQUEST_URI'], '/en/') === false) { ?>
                        <li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
                            <a href="<?= \yii\helpers\Url::to(['/about']); ?>"><?= BaseController::getMessage('7') ?></a>
                        </li>
                    <?php } ?>
					<li class="to_contact">
						<a href="#contact"><?= BaseController::getMessage('8') ?></a>
					</li>
				</ul>
				<div class="btn-wrap">
					<a class="button header-btn" href="#" id="order-form"><?= BaseController::getMessage('9') ?></a>
				</div>
				<ul class="language-switch">
					<li><a <?= (Yii::$app->language=='ua')?'class="active"':''   ?>  href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a></li>
					<li><a <?= (Yii::$app->language=='ru')?'class="active"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a></li>
                    <li><a <?= (Yii::$app->language=='en')?'class="active"':''   ?>  href="/en/<?= \frontend\components\UrlTrimLang::widget() ?>">EN</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>
<div class="to-top-block" id="to_top_block">
    <div class="logo-block">
        <a href="<?= \yii\helpers\Url::to(['/']); ?>">
            <img oncontextmenu="return false" src="/img/logo.svg" alt="SUNSAY Energy" width="120">
        </a>
    </div>
    <span id="to-top-link"><i class="icon-angle-top"></i></span>
</div>

<?= $content ?>



<script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js/dist/defer_plus.min.js"></script>
<?php if ( BaseController::is_mobile()  ): ?>
    <script src="/min/main-mob.js?v=3"></script>
<?php else: ?>
    <script src="/min/main.js?v=3"></script>
<?php endif; ?>

<script src="/min/new-js.js"></script>

<script>
    defer(function() {
        (function(w,d,u){

            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);

            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);

        })(window,document,'https://cdn.bitrix24.ua/b9504081/crm/site_button/loader_1_2svhj8.js');
    }, 2000);
</script>

<script type="application/ld+json">
    {
        "@context" : "http://schema.org",
        "@type" : "Organization",
        "name" : "SUNSAY Energy",
        "url" : "https://sunsayenergy.com/",
        "sameAs" : [
            "<?= $contacts->link_fb ?>",
            "<?= $contacts->link_linkedin ?>",
            "<?= $contacts->link_insta ?>"
        ]
    }
</script>

<script>
	new fullpage('#fullpage', {
		//options here
		licenseKey: '6700024D-E400429C-8E7E8D39-BC9F185B',
		autoScrolling: false,
		scrollHorizontally: false,
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow: true,
		dragAndMove: true,
		responsiveWidth: 1024,
        verticalCentered: false
	});

	//methods
	fullpage_api.setAllowScrolling(true);
</script>
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>