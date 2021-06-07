<?php

use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label'    => BaseController::getMessage('646'),
];


$contacts = \backend\models\Contact::getContact();
?>
<main class="page-container">
    <div class="breadcrumbs-wrap">
        <div class="container">
            <?php
            echo Breadcrumbs::widget(
                [
                    'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
                    'links'    => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                ]
            ); ?>
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
                            <p class="dohod-zelyonyi-text portmone-icon"><?= BaseController::getMessage('648') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text euro-icon"><?= BaseController::getMessage('649') ?></p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text year-icon"><?= BaseController::getMessage('650') ?></p>
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
                    <strong class="title-h2 dohod-zelyonyi-h2"><?= BaseController::getMessage('656') ?></strong>
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
                    <img class="house-img" src="img/dohod-zelyonyi-tarif/house-icon.png" alt="house">
                </div>
            </div>
        </div>
    </section>

    <section class="advantages-green-tariff">
        <div class="container">
            <strong class="title-h2 dohod-zelyonyi-h2"><?= BaseController::getMessage('660') ?></strong>
            <div class="advantages-green-wrapper">
                <div class="advantages-items">
                    <div class="advantages-green-item advantages-icon-vector">
                        <strong class="advantages-subtitle"><?= BaseController::getMessage('661') ?></strong>
                        <p class="advantages-text"><?= BaseController::getMessage('662') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group">
                        <strong class="advantages-subtitle"><?= BaseController::getMessage('663') ?></strong>
                        <p class="advantages-text"><?= BaseController::getMessage('664') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-vector2">
                        <strong class="advantages-subtitle"><?= BaseController::getMessage('665') ?></strong>
                        <p class="advantages-text"><?= BaseController::getMessage('666') ?></p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group2">
                        <strong class="advantages-subtitle"><?= BaseController::getMessage('667') ?></strong>
                        <p class="advantages-text"><?= BaseController::getMessage('668') ?></p>
                    </div>
                </div>
            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button order-btn" href="#"><?= BaseController::getMessage('669') ?></a>
            </div>
        </div>
    </section>

    <section class="integrated-approach">
        <div class="container">
            <strong class="title-h2 dohod-zelyonyi-h2"><?= BaseController::getMessage('670') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('671') ?></strong>
            <div class="integrated-approach-items">
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/dron.jpg" alt="дрон">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('672') ?></strong>
                    <p class="advantages-text"><?= BaseController::getMessage('673') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/installation.jpg"
                         alt="монтаж солнечных панелей">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('674') ?></strong>
                    <p class="advantages-text"><?= BaseController::getMessage('675') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/house_with_panels.jpg"
                         alt="дом с солнечными панелями">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('676') ?></strong>
                    <p class="advantages-text"><?= BaseController::getMessage('677') ?></p>
                </div>
            </div>
        </div>
    </section>

    <section class="service-miscount">
        <div class="container">
            <h2 class="line-title"><?= BaseController::getMessage('678') ?></h2>
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
                    <strong class="title-h2 energy-h2"><?= BaseController::getMessage('680') ?></strong>
                    <div class="energy-name-inner">
                        <strong class="energy-name-title">
                            <?= BaseController::getMessage('583') ?>
                        </strong>
                        <p class="energy-position">
                            СЕО «SUNSAY Energy» 
                        </p>
                    </div>
                </div>
                <div class="energy-img">
                    <img class="energy-seo-sunsay" src="img/dohod-zelyonyi-tarif/ceo_1.png" alt="Dmitrij Zinkevich">
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

    <!-- <section class="questions-form">
        <div class="dohod-zelyonyi-form energy-form">
            <div class="zelyonyi-form-bg energy-bg">
                <strong class="dohod-zelyonyi-subtitle">Остались вопросы? </strong>
                <strong class="integrated-subtitle energy-subtitle">Заполните форму и наши эксперты проконсультируют вас</strong> 
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
    </section> -->
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
            "name": "<?= BaseController::getMessage('5') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/dohod-6000-zelyonyi-tarif']); ?>"
        }]
    }

</script>
