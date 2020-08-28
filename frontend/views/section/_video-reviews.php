<?php use frontend\controllers\BaseController; ?>

<section class="video-section">
    <div class="container">
        <h2 class="line-title"><?= BaseController::getMessage('572') ?></h2>
        <div class="video-review-slider">
            <?php
            foreach ($video_reviews as $item): ?>
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
                <div class="video-col">
                    <div class="embed-responsive">
                        <a href="https://www.youtube.com/watch?v=<?= $item->video_url ?>" target="_blank" rel="nofollow">
                            <img data-src="https://i1.ytimg.com/vi/<?= $item->video_url ?>/mqdefault.jpg" alt="<?= $video_name ?>">
                        </a>
                    </div>
                    <strong class="video-title"><?= $video_name ?></strong>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>