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
   
    <section class="dohod-zelyonyi-section" style="background-image: url('/img/dohod-zelyonyi-tarif/dohod-zelyonyi-bg.jpg')">
    <span class="mobile-title-bly"></span>
        <div class="container">
            <div class="dohod-zelyonyi-wrapper">

                <div class="dohod-zelyonyi-inner">
                    <div class="title">
                        <h1>СОЛНЕЧНЫЕ ЭЛЕКТРОСТАНЦИИ ПОД «ЗЕЛЕНЫЙ» ТАРИФ С ПРИБЫЛЬЮ ДО $6 500</h1>
                    </div>                    
                    <ul class="dohod-zelyonyi-list">
                        <li>
                            <p class="dohod-zelyonyi-advantages">Приносят стабильный доход от продажи сгенерированной электроэнергии</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-advantages">Возвращают инвестиции от 4 лет, а дальше стабильно зарабатывают</p>
                        </li>
                        <li>
                            <p class="dohod-zelyonyi-advantages">Работают 25 лет, поддерживаются SUNSAY Energy в течение всего срока</p>
                        </li>
				    </ul>
                </div>
                
                <div class="dohod-zelyonyi-form">

                </div>

            </div>
        </div>

    </section>
    
    <section class="dohod-private-hourse">
        <div class="container">
            <div class="dohod-private-wrapp">
                <div class="privat-hourse-img">
                    <img class="hourse-img" src="img/dohod-zelyonyi-tarif/hourse-icon.png" alt="hourse" >
                </div> 
                <div class="private-hourse-inner">
                    <strong class="title-h2">Как это работает в частных домах</strong>
                    <ul class="private-hourse-list">
                        <li>
                            <p class="private-hourse-text">
                                Сетевая солнечная электростанция производит электроэнергию. Одна часть покрывает нужды вашего домохозяйства, а другая идет в сеть для для продажи под «зеленый» тариф
                            </p>
                        </li>
                        <li>
                            <p class="private-hourse-text">
                                Государство покупает у вас электроэнергию по стабильному тарифу
                            </p>
                        </li>
                        <li>
                            <p class="private-hourse-text">
                                Деньги ежемесячно приходят на ваш счет, а вложенные средства  работают на окупаемость станции
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 



   

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
