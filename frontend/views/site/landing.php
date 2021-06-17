<?php

use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('646'),
];

$contacts = \backend\models\Contact::getContact();
?>
    <main class="page-container">
		<div class="breadcrumbs-wrap breadcrumbs-wrap-color dohod-zelyonyi-white">
			<div class="container">

                <?php echo Breadcrumbs::widget([
                    'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
                    'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                ]); ?>
			</div>
		</div>
 <!-- start info -->

    <section class="dohod-zelyonyi-section">
        <div class="container">
            <div class="dohod-zelyonyi-wrapper">

                <div class="dohod-zelyonyi-inner">
                    <div class="title">
                        <h1><?= BaseController::getMessage('647') ?></h1>
                    </div>
                    <ul class="dohod-zelyonyi-list">
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color portmone-icon"><?= BaseController::getMessage('648') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color euro-icon"><?= BaseController::getMessage('649') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color year-icon"><?= BaseController::getMessage('650') ?></p>
                        </li>
                    </ul>
                </div>

                <div class="dohod-zelyonyi-form">
                    <div class="zelyonyi-form-bg">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('651') ?></strong>
                        <form class="connect__content-question" id="question_form" data-post-url="index.html">
                            <div class="message">
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname"
                                       placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">

                                <div class="connect__content-button zelyonyi-button">
                                    <button class="btn connect-btn btn-primary zelyonyi-btn" id="submit_button">
                                        <?= BaseController::getMessage('14') ?>
                                    </button>
                                </div>
                            </div>
                            <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                        </form>
                    </div>
                </div>

            </div>
            <div class="dohod-zelyonyi-advantages">
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text calculation-icon"><?= BaseController::getMessage('652') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text guarantee-icon"><?= BaseController::getMessage('653') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text people-icon"><?= BaseController::getMessage('654') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text support-icon"><?= BaseController::getMessage('655') ?></p>
                </div>
            </div>

        </div>

    </section>

    <section class="dohod-private-house">
        <div class="container">
            <div class="dohod-private-wrapp">
                <div class="private-house-inner">
                    <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('656') ?></strong>
                    <ul class="private-house-list">
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('657') ?>
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('658') ?>
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('659') ?>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="privat-house-img">
                    <img class="house-img" data-src="/img/dohod-zelyonyi-tarif/house-icon.png" alt="house">
                </div>
            </div>
        </div>
    </section>

    <section class="advantages-green-tariff">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('660') ?></strong>
            <div class="advantages-green-wrapper">
                <div class="advantages-items">
                    <div class="advantages-green-item advantages-icon-vector">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('661') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('662') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('663') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('664') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-vector2">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('665') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('666') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group2">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('667') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('668') ?></p>
                    </div>
                </div>
            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button" href="#connect"><?= BaseController::getMessage('669') ?></a>
            </div>
        </div>
    </section>

    <section class="integrated-approach">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('670') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('671') ?></strong>
            <div class="integrated-approach-items">
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" data-src="/img/dohod-zelyonyi-tarif/dron.jpg" alt="дрон">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('672') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('673') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" data-src="/img/dohod-zelyonyi-tarif/installation.jpg"
                         alt="монтаж солнечных панелей">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('674') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('675') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" data-src="/img/dohod-zelyonyi-tarif/house_with_panels.jpg"
                         alt="дом с солнечными панелями">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('676') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('677') ?></p>
                </div>
            </div>
        </div>
    </section>

    <section class="service-miscount">
		<div class="container">
			<strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('678') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('679') ?></strong>
            <div class="service-miscount__content">

                <div class="uCalc_331490"></div>
                <script> var widgetOptions331490 = {bg_color: "transparent"};
                    (function () {
                        var a = document.createElement("script"), h = "head";
                        a.async = true;
                        a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=331490&t=" + Math.floor(new Date() / 18e5);
                        document.getElementsByTagName(h)[0].appendChild(a)
                    })();</script>
            </div>
        </div>
    </section>

    <section class="energy-for-everyone">
        <div class="container">
            <div class="energy-wrapper">
                <div class="energy-title">
                    <strong class="dohod-zelyonyi-h2 energy-h2"><?= BaseController::getMessage('680') ?></strong>
                    <div class="energy-name-inner">
                        <strong class="energy-name-title">
                            <?= BaseController::getMessage('580') ?>
                        </strong>
                        <p class="energy-position">
                            СЕО «SUNSAY Energy»
                        </p>
                    </div>
                </div>
                <div class="energy-img">
                    <img class="energy-seo-sunsay" data-src="/img/dohod-zelyonyi-tarif/ceo_1.png" alt="Dmitrij Zinkevich">
                    <img class="energy-seo-desk" data-src="/img/dohod-zelyonyi-tarif/ceo_2.png" alt="Dmitrij Zinkevich">
                </div>
                <div class="dohod-zelyonyi-form energy-form">
                    <div class="zelyonyi-form-bg energy-bg">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('681') ?></strong>
                        <strong class="integrated-subtitle energy-subtitle"><?= BaseController::getMessage('682') ?></strong>
                        <form class="connect__content-question" id="question_form" data-post-url="index.html">
                            <div class="message">
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                                <div class="connect__content-button zelyonyi-button">
                                    <button class="btn connect-btn btn-primary zelyonyi-btn" id="submit_button">
                                        <?= BaseController::getMessage('14') ?>
                                    </button>
                                </div>
                            </div>
                            <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="solar-station-income">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('683') ?></strong>
            <strong class="integrated-subtitle stages-subtitle"><?= BaseController::getMessage('684') ?></strong>
                <div class="solar-station-inner">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/dmytrivka_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/dmytrivka_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/dmytrivka_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/dmytrivka_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/dmytrivka_5.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text"><?= BaseController::getMessage('685') ?>  29,26 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('686') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('687') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('688') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('689') ?>:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">17 726 <?= BaseController::getMessage('690') ?></li>
                                    <li class="dohod-zelyonyi-text">$2 764</li>
                                    <li class="dohod-zelyonyi-text">29,26 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 <?= BaseController::getMessage('691') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 2 slider -->
                <div class="solar-station-inner  solar-slider-revers">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_5.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_6.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_7.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_8.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_9.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_10.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/pluty_11.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text"><?= BaseController::getMessage('685') ?> 28,21 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('692') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('687') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('688') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('689') ?>:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">39 630 <?= BaseController::getMessage('690') ?></li>
                                    <li class="dohod-zelyonyi-text">$5 956</li>
                                    <li class="dohod-zelyonyi-text">28,21 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 <?= BaseController::getMessage('691') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 3 slider -->
                <div class="solar-station-inner">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_5.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_6.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_7.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_8.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_9.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_10.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_11.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_12.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img data-src="/img/dohod-zelyonyi-tarif/slider/bortnichi_13.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text"><?= BaseController::getMessage('685') ?> 29,26 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('686') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('687') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('688') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('689') ?>:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">21 317 <?= BaseController::getMessage('690') ?></li>
                                    <li class="dohod-zelyonyi-text">$3 427</li>
                                    <li class="dohod-zelyonyi-text">16,12 кВт</li>
                                    <li class="dohod-zelyonyi-text">3 <?= BaseController::getMessage('693') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="btn-wrap advantages-btn-wrap">
                    <a class="advantages-btn button" target="_blank" href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('694') ?></a>
                </div>
                
        </div>
    </section>

    <section class="about-company">
        <div class="container">
            <div class="about-company-wrapper">

                <div class="about-company-sansay">
                    <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('696') ?> SUNSAY Energy</strong>
                    <p class="integrated-subtitle"><?= BaseController::getMessage('697') ?></p>
                </div>

                <div class="about-company-inner">

                    <div class="company-project-items">
                        <div class="company-project-item">
                            <strong>3<span><?= BaseController::getMessage('698') ?></span></strong>
                            <p class="integrated-subtitle"><?= BaseController::getMessage('699') ?></p>
                        </div>
                        <div class="company-project-item">
                            <strong>95<span><?= BaseController::getMessage('700') ?></span></strong>
                            <p class="integrated-subtitle">
                                <?= BaseController::getMessage('701') ?>
                            </p>                                                                  
                        </div>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('702') ?>
                        </p>
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('703') ?>
                        </p>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('704') ?>
                        </p>
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('705') ?>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
 
    <section class="stages-of-registration">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('695') ?></strong>
            <strong class="integrated-subtitle stages-subtitle"><?= BaseController::getMessage('706') ?></strong>
            <div class="advantages-green-wrapper">

                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-installation">
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('707') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-bank">
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('708') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-letter">
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('709') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-contract">
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('710') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-income">
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('711') ?></p>
                    </div>                 
                </div>

            </div>
        </div>
    </section>

    <section class="last-questions-form" id="connect">
        <div class="container">
            <div class="questions-form">
                <div class="questions-form-bg">
                    <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('712') ?></strong>
                    <strong class="integrated-subtitle energy-subtitle"><?= BaseController::getMessage('713') ?></strong>
                    <form class="connect__content-question" id="question_form" data-post-url="index.html">
                        <div class="message">
                            <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                            <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                            <label for="phone" class="hidden">Телефон</label>
                            <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                            
                            <div class="connect__content-button zelyonyi-button">
                                <button class="btn connect-btn btn-primary zelyonyi-btn" id="submit_button">
                                    <?= BaseController::getMessage('14') ?>
                                </button>
                            </div>
                        </div>
                        <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
     <!-- start video review -->
     <?= $this->render('../section/_video-reviews.php', compact('video_reviews')); ?>
    <!-- end video review -->
    <section class="questions-accordion">
        <div class="container">
            <div class="asked_questions">
                <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('714') ?></strong>

                <div class="questions-accordion-menu">
                    
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('715') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('716') ?></p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('717') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('718') ?></p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('719') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('720') ?></p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('721') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('722') ?></p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('723') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('724') ?></p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('725') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('726') ?></p>
                    </div>

                </div>

            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button" target="_blank" href="<?= \yii\helpers\Url::to(['/technology']); ?>"><?= BaseController::getMessage('727') ?></a>
            </div>
        </div>
    </section>

</main>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "SUNSAY Energy",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('646') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/dohod-6000-zelyonyi-tarif']); ?>"
        }]
    }

</script>
