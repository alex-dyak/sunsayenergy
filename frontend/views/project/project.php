<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('320'),
];
?>

<main class="page-container">
	<div class="container">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>
    <section class="section project">
        <div class="project__content">
            <div class="project__content-title">
                <h1><?= BaseController::getMessage('320') ?></h1>
            </div>
            <div class="project__content-description"><?= BaseController::getMessage('321') ?></div>
            <div class="project__content-types">
                <a href="<?= \yii\helpers\Url::to(['project/category', 'symbol' =>'network']) ?>">
                    <button class="btn btn-primary"><?= BaseController::getMessage('322') ?></button>
                </a>
               <!-- <a href="<?/*= \yii\helpers\Url::to(['project/category', 'symbol' =>'stand-alone']) */?>">
                    <button class="btn btn-primary"><?/*= BaseController::getMessage('323') */?></button>
                </a>
                <a href="<?/*= \yii\helpers\Url::to(['project/category', 'symbol' =>'hybrid']) */?>">
                    <button class="btn btn-primary"><?/*= BaseController::getMessage('324') */?></button>
                </a>-->
            </div>
            <div class="project__content-list">
                <?php foreach ($model as $item): ?>
                <div class="project__content-list__item" data-order="<?= $item->project_order ?>">
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
    
    <?= $this->render('../section/_complex.php'); ?>
    
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
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('320') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project']); ?>"
        }]
    }
</script>
