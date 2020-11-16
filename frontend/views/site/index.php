<?php use frontend\controllers\BaseController; ?>

    <main class="page-container">
        <!-- start top information -->
		<section class="electrostation-section">
			<div class="container">
				<div class="info-wrapper">
					<div class="text-block">
						<h1 class="line-title"><span><?= BaseController::getMessage('16') ?></span></h1>
						<p><?= BaseController::getMessage('17') ?></p>
						<a class="button btn-lg consult-btn" href="#connect"><?= BaseController::getMessage('402') ?></a>
					</div>
					<div class="img-block">
						<picture>
							  <source media="(min-width: 1280px)" srcset="/img/house-desktop.png">
							  <source media="(min-width: 768px)" srcset="/img/house-tablet.png">
							<img oncontextmenu="return false" alt="Дом с панелями" src="/img/house-mobile-2.png">
						</picture>
					</div>
					<!--<div class="adv-banner" id="adv-banner">
						<a class="close-banner" href="#">
							<i class="icon-close-bold"></i>
						</a>
						<strong class="title"><?/*= BaseController::getMessage('407') */?></strong>
						<p><?/*= BaseController::getMessage('408') */?></p>
						<strong class="title"><?/*= BaseController::getMessage('409') */?></strong>
					</div>-->
				</div>
				<div class="bg-block"></div>
			</div>
		</section>
	    <?= $this->render('../section/_video.php', compact('videos')); ?>
	    <?= $this->render('../section/_advantages.php'); ?>
        <!-- start rate -->
<!--        <section class="section rate">
			<div class="container">
				<div class="rate__content">
					<div class="rate__content-image"><img oncontextmenu="return false" data-srcset="/img/m_green.png 1024w, /img/green.png 1366w"
														  data-src="/img/green.png" alt="Зелений тариф"></div>
					<div class="rate__content-info">
						<h2 class="line-title"><?/*= BaseController::getMessage('54') */?></h2>
						<div class="description"><?/*= BaseController::getMessage('55') */?>
						</div>
						<div class="button"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/green-tariff']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
					</div>
				</div>
			</div>
        </section>-->
        <!-- end rate -->
        <!-- start work -->
	    <?= $this->render('../section/_work.php'); ?>
        <!-- end work -->
	    <?= $this->render('../section/_pros.php'); ?>

        <!-- start complex -->
        <?= $this->render('../section/_complex.php'); ?>
        <!-- end complex -->
        <?= $this->render('../section/_example.php', compact('project')); ?>
        <!-- start video review -->
        <?= $this->render('../section/_video-reviews.php', compact('video_reviews')); ?>
        <!-- end video review -->
        <!-- start review -->
        <?= $this->render('../section/_review.php', compact('reviews')); ?>
        <!-- end review -->
        <!-- start connect -->
        <?= $this->render('../section/_connect.php'); ?>
        <!-- end connect -->
    </main>

<?php //$this->registerJsFile('/js/onload/index.js', ['position' => \yii\web\View::POS_END]); ?>