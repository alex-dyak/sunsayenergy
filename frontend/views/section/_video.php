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
                <?php
                $lang = $_SERVER['REQUEST_URI'];
                if (stripos($lang, 'ru') !== false && $item->video_name_ru) {
                    $video_name = $item->video_name_ru;
                } elseif (stripos($lang, 'en') !== false && $item->video_name_en) {
                    $video_name = $item->video_name_en;
                } else {
                    $video_name = $item->video_name_uk;
                }
                ?>
                <?php if($item->on_home) : ?>
                    <div class="video-col">
                        <div class="embed-responsive">
							<a href="https://www.youtube.com/watch?v=<?= $item->video_url ?>" target="_blank" rel="nofollow">
								<img src="/img/loader.gif" data-src="https://i1.ytimg.com/vi/<?= $item->video_url ?>/mqdefault.jpg" alt="<?= $video_name ?>">
							</a>
                        </div>
                        <strong class="video-title"><?= $video_name ?></strong>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <div class="btn-wrap">
            <a href="<?= \yii\helpers\Url::to(['/video']); ?>" class="button"><?= BaseController::getMessage('413') ?></a>
        </div>
    </div>
</section>