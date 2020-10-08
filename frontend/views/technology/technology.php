<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('6'),
];
?>
    <main class="page-container">
		<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
		</div>
    <section class="section blog-info">
		<div class="container">
        <div class="blog-info__image">
            <picture>
                <source media="(min-width: 800px)" data-srcset="/img/blog/info.jpg" type="image/jpg">
                <source media="(max-width: 799px)" data-srcset="/img/blog/info_350.jpg" type="image/jpg">
                <img data-src="/img/blog/info.jpg" alt="" class="blog-info__image--bg">
            </picture>
            <div class="blog-info__image-text">
                <h1><?= BaseController::getMessage('362') ?></h1>
                <a href="<?= \yii\helpers\Url::to(['/technology/nine']); ?>">
                    <button class="btn btn-primary"><?= BaseController::getMessage('363') ?></button>
                </a>
            </div>
        </div>
		</div>
    </section>

    <section class="section blog">
		<div class="container">
			<div class="blog__list">
                <?php foreach ($articles as $item): ?>
					<div class="blog__list-item">
						<a href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $item->symbol]) ?>">
							<div class="title"><?= $item->header ?></div>
							<div class="date"><?= $item->date ?></div>
							<div class="image">
								<img data-src="/images/<?= $item->images->imagePreview ?>" alt="<?= $item->header ?>">
							</div>
						</a>
					</div>
                <?php endforeach; ?>
			</div>
		</div>

    </section>
    <?= $this->render('../section/_connect.php'); ?>
</main>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "SUNSAY Energy",
            "item": "https://sunsayenergy.com/"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('6') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/technology']); ?>"
        }]
    }
</script>
