<?php use frontend\controllers\BaseController; ?>
<?php /*$this->title=$article->title;  */?>
<main class="page-container">
    <section class="section blog-page">
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
        <div class="blog-page__mobile-container">
            <div class="blog-page__mobile-text">
                <h1><?= $article->header ?></h1>
                <div class="mini-description"><?= $article->description ?></div>
                <div class="publication"><?= $article->date ?></div>
            </div>
        </div>
        <div class="blog-page__description">
            <div class="blog-page__description-text">
                <?= $article->text ?>
            </div>
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
        </section>
    <?php endif; ?>
    <?= $this->render('../section/_connect.php'); ?>
</main>

<?php

$this->registerJsFile('/js/onload/tech.js', ['position' => \yii\web\View::POS_END]);

?>
