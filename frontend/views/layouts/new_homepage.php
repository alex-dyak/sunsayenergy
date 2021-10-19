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

	<style>
		.b24-widget-button-position-bottom-left{
			left: 20px !important; b20}.preloader{display:none;align-items:center;justify-content:center;position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;background:#fff}.sk-chasing-dots{width:90px;height:90px;position:relative;margin:auto;text-align:center;animation:sk-chasing-dots-rotate 2s infinite linear}.sk-child{width:calc(90px / 2);height:calc(90px / 2);display:inline-block;position:absolute;top:0;background-color:#ffd100;border-radius:100%;animation:sk-chasing-dots-bounce 2s infinite ease-in-out}.sk-dot-2{background-color:#dfedff;top:auto;bottom:0;animation-delay:calc(-2s / 2)}@keyframes sk-chasing-dots-rotate{100%{transform:rotate(360deg)}}@keyframes sk-chasing-dots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}
	</style>
	<script>
        window.addEventListener('load', function () {document.querySelector(".preloader").style = "display:none;";});
	</script>

	<link rel="preload" href="/fonts/prompt/prompt-black.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Montserrat/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Montserrat/Montserrat-Medium.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Montserrat/Montserrat-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Montserrat/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Bebas/BebasNeueCyrillic.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/icon/Icons.woff" as="font" type="font/woff2" crossorigin>

	<link rel="stylesheet" href="/min/all.min.css">

	<link rel="alternate" hreflang="x-default" href="https://sunsayenergy.com<?= $final_uri; ?>" />
	<link rel="alternate" hreflang="uk-ua" href="https://sunsayenergy.com<?= $final_uri; ?>" />
    <link rel="alternate" hreflang="ru-ua" href="https://sunsayenergy.com/ru<?= $final_uri; ?>" />
    <link rel="alternate" hreflang="en-ua" href="https://sunsayenergy.com/en<?= $final_uri; ?>" />

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
	<header class="header transparent header-color" id="header">
		<div class="container">
			<div class="header-wrap">
				<div class="mobile-top-block new-mobile-top-block">
					<div class="contact-block" itemscope itemtype="http://schema.org/PostalAddress">
						<a class="contact-opener" href="#contact-opener">
							<i class="icon-phone"></i>
							<i class="icon-close"></i>
                            <?= BaseController::getMessage('8') ?>
						</a>
						<ul class="header-contact-list white-color-list">
							<li><a itemprop="telephone" class="white-color-tell" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
							<li><a itemprop="telephone" class="white-color-tell" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a itemprop="telephone" class="white-color-tell" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
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
				<strong class="main-logo new-main-logo">
					<a href="<?= \yii\helpers\Url::to(['/']); ?>">
						<img oncontextmenu="return false" class="logo-def" src="/img/logo.svg" width="184" alt="SUNSAY Energy">
						<img oncontextmenu="return false" class="logo-white" src="/img/logo-navbar.svg" width="184" alt="SUNSAY Energy">
						<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
					</a>
				</strong>
				<nav class="header-nav">
					<strong class="nav-logo">
						<a href="<?= \yii\helpers\Url::to(['/']); ?>">
							<img oncontextmenu="return false" src="/img/logo-navbar.svg" width="148" alt="SUNSAY Energy">
						</a>
					</strong>
					<ul class="nav-list">
						<li class="dropdown-wrapper">
                  			<span><?= BaseController::getMessage('1') ?> <i class="icon-angle-down"></i></span>
							<ul class="dropdown header-drop-list">
								<li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"><?= BaseController::getMessage('2') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><?= BaseController::getMessage('3') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><?= BaseController::getMessage('4') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/commercial') ? 'active' : ''; ?> new"><a href="<?= \yii\helpers\Url::to(['/commercial_stations']); ?>"><?= BaseController::getMessage('531') ?></a></li>
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
						<a class="button header-btn header-btn-color" href="#" id="order-form"><?= BaseController::getMessage('9') ?></a>
					</div>
					<ul class="language-switch">
						<li><a <?= (Yii::$app->language=='ua')?'class="active active-color"':''   ?>  href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a></li>
						<li><a <?= (Yii::$app->language=='ru')?'class="active active-color"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<div class="to-top-block" id="to_top_block">
		<div class="logo-block">
			<a href="<?= \yii\helpers\Url::to(['/']); ?>">
				<img oncontextmenu="return false" data-src="/img/logo.svg" alt="SUNSAY Energy" width="120">
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
							<a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->phone) ?>"><?= $contacts->phone ?></a>
							<span class="open-close-opener">
								<i class="icon-angle-right"></i>
							</span>
						</li>
                        <li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
                        <li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
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
								<img oncontextmenu="return false" src="/img/logo-navbar.svg" width="185" alt="SUNSAY Energy">
								<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
							</a>
						</strong>
						<div class="copyright">
							<p><?= BaseController::getMessage('15') ?></p>
							<a href="<?= \yii\helpers\Url::to(['/']); ?>">&copy; SUNSAY Energy <?= date('Y'); ?></a>
						</div>
					</div>
					<div class="footer__nav-menu">
						<strong class="title h4"><?= BaseController::getMessage('1') ?></strong>
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
						<strong class="h4"><?= BaseController::getMessage('11') ?></strong>
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
						<strong class="h4"><?= BaseController::getMessage('12') ?></strong>
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
						<strong class="h4"><?= BaseController::getMessage('8') ?></strong>
						<ul class="footer-contact-list">
							<li><a class="" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
                            <li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
                            <li><a itemprop="telephone" class="" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
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
                            <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                            <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                            <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                            <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                            <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
							<label for="subscribe-email" class="hidden">youremail@mail.com</label>
							<input class="custom-field" type="email" name="email" id="subscribe-email" placeholder="youremail@mail.com">
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

<div class="quiz-modal">
	<div class="quiz-modal-close js_quiz_close">
		<i class="icon-close"></i>
	</div>
	<div class="quiz-modal-container">
		<form class="quiz-modal-form">
			<input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
			<input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
			<input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
			<input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
			<input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
			<div class="quiz-step quiz-intro-screen" style="display:block;">
				<div class="bg-block"></div>
				<div class="quiz-intro-content">
					<strong class="quiz-title"><?= BaseController::getMessage('610') ?></strong>
					<p><?= BaseController::getMessage('611') ?></p>
					<span class="quiz-btn js_quiz_next" data-next="#quiz-question-1"><?= BaseController::getMessage('612') ?></span>
					<span class="quiz-subtitle"><?= BaseController::getMessage('613') ?></span>
					<ul class="quiz-bonus-list">
						<li>
							<div class="img-wrap">
								<img src="/img/quiz/dron.svg" width="65" loading="lazy" alt="<?= BaseController::getMessage('614') ?>">
							</div>
							<span><?= BaseController::getMessage('614') ?></span>

						</li>
						<li>
							<div class="img-wrap">
								<img src="/img/quiz/desk.svg" width="38" loading="lazy" alt="<?= BaseController::getMessage('615') ?>">
							</div>
							<span><?= BaseController::getMessage('615') ?></span>

						</li>
					</ul>
				</div>
			</div>
			<div class="quiz-step quiz-question-screen" id="quiz-question-1">
				<strong class="quiz-title"><?= BaseController::getMessage('616') ?></strong>
				<div class="quiz-radio-wrap">
					<input type="radio" id="sunstaion-1" class="quiz-radio" name="radio-question-1" value="<?= BaseController::getMessage('617') ?>">
					<label for="sunstaion-1"><?= BaseController::getMessage('617') ?></label>
					<input type="radio" id="sunstaion-2" class="quiz-radio" name="radio-question-1" value="<?= BaseController::getMessage('618') ?>">
					<label for="sunstaion-2"><?= BaseController::getMessage('618') ?></label>
					<input type="radio" id="sunstaion-3" class="quiz-radio" name="radio-question-1" value="<?= BaseController::getMessage('619') ?>">
					<label for="sunstaion-3"><?= BaseController::getMessage('619') ?></label>
				</div>
				<span class="skip-step"><?= BaseController::getMessage('633') ?></span>
				<span class="quiz-btn js_quiz_next" data-next="#quiz-question-2"><?= BaseController::getMessage('634') ?></span>
			</div>
			<div class="quiz-step quiz-question-screen" id="quiz-question-2">
				<strong class="quiz-title"><?= BaseController::getMessage('620') ?></strong>
				<div class="quiz-radio-wrap">
					<input type="radio" id="connect-1" class="quiz-radio" name="radio-question-2" value="<?= BaseController::getMessage('621') ?>">
					<label for="connect-1"><?= BaseController::getMessage('621') ?></label>
					<input type="radio" id="connect-2" class="quiz-radio" name="radio-question-2" value="<?= BaseController::getMessage('622') ?>">
					<label for="connect-2"><?= BaseController::getMessage('622') ?></label>
					<input type="radio" id="connect-3" class="quiz-radio" name="radio-question-2" value="<?= BaseController::getMessage('623') ?>">
					<label for="connect-3"><?= BaseController::getMessage('623') ?></label>
					<input type="radio" id="connect-4" class="quiz-radio" name="radio-question-2" value="<?= BaseController::getMessage('624') ?>">
					<label for="connect-4"><?= BaseController::getMessage('624') ?></label>
				</div>
				<span class="skip-step"><?= BaseController::getMessage('633') ?></span>
				<span class="quiz-btn js_quiz_next" data-next="#quiz-question-3"><?= BaseController::getMessage('634') ?></span>
			</div>
			<div class="quiz-step quiz-question-screen" id="quiz-question-3">
				<strong class="quiz-title"><?= BaseController::getMessage('625') ?></strong>
				<div class="quiz-radio-wrap">
					<input type="radio" id="power-1" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('626') ?>">
					<label for="power-1"><?= BaseController::getMessage('626') ?></label>
					<input type="radio" id="power-2" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('627') ?>">
					<label for="power-2"><?= BaseController::getMessage('627') ?></label>
					<input type="radio" id="power-3" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('628') ?>">
					<label for="power-3"><?= BaseController::getMessage('628') ?></label>
					<input type="radio" id="power-4" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('629') ?>">
					<label for="power-4"><?= BaseController::getMessage('629') ?></label>
					<input type="radio" id="power-5" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('630') ?>">
					<label for="power-5"><?= BaseController::getMessage('630') ?></label>
					<input type="radio" id="power-6" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('631') ?>">
					<label for="power-6"><?= BaseController::getMessage('631') ?></label>
					<input type="radio" id="power-7" class="quiz-radio" name="radio-question-3" value="<?= BaseController::getMessage('632') ?>">
					<label for="power-7"><?= BaseController::getMessage('632') ?></label>
				</div>
				<span class="skip-step"><?= BaseController::getMessage('633') ?></span>
				<span class="quiz-btn js_quiz_next" data-next="#quiz-bonus"><?= BaseController::getMessage('634') ?></span>
			</div>
			<div class="quiz-step quiz-bonus-screen" id="quiz-bonus">
				<strong class="quiz-title"><?= BaseController::getMessage('635') ?></strong>
				<p><?= BaseController::getMessage('636') ?></p>
				<span class="quiz-subtitle"><?= BaseController::getMessage('613') ?></span>
				<ul class="quiz-bonus-list">
					<li>
						<div class="img-wrap">
							<img src="/img/quiz/dron.svg" width="65" loading="lazy" alt="<?= BaseController::getMessage('614') ?>">
						</div>
						<span><?= BaseController::getMessage('614') ?></span>

					</li>
					<li>
						<div class="img-wrap">
							<img src="/img/quiz/desk.svg" width="38" loading="lazy" alt="<?= BaseController::getMessage('615') ?>">
						</div>
						<span><?= BaseController::getMessage('615') ?></span>

					</li>
				</ul>
				<div class="quiz-user-info">
					<div class="input-row">
						<div class="input-wrap input-wrap-name">
							<input id="quiz-name"  name="quiz-name" type="text" placeholder="<?= BaseController::getMessage('637') ?>" required>
						</div>
						<div class="input-wrap input-wrap-phone">
							<input id="quiz-phone" name="quiz-phone" minlength="9" maxlength="9" type="text" placeholder="<?= BaseController::getMessage('638') ?>" required>
							<span class="quiz-phone-error"><?= BaseController::getMessage('645') ?></span>
						</div>
					</div>

					<span class="quiz-btn  js_quiz_submit"><?= BaseController::getMessage('639') ?></span>
					<input type="checkbox" class="quiz-checkbox" id="quiz-policy" name="quiz-policy" checked required>
					<label for="quiz-policy"><?= BaseController::getMessage('640') ?></label>
				</div>
			</div>
			<div class="quiz-step quiz-final-screen">
				<div class="quiz-final-content">
					<div class="quiz-final-img">
						<img src="/img/quiz/check-round.svg" width="150px" loading="lazy" alt="final step">
					</div>
					<strong class="quiz-title"><?= BaseController::getMessage('641') ?></strong>
					<span class="quiz-subtitle"><?= BaseController::getMessage('642') ?></span>
					<div class="quiz-consult-info">
						<div class="quiz-consult-img">
							<img src="/img/quiz/consult.jpg" loading="lazy" alt="<?= BaseController::getMessage('643') ?>">
						</div>
						<strong class="quiz-consult-name"><?= BaseController::getMessage('643') ?></strong>
						<p><?= BaseController::getMessage('644') ?></p>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js/dist/defer_plus.min.js"></script>

<script src="/min/all-plugins.min.js" ></script>
<!-- <script src="/min/new-main.min.js" defer></script> -->
<script src="/min/new-js.js" defer></script>

<script>
  if (!sessionStorage.getItem('isVisibleQuiz')) {
    sessionStorage.setItem('isVisibleQuiz', 'true');
  }

  if (sessionStorage.getItem('isVisibleQuiz') != "false") {
    if ($('body').hasClass('mobile')) {
      setTimeout(function(){
        $('.quiz-modal').fadeIn(300);
      }, 40000);
	} else {
      setTimeout(function(){
        $('.quiz-modal').fadeIn(300);
      }, 60000);
	}

    $(document).on("click", ".js_quiz_close", function (e) {
      e.preventDefault();
      $(this).parents('.quiz-modal').fadeOut();
      sessionStorage.setItem('isVisibleQuiz', 'false');
    })

    $(document).on("click", ".quiz-modal", function (e) {
      if (e.target !== this) {
        return;
      } else {
        $(this).fadeOut();
        sessionStorage.setItem('isVisibleQuiz', 'false');
	  }
    });

    $(document).on("click", ".js_quiz_next", function (e) {
      e.preventDefault();
      let nextStep = $(this).data('next');
      console.log(nextStep);
      $(".quiz-step").hide();
      $(nextStep).css("display", "flex").animate({opacity: '1'}, 300, "swing");
    })
    $(document).on("click", ".skip-step", function (e) {
      e.preventDefault();
      let thisStep = $(this).parents('.quiz-step');
      let nextStep = thisStep.find('.js_quiz_next').data('next');
      $(".quiz-step").hide();
      $(nextStep).css("display", "flex").animate({opacity: '1'}, 300, "swing");
    })

    $(document).on("click", ".js_quiz_submit", function(e) {
      e.preventDefault();
      let name = $('.quiz-modal input[name="quiz-name"]'),
        phone = $('.quiz-modal input[name="quiz-phone"]'),
        type = $('.quiz-modal input[name="radio-question-1"]:checked'),
        oblenergo = $('.quiz-modal input[name="radio-question-2"]:checked'),
        power = $('.quiz-modal input[name="radio-question-3"]:checked'),
        policy = $('.quiz-modal input[name="quiz-policy"]'),
        utm_source = $('.quiz-modal input[name="utm_source"]'),
        utm_medium =  $('.quiz-modal input[name="utm_medium"]'),
        utm_campaign = $('.quiz-modal input[name="utm_campaign"]'),
        utm_content = $('.quiz-modal input[name="utm_content"]'),
        utm_term = $('.quiz-modal input[name="utm_term"]');

      if (name.val() != '') {
        name.css('border-color', '#c4c4c4')
      } else {
        name.css('border-color', 'red')
      }
      if (phone.val() != '' && phone.val().length == 9) {
        phone.css('border-color', '#c4c4c4');
        $(".quiz-phone-error").hide();
      } else {
        phone.css('border-color', 'red');
        $(".quiz-phone-error").show();
      }

      if (policy.is(':checked')) {
        $('.quiz-modal input[name="quiz-policy"] + label').css('color', '#393939')
      } else {
        $('.quiz-modal input[name="quiz-policy"] + label').css('color', 'red')
      }

      if (name.val() != '' && phone.val() != '' && phone.val().length == 9 && policy.is(':checked')) {
        let data = {
          'name': name.val(),
          'phone': '+380' + phone.val(),
          'type': type.val(),
          'oblenergo': oblenergo.val(),
          'power': power.val(),
          'utm_source': utm_source.val(),
          'utm_medium': utm_medium.val(),
          'utm_campaign': utm_campaign.val(),
          'utm_content': utm_content.val(),
          'utm_term': utm_term.val()
        }
        console.log(data);
        $.ajax({
          type: "post",
          url: "/site/quiz",
          data: data,
          dataType: "json",
          beforeSend: function (response) {
          },
          complete: function (response) {
            $(".quiz-step").hide();
            $(".quiz-final-screen").css("display", "flex").animate({opacity: '1'}, 300, "swing");

            setTimeout(function(){
              $('.quiz-modal').fadeOut(300);
              sessionStorage.setItem('isVisibleQuiz', 'false');
            }, 5000);
          }
        });
      }
    });
  }
</script>

<script>deferimg('img[data-src],picture,video,audio', 100, 'lazied', function (img) {
    img.onload = function (e) {
        if ( img.className == 'check-slick lazied' ){
            if ($('.example__content-list.slick-slider').length ){
                $('.example__content-list').slick("refresh");
            }
            $('.check-slick').removeClass('check-slick');
        }
    }
});
</script>

<script>
    document.addEventListener("DOMContentLoaded",function(){var e=[].slice.call(document.querySelectorAll(".background-lazy")),n=!1;if(e.length){var t=function(){!1===n&&(n=!0,setTimeout(function(){e.forEach(function(n){n.getBoundingClientRect().top<=window.innerHeight&&n.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(n).display&&(n.style="background-image: url("+n.dataset.src+")",n.classList.remove("background-lazy"),0===(e=e.filter(function(e){return e!==n})).length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))}),n=!1},200))};document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationchange",t)}});
</script>

<!--<script>-->
<!--    defer(function() {-->
<!--        (function(w,d,u){-->
<!--            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);-->
<!--            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);-->
<!--        })(window,document,'https://cdn.bitrix24.ua/b9504081/crm/site_button/loader_1_2svhj8.js');-->
<!--    }, 2000);-->
<!--</script>-->

<script>
	if ($( "#map" ).length) {
        defer(function() {
            $( "#map" ).lazyLoadGoogleMaps({key: 'AIzaSyB35Exje6kOhzSsEsUTg3V09ot0HILL-Qk',callback: initMap});
        }, 1500);
	}
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



