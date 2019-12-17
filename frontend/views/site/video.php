<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
	'template' => "<li><b>{link}</b></li>\n",
	'label' => BaseController::getMessage('414'),
];
?>
<main class="page-container">
	<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
	</div>
	<section class="video-page">
		<div class="container">
			<h1 class="line-title"><span><?= BaseController::getMessage('414') ?></span></h1>
	    <?php if (!empty($videos)): ?>
            <?php  $existed_categories = [];
		    foreach ($videos as $item) {
			    $existed_categories[] = $item->video_category;
		    }
		    ?>
			<ul class="tab-navigation">
				<li><a class="btn-tab active" href="#all-video"><?= BaseController::getMessage('415') ?></a></li>
                <?php if (in_array(1, $existed_categories)) : ?>
					<li><a class="btn-tab" href="#finished"><?= BaseController::getMessage('416') ?></a></li>
                <?php endif; ?>
	            <?php if (in_array(2, $existed_categories)) : ?>
					<li><a class="btn-tab" href="#approach"><?= BaseController::getMessage('417') ?></a></li>
	            <?php endif; ?>
	            <?php if (in_array(3, $existed_categories)) : ?>
					<li><a class="btn-tab" href="#technology"><?= BaseController::getMessage('418') ?></a></li>
	            <?php endif; ?>
		    </ul>
			<div class="tab-container">
				<div class="tab-box active" id="all-video">
					<div class="load-more-wrap">
						<div class="video-row ">
                            <?php foreach ($videos as $item): ?>
							<div class="video-col">
								<div class="embed-responsive">
									<iframe src="https://www.youtube.com/embed/<?= $item->video_url ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
								<strong class="video-title"><?= $item->video_name ?></strong>
							</div>
                            <?php endforeach; ?>
						</div>
						<div class="btn-wrap load-more-btn load-all">
							<a href="#" class="button "><?= BaseController::getMessage('419') ?></a>
						</div>

					</div>
				</div>
                <?php if (in_array(1, $existed_categories)) : ?>
					<div class="tab-box" id="finished">
						<div class="load-more-wrap">
							<div class="video-row ">
                                <?php foreach ($videos as $item): ?>
									<div class="video-col">
										<div class="embed-responsive">
											<iframe src="https://www.youtube.com/embed/<?= $item->video_url ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</div>
										<strong class="video-title"><?= $item->video_name ?></strong>
									</div>
                                <?php endforeach; ?>
							</div>
							<div class="btn-wrap load-more-btn load-finished">
								<a href="#" class="button "><?= BaseController::getMessage('419') ?></a>
							</div>

						</div>
					</div>
                <?php endif; ?>
                <?php if (in_array(2, $existed_categories)) : ?>
					<div class="tab-box" id="approach">
						<div class="load-more-wrap">
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
							<div class="btn-wrap load-more-btn load-approach">
								<a href="#" class="button "><?= BaseController::getMessage('419') ?></a>
							</div>
						</div>
					</div>
                <?php endif; ?>
                <?php if (in_array(3, $existed_categories)) : ?>
					<div class="tab-box" id="technology">
						<div class="load-more-wrap">
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
							<div class="btn-wrap load-more-btn load-technology">
								<a href="#" class="button "><?= BaseController::getMessage('419') ?></a>
							</div>
						</div>
					</div>
                <?php endif; ?>
			</div>
		</div>
	</section>
	    <?php endif; ?>
    <!-- start connect -->
	<?= $this->render('../section/_connect.php'); ?>
    <!-- end connect -->
</main>