<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('6'),
    'url' => ['/technology']
];
$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('333'),
];
?>

    <main class="page-container">
		<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
		</div>
	<section class="section question-page">
		<div class="question-page__image" style="background-image:url('/img/blog/info.png')">
			<div class="question-page__image-container">
				<div class="question-page__image-text">
					<h1><?= BaseController::getMessage('333') ?></h1>
				</div>
			</div>
		</div>
		<div class="question-list">
			<ul>
				<li><a href="#question1"><span><?= BaseController::getMessage('334') ?></span></a></li>
				<li><a href="#question2"><span><?= BaseController::getMessage('335') ?></span></a></li>
				<li><a href="#question3"><span><?= BaseController::getMessage('336') ?></span></a></li>
				<li><a href="#question4"><span><?= BaseController::getMessage('337') ?></span></a></li>
				<li><a href="#question5"><span><?= BaseController::getMessage('338') ?></span></a></li>
				<li><a href="#question6"><span><?= BaseController::getMessage('339') ?></span></a></li>
				<li><a href="#question7"><span><?= BaseController::getMessage('340') ?></span></a></li>
				<li><a href="#question8"><span><?= BaseController::getMessage('341') ?></span></a></li>
				<li><a href="#question9"><span><?= BaseController::getMessage('342') ?></span></a></li>
			</ul>
		</div>
		<div class="answer-list">
			<ul>
				<li id="question1">
					<div class="answer-title"><?= BaseController::getMessage('344') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('345') ?></div>
				</li>
				<li id="question2">
					<div class="answer-title"><?= BaseController::getMessage('346') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('347') ?></div>
				</li>
				<li id="question3">
					<div class="answer-title"><?= BaseController::getMessage('348') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('349') ?></div>
				</li>
				<li id="question4">
					<div class="answer-title"><?= BaseController::getMessage('350') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('351') ?></div>
				</li>
				<li id="question5">
					<div class="answer-title"><?= BaseController::getMessage('352') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('353') ?></div>
				</li>
				<li id="question6">
					<div class="answer-title"><?= BaseController::getMessage('354') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('355') ?></div>
				</li>
				<li id="question7">
					<div class="answer-title"><?= BaseController::getMessage('356') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('357') ?></div>
				</li>
				<li id="question8">
					<div class="answer-title"><?= BaseController::getMessage('358') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('359') ?></div>
				</li>
				<li id="question9">
					<div class="answer-title"><?= BaseController::getMessage('360') ?></div>
					<div class="answer-description"><?= BaseController::getMessage('361') ?></div>
				</li>
			</ul>
		</div>
	</section>

    <?php if (!empty($other_articles)): ?>
        <section class="section blog-more">
            <div class="blog-more__title">
                <h2><?= BaseController::getMessage('343') ?></h2>
            </div>
            <div class="blog__list">
                <?php foreach ($other_articles as $item): ?>
                    <div class="blog__list-item">
						<a href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $item->symbol]) ?>">
							<div class="title">
								<a href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $item->symbol]) ?>"><?= $item->header ?></a>
							</div>
							<div class="date"><?= $item->date ?></div>
							<div class="image" style="background-image: url('/images/<?= $item->images->imagePreview ?>')"></div>
						</a>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    <?php endif; ?>

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
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= BaseController::getMessage('333') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/technology/faq-about-solar-energy']); ?>"
        }]
    }
</script>

<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "<?= BaseController::getMessage('344') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('345') ?>"
            }
        }, {
            "@type": "Question",
            "name": "<?= BaseController::getMessage('346') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('347') ?>"
            }
        }, {
            "@type": "Question",
            "name": "<?= BaseController::getMessage('348') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('349') ?>"
            }
        }, {
            "@type": "Question",
            "name": "<?= BaseController::getMessage('350') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('351') ?>"
            }
        }, {
            "@type": "Question",
            "name": "<?= BaseController::getMessage('352') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('353') ?>"
            }
        },{
            "@type": "Question",
            "name": "<?= BaseController::getMessage('354') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('355') ?>"
            }
        },{
            "@type": "Question",
            "name": "<?= BaseController::getMessage('356') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('357') ?>"
            }
        },{
            "@type": "Question",
            "name": "<?= BaseController::getMessage('358') ?>",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<?= BaseController::getMessage('359') ?>"
            }
        }, {
                "@type": "Question",
                "name": "<?= BaseController::getMessage('360') ?>",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":"<?= BaseController::getMessage('361') ?>"
                    }
            }]
    }
</script>

