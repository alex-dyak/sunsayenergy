<?php use frontend\controllers\BaseController; ?>

<main class="page-container">
    <section class="section project-info">
        <div class="project-info__content">
            <div class="project-info__content-title">
                <h2><?= $model->header ?></h2>
            </div>
            <div class="project-info__content-images">
                <div class="project-info__slider-nav">
                    <?php foreach($images as $img) : ?>
                    <div class="project-info__slider-nav-item">
                        <picture>
                            <source media="(min-width: 1000px)" data-srcset="<?= $img->getUrl(160); ?>" type="image/jpg">
                            <source media="(min-width: 1900px)" data-srcset="<?= $img->getUrl(200); ?>" type="image/jpg">
                            <source media="(max-width:  450px)" data-srcset="<?= $img->getUrl(80);  ?>" type="image/jpg">
                            <source media="(max-width:  800px)" data-srcset="<?= $img->getUrl(120); ?>" type="image/jpg">
                            <img data-src="<?= $img->getUrl(140); ?>" alt="" class="check-slick">
                        </picture>
                    </div>
                    <?php endforeach; ?>
                </div>
                <div class="project-info__slider">
                    <?php foreach($images as $img) : ?>
                    <div class="project-info__slider-item">
                        <!-- <img data-src="<?= $img->getUrl() ?>" alt="" class="check-slick"> -->
                        <picture>
                            <source media="(min-width: 1900px)" data-srcset="<?= $img->getUrl(936); ?>" type="image/jpg">
                            <source media="(min-width: 1000px)" data-srcset="<?= $img->getUrl(800); ?>" type="image/jpg">
                            <source media="(max-width:  450px)" data-srcset="<?= $img->getUrl(275); ?>" type="image/jpg">
                            <source media="(max-width:  800px)" data-srcset="<?= $img->getUrl(570); ?>" type="image/jpg">
                            <img data-src="<?= $img->getUrl(800); ?>" alt="">
                        </picture>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="project-info__content-description">
                <?= $model->text; ?>
            </div>
        </div>
    </section>

    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
	<!-- end review -->
<?php if($other_project): ?>
    <section class="section another">
        <div class="another__content">
            <div class="another__content-title">
                <h2><?= BaseController::getMessage('317') ?></h2>
            </div>
            <div class="project__content-list">
                <?php foreach ($other_project as $item): ?>
                    <div class="project__content-list__item">
                        <a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>">
                            <div class="image">
                                <img data-src="<?= $item->getFirstImg() ?>" alt="">
                            </div>
                            <div class="title"><?= $item->header ?></div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="another__content-more">
                <a href="<?= \yii\helpers\Url::to(['/project/category', 'symbol' =>$model->category]); ?>">
                    <button class="btn btn-secondary"><?= BaseController::getMessage('318') ?></button>
                </a>
                <a href="<?= \yii\helpers\Url::to(['/project']); ?>">
                    <button class="btn btn-secondary"><?= BaseController::getMessage('319') ?></button>
                </a>
            </div>
        </div>
    </section>
<?php endif; ?>
    <!-- start connect -->
    <?= $this->render('../section/_connect.php'); ?>
	<!-- end connect -->
</main>


