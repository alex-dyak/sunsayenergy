<?php use frontend\controllers\BaseController; ?>

<section class="pros-section">
    <div class="container">
        <div class="title-block">
            <h2 class="line-title"><span><?= BaseController::getMessage('428') ?></span></h2>
            <div class="subtitle">
               <p><?= BaseController::getMessage('430') ?></p>
            </div>
        </div>
        <ul class="pros-list">
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-1.jpg" alt="<?= BaseController::getMessage('431') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('431') ?></span></strong>
                <p><?= BaseController::getMessage('432') ?></p>
            </li>
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-2.jpg" alt="<?= BaseController::getMessage('433') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('433') ?></span></strong>
                <p><?= BaseController::getMessage('434') ?></p>
            </li>
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-3.jpg" alt="<?= BaseController::getMessage('435') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('435') ?></span></strong>
                <p><?= BaseController::getMessage('436') ?></p>
            </li>
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-4.jpg" alt="<?= BaseController::getMessage('437') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('437') ?></span></strong>
                <p><?= BaseController::getMessage('438') ?></p>
            </li>
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-5.jpg" alt="<?= BaseController::getMessage('439') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('439') ?></span></strong>
                <p><?= BaseController::getMessage('440') ?></p>
            </li>
            <li>
				<div class="img-round">
					<img data-src="/img/pros-block/pros-6.jpg" alt="<?= BaseController::getMessage('441') ?>">
				</div>
                <strong class="line-title"><span><?= BaseController::getMessage('441') ?></span></strong>
                <p><?= BaseController::getMessage('442') ?></p>
            </li>
        </ul>

        <a href="#" class="button load-pros-button"><?= BaseController::getMessage('469') ?></a>
    </div>
</section>