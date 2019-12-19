<?php use frontend\controllers\BaseController; ?>

<section class="video-section">
    <div class="container">
        <h2><?= BaseController::getMessage('412') ?></h2>
        <div class="video-row">
            <?php
            $i = 0;
            $home_videos = [];
            for ($i = 0; $i < count($videos); $i++) {
	            if ($videos[$i]->on_home) {
		            if (!$home_videos) {
			            $home_videos[] = $videos[$i];
		            } elseif ($videos[$i]->on_home < $home_videos[count($home_videos)-1]->on_home) {
			            array_unshift($home_videos, $videos[$i]);
		            } else {
			            array_push($home_videos, $videos[$i]);
                    }
	            }
            }
            foreach ($home_videos as $item): ?>
                <?php if($item->on_home) : ?>
                    <div class="video-col">
                        <div class="embed-responsive">
                            <iframe src="https://www.youtube.com/embed/<?= $item->video_url ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <strong class="video-title"><?= $item->video_name ?></strong>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <div class="btn-wrap">
            <a href="<?= \yii\helpers\Url::to(['/video']); ?>" class="button"><?= BaseController::getMessage('413') ?></a>
        </div>
    </div>
</section>