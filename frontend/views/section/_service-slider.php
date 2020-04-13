<?php use frontend\controllers\BaseController; ?>

<div class="service-types-section">
	<span class="circle"></span>
	<div class="container">
		<div class="service-types-wrap">
			<div class="serice-nav-wrap">
				<h2 class="line-title"><?= BaseController::getMessage('149') ?></h2>
				<div class="service-types-nav">
					<div class="nav-slide"><span><?= BaseController::getMessage('269') ?></span></div>
					<div class="nav-slide"><span><?= BaseController::getMessage('270') ?></span></div>
					<div class="nav-slide"><span><?= BaseController::getMessage('271') ?></span></div>
				</div>
			</div>

			<div class="service-types-slider">
				<div class="service-slide">
					<div class="text-wrap">
						<p class="text"><?= BaseController::getMessage('273') ?></p>
					</div>
					<div class="image" style="background-image: url('/img/services/service-1.jpg')"></div>
				</div>
				<div class="service-slide">
					<div class="text-wrap">
						<p class="text"><?= BaseController::getMessage('278') ?></p>
					</div>
					<div class="image" style="background-image: url('/img/services/service-2.jpg')"></div>
				</div>
				<div class="service-slide">
					<div class="text-wrap">
						<p class="text"><?= BaseController::getMessage('280') ?></p>
					</div>
					<div class="image" style="background-image: url('/img/services/service-3.jpg')"></div>
				</div>
			</div>
		</div>
	</div>
</div>