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
                    <img oncontextmenu="return false" data-src="/images/<?= $last_article->images->imagePreview ?>" alt="" class="blog-info__image--bg">
                </picture>
                <div class="blog-info__image-text">
                    <h1><?= $last_article->header ?></h1>
                    <a class="btn btn-primary" href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $last_article->symbol]); ?>">
                        <?= BaseController::getMessage('363') ?>
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
							<div class="image">
								<img oncontextmenu="return false" src="/img/logo.svg" data-src="/images/<?= $item->images->imagePreview ?>" alt="<?= $item->header ?>">
							</div>
							<div class="date"><?= $item->date ?></div>
							<div class="title"><?= $item->header ?></div>
						</a>
					</div>
                <?php endforeach; ?>
			</div>
		</div>
    </section>

    <?= $this->render('../section/_seo_article.php'); ?>

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
