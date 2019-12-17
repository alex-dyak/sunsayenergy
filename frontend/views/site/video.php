<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
	'template' => "<li><b>{link}</b></li>\n",
	'label' => BaseController::getMessage('414'),
];
?>
<main class="page-container">
	<?php echo Breadcrumbs::widget([
		'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
		'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
	]); ?>

	    <?php if (!empty($videos)): ?>
            <?php  $existed_categories = [];
		    foreach ($videos as $item) {
			    $existed_categories[] = $item->video_category;
		    }
		    ?>
            <ul>
                <li><a href="#"><?= BaseController::getMessage('415') ?></a></li>
                <?php if (in_array(1, $existed_categories)) : ?>
                    <li><a href="#"><?= BaseController::getMessage('416') ?></a></li>
                <?php endif; ?>
	            <?php if (in_array(2, $existed_categories)) : ?>
                    <li><a href="#"><?= BaseController::getMessage('417') ?></a></li>
	            <?php endif; ?>
	            <?php if (in_array(3, $existed_categories)) : ?>
                    <li><a href="#"><?= BaseController::getMessage('418') ?></a></li>
	            <?php endif; ?>
		    </ul>
            <section class="section video">
                <div class="video__content">
                    <div class="video__content-title">
                        <h2><?= BaseController::getMessage('412') ?></h2>
                        <span class="video__content-description"><?= BaseController::getMessage('413') ?></span>
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