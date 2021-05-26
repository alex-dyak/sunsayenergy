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
   
    <section class="dohod-zelyonyi-tarif-section" style="background-image: url('/img/dohod-zelyonyi-tarif/dohod-zelyonyi-bg.jpg')">
        <div class="container">
            <div class="dohod-zelyonyi-wrapper">
                <div class="dohod-zelyonyi-inner">
                    <h1 class="dohod-zelyonyi-title">
                    СОЛНЕЧНЫЕ ЭЛЕКТРОСТАНЦИИ ПОД «ЗЕЛЕНЫЙ» ТАРИФ С ПРИБЫЛЬЮ ДО $6 500
                    </h1>
                    <p class="dohod-zelyonyi-advantages">
                        Приносят стабильный доход от продажи сгенерированной электроэнергии
                    </p>
                    <p class="dohod-zelyonyi-advantages">
                        Возвращают инвестиции от 4 лет, а дальше стабильно зарабатывают
                    </p>
                    <p class="dohod-zelyonyi-advantages">
                        Работают 25 лет, поддерживаются SUNSAY Energy в течение всего срока
                    </p>

                </div>
                <div class="dohod-zelyonyi-form">

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
