<?php use frontend\controllers\BaseController; ?>

<section class="section connect" id="connect">
	<div class="container">
		<div class="connect__content">
			<div class="connect__content-title line-title">
				<strong class="h2"><span><?= BaseController::getMessage('364') ?></span> </strong>
			</div>
			<form class="connect__content-question" id="question_form" data-post-url="index.html">
				<div class="message">
					<input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
					<input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
					<input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
					<input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
					<input class="custom-field" type="text" id="phone" name="phone" placeholder="+380">
					<input class="custom-field" type="text" id="email" name="email" placeholder="youremail@mail.com">
					<textarea class="custom-field" id="question" name="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
					<div class="connect__content-button">
						<button class="btn connect-btn btn-primary" id="submit_button">
							<?= BaseController::getMessage('14') ?>
						</button>
					</div>
				</div>
				<div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
			</form>
		</div>
	</div>
</section>