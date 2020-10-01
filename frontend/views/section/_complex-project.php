<?php use frontend\controllers\BaseController; ?>


<section class="price-section project">
    <div class="container">
        <h2 class="line-title"><?= BaseController::getMessage('325') ?></h2>
	</div>
	<div class="slide-wrapper">
		<div class="container">
			<div class="price-slider">
				<div class="slide yellow">
					<div class="slide-title">
						<h3><?= BaseController::getMessage('384') ?></h3>
						<div class="price-block">
							<strong class="price"><?= BaseController::getMessage('387') ?></strong>
							<span class="unit"><?= BaseController::getMessage('386') ?></span>
						</div>
					</div>
					<ul class="compare-list">
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
                            <?= BaseController::getMessage('326') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
                            <?= BaseController::getMessage('327') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
                            <?= BaseController::getMessage('328') ?>
						</li>
						<li class="cons">
							<img src="/img/complex/cons-circle.svg" alt="cons" width="28">
                            <?= BaseController::getMessage('444') ?>
						</li>
					</ul>
					<a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']); ?>" class="button"><?= BaseController::getMessage('100') ?></a>
				</div>
				<div class="slide">
					<div class="slide-title">
						<h3><?= BaseController::getMessage('388') ?></h3>
						<div class="price-block">
							<strong class="price"><?= BaseController::getMessage('392') ?></strong>
							<span class="unit"><?= BaseController::getMessage('386') ?></span>
						</div>
					</div>
					<ul class="compare-list">
						<li class="pros">
							<img src="/img/complex/pros-circle-yellow.svg" alt="pros" width="28">
							<?= BaseController::getMessage('389') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle-yellow.svg" alt="pros" width="28">
							<?= BaseController::getMessage('390') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle-yellow.svg" alt="pros" width="28">
							<?= BaseController::getMessage('391') ?>
						</li>
						<li class="cons">
							<img src="/img/complex/cons-circle-yellow.svg" alt="cons" width="28">
							<?= BaseController::getMessage('443') ?>
						</li>
					</ul>
					<a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>" class="button"><?= BaseController::getMessage('100') ?></a>
				</div>
				<div class="slide yellow">
					<div class="slide-title">
						<h3><?= BaseController::getMessage('393') ?></h3>
						<div class="price-block">
							<strong class="price"><?= BaseController::getMessage('397') ?></strong>
							<span class="unit"><?= BaseController::getMessage('386') ?></span>
						</div>
					</div>
					<ul class="compare-list">
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
							<?= BaseController::getMessage('394') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
							<?= BaseController::getMessage('395') ?>
						</li>
						<li class="pros">
							<img src="/img/complex/pros-circle.svg" alt="pros" width="28">
							<?= BaseController::getMessage('396') ?>
						</li>
						<li class="cons">
							<img src="/img/complex/cons-circle.svg" alt="cons" width="28">
							<?= BaseController::getMessage('445') ?>
						</li>
					</ul>
					<a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>" class="button"><?= BaseController::getMessage('100') ?></a>
				</div>
			</div>
		</div>
    </div>
</section>
