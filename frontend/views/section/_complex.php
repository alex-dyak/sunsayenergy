<?php use frontend\controllers\BaseController; ?>

<section class="section complex">
    <div class="complex__content">
        <div class="complex__content-title">
            <h2 class="line-title"><?= BaseController::getMessage('325') ?></h2>
        </div>
        <div class="complex__content-list">
            <div class="complex__content-list__item">
                <div class="title"><a href="#"><span><?= BaseController::getMessage('384') ?></span></a></div>
                <div class="description">
                    <ul class="description__list">
                        <li><span><?= BaseController::getMessage('326') ?></span></li>
                        <li><span><?= BaseController::getMessage('327') ?></span></li>
                        <li><span><?= BaseController::getMessage('328') ?></span></li>
                    </ul>
                </div>
                <div class="price"><?= BaseController::getMessage('385') ?> <span><?= BaseController::getMessage('387') ?></span> <?= BaseController::getMessage('386') ?></div>
                <div class="button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']); ?>"><?= BaseController::getMessage('100') ?></a></div>
            </div>
            <div class="complex__content-list__item">
                <div class="title"><a href="#"><span><?= BaseController::getMessage('388') ?></span></a></div>
                <div class="description">
                    <ul class="description__list">
                        <li><span><?= BaseController::getMessage('389') ?></span></li>
                        <li><span><?= BaseController::getMessage('390') ?></span></li>
                        <li><span><?= BaseController::getMessage('391') ?></span></li>
                    </ul>
                </div>
                <div class="price"><?= BaseController::getMessage('385') ?> <span><?= BaseController::getMessage('392') ?></span> <?= BaseController::getMessage('386') ?></div>
                <div class="button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><?= BaseController::getMessage('100') ?></a></div>
            </div>
            <div class="complex__content-list__item">
                <div class="title"><a href="#"><span><?= BaseController::getMessage('393') ?></span></a></div>
                <div class="description">
                    <ul class="description__list">
                        <li><span><?= BaseController::getMessage('394') ?></span></li>
                        <li><span><?= BaseController::getMessage('395') ?></span></li>
                        <li><span><?= BaseController::getMessage('396') ?></span></li>
                    </ul>
                </div>
                <div class="price"><?= BaseController::getMessage('385') ?> <span><?= BaseController::getMessage('397') ?></span> <?= BaseController::getMessage('386') ?></div>
                <div class="button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><?= BaseController::getMessage('100') ?></a></div>
            </div>
        </div>
    </div>
</section>

