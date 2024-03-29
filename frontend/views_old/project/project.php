<?php use frontend\controllers\BaseController; ?>

<main class="page-container">
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
    
    <?= $this->render('../section/_complex.php'); ?>
    
    <?= $this->render('../section/_connect.php'); ?>
</main>