<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('320'),
    'url' => ['/project'],
];

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('322'),
];
?>
<main class="page-container project-category">
	<div class="container">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>
    <section class="section project">
        <div class="project__content">
            <div class="project__content-title">
                <h1><?= BaseController::getMessage('313') ?></h1>
            </div>

            <?php if ($symbol == 'network'): ?>
                <div class="project__content-description"><?= BaseController::getMessage('314') ?></div>
            <?php elseif ($symbol == 'stand-alone'): ?>
                <div class="project__content-description"><?= BaseController::getMessage('400') ?></div>
            <?php elseif ($symbol == 'hybrid'): ?>
                <div class="project__content-description"><?= BaseController::getMessage('401') ?></div>
            <?php endif; ?>

            <div class="project__content-list">

                <?php foreach ($model as $item): ?>
                    <div class="project__content-list__item">
                        <a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>">
                            <div class="image">
                                <img data-src="<?= $item->getFirstImg(550) ?>" alt="<?= $item->header ?>">
                            </div>
                            <div class="title"><?= $item->header ?></div>
                        </a>
                    </div>
                <?php endforeach; ?>

            </div>
        </div>
    </section>

    <?php if ($symbol == 'network'): ?>
    <section class="section service-info">
        <div class="service-info__content">
            <div class="service-info__content-info">
<!--                <div class="complect">--><?//= BaseController::getMessage('196') ?><!--</div>-->
                <div class="title">
                    <h1><?= BaseController::getMessage('197') ?></h1>
                </div>
                <div class="description"><?= BaseController::getMessage('200') ?></div>
                <div class="more"><a class="btn btn-primary" href="#equipment"><?= BaseController::getMessage('18') ?></a></div>
            </div>
            <div class="service-info__content-image"><img data-src="/img/services/1.jpg" alt="Комплект Дохід" data-srcset="/img/services/1_m.jpg 1024w, /img/services/1.jpg 1366w"></div>
        </div>
    </section>
    <?php endif; ?>

    <?php if ($symbol == 'stand-alone'): ?>
        <section class="section service-info">
            <div class="service-info__content">
                <div class="service-info__content-info">
<!--                    <div class="complect">--><?//= BaseController::getMessage('86') ?><!--</div>-->
                    <div class="title">
                        <h1><?= BaseController::getMessage('87') ?></h1>
                    </div>
                    <div class="description"><?= BaseController::getMessage('132') ?>
                    </div>
                    <div class="more"><a class="btn btn-primary" href="#equipment"><?= BaseController::getMessage('18') ?></a></div>
                </div>
                <div class="service-info__content-image">
                    <img data-src="/img/comfort/1.jpg" alt="Комплект Дохід"
                         data-srcset="/img/comfort/1_m.jpg 1024w, /img/comfort/1.jpg 1366w">
                </div>
            </div>
        </section>
    <?php endif; ?>
    <?php if ($symbol == 'hybrid'): ?>
        <section class="section service-info">
            <div class="service-info__content">
                <div class="service-info__content-info">
<!--                    <div class="complect">--><?//= BaseController::getMessage('73') ?><!--</div>-->
                    <div class="title">
                        <h1><?= BaseController::getMessage('74') ?></h1>
                    </div>
                    <div class="description"><?= BaseController::getMessage('75') ?></div>
                    <div class="more"><a class="btn btn-primary" href="#equipment"><?= BaseController::getMessage('18') ?></a></div>
                </div>
                <div class="service-info__content-image">
                    <img data-src="/img/reserve/1.jpg" alt="Комплект Дохід" data-srcset="/img/reserve/1_m.jpg 1024w, /img/reserve/1.jpg 1366w">
                </div>
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
            "name": "Sunsay Energy",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('320') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project']); ?>"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= BaseController::getMessage('322') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project/category/network']); ?>"
        }]
    }
</script>
