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
	<link rel="stylesheet" type="text/css" href="/style/lib/fullpage.min.css" />
	<script type="text/javascript" src="/js/lib/fullpage.min.js"></script>
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

<div class="to-top-block" id="to_top_block">
    <div class="logo-block">
        <a href="<?= \yii\helpers\Url::to(['/']); ?>">
            <img data-src="/img/logo.svg" alt="sunsay energy" width="120">
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

        (function(d, w, s) {
            var widgetHash = 'sx43cntzz2qzbf66eje1', ctw = d.createElement(s); ctw.type = 'text/javascript'; ctw.async = true;
            ctw.src = '//widgets.binotel.com/calltracking/widgets/'+ widgetHash +'.js';
            var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(ctw, sn);
        })(document, window, 'script');

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
        autoScrolling:true,
        scrollHorizontally: true,
        // fixedElements: '#header',
        navigation: true,
        navigationPosition: 'right',
    });

    //methods
    fullpage_api.setAllowScrolling(true);
</script>
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>