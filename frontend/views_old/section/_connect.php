<?php use frontend\controllers\BaseController; ?>

<section class="section connect" id="connect">
    <div class="connect__content">
        <div class="connect__content-info">
            <div class="connect__content-title">
                <h2><?= BaseController::getMessage('364') ?></h2>
            </div>
            <div class="connect__content-question" data-post-url="index.html">
                <div class="message"><?= BaseController::getMessage('365') ?>
                    <input class="custom-field" type="text" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                    <?= BaseController::getMessage('367') ?>
                    <select class="custom-field custom-select" id="consultation" name="consultation">
                        <option data-type="request_consultation"  value="Консультація" selected><?= BaseController::getMessage('368') ?></option>
                        <option data-type="request_measurement" value="Розрахунок встановлення СЕС"><?= BaseController::getMessage('369') ?></option>
                        <option data-type="request_installation" value="Встановлення СЕС"><?= BaseController::getMessage('370') ?></option>
                    </select>.
                    <?= BaseController::getMessage('371') ?>
                    <input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">
                    <?= BaseController::getMessage('372') ?>
                    <input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
                    <div class="connect__content-button"><button class="btn connect-btn btn-primary"><?= BaseController::getMessage('14') ?></button><span class="form-compelete"><?= BaseController::getMessage('374') ?></span></div>
                </div>
            </div>
        </div>
        <div class="connect__content-image">
            <?php if ( !BaseController::is_mobile()  ): ?>
                <picture>
                    <source data-srcset="/img/connect.webp" type="image/webp">
                    <img data-src="/img/connect.jpg" alt="">
                </picture>                
            <?php endif; ?>
        </div>
    </div>
</section>