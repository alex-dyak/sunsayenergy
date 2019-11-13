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

//AppAsset::register($this);
?>


<?php
$LastModified_unix = 1294844676;
$LastModified = gmdate("D, d M Y H:i:s \G\M\T", $LastModified_unix);
$IfModifiedSince = false;
if (isset($_ENV['HTTP_IF_MODIFIED_SINCE']))
    $IfModifiedSince = strtotime(substr($_ENV['HTTP_IF_MODIFIED_SINCE'], 5));
if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']))
    $IfModifiedSince = strtotime(substr($_SERVER['HTTP_IF_MODIFIED_SINCE'], 5));
if ($IfModifiedSince && $IfModifiedSince >= $LastModified_unix) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 304 Not Modified');
    exit;
}
header('Last-Modified: '. $LastModified);
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">

<head>
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
    <meta name="viewport" content="width=device-width, initial-scale=1">
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


</head>

<body style="opacity:0;">

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSSRL4V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<?php $useragent = $_SERVER['HTTP_USER_AGENT'];
if (!preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent) || preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr($useragent, 0, 4))):
    ?>
    <script>

        (function(w,d,u){

            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);

            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);

        })(window,document,'https://cdn.bitrix24.ua/b9504081/crm/site_button/loader_1_2svhj8.js');

    </script>
<?php endif; ?>

<?php $this->beginBody() ?>
<header class="header <?= (Yii::$app->controller->route == 'site/index') ? '' : 'header__background' ?>">
    <div class="header__logotype">
        <a href="<?= \yii\helpers\Url::to(['/']); ?>"><img class="img-responsive" src="/img/logo.svg" alt="sunsay energy"></a>
    </div>
    <div class="header__navbar">
        <nav class="navbar">
            <div class="navbar__list">
                <div class="navbar__list-item-block">
                    <a class="navbar__list-item <?= (Yii::$app->controller->route == 'site/income' || Yii::$app->controller->route == 'site/reserve' || Yii::$app->controller->route == 'site/comfort') ? 'active-menu' : '' ?>"
                       data-popup="services"><span><?= BaseController::getMessage('1') ?></span></a>
                    <div class="navbar__list-item-dropdown" data-dropdown="services">
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"
                           class="<?= (Yii::$app->controller->route == 'site/income') ? 'active-menu' : ''; ?>"><span><span><?= BaseController::getMessage('2') ?></span></span></a>
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"
                           class="<?= (Yii::$app->controller->route == 'site/solar-power-for-backup-power') ? 'active-menu' : ''; ?>"><span><span><?= BaseController::getMessage('3') ?></span></span></a>
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"
                           class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active-menu' : ''; ?>"><span><span><?= BaseController::getMessage('4') ?></span></span></a>
                    </div>
                </div>
                 <a class="navbar__list-item" href="<?= \yii\helpers\Url::to(['/project']); ?>"><span><?= BaseController::getMessage('320') ?></span></a>
                <a class="navbar__list-item <?= (Yii::$app->controller->route == 'site/green') ? 'active-menu' : ''; ?>"
                   href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"><span><?= BaseController::getMessage('5') ?></span></a>
                <a class="navbar__list-item <?= (Yii::$app->controller->route == 'technology/technology' || Yii::$app->controller->route == 'technology/nine' || Yii::$app->controller->route == 'technology/detailed') ? 'active-menu' : ''; ?>"
                   href="<?= \yii\helpers\Url::to(['/technology']); ?>"><span><?= BaseController::getMessage('6') ?></span></a>
                <a class="navbar__list-item <?= (Yii::$app->controller->route == 'site/about') ? 'active-menu' : ''; ?>"
                   href="<?= \yii\helpers\Url::to(['/about']); ?>"><span><?= BaseController::getMessage('7') ?></span></a>
            </div>
            <div class="navbar__right">
                <a class="navbar__right-item" href="#contact"><span><?= BaseController::getMessage('8') ?></span></a>
            </div>
        </nav>
    </div>
    <div class="header__request">
        <svg id="buttonBack" width="180" height="80">
            <path id="buttonFrom" fill-rule="evenodd" fill="rgb(255, 209, 0)"
                  d="<?= (Yii::$app->controller->route == 'site/index') ? 'M180,80V0' : 'M0,0c0,0-0.4,80,180,80c0-46.9,0-80,0-80H0z' ?>"></path>
        </svg>
        <a class="request-btn"
           href="#"><span><?= BaseController::getMessage('9') ?><br/><?= BaseController::getMessage('10') ?></span></a>
        <div class="request-close"><img class="close" src="/img/icon/Close.svg" alt=""></div>
    </div>
    <div class="header-request-back"><img src="/img/icon/arrow-back.png" alt=""></div>
    <div class="header__button">
        <div id="nav-icon"><img src="/img/icon/Menu.svg" alt=""></div>
    </div>
    <div class="navbar-mobile">
        <div class="navbar-mobile-container">
            <div class="navbar-list-top">
                <div class="navbar-logotype"><a href="<?= \yii\helpers\Url::to(['/']); ?>"><img src="/img/logo.svg" alt=""></a></div>
                <div class="navbar-close"><img src="/img/icon/Close.svg" alt=""></div>
            </div>
            <div class="navbar-list">
                <div class="navbar-item">
                    <a href=""
                       class="navbar-item-link <?= (Yii::$app->controller->route == 'site/income' || Yii::$app->controller->route == 'site/reserve' || Yii::$app->controller->route == 'site/comfort') ? 'active-menu' : '' ?>"
                       data-popup="services"><span><?= BaseController::getMessage('1') ?></span></a>
                    <div class="navbar-item-dropdown">
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']); ?>"
                           class="<?= (Yii::$app->controller->route == 'site/income') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('2') ?></span></a><br/>
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"
                           class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('3') ?></span></a><br/>
                        <a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"
                           class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('4') ?></span></a>
                    </div>
                </div>
                
                <div class="navbar-item"><a href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('320') ?></a></div>
                <div class="navbar-item"><a href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"
                                            class="<?= (Yii::$app->controller->route == 'site/green') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('5') ?></span></a>
                </div>
                <div class="navbar-item"><a href="<?= \yii\helpers\Url::to(['/technology']); ?>"
                                            class="<?= (Yii::$app->controller->route == 'site/technology') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('6') ?></span></a>
                </div>
                <div class="navbar-item"><a href="<?= \yii\helpers\Url::to(['/about']); ?>"
                                            class="<?= (Yii::$app->controller->route == 'site/about') ? 'active-menu' : ''; ?>"><span><?= BaseController::getMessage('7') ?></span></a>
                </div>
            </div>
            <div class="navbar-contacts"><a href="#contact"><?= BaseController::getMessage('8') ?></a></div>
            <div class="navbar-request"><a class="btn btn-primary"
                                           href="#"><?= BaseController::getMessage('9') ?><?= ' ' . BaseController::getMessage('10') ?></a>
            </div>
            <div class="navbar-bottom">
                <div class="navbar-language">
                    <a <?= (Yii::$app->language=='ua')?'class="active"':''   ?>  href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a>
                    <!--<a <?/*= (Yii::$app->language=='en')?'class="active"':''   */?>  href="/en/<?/*= \frontend\components\UrlTrimLang::widget() */?>">EN</a>-->
                    <a <?= (Yii::$app->language=='ru')?'class="active"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a>
                </div>
            </div>
        </div>
    </div>
</header>
<?= $content ?>
<?php if (Yii::$app->controller->route != 'site/error'): ?>
    <!-- start footer -->
    <?php
    $contacts = \backend\models\Contact::getContact();
    ?>
    <footer class="footer" id="contact">
        <div class="footer__content">
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
                            <!-- <li><a href="#"><span>Корисна інформація</span></a></li>-->
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
<div class="request-popup">
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
        <div class="request-content-image"><img src="/img/connect.png" alt=""></div>
    </div>
</div>
<!-- end request popup -->

<?php if (Yii::$app->controller->route != 'site/green' && Yii::$app->controller->route != 'site/types' && Yii::$app->controller->route != 'technology/technology' && Yii::$app->controller->route != 'technology/nine' && Yii::$app->controller->route != 'technology/detailed'): ?>
    <!-- start example popup -->
    <div class="popup">
        <div class="popup__container">
            <div class="popup-close"><img src="/img/icon/Close.svg" alt=""></div>
            <div class="popup-example">
                <div class="popup-example-item" style="background-image: url('../img/example/1.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/2.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/3.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/4.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/5.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/6.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/7.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/8.jpg');"></div>
                <div class="popup-example-item" style="background-image: url('../img/example/9.jpg');"></div>
            </div>
        </div>
    </div>
    <!-- end example popup -->
<?php endif; ?>

<!-- start fade dropdown -->
<div class="backgroundfade" style="display:none;"></div>
<!-- end fade dropdown -->

<link rel="stylesheet" href="/style/lib/normalize.css">
<link rel="stylesheet" href="/style/lib/slick-theme.css">
<link rel="stylesheet" href="/style/lib/slick.css">
<link rel="stylesheet" href="/style/main.css">
<script src="/js/lib/jquery.min.js"></script>
<script src="/js/lib/jquery.maskedinput.js"></script>
<script src="/js/lib/slick.min.js"></script>
<script src="/js/lib/snap.svg-min.js"></script>
<script src="/js/lib/TweenMax.min.js"></script>
<script src="/js/lib/ScrollMagic.min.js"></script>
<script src="/js/lib/animation.gsap.min.js"></script>
<script src="/js/googlemap.js"></script>
<script src="/js/onclickanimation.js"></script>
<script src="/js/onscrollanimation.js"></script>
<script src="/js/popup.js"></script>
<script src="/js/sendquestion.js"></script>
<script src="/js/slider.js"></script>
<script src="/js/types.js"></script>
<script src="/js/app.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3&amp;key=AIzaSyB35Exje6kOhzSsEsUTg3V09ot0HILL-Qk&amp;callback=initMap"></script>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
