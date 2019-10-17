<?php use frontend\controllers\BaseController; ?>

<main class="page-container">
    <section class="section blog-info">
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
    </section>

    <section class="section blog">
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
    </section>
    <?= $this->render('../section/_connect.php'); ?>
</main>

<?php

$this->registerJsFile('/js/onload/tech.js', ['position' => \yii\web\View::POS_END]);

?>