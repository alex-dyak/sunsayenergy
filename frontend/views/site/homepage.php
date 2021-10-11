<?php use frontend\controllers\BaseController; ?>

    <main>
         <!-- start info -->



            <?= $this->render('../section/_video.php', compact('videos')); ?>
            
            <!-- start video review -->
            <?= $this->render('../section/_video-reviews.php', compact('video_reviews')); ?>
            <!-- end video review -->

            <div class="seo-article collapsed">
                <div class="container">
                    <div class="seo-article-wrap">
                        <?= BaseController::getMessage('570') ?>
                    </div>
                    <span class="seo-article-opener">
                        <i class="icon-angle-right"></i>
                    </span>
                </div>
            </div>

            <!-- start connect -->
            <?= $this->render('../section/_connect.php'); ?>
            <!-- end connect -->
    </main>

