<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
	'template' => "<li><b>{link}</b></li>\n",
	'label' => BaseController::getMessage('7'),
];
?>
<main class="page-container">
	<?php echo Breadcrumbs::widget([
		'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
		'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
	]); ?>
	    <?php if (!empty($videos)): ?>
            <section class="section video">
                <div class="video__content">
                    <div class="video__content-title">
                        <h2><?= BaseController::getMessage('331') ?></h2><span class="mobile-count"><?= BaseController::getMessage('332') ?></span>
                    </div>
                    <div class="video__content-list">
					    <?php foreach ($videos as $item): ?>
                            <div class="video-item">
                                <div class=video__content-list__item">
                                    <div class="video__content-list__item-info">
                                        <div class="video-name"><?= $item->video_name ?></div>
                                        <div class="video-url"><?= $item->video_url ?></div>
                                    </div>
                                </div>
                            </div>
					    <?php endforeach; ?>
                    </div>
                </div>
            </section>
	    <?php endif; ?>
    <!-- start connect -->
	<?= $this->render('../section/_connect.php'); ?>
    <!-- end connect -->
</main>