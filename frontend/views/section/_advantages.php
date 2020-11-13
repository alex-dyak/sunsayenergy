<?php use frontend\controllers\BaseController; ?>

<section class="advantages-section">
    <div class="container">
        <div class="title-block">
            <h2 class="line-title"><span><?= BaseController::getMessage('420') ?></span></h2>
            <div class="img-block">
                <img oncontextmenu="return false" data-src="get_image.php?img=img/houses.jpg" alt="houses">
            </div>
            <div class="text-block">
                <p><?= BaseController::getMessage('421') ?></p>
                <a class="button btn-lg consult-btn" href="#connect"><?= BaseController::getMessage('402') ?></a>
            </div>
        </div>
        <ul class="advantages-list">
            <li>
                <strong class="line-title"><span><?= BaseController::getMessage('422') ?></span></strong>
                <p><?= BaseController::getMessage('423') ?></p>
            </li>
            <li>
                <strong class="line-title"><span><?= BaseController::getMessage('424') ?></span></strong>
                <p><?= BaseController::getMessage('425') ?></p>
            </li>
            <li>
                <strong class="line-title"><span><?= BaseController::getMessage('426') ?></span></strong>
                <p><?= BaseController::getMessage('427') ?></p>
            </li>
        </ul>
    </div>
</section>