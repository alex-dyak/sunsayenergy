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

	<?php echo $message; ?>

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
