<?php

use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

///////////////////////////////////
/*
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
                    <img class="house-img" src="img/dohod-zelyonyi-tarif/house-icon.png" alt="house">
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
                <a class="advantages-btn button order-btn" href="#"><?= BaseController::getMessage('669') ?></a>
            </div>
        </div>
    </section>

    <section class="integrated-approach">
        <div class="container">
            <strong class="dohod-zelyonyi-h2"><?= BaseController::getMessage('670') ?></strong>
            <strong class="integrated-subtitle"><?= BaseController::getMessage('671') ?></strong>
            <div class="integrated-approach-items">
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/dron.jpg" alt="дрон">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('672') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('673') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/installation.jpg"
                         alt="монтаж солнечных панелей">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('674') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('675') ?></p>
                </div>
                <div class="integrated-approach-item">
                    <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/house_with_panels.jpg"
                         alt="дом с солнечными панелями">
                    <strong class="integrated-subtitle"><?= BaseController::getMessage('676') ?></strong>
                    <p class="dohod-zelyonyi-text"><?= BaseController::getMessage('677') ?></p>
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
                    <strong class="dohod-zelyonyi-h2 energy-h2"><?= BaseController::getMessage('680') ?></strong>
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
    */
  //////////////////////////////////////////  
  $this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('5'),
];




$contacts = \backend\models\Contact::getContact();
?>
    <main class="page-container">
		<div class="breadcrumbs-wrap breadcrumbs-wrap-color">
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
                        <h1>СОЛНЕЧНЫЕ ЭЛЕКТРОСТАНЦИИ ПОД «ЗЕЛЕНЫЙ» ТАРИФ С ПРИБЫЛЬЮ ДО $6 500</h1>
                    </div>
                    <ul class="dohod-zelyonyi-list">
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color portmone-icon">Приносят стабильный доход от продажи сгенерированной электроэнергии</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color euro-icon">Возвращают инвестиции от 4 лет, а дальше стабильно зарабатывают</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text zelyonyi-text-color year-icon">Работают 25 лет, поддерживаются SUNSAY Energy в течение всего срока</p>
                        </li>
				    </ul>
                </div>

                <div class="dohod-zelyonyi-form">
                    <div class="zelyonyi-form-bg">
                        <strong class="dohod-zelyonyi-subtitle">Оставьте свои контакты, чтобы узнать ваш будущий заработок на солнечной энергии</strong>
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
            <div class="dohod-zelyonyi-advantages">
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text calculation-icon">Детальный расчет и 3D-моделирование проекта</p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text guarantee-icon">Гарантия на оборудование и монтаж до 20 лет</p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text people-icon">Собственная инсталляционная команда</p>
                </div>
                <div class="dohod-zelyonyi-item">
                    <p class="dohod-zelyonyi-text support-icon">Оформление «зеленого» тарифа и техническая поддержка 24/7 </p>
                </div>
            </div>

        </div>

    </section>

    <section class="dohod-private-house">
        <div class="container">
            <div class="dohod-private-wrapp">
                <div class="private-house-inner">
                    <strong class="dohod-zelyonyi-h2">Как это работает в частных домах</strong>
                    <ul class="private-house-list">
                        <li>
                            <p class="dohod-zelyonyi-text">
                                Сетевая солнечная электростанция производит электроэнергию. Одна часть покрывает нужды вашего домохозяйства, а другая идет в сеть для для продажи под «зеленый» тариф
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                Государство покупает у вас электроэнергию по стабильному тарифу
                            </p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text">
                                Деньги ежемесячно приходят на ваш счет, а вложенные средства  работают на окупаемость станции
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="privat-house-img">
                    <img class="house-img" src="img/dohod-zelyonyi-tarif/house-icon.png" alt="house" >
                </div>
            </div>
        </div>
    </section>

    <section class="advantages-green-tariff">
        <div class="container">
            <strong class="dohod-zelyonyi-h2">Преимущества зеленого тарифа</strong>
            <div class="advantages-green-wrapper">
                <div class="advantages-items">
                    <div class="advantages-green-item advantages-icon-vector">
                       <strong class="dohod-zelyonyi-subtitle">Высокая ставка</strong>
                       <p class="dohod-zelyonyi-text">Владелец электростанции получает за каждый киловатт 0.16 евроцентов/кВт*ч до 31.12.2024 и 0.14 евроцентов/1кВт*ч до 31.12.2029.</p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group">
                       <strong class="dohod-zelyonyi-subtitle">Обязательный выкуп электроэнергии</strong>
                       <p class="dohod-zelyonyi-text">По законодательству государство обязуется выкупать электроэнергию по стабильной ставке «зеленого» тарифа до 21.12.2029</p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-vector2">
                       <strong class="dohod-zelyonyi-subtitle">Защита от инфляции</strong>
                       <p class="dohod-zelyonyi-text">Размер «зеленого» тарифа привязан к валюте, а тариф ежеквартально обновляется с соответствием курса евро</p>
                    </div>
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group2">
                       <strong class="dohod-zelyonyi-subtitle">Минимизация рисков</strong>
                       <p class="dohod-zelyonyi-text">Ваши инвестиции защищены от любых кризисов, а ваша прибыль будет стабильной на протяжении многих лет</p>
                    </div>
                </div>
            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button order-btn" href="#">Хочу зарабатывать на «зеленом» тарифе</a>
            </div>
        </div>
    </section>

    <section class="integrated-approach">
        <div class="container">
            <strong class="dohod-zelyonyi-h2">Мы предоставляем комплексный подход к установке солнечных электростанций</strong>
            <strong class="integrated-subtitle">От анализа и монтажа оборудования до подключения «зеленого» тарифа</strong>
                <div class="integrated-approach-items">
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/dron.jpg" alt="дрон">
                        <strong class="integrated-subtitle">Измеряем объект с помощью дрона</strong>
                        <p class="dohod-zelyonyi-text">Мы проводим замер с помощью дронов и делаем проект 3D-модели в специализированном ПО, чтобы точно спрогнозировать будущую эффективность электростанции</p>
                    </div>
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/installation.jpg" alt="монтаж солнечных панелей">
                        <strong class="integrated-subtitle">Используем оборудование нового поколения</strong>
                        <p class="dohod-zelyonyi-text">Мы выбираем сертифицированные комплектующие от официальных производителей. Чтобы использовать самое современное оборудование, каждый год наши специалисты проходят более 10 обучающих тренингов</p>
                    </div>
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/house_with_panels.jpg" alt="дом с солнечными панелями">
                        <strong class="integrated-subtitle">Помогаем оформить «зеленый» тариф</strong>
                        <p class="dohod-zelyonyi-text">Мы знаем о «зеленом» тарифе все и помогаем оформить программу на каждом этапе.  С нами вы избавитесь от длительной бюрократической волокиты</p>
                    </div>
                </div>
        </div>
    </section>

    <section class="service-miscount">
		<div class="container">
			<strong class="dohod-zelyonyi-h2">РАССЧИТАТЬ ДОХОД ОТ СЭС</strong>
            <strong class="integrated-subtitle">Этот калькулятор показывает стоимость всего проекта солнечной электростанции, его окупаемость и ваш потенциальный заработок </strong>
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

    <!-- <section class="energy-for-everyone">
        <div class="container">
            <div class="energy-wrapper">
                <div class="energy-title">
                    <strong class="dohod-zelyonyi-h2 energy-h2"><?= BaseController::getMessage('680') ?></strong>
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
    </section> -->

    <section class="energy-for-everyone">
        <div class="container">
            <div class="energy-wrapper">
                <div class="energy-title">
                    <strong class="dohod-zelyonyi-h2 energy-h2">Мы хотим предоставить доступ к чистой «зеленой» энергии всем желающим, у кого есть свой дом</strong>
                    <div class="energy-name-inner">
                        <strong class="energy-name-title">
                            Дмитрий Зинкевич 
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
                        <strong class="dohod-zelyonyi-subtitle">Хотите максимально выгодно и эффективно использовать энергию солнца — обращайтесь к экспертам SUNSAY Energy</strong>
                        <strong class="integrated-subtitle energy-subtitle">Закажите бесплатный замер крыши нашим инженерам </strong> 
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
            <strong class="dohod-zelyonyi-h2">Пока остальные платят за электроэнергию, владельцы солнечных станций  зарабатывают до $6 500 в год </strong>
            <strong class="integrated-subtitle stages-subtitle">Мы помогаем получить от солнечной станции максимальный доход</strong>
                <div class="solar-station-inner">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/dmytrivka_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/dmytrivka_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/dmytrivka_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/dmytrivka_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/dmytrivka_5.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text">Солнечная электростанция под «зеленый» тариф мощностью 29,26 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text">Электрогенерация за 6 месяцев:</li>
                                    <li class="dohod-zelyonyi-text">Прибыль:</li>
                                    <li class="dohod-zelyonyi-text">Мощность:</li>
                                    <li class="dohod-zelyonyi-text">Продолжительность инсталляции:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">17 750 кВт*ч</li>
                                    <li class="dohod-zelyonyi-text">$2 637</li>
                                    <li class="dohod-zelyonyi-text">29,26 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 дней</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 2 slider -->
                <div class="solar-station-inner  solar-slider-revers">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_5.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_6.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_7.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_8.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_9.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_10.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/pluty_11.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text">Солнечная электростанция под «зеленый» тариф мощностью 28,21 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text">Электрогенерация за 17 месяцев:</li>
                                    <li class="dohod-zelyonyi-text">Прибыль:</li>
                                    <li class="dohod-zelyonyi-text">Мощность:</li>
                                    <li class="dohod-zelyonyi-text">Продолжительность инсталляции:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">39 980 кВт*ч</li>
                                    <li class="dohod-zelyonyi-text">$5 941</li>
                                    <li class="dohod-zelyonyi-text">28,21 кВт</li>
                                    <li class="dohod-zelyonyi-text">5 дней</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
<!-- 3 slider -->
                <div class="solar-station-inner">

                    <div class="solar-station-slider">

                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_1.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_2.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_3.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_4.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_5.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_6.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_7.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_8.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_9.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_10.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_11.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_12.jpg" alt="house with solar panels">
                        </div>
                        <div class="solar-station-item">
                            <img src="img/dohod-zelyonyi-tarif/slider/bortnichi_13.jpg" alt="house with solar panels">
                        </div>

                    </div>

                    <div class="solar-station-content">
                        <strong class="dohod-zelyonyi-text">Солнечная электростанция под «зеленый» тариф мощностью 29,26 кВт</strong>
                        <div class="station-content-items">
                            <div class="station-content-item">
                                <ul class="station-content-list">
                                    <li class="dohod-zelyonyi-text">Электрогенерация за 6 месяцев:</li>
                                    <li class="dohod-zelyonyi-text">Прибыль:</li>
                                    <li class="dohod-zelyonyi-text">Мощность:</li>
                                    <li class="dohod-zelyonyi-text">Продолжительность инсталляции:</li>
                                </ul>
                            </div>
                            <div class="station-content-item">
                                <ul class="station-content-list station-content-price">
                                    <li class="dohod-zelyonyi-text">21 161 кВт*ч</li>
                                    <li class="dohod-zelyonyi-text">$3 144</li>
                                    <li class="dohod-zelyonyi-text">16,12 кВт</li>
                                    <li class="dohod-zelyonyi-text">3 дня</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="btn-wrap advantages-btn-wrap">
                    <a class="advantages-btn button order-btn" href="#">Больше проектов</a>
                </div>
                
        </div>
    </section>

    <section class="about-company">
        <div class="container">
            <div class="about-company-wrapper">

                <div class="about-company-sansay">
                    <strong class="dohod-zelyonyi-h2">О компании SUNSAY Energy</strong>
                    <p class="integrated-subtitle">Мы инсталлируем солнечные электростанции и помогаем получить от энергии солнца максимальную выгоду. Наша компания предоставляет точный результат и легкий опыт каждому клиенту.</p>                                      
                </div>

                <div class="about-company-inner">

                    <div class="company-project-items">
                        <div class="company-project-item">
                            <strong>2<span>года</span></strong>
                            <p class="integrated-subtitle">Устанавливаем и обслуживаем СЭС</p>                                                                  
                        </div>
                        <div class="company-project-item">
                            <strong>95<span>проектов</span></strong>
                            <p class="integrated-subtitle">
                                Мы уже выполнили, а в будущем только увеличим это число
                            </p>                                                                  
                        </div>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            Даем гарантию на оборудование — до 15 лет, на монтажные работы — 5 лет	
                        </p>
                        <p class="dohod-zelyonyi-text">
                            Поддерживаем 27/7 —  у нас круглосуточный онлайн мониторинг и техническая поддержка	
                        </p>
                    </div>

                    <div class="company-project-text">
                        <p class="dohod-zelyonyi-text">
                            Проводим сертифицированный энергоаудит. В нашем штате собственная команда инсталляторов	
                        </p>
                        <p class="dohod-zelyonyi-text">
                            Делаем 3D-моделирование проекта. Проводим все замеры с дрона для точного расчета
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
 
    <section class="stages-of-registration">
        <div class="container">
            <strong class="dohod-zelyonyi-h2">Этапы оформления «зеленого» тарифа</strong>
            <strong class="integrated-subtitle stages-subtitle">Вместе с экспертами SUNSAY Energy вы избавитесь от всех бюрократических процессов </strong>
            <div class="advantages-green-wrapper">

                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-installation">
                       <p class="dohod-zelyonyi-text">Установка двунаправленного счетчика и узла учета электроэнергии</p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-bank">
                       <p class="dohod-zelyonyi-text">Открытие банковского счета в любом удобном для вас банке</p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-letter">
                       <p class="dohod-zelyonyi-text">Подача заявления со схемой подключения СЭС в облэнерго</p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-contract">
                       <p class="dohod-zelyonyi-text">Оформление договора с облэнерго о продаже электроэнергии</p>
                    </div>                 
                </div>
                <div class="advantages-items stages-items">
                    <div class="advantages-green-item stages-item stages-icon-income">
                       <p class="dohod-zelyonyi-text">Получение дохода от продажи электроэнергии по «зеленому» тарифу</p>
                    </div>                 
                </div>

            </div>
        </div>
    </section>

    <section class="last-questions-form">
        <div class="container">
            <div class="questions-form">
                <div class="questions-form-bg">
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
        </div>
    </section>
     <!-- start video review -->
     <?= $this->render('../section/_video-reviews.php', compact('video_reviews')); ?>
    <!-- end video review -->
    <section class="questions-accordion">
        <div class="container">
            <div class="asked_questions">
                <strong class="dohod-zelyonyi-h2">Часто задаваемые вопросы</strong>

                <div class="questions-accordion-menu">
                    
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Как это работает?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">Сначала команда экспертов проводит все необходимые замеры, готовит проект и инсталлирует солнечную электростанцию. Далее мы помогаем подключить «зеленый» тариф. После ваша станция генерирует электроэнергию и вы ежемесячно получаете доход за ее продажу.</p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Сколько нужно времени вкладывать в СЭС?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">В среднем, мы инсталлируем СЭС за 15 дней. Перед этим 6 дней проводим анализ дома и детальный расчет будущей станции. Оформление «зеленого» тарифа занимает от двух месяцев. </p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Как не упустить прибыль и зафиксировать ставку?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">Ставка «зеленого» тарифа меняется раз в пять лет — 0.16 евроцентов/кВт*ч (в период с 1.01.2020 по 31.12.2024) и 0.14 евроцентов/кВт*ч (в период с 1.01.2025 по 31.12.2029). Чем быстрее вы установите СЭС, тем выше будет ставка, а соответственно, и ваш доход. </p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Кто платит?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">Оплачивать сгенерированную солнечными панелями электроэнергию будет облэнерго, с которым вы заключите договор после установки СЭС.</p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Что делать, если СЭС выйдет из строя?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">Не паниковать :) В случае любых неполадок наши специалисты сразу связываются с вами и выезжают на объект, чтобы сделать необходимый ремонт станции.</p>
                    </div>
                    <div class="accordion">
                        <button class="dohod-zelyonyi-text">Влияет ли инфляция на доход?</button>
                    </div>    
                    <div class="panel">
                        <p class="dohod-zelyonyi-text">Не влияет. Размер «зеленого» тарифа привязан к евровалюте и ежеквартально обновляется по курсу. </p>
                    </div>

                </div>

            </div>
            <div class="btn-wrap advantages-btn-wrap">
                <a class="advantages-btn button order-btn" href="#">Больше о солнечных электростанциях</a>
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
            "name": "<?= BaseController::getMessage('5') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/dohod-6000-zelyonyi-tarif']); ?>"
        }]
    }

</script>
