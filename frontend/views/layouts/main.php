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
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
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
    <link rel="alternate" hreflang="en-ua" href="https://sunsayenergy.com/en<?= $final_uri; ?>" />

	<link href="https://fonts.googleapis.com/css?family=Prompt:900&display=swap" rel="stylesheet">
	<style>
		.preloader{display:flex;align-items:center;justify-content:center;position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;background:#fff}.sk-chasing-dots{width:90px;height:90px;position:relative;margin:auto;text-align:center;animation:sk-chasing-dots-rotate 2s infinite linear}.sk-child{width:calc(90px / 2);height:calc(90px / 2);display:inline-block;position:absolute;top:0;background-color:#ffd100;border-radius:100%;animation:sk-chasing-dots-bounce 2s infinite ease-in-out}.sk-dot-2{background-color:#dfedff;top:auto;bottom:0;animation-delay:calc(-2s / 2)}@keyframes sk-chasing-dots-rotate{100%{transform:rotate(360deg)}}@keyframes sk-chasing-dots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}
	</style>
	<script>
        window.addEventListener('load', function () {document.querySelector(".preloader").style = "display:none;";});
	</script>

    <meta name="google-site-verification" content="xxxLG9Hae7rnxth_CLJ3SBLXRhnRpnEg-DV95cNNyxI" />

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
	<header class="header <?php if(Yii::$app->controller->route == 'site/commercial'){ ?>transparent<?php } ?>" id="header">
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
							<li><a itemprop="telephone" class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
							<li><a itemprop="telephone" class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a itemprop="telephone" class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
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
								<ul class="social-list">
                                    <?php if (!empty($contacts->link_fb)): ?>
										<li class="facebook">
											<a href="<?= $contacts->link_fb ?>" target="_blank">
												<i class="icon-facebook"></i>
											</a>
										</li>
                                    <?php endif; ?>
                                    <?php if (!empty($contacts->link_youtube)): ?>
										<li>
											<a href="<?= $contacts->link_youtube ?>" target="_blank">
												<i class="icon-youtube"></i>
											</a>
										</li>
                                    <?php endif; ?>
                                    <?php if (!empty($contacts->link_telegram)): ?>
										<li>
											<a href="<?= $contacts->link_telegram ?>" target="_blank">
												<i class="icon-telegram"></i>
											</a>
										</li>
                                    <?php endif; ?>
                                    <?php if (!empty($contacts->link_viber)): ?>
										<li>
											<a href="<?= $contacts->link_viber ?>" target="_blank">
												<i class="icon-viber"></i>
											</a>
										</li>
                                    <?php endif; ?>
                                    <?php if (!empty($contacts->link_insta)): ?>
										<li>
											<a href="<?= $contacts->link_insta ?>" target="_blank">
												<i class="icon-instagram"></i>
											</a>
										</li>
                                    <?php endif; ?>
								</ul>
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
						<img class="logo-def" src="/img/logo.svg" width="184" alt="sunsay energy">
						<img class="logo-white" src="/img/logo-navbar.svg" width="184" alt="sunsay energy">
						<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
					</a>
				</strong>
				<nav class="header-nav">
					<strong class="nav-logo">
						<a href="<?= \yii\helpers\Url::to(['/']); ?>">
							<img src="/img/logo-navbar.svg" width="148" alt="sunsay energy">
						</a>
					</strong>
					<ul class="nav-list">
						<li class="dropdown-wrapper">
                  			<span><?= BaseController::getMessage('1') ?> <i class="icon-angle-down"></i></span>
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
                        <li class="<?= (Yii::$app->controller->route == 'site/video') ? 'active' : ''; ?>">
                            <a href="<?= \yii\helpers\Url::to(['/video']); ?>"><?= BaseController::getMessage('412') ?></a>
                        </li>
						<li class="subnav"><?= BaseController::getMessage('11') ?></li>
						<li class="<?= (Yii::$app->controller->route == 'project/project') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('320') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/about']); ?>"><?= BaseController::getMessage('7') ?></a>
						</li>
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
		<span id="to-top-link"><i class="icon-angle-top"></i></span>
	</div>

<?= $content ?>
<?php if (Yii::$app->controller->route != 'site/error'): ?>
	<div class="bottom-contact-block" id="contact" itemscope itemtype="http://schema.org/PostalAddress">
		<div class="container">
			<ul class="bottom-contact-list">
				<li>
					<ul class="mobile-open-close">
						<li>
							<i class="icon-phone"></i>
							<a itemprop="telephone" class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone) ?>"><?= $contacts->phone ?></a>
							<span class="open-close-opener">
								<i class="icon-angle-right"></i>
							</span>
						</li>
						<li>
							<a itemprop="telephone" class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a>
						</li>
						<li>
							<a itemprop="telephone" class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a>
						</li>
					</ul>
				</li>
				<li class="border"></li>
				<li class="address-item">
					<i class="icon-envelope"></i>
					<a itemprop="email" href="mailto:<?= $contacts->email ?>"><?= $contacts->email ?></a>
				</li>
				<li class="border"></li>
				<li class="address-item">
					<i class="icon-pin"></i>
					<address itemprop="streetAddress"><?= $contacts->address ?></address>
				</li>
			</ul>
			<ul class="social-list">
                <?php if (!empty($contacts->link_fb)): ?>
					<li class="facebook">
						<a href="<?= $contacts->link_fb ?>" target="_blank">
							<i class="icon-facebook"></i>
						</a>
					</li>
                <?php endif; ?>
                <?php if (!empty($contacts->link_youtube)): ?>
					<li>
						<a href="<?= $contacts->link_youtube ?>" target="_blank">
							<i class="icon-youtube"></i>
						</a>
					</li>
                <?php endif; ?>
				<?php if (!empty($contacts->link_telegram)): ?>
					<li>
						<a href="<?= $contacts->link_telegram ?>" target="_blank">
							<i class="icon-telegram"></i>
						</a>
					</li>
                <?php endif; ?>
                <?php if (!empty($contacts->link_viber)): ?>
					<li>
						<a href="<?= $contacts->link_viber ?>" target="_blank">
							<i class="icon-viber"></i>
						</a>
					</li>
                <?php endif; ?>
                <?php if (!empty($contacts->link_insta)): ?>
					<li>
						<a href="<?= $contacts->link_insta ?>" target="_blank">
							<i class="icon-instagram"></i>
						</a>
					</li>
                <?php endif; ?>
			</ul>
		</div>

		<?php if(Yii::$app->controller->route == 'site/index'){ ?>
		<div id="map"></div>
		<?php } ?>
	</div>
	<!-- start footer -->
	<footer class="footer">
		<div class="footer__nav">
			<div class="container">
				<div class="footer__nav-info">
					<div class="company-info">
						<strong class="footer-logo">
							<a href="<?= \yii\helpers\Url::to(['/']); ?>">
								<img src="/img/logo-navbar.svg" width="185" alt="sunsay energy">
								<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
							</a>
						</strong>
						<div class="copyright">
							<p><?= BaseController::getMessage('15') ?></p>
							<a href="<?= \yii\helpers\Url::to(['/']); ?>">&copy; SUNSAY Energy <?= date('Y'); ?></a>
						</div>
					</div>
					<div class="footer__nav-menu">
						<h4 class="title"><?= BaseController::getMessage('1') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-station-for-income']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-station-for-income']) . '"' ?>>
									<span><?= BaseController::getMessage('2') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-for-backup-power']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-for-backup-power']) . '"' ?>>
									<span><?= BaseController::getMessage('3') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-for-autonomous-power']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-for-autonomous-power']) . '"' ?>>
									<span><?= BaseController::getMessage('4') ?></span></a></li>
						</ul>
					</div>
					<div class="footer__nav-menu">
						<h4><?= BaseController::getMessage('11') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'project/project') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/project']) ? '' : 'href="' . \yii\helpers\Url::to(['/project']) . '"' ?>>
									<span><?= BaseController::getMessage('320') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/about']) ? '' : 'href="' . \yii\helpers\Url::to(['/about']) . '"' ?>>
									<span><?= BaseController::getMessage('7') ?></span></a></li>
						</ul>
					</div>
					<div class="footer__nav-menu">
						<h4><?= BaseController::getMessage('12') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'site/green') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/green-tariff']) ? '' : 'href="' . \yii\helpers\Url::to(['/green-tariff']) . '"' ?>>
									<span><?= BaseController::getMessage('5') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'technology/technology') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/technology']) ? '' : 'href="' . \yii\helpers\Url::to(['/technology']) . '"' ?>>
									<span><?= BaseController::getMessage('6') ?></span></a></li>
						</ul>
					</div>
					<div class="footer-contact-wrap">
						<h4>Контакты</h4>
						<ul class="footer-contact-list">
							<li><a class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
							<li><a class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
						</ul>
					</div>
				</div>
			</div>
        </div>
		<div class="footer-social-nav">
			<div class="container">
				<div class="footer-social-wrap">
					<div class="newsletter-wrap modal" id="footer-newsletter">
						<span class="subscribe-close"><i class="icon-close-bold"></i></span>
						<strong class="title-mobile"><?= BaseController::getMessage('13') ?></strong>
						<strong class="title"><?= BaseController::getMessage('410') ?></strong>
						<form class="form subscribe" method="post">
							<input class="custom-field" type="email" name="email" placeholder="youremail@mail.com">
							<button class="button btn-subscribe"><?= BaseController::getMessage('14') ?></button>
						</form>
						<div class="success-msg"><?= BaseController::getMessage('411') ?></div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-mobile-bottom">
			<div class="container">
				<a href="#footer-newsletter" class="button newsletter-opener"><?= BaseController::getMessage('410') ?></a>
				<div class="copyright">
					<p><?= BaseController::getMessage('15') ?> &copy; SUNSAY Energy <?= date('Y'); ?></p>
				</div>
			</div>
		</div>
    </footer>
    <!-- end footer -->

<?php endif; ?>
<!-- start modal overlay-->
<div class="overlay"></div>
<!-- end modal overlay-->

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

<script>
	// var cb = function() {
	// var l = document.createElement('link'); l.rel = 'stylesheet';
	// l.href = '/min/all.min.css';
	// var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	// };
	// var raf = requestAnimationFrame || mozRequestAnimationFrame ||
	// webkitRequestAnimationFrame || msRequestAnimationFrame;
	// if (raf) raf(cb);
	// else window.addEventListener('load', cb);
</script>

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


<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
