<?php use frontend\controllers\BaseController; ?>

<section class="section connect" id="connect">
	<div class="container">
		<div class="connect__content">
			<div class="connect__content-title line-title">
				<h2><span><?= BaseController::getMessage('364') ?></span> </h2>
			</div>
			<form class="connect__content-question" data-post-url="index.html">
				<div class="message">
					<input class="custom-field" type="text" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
					<input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">
					<input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
					<textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
					<div class="connect__content-button">
						<button class="btn connect-btn btn-primary">
							<?= BaseController::getMessage('14') ?>
						</button>
						<span class="form-compelete"><?= BaseController::getMessage('374') ?></span>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>