<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('5'),
];
?>
    <main class="page-container">
		<div class="container">
            <?php echo Breadcrumbs::widget([
                'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]); ?>
		</div>
    <section class="section why">
      <div class="greenwhy__content">
        <div class="greenwhy__content-info">
          <div class="greenwhy__content-info__title">
            <h1 class="title"><?= BaseController::getMessage('97') ?></h1>
          </div>
          <div class="greenwhy__content-info__description"><?= BaseController::getMessage('98') ?></div>
          <div class="greenwhy__content-info__more"><a class="btn btn-primary" href="#info"><?= BaseController::getMessage('100') ?></a></div>
        </div>
        <div class="greenwhy__content-image">
            <picture>
                <source media="(min-width: 600px)" data-srcset="/img/green/1.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/green/m_1.jpg" type="image/jpg">
                <img data-src="/img/green/1.jpg" alt=""  class="image-pc image-mobile">
            </picture>
          </div>
      </div>
    </section>
    <section class="section legislation" id="info">
      <div class="legislation__content">
        <div class="legislation__content-image">
          <picture>
                <source media="(min-width: 600px)" data-srcset="/img/green/2.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/green/m_2.jpg" type="image/jpg">
                <img data-src="/img/green/2.jpg" alt=""  class="image-pc image-mobile">
            </picture>
          </div>
        <div class="legislation__content-info">
          <div class="legislation__content-info__title">
            <h2 class="title"><?= BaseController::getMessage('101') ?></h2>
          </div>
          <div class="legislation__content-info__description"><?= BaseController::getMessage('104') ?></div>
          <div class="legislation__content-info__more">
            <a class="btn btn-secondary" href="/pdf/law.pdf" target="_blank" download><?= BaseController::getMessage('105') ?></a>
            <a class="btn btn-secondary" href="/pdf/rate.pdf" target="_blank" download><?= BaseController::getMessage('106') ?></a></div>
        </div>
      </div>
    </section>
	<!-- start work -->
	<?= $this->render('../section/_work.php'); ?>
	<!-- end work -->

    <?= $this->render('../section/_complex.php'); ?>
    <?= $this->render('../section/_connect.php'); ?>
  </main>

<?php

$this->registerJsFile('/js/onload/green.js', ['position' => \yii\web\View::POS_END]);

?>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Sunsay Energy",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('5') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/green-tariff']); ?>"
        }]
    }
</script>
