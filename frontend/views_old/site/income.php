<?php use frontend\controllers\BaseController; ?>
<main class="page-container">
	<section class="section service-info">
		<div class="service-info__content">
			<div class="service-info__content-info">
				<div class="complect"><?= BaseController::getMessage('196') ?></div>
				<div class="title">
					<h1><?= BaseController::getMessage('197') ?></h1>
				</div>
				<div class="description"><?= BaseController::getMessage('200') ?></div>
				<div class="more"><a class="btn btn-primary" href="#equipment"><?= BaseController::getMessage('18') ?></a></div>
			</div>
			<div class="service-info__content-image"><img data-src="/img/services/1.jpg" alt="Комплект Дохід" data-srcset="/img/services/1_m.jpg 1024w, /img/services/1.jpg 1366w"></div>
		</div>
	</section>
	<section class="section service-equipment" id="equipment">
		<div class="service-equipment__content">
			<div class="service-equipment__content-image service-image">
				<img data-src="/img/services/2_1.jpg" alt="Обладнання"
					data-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
			</div>
			<div class="service-equipment__content-info">
				<div class="title">
					<h2><?= BaseController::getMessage('203') ?></h2>
				</div>
				<div class="tabs tabs-equipment">
					<div class="tabs__list">
						<div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/services/2_1.jpg" data-image-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
							<span><?= BaseController::getMessage('204') ?></span>
						</div>
						<div class="tabs__list-item" data-tab="2" data-image-desktop="/img/services/2_2.jpg" data-image-srcset="/img/services/2_2_m.jpg 1024w, /img/services/2_2.jpg 1366w">
							<span><?= BaseController::getMessage('205') ?></span>
						</div>
						<div class="tabs__list-item" data-tab="3" data-image-desktop="/img/services/2_3.jpg" data-image-srcset="/img/services/2_3_m.jpg 1024w, /img/services/2_3.jpg 1366w">
							<span><?= BaseController::getMessage('206') ?></span>
						</div>
					</div>
					<div class="tabs__content">
						<div class="tabs__content-item active" data-id="1">
							<div class="message"><?= BaseController::getMessage('208') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
						</div>
						<div class="tabs__content-item" data-id="2">
							<div class="message"><?= BaseController::getMessage('210') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
						</div>
						<div class="tabs__content-item" data-id="3">
							<div class="message"><?= BaseController::getMessage('212') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
						</div>
					</div>
				</div>
				<div class="slider-equipment">
					<div class="slider-equipment__list">
						<div class="slider-equipment__list-item"><span><?= BaseController::getMessage('204') ?></span></div>
						<div class="slider-equipment__list-item"><span><?= BaseController::getMessage('205') ?></span></div>
						<div class="slider-equipment__list-item"><span><?= BaseController::getMessage('206') ?></span></div>
					</div>
					<div class="slider-equipment__content">
						<div class="slider-equipment__content-item">
							<div class="message"><?= BaseController::getMessage('208') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
							<div class="image">
								<img data-src="/img/services/2_1.jpg" alt="Обладнання"
								data-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
							</div>
						</div>
						<div class="slider-equipment__content-item">
							<div class="message"><?= BaseController::getMessage('210') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
							<div class="image">
								<img data-src="/img/services/2_2.jpg" alt="Обладнання"
								data-srcset="/img/services/2_2_m.jpg 1024w, /img/services/2_2.jpg 1366w">
							</div>
						</div>
						<div class="slider-equipment__content-item">
							<div class="message"><?= BaseController::getMessage('212') ?></div>
							<div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types/#network']); ?>"><?= BaseController::getMessage('18') ?></a></div>
							<div class="image">
								<img data-src="/img/services/2_3.jpg" alt="Обладнання"
								data-srcset="/img/services/2_3_m.jpg 1024w, /img/services/2_3.jpg 1366w">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <!-- start work -->
    <?= $this->render('../section/_work.php'); ?>
    <!-- end work -->
    	<section class="section service-miscount">
		<div class="service-miscount__content">
			<div class="service-miscount__content-calculation">
				<div class="title">
					<h2><?= BaseController::getMessage('254') ?></h2>
				</div>
				<div class="description"><?= BaseController::getMessage('257') ?></div>
				<div class="calculation-form">
					<div class="form-group">
						<label for="house"><?= BaseController::getMessage('258') ?>
							<div>
								<input class="js-range-slider" id="income-house" type="text" name="house" data-min="0" data-max="5000"
									data-step="100" data-hide-min-max="true" data-from="200" data-thumbwidth="20">
							</div>
						</label>
					</div>
					<div class="form-group">
						<label for="power"><?= BaseController::getMessage('260') ?>
							<div>
								<input class="js-range-slider" id="income-power" type="text" name="power" data-min="5" data-max="35"
									data-step="2.5" data-hide-min-max="true" data-from="30" data-thumbwidth="20">
							</div>
						</label>
					</div>
				</div>
				<div class="result">
                    <?= BaseController::getMessage('261') ?>
					<span><span class="result-value"></span></span>
				</div>
				<div class="income">
                    <?= BaseController::getMessage('262') ?>
					<span class="income-value"></span>
                    <?= BaseController::getMessage('264') ?>
				</div>
			</div>
			<div class="service-miscount__content-graphic">
				<span class="service-miscount__content-graphic__title"><?= BaseController::getMessage('265') ?><p><?= BaseController::getMessage('267') ?></p></span>
				<canvas id="income-graphic"></canvas>
			</div>
		</div>
	</section>

	<section class="section service-types">
		<div class="service-types__content">
			<div class="service-types__content-info">
				<div class="title">
					<h2><?= BaseController::getMessage('149') ?></h2>
				</div>
				<div class="tabs tabs-types">
					<div class="tabs__list">
						<div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/services/3_1.jpg"
							data-image-srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w"><span><?= BaseController::getMessage('269') ?></span></div>
						<div class="tabs__list-item" data-tab="2" data-image-desktop="/img/services/3_2.jpg" data-image-srcset="/img/services/3_2_m.jpg 1024w, /img/services/3_2.jpg 1366w"><span><?= BaseController::getMessage('270') ?></span></div>
						<div class="tabs__list-item" data-tab="3" data-image-desktop="/img/services/3_3.jpg" data-image-srcset="/img/services/3_3_m.jpg 1024w, /img/services/3_3.jpg 1366w"><span><?= BaseController::getMessage('271') ?></span></div>
					</div>
					<div class="tabs__content">
						<div class="tabs__content-item active" data-id="1"><?= BaseController::getMessage('273') ?></div>
						<div class="tabs__content-item" data-id="2"><?= BaseController::getMessage('278') ?></div>
						<div class="tabs__content-item" data-id="3"><?= BaseController::getMessage('280') ?></div>
					</div>
				</div>
				<div class="slider-types">
					<div class="slider-types__list">
						<div class="slider-types__list-item active" data-tab="1"><span><?= BaseController::getMessage('269') ?></span></div>
						<div class="slider-types__list-item" data-tab="2"><span><?= BaseController::getMessage('270') ?></span></div>
						<div class="slider-types__list-item" data-tab="3"><span><?= BaseController::getMessage('271') ?></span></div>
					</div>
					<div class="slider-types__content">
						<div class="slider-types__content-item active" data-id="1">
							<div class="message"><?= BaseController::getMessage('273') ?></div>
							<div class="image">
								<img data-src="/img/services/3_1.jpg" alt="Сервіс" srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="2">
							<div class="message"><?= BaseController::getMessage('278') ?></div>
							<div class="image">
								<img data-src="/img/services/3_2.jpg" alt="Сервіс" srcset="/img/services/3_2_m.jpg 1024w, /img/services/3_2.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="3">
							<div class="message"><?= BaseController::getMessage('280') ?></div>
							<div class="image">
								<img data-src="/img/services/3_3.jpg" alt="Сервіс" srcset="/img/services/3_3_m.jpg 1024w, /img/services/3_3.jpg 1366w">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="service-types__content-image service-image"><img data-src="/img/services/3_1.jpg" alt="Сервіс" data-srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w"></div>
		</div>
	</section>
	<!-- start example -->
    <?= $this->render('../section/_example.php');?>
	<!-- end example -->
    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->
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
							<option data-type="request_consultation" value="Консультація"><?= BaseController::getMessage('368') ?></option>
							<option data-type="request_measurement" value="Розрахунок встановлення СЕС"><?= BaseController::getMessage('369') ?></option>
                            <option data-type="request_installation" value="Підключення комплекту Дохід" selected><?= BaseController::getMessage('299') ?></option>
						</select>.
                        <?= BaseController::getMessage('371') ?>
						<input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">
                        <?= BaseController::getMessage('372') ?>
						<input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
						<div class="connect__content-button"><button class="btn connect-btn btn-primary"><?= BaseController::getMessage('14') ?></button><span class="form-compelete"><?= BaseController::getMessage('374') ?></span></div>
					</div>
				</div>
			</div>
			<div class="connect__content-image"><img data-src="/img/connect.jpg" alt=""></div>
		</div>
	</section>
</main>


    <script type = "text/javascript">
        var okupn = '<?= BaseController::getMessage('378').' ' ?>';
        var rokiv = '<?= " ".BaseController::getMessage('379') ?>';
        var rik = '<?= " ".BaseController::getMessage('380') ?>';
    </script>

<?php
$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/calc/income.js', ['position' => \yii\web\View::POS_END]);
?>