<?php

use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('756'),
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
                        <h1><?= BaseController::getMessage('757') ?></h1>
                    </div>
                    <ul class="dohod-zelyonyi-list">
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color portmone-icon"><?= BaseController::getMessage('758') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color euro-icon"><?= BaseController::getMessage('759') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color year-icon"><?= BaseController::getMessage('760') ?></p>
                        </li>
                    </ul>
                </div>

                <div class="dohod-zelyonyi-form">
                    <div class="zelyonyi-form-bg">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('761') ?></strong>
                        <form class="connect__content-question-1" id="question_form_1" data-post-url="index.html">
                            <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                            <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                            <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                            <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                            <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
                            <div class="message">
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname"
                                       placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">
                                <span class="error-msg"><?= BaseController::getMessage('839') ?></span>

                                <input type="hidden" name="email" value="new_landing_request@gmail.com" >
                                <input type="hidden" name="question" value="new_landing_question" >

                                <div class="connect__content-button zelyonyi-button">
                                    <button class="btn connect-btn-1 btn-primary zelyonyi-btn" id="submit_button">
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
                    <p class="dohod-zelyonyi-text calculation-icon"><?= BaseController::getMessage('762') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text guarantee-icon"><?= BaseController::getMessage('763') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text people-icon"><?= BaseController::getMessage('764') ?></p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text support-icon"><?= BaseController::getMessage('765') ?></p>
                </div>
            </div>

        </div>

    </section>

    <section class="dohod-private-house">
        <div class="container">
            <div class="dohod-private-wrapp">
                <div class="private-house-inner">
                    <h2 class="dohod-zelyonyi-h2"><?= BaseController::getMessage('766') ?></h2>
                    <ul class="private-house-list">
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('767') ?>
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('768') ?>
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                <?= BaseController::getMessage('769') ?>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="privat-house-img">
                    <img class="house-img" data-src="/img/landing/scheme-house.png" width="800" height="725" alt="house">
                </div>
            </div>
        </div>
    </section>

    <section class="advantages-green-tariff">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('770') ?></strong>
            <div class="advantages-green-wrapper">
                <div class="advantages-items">
                    <div class="advantages-green-item advantages-icon-vector">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/personal.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('771') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('772') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/efficient.svg" width="58" height="58" alt="<?= BaseController::getMessage('773') ?>">
                        </div>
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('773') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('774') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-vector2">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/reliable.svg" width="58" height="58" alt="<?= BaseController::getMessage('775') ?>">
                        </div>
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('775') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('776') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group2">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/comfort.svg" width="58" height="58" alt="<?= BaseController::getMessage('777') ?>">
                        </div>
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('777') ?></strong>
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('778') ?></p>
                    </div>
                </div>
            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button" href="#connect"><?= BaseController::getMessage('779') ?></a>
            </div>
        </div>
    </section>

    <section class="integrated-approach">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('780') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('781') ?></strong>
            <div class="integrated-approach-items">
                <div class="integrated-approach-item">
                    <div class="integrated-approach-img" style='background-image: url("/img/dohod-zelyonyi-tarif/dron.jpg")'></div>
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('782') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('783') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <div class="integrated-approach-img" style='background-image: url("/img/dohod-zelyonyi-tarif/installation.jpg")'></div>
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('784') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('785') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <div class="integrated-approach-img" style='background-image: url("/img/landing/green-tarif.jpg")'></div>
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('786') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('787') ?></p>
                </div>
            </div>
        </div>
    </section>

    <section class="service-miscount">
		<div class="container">
			<strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('788') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('789') ?></strong>
            <div class="service-miscount__content">
                <?= BaseController::getMessage('728') ?>
            </div>
        </div>
    </section>

    <section class="energy-for-everyone">
        <div class="container">
            <div class="energy-wrapper">
                <div class="energy-title">
                    <strong class="dohod-zelyonyi-h2 energy-h2"><?= BaseController::getMessage('790') ?></strong>
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
                    <img class="energy-seo-mob" data-src="/img/dohod-zelyonyi-tarif/ceo_1.png" alt="Dmitrij Zinkevich">
                    <img class="energy-seo-desk" data-src="/img/dohod-zelyonyi-tarif/ceo_2.png" alt="Dmitrij Zinkevich">
                </div>
                <div class="dohod-zelyonyi-form energy-form">
                    <div class="zelyonyi-form-bg energy-bg">
                        <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('791') ?></strong>
                        <strong class="integrated-subtitle energy-subtitle"><?= BaseController::getMessage('792') ?></strong>
                        <form class="connect__content-question-2" id="question_form_2" data-post-url="index.html">
                            <div class="message">
                                <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                                <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                                <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                                <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                                <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                                <span class="error-msg"><?= BaseController::getMessage('839') ?></span>

                                <input type="hidden" name="email" value="new_landing_request@gmail.com" >
                                <input type="hidden" name="question" value="new_landing_question" >

                                <div class="connect__content-button zelyonyi-button">
                                    <button class="btn connect-btn-2 btn-primary zelyonyi-btn" id="submit_button">
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
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('793') ?></strong>
            <strong class="integrated-subtitle stages-subtitle"><?= BaseController::getMessage('794') ?></strong>
                <div class="solar-station-inner">
                    <div class="solar-station-item">
                        <img data-src="/img/landing/first-slide.jpg" width="650" height="350" alt="house with solar panels">
                    </div>
                    <!--<div class="solar-station-slider">


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

                    </div>-->

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text"><?= BaseController::getMessage('795') ?>  29,26 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('796') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('797') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('798') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('799') ?>:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">17 726 <?= BaseController::getMessage('800') ?></li>
                                    <li class="dohod-zelyonyi-text">$2 764</li>
                                    <li class="dohod-zelyonyi-text">29,26 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 <?= BaseController::getMessage('801') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 2 slider -->
                <div class="solar-station-inner  solar-slider-revers">
                    <div class="solar-station-item">
                        <img data-src="/img/landing/second-slide.jpg" width="650" height="350" alt="house with solar panels">
                    </div>
                   <!-- <div class="solar-station-slider">

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

                    </div>-->

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text"><?= BaseController::getMessage('685') ?> 28,21 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('802') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('797') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('798') ?>:</li>
                                    <li class="dohod-zelyonyi-text"><?= BaseController::getMessage('799') ?>:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">39 630 <?= BaseController::getMessage('800') ?></li>
                                    <li class="dohod-zelyonyi-text">$5 956</li>
                                    <li class="dohod-zelyonyi-text">28,21 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 <?= BaseController::getMessage('801') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 3 slider -->
                <div class="solar-station-inner">
                    <div class="solar-station-item">
                        <img data-src="/img/landing/third-slide.jpg" width="650" height="350" alt="house with solar panels">
                    </div>
                    <!--<div class="solar-station-slider">

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

                    </div>-->

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
                                    <li class="dohod-zelyonyi-text">21 317 <?= BaseController::getMessage('800') ?></li>
                                    <li class="dohod-zelyonyi-text">$3 427</li>
                                    <li class="dohod-zelyonyi-text">16,12 кВт</li>
                                    <li class="dohod-zelyonyi-text">3 <?= BaseController::getMessage('803') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="btn-wrap advantages-btn-wrap">
                    <a class="advantages-btn button" href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('804') ?></a>
                </div>
                
        </div>
    </section>

    <section class="about-company">
        <div class="container">
            <div class="about-company-wrapper">

                <div class="about-company-sansay">
                    <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('806') ?> SUNSAY Energy</strong>
                    <p class="integrated-subtitle"><?= BaseController::getMessage('807') ?></p>
                </div>

                <div class="about-company-inner">

                    <div class="company-project-items">
                        <div class="company-project-item">
                            <strong><?= BaseController::getMessage('840') ?><span><?= BaseController::getMessage('808') ?></span></strong>
                            <p class="integrated-subtitle"><?= BaseController::getMessage('809') ?></p>
                        </div>
                        <div class="company-project-item">
                            <strong><?= BaseController::getMessage('841') ?><span><?= BaseController::getMessage('810') ?></span></strong>
                            <p class="integrated-subtitle">
                                <?= BaseController::getMessage('811') ?>
                            </p>                                                                  
                        </div>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('812') ?>
                        </p>
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('813') ?>
                        </p>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('814') ?>
                        </p>
                        <p class="dohod-zelyonyi-text">
                            <?= BaseController::getMessage('815') ?>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
 
    <section class="stages-of-registration">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('805') ?></strong>
            <strong class="integrated-subtitle stages-subtitle"><?= BaseController::getMessage('816') ?></strong>
            <div class="advantages-green-wrapper">

                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item ">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/needs.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('817') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item ">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/unique.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('818') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/install.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('819') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-contract">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/integration.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('820') ?></p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item ">
                        <div class="dohod-zelyonyi-icon">
                            <img src="/img/landing/connect.svg" width="58" height="58" alt="<?= BaseController::getMessage('771') ?>">
                        </div>
                       <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('821') ?></p>
                    </div>                 
                </div>

            </div>
        </div>
    </section>

    <?= $this->render('../section/_seo_article.php', compact('seo_data')); ?>

    <section class="last-questions-form" id="connect">
        <div class="container">
            <div class="questions-form">
                <div class="questions-form-bg">
                    <strong class="dohod-zelyonyi-subtitle"><?= BaseController::getMessage('822') ?></strong>
                    <strong class="integrated-subtitle energy-subtitle"><?= BaseController::getMessage('823') ?></strong>
                    <form class="connect__content-question-3" id="question_form_3" data-post-url="index.html">
                        <div class="message">
                            <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                            <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                            <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                            <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                            <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
                            <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                            <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                            <label for="phone" class="hidden">Телефон</label>
                            <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                            <span class="error-msg"><?= BaseController::getMessage('839') ?></span>

                            <input type="hidden" name="email" value="new_landing_request@gmail.com" >
                            <input type="hidden" name="question" value="new_landing_question" >
                            
                            <div class="connect__content-button zelyonyi-button">
                                <button class="btn connect-btn-3 btn-primary zelyonyi-btn" id="submit_button">
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
                <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('824') ?></strong>

                <div class="questions-accordion-menu">
                    <?php if (BaseController::getMessage('825') && BaseController::getMessage('826')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('825') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('826') ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if (BaseController::getMessage('827') && BaseController::getMessage('828')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('827') ?></button>
                    </div>
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('828') ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if (BaseController::getMessage('829') && BaseController::getMessage('830')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('829') ?></button>
                    </div>
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('830') ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if (BaseController::getMessage('831') && BaseController::getMessage('832')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('831') ?></button>
                    </div>
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('832') ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if (BaseController::getMessage('833') && BaseController::getMessage('834')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('833') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('834') ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if (BaseController::getMessage('835') && BaseController::getMessage('836')) : ?>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text"><?= BaseController::getMessage('835') ?></button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('836') ?></p>
                    </div>
                    <?php endif; ?>
                </div>

            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button" href="<?= \yii\helpers\Url::to(['/technology']); ?>"><?= BaseController::getMessage('837') ?></a>
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
