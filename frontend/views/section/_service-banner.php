<?php use frontend\controllers\BaseController; ?>

<div class="service-banner">
	<div class="left-banner-img">
		<img oncontextmenu="return false" data-src="/img/services/man-1.png" alt="worker">
	</div>
	<div class="right-banner-img">
		<img oncontextmenu="return false" data-src="/img/services/dron.png" alt="dron">
	</div>
	<div class="text-wrap">
		<p><?= BaseController::getMessage('486') ?></p>
		<a href="#connect" class="button consult-btn"><?= BaseController::getMessage('487') ?></a>
	</div>
</div>