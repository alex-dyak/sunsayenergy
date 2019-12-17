<?php use frontend\controllers\BaseController; ?>

<section class="video-section">
    <div class="container">
        <h2><?= BaseController::getMessage('412') ?></h2>
        <div class="video-row">
            <?php foreach ($videos as $item): ?>
                <div class="video-col">
                    <div class="embed-responsive">
                        <iframe src="https://www.youtube.com/embed/<?= $item->video_url ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <strong class="video-title"><?= $item->video_name ?></strong>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="btn-wrap">
            <a href="<?= \yii\helpers\Url::to(['/video']); ?>" class="button"><?= BaseController::getMessage('413') ?></a>
        </div>
    </div>
</section>