<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;
use ymaker\social\share\widgets\SocialShare;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('6'),
    'url' => ['/technology']
];
$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => $article->header,
];

$datetime = strtotime($article->date);
$seo_date = date('Y-m-d', $datetime);
?>

<main class="page-container">
	<div class="container">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>
    <section class="section blog-page">
        <?php if(!BaseController::is_mobile()) : ?>
			<div class="blog-page__image">
				<picture>
					<img data-src="/images/<?= $article->images->imagePreview ?>" alt="" class="blog-info__image--bg">
				</picture>
				<div class="blog-page__image-container">
					<div class="blog-page__image-text">
						<h1><?= $article->header ?></h1>
						<div class="mini-description"><?= $article->description ?></div>
						<div class="publication"><?= $article->date ?></div>
					</div>
				</div>
			</div>
        <?php else : ?>
			<div class="blog-page__mobile-container">
				<div class="blog-page__mobile-text">
					<h1><?= $article->header ?></h1>
					<div class="mini-description"><?= $article->description ?></div>
					<div class="publication"><?= $article->date ?></div>
				</div>
			</div>
        <?php endif; ?>
		<div class="container">
			<div class="blog-page__description">
				<div class="blog-page__description-text">
					<?= $article->text ?>
				</div>
			</div>
			<div class="share-post-block">
				<span><?= BaseController::getMessage('565') ?></span>
                <?= \ymaker\social\share\widgets\SocialShare::widget([
                    'configurator'  => 'socialShare',
                    'url'           => "https://sunsayenergy.com" . \yii\helpers\Url::to(['technology/detailed', 'symbol' => $article->symbol]),
                    'title'         => $article->title,
                    'description'   => $article->descriptionSEO,
                    'imageUrl'      => \yii\helpers\Url::to($img, true),
                ]); ?>
			</div>
		</div>
    </section>
    <?php if (!empty($other_articles)): ?>
        <section class="section blog-more">
			<div class="container">
				<div class="blog-more__title">
					<strong class="h2"><?= BaseController::getMessage('343') ?></strong>
				</div>
				<div class="blog__list">
                    <?php foreach ($other_articles as $item): ?>
						<div class="blog__list-item">
							<div class="title">
								<a href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $item->symbol]) ?>"><?= $item->header ?></a>
							</div>
							<div class="date"><?= $item->date ?></div>
							<div class="image">
								<img data-src="/images/<?= $item->images->imagePreview ?>" alt="<?= $item->header ?>">
							</div>
						</div>
                    <?php endforeach; ?>
				</div>
			</div>

        </section>
    <?php endif; ?>
    <?= $this->render('../section/_connect.php'); ?>
</main>

<?php

$this->registerJsFile('/js/onload/tech.js', ['position' => \yii\web\View::POS_END]);

?>

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
            "name": "<?= BaseController::getMessage('6') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/technology']); ?>"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= $article->header ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $article->symbol]); ?>"
        }]
    }
</script>

<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $article->symbol]) ?>"
        },
        "headline": "<?= $article->header ?>",
        "description": "$article->description",
        "image": {
            "@type": "ImageObject",
            "url": "https://sunsayenergy.com/images/<?= $article->images->imagePreview ?>",
            "width": 1920,
            "height": 900
        },
        "author": {
            "@type": "Organization",
            "name": "SUNSAY Energy"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SUNSAY Energy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sunsayenergy.com/img/logo.png",
                "width": 180,
                "height": 35
            }
        },
        "datePublished": "<?= $seo_date ?>",
        "dateModified": "<?= $seo_date ?>"
    }
</script>
