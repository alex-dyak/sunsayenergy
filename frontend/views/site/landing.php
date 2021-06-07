<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('5'),
];




$contacts = \backend\models\Contact::getContact();
?>
    <main class="page-container">
		<div class="breadcrumbs-wrap">
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
                            <p class="dohod-zelyonyi-text portmone-icon">Приносят стабильный доход от продажи сгенерированной электроэнергии</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text euro-icon">Возвращают инвестиции от 4 лет, а дальше стабильно зарабатывают</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-text year-icon">Работают 25 лет, поддерживаются SUNSAY Energy в течение всего срока</p>
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
                    <strong class="title-h2 dohod-zelyonyi-h2">Как это работает в частных домах</strong>
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
            <strong class="title-h2 dohod-zelyonyi-h2">Преимущества зеленого тарифа</strong>
            <div class="advantages-green-wrapper">
                <div class="advantages-items">
                    <div class="advantages-green-item advantages-icon-vector">
                       <strong class="advantages-subtitle">Высокая ставка</strong> 
                       <p class="advantages-text">Владелец электростанции получает за каждый киловатт 0.16 евроцентов/кВт*ч до 31.12.2024 и 0.14 евроцентов/1кВт*ч до 31.12.2029.</p>
                    </div>                 
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group">
                       <strong class="advantages-subtitle">Обязательный выкуп электроэнергии</strong> 
                       <p class="advantages-text">По законодательству государство обязуется выкупать электроэнергию по стабильной ставке «зеленого» тарифа до 21.12.2029</p>
                    </div>                 
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-vector2">
                       <strong class="advantages-subtitle">Защита от инфляции</strong> 
                       <p class="advantages-text">Размер «зеленого» тарифа привязан к валюте, а тариф ежеквартально обновляется с соответствием курса евро</p>
                    </div>                 
                </div>
                <div class="advantages-items">
                    <div class="advantages-green-item  advantages-icon-group2">
                       <strong class="advantages-subtitle">Минимизация рисков</strong> 
                       <p class="advantages-text">Ваши инвестиции защищены от любых кризисов, а ваша прибыль будет стабильной на протяжении многих лет</p>
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
            <strong class="title-h2 dohod-zelyonyi-h2">Мы предоставляем комплексный подход к установке солнечных электростанций</strong>
            <strong class="integrated-subtitle">От анализа и монтажа оборудования до подключения «зеленого» тарифа</strong> 
                <div class="integrated-approach-items">
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/dron.jpg" alt="дрон">
                        <strong class="integrated-subtitle">Измеряем объект с помощью дрона</strong> 
                        <p class="advantages-text">Мы проводим замер с помощью дронов и делаем проект 3D-модели в специализированном ПО, чтобы точно спрогнозировать будущую эффективность электростанции</p>
                    </div>
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/installation.jpg" alt="монтаж солнечных панелей">
                        <strong class="integrated-subtitle">Используем оборудование нового поколения</strong> 
                        <p class="advantages-text">Мы выбираем сертифицированные комплектующие от официальных производителей. Чтобы использовать самое современное оборудование, каждый год наши специалисты проходят более 10 обучающих тренингов</p>
                    </div>
                    <div class="integrated-approach-item">
                        <img class="integrated-approach-img" src="img/dohod-zelyonyi-tarif/house_with_panels.jpg" alt="дом с солнечными панелями">
                        <strong class="integrated-subtitle">Помогаем оформить «зеленый» тариф</strong> 
                        <p class="advantages-text">Мы знаем о «зеленом» тарифе все и помогаем оформить программу на каждом этапе.  С нами вы избавитесь от длительной бюрократической волокиты</p>
                    </div>
                </div>
        </div>
    </section>

    <section class="service-miscount dohod-service-miscount">
		<div class="container">
			<h2 class="line-title">РАССЧИТАТЬ ДОХОД ОТ СЭС</h2>
            <strong class="integrated-subtitle">Этот калькулятор показывает стоимость всего проекта солнечной электростанции, его окупаемость и ваш потенциальный заработок </strong> 
			<div class="service-miscount__content">
				<div class="uCalc_331490"></div>
				<script> var widgetOptions331490 = { bg_color: "transparent" }; (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=331490&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();</script>
			</div>
		</div>
    </section>

    <section class="energy-for-everyone">
        <div class="container">
            <div class="energy-wrapper">
                <div class="energy-title">
                    <strong class="title-h2 energy-h2">Мы хотим предоставить доступ к чистой «зеленой» энергии всем желающим, у кого есть свой дом</strong>
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




   

	<!-- <?php echo $message; ?> -->

		<!-- start connect -->
        <?= $this->render('../section/_connect-blue.php'); ?>
		<!-- end connect -->
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
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/green-tariff']); ?>"
        }]
    }
</script>
