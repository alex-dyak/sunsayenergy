<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('320'),
    'url' => ['/project']
];
$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => $model->header,
];
?>
<main class="page-container">
	<div class="container">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>

	<section class="project-hero-section detail">
			<div class="hero-project-slider">
                <?php foreach($images as $img) : ?>
				<div class="hero-slide">
					<picture>
						<source media="(min-width: 1400px)" data-srcset="<?= $img->getUrl(936); ?>" type="image/jpg">
						<source media="(min-width: 1000px)" data-srcset="<?= $img->getUrl(800); ?>" type="image/jpg">
						<source media="(max-width:  450px)" data-srcset="<?= $img->getUrl(275); ?>" type="image/jpg">
						<source media="(max-width:  800px)" data-srcset="<?= $img->getUrl(570); ?>" type="image/jpg">
						<img data-src="<?= $img->getUrl(800); ?>" alt="">
					</picture>
				</div>
                <?php endforeach; ?>
			</div>
			<div class="hero-slider-counter"></div>
			<span class="hero-yellow-circle"></span>
	</section>
	<section class="project-content-section">
		<div class="container">
			<div class="project-content-wrap">
				<h1 class="project-title"><?= $model->header ?></h1>
				<div class="project-description">
                    <?= $model->text; ?>
				</div>
			</div>

		</div>
	</section>

<?php if($other_project): ?>
    <section class="featured-project-section">
        <div class="container">
            <div class="featured-project-title">
                <strong class="h2"><?= BaseController::getMessage('317') ?></strong>
            </div>
            <div class="featured-project-list">
                <?php foreach ($other_project as $item): ?>
					<a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>">
						<img data-src="<?= $item->getFirstImg() ?>" alt="<?= $item->header ?>">
					</a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
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
            "name": "<?= BaseController::getMessage('320') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project']); ?>"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= $model->header ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project/', 'symbol' => $model->symbol]); ?>"
        }]
    }
</script>
