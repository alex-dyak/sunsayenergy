<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('1'),
];

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('2'),
];
?>
<main class="page-container">
	<div class="container">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>
	<section class="service-section">
		<div class="container">
			<div class="hero-block">
				<div class="title">
					<h1><?= BaseController::getMessage('197') ?></h1>
				</div>
				<div class="service-section-image">
					<img src="/img/house-1.png" alt="<?= BaseController::getMessage('197') ?>" srcset="/img/house-1-mob.png 1024w, /img/house-1.png 1366w">
				</div>
				<div class="description"><?= BaseController::getMessage('200') ?></div>
			</div>
			<span class="hero-yellow-circle"></span>
		</div>
		<div class="container">
			<div class="service-pros-block">
				<ol class="service-pros-list">
					<li>
						<strong><?= BaseController::getMessage('471') ?></strong>
						<p><?= BaseController::getMessage('472') ?></p>
					</li>
					<li>
						<strong><?= BaseController::getMessage('473') ?></strong>
						<p><?= BaseController::getMessage('474') ?></p>
					</li>
				</ol>
				<div class="service-pros-text">
					<p><b><?= BaseController::getMessage('475') ?></b></p>
					<div class="more">
						<a href="#equipment" class="button"><?= BaseController::getMessage('18') ?></a>
					</div>

				</div>
			</div>
		</div>
	</section>

    <section class="section service-miscount">
		<div class="container">
			<h2 class="line-title"><?= BaseController::getMessage('254') ?></h2>
			<div class="service-miscount__content">
				<div class="service-miscount__content-calculation">
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
                        <b>
							<?= BaseController::getMessage('261') ?>
							<span class="result-value"></span>
						</b>
					</div>
					<div class="income">
						<span><?= BaseController::getMessage('262') ?></span>
						<span class="income-value"></span>
						<span><?= BaseController::getMessage('264') ?></span>
					</div>
				</div>
				<div class="service-miscount__content-graphic">
					<div class="service-miscount__content-graphic__title">
						<strong><?= BaseController::getMessage('265') ?></strong>
						<p><?= BaseController::getMessage('267') ?></p>
					</div>
					<canvas id="income-graphic"></canvas>
				</div>
			</div>
		</div>
    </section>

	<div class="service-banner">
		<div class="left-banner-img">
			<img src="/img/services/man-1.png" alt="">
		</div>
		<div class="right-banner-img">
			<img src="/img/services/dron.png" alt="">
		</div>
		<div class="text-wrap">
			<p><?= BaseController::getMessage('486') ?></p>
			<a href="#connect" class="button consult-btn"><?= BaseController::getMessage('487') ?></a>
		</div>
	</div>
	<section class="equipment-section" id="equipment">
		<div class="container">
			<h2 class="line-title"><?= BaseController::getMessage('203') ?></h2>
			<div class="equipment-wrap">
				<div class="equipment-nav">
					<div class="nav-slide">
						<span><?= BaseController::getMessage('204') ?></span>
					</div>
					<div class="nav-slide" >
						<span><?= BaseController::getMessage('205') ?></span>
					</div>
					<div class="nav-slide">
						<span><?= BaseController::getMessage('206') ?></span>
					</div>
				</div>
				<div class="equipment-slider">
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('208') ?></p>
						</div>
						<div class="equipment-carousel equipment-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/SolarEdge.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('189') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/Huawei.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('191') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/Fronius.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('193') ?>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('210') ?></p>
						</div>
						<div class="equipment-carousel pannel-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/Jinko.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('194') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/Qcell.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('195') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/types/Longi.png')"></div>
									<div class="text">
										<?= BaseController::getMessage('198') ?>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('212') ?></p>
						</div>
						<div class="equipment-carousel equipment-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image" style="background-image: url('/img/services/2_3.png')"></div>
									<div class="text">
                                        <?= BaseController::getMessage('189') ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	</section>



<!--	<section class="section service-equipment" >
		<div class="service-equipment__content">
			<div class="service-equipment__content-image service-image">
				<img data-src="/img/services/2_1.jpg" alt="Обладнання"
					data-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
			</div>
			<div class="service-equipment__content-info">
				<div class="title">
					<h2><?/*= BaseController::getMessage('203') */?></h2>
				</div>
				<div class="tabs tabs-equipment">
					<div class="tabs__list">
						<div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/services/2_1.jpg" data-image-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
							<span><?/*= BaseController::getMessage('204') */?></span>
						</div>
						<div class="tabs__list-item" data-tab="2" data-image-desktop="/img/services/2_2.jpg" data-image-srcset="/img/services/2_2_m.jpg 1024w, /img/services/2_2.jpg 1366w">
							<span><?/*= BaseController::getMessage('205') */?></span>
						</div>
						<div class="tabs__list-item" data-tab="3" data-image-desktop="/img/services/2_3.jpg" data-image-srcset="/img/services/2_3_m.jpg 1024w, /img/services/2_3.jpg 1366w">
							<span><?/*= BaseController::getMessage('206') */?></span>
						</div>
					</div>
					<div class="tabs__content">
						<div class="tabs__content-item active" data-id="1">
							<div class="message"><?/*= BaseController::getMessage('208') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
						</div>
						<div class="tabs__content-item" data-id="2">
							<div class="message"><?/*= BaseController::getMessage('210') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
						</div>
						<div class="tabs__content-item" data-id="3">
							<div class="message"><?/*= BaseController::getMessage('212') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
						</div>
					</div>
				</div>
				<div class="slider-equipment">
					<div class="slider-equipment__list">
						<div class="slider-equipment__list-item"><span><?/*= BaseController::getMessage('204') */?></span></div>
						<div class="slider-equipment__list-item"><span><?/*= BaseController::getMessage('205') */?></span></div>
						<div class="slider-equipment__list-item"><span><?/*= BaseController::getMessage('206') */?></span></div>
					</div>
					<div class="slider-equipment__content">
						<div class="slider-equipment__content-item">
							<div class="message"><?/*= BaseController::getMessage('208') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
							<div class="image">
								<img data-src="/img/services/2_1.jpg" alt="Обладнання"
								data-srcset="/img/services/2_1_m.jpg 1024w, /img/services/2_1.jpg 1366w">
							</div>
						</div>
						<div class="slider-equipment__content-item">
							<div class="message"><?/*= BaseController::getMessage('210') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
							<div class="image">
								<img data-src="/img/services/2_2.jpg" alt="Обладнання"
								data-srcset="/img/services/2_2_m.jpg 1024w, /img/services/2_2.jpg 1366w">
							</div>
						</div>
						<div class="slider-equipment__content-item">
							<div class="message"><?/*= BaseController::getMessage('212') */?></div>
							<div class="more"><a class="btn btn-secondary" href="<?/*= \yii\helpers\Url::to(['/types-of-solar-power-plants#network']); */?>"><?/*= BaseController::getMessage('18') */?></a></div>
							<div class="image">
								<img data-src="/img/services/2_3.jpg" alt="Обладнання"
								data-srcset="/img/services/2_3_m.jpg 1024w, /img/services/2_3.jpg 1366w">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>-->
    <!-- start work -->
    <?= $this->render('../section/_work.php'); ?>
    <!-- end work -->

	<div class="service-types-section">
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
						<div class="image" style="background-image: url('/img/services/3_1.png')"></div>
					</div>
					<div class="service-slide">
						<div class="text-wrap">
							<p class="text"><?= BaseController::getMessage('278') ?></p>
						</div>
						<div class="image" style="background-image: url('/img/services/3_2.png')"></div>
					</div>
					<div class="service-slide">
						<div class="text-wrap">
							<p class="text"><?= BaseController::getMessage('280') ?></p>
						</div>
						<div class="image" style="background-image: url('/img/services/3_3.png')"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

<!--	<section class="section service-types">
		<div class="service-types__content">
			<div class="service-types__content-info">
				<div class="title">
					<h2><?/*= BaseController::getMessage('149') */?></h2>
				</div>
				<div class="tabs tabs-types">
					<div class="tabs__list">
						<div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/services/3_1.jpg"
							data-image-srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w"><span><?/*= BaseController::getMessage('269') */?></span></div>
						<div class="tabs__list-item" data-tab="2" data-image-desktop="/img/services/3_2.jpg" data-image-srcset="/img/services/3_2_m.jpg 1024w, /img/services/3_2.jpg 1366w"><span><?/*= BaseController::getMessage('270') */?></span></div>
						<div class="tabs__list-item" data-tab="3" data-image-desktop="/img/services/3_3.jpg" data-image-srcset="/img/services/3_3_m.jpg 1024w, /img/services/3_3.jpg 1366w"><span><?/*= BaseController::getMessage('271') */?></span></div>
					</div>
					<div class="tabs__content">
						<div class="tabs__content-item active" data-id="1"><?/*= BaseController::getMessage('273') */?></div>
						<div class="tabs__content-item" data-id="2"><?/*= BaseController::getMessage('278') */?></div>
						<div class="tabs__content-item" data-id="3"><?/*= BaseController::getMessage('280') */?></div>
					</div>
				</div>
				<div class="slider-types">
					<div class="slider-types__list">
						<div class="slider-types__list-item active" data-tab="1"><span><?/*= BaseController::getMessage('269') */?></span></div>
						<div class="slider-types__list-item" data-tab="2"><span><?/*= BaseController::getMessage('270') */?></span></div>
						<div class="slider-types__list-item" data-tab="3"><span><?/*= BaseController::getMessage('271') */?></span></div>
					</div>
					<div class="slider-types__content">
						<div class="slider-types__content-item active" data-id="1">
							<div class="message"><?/*= BaseController::getMessage('273') */?></div>
							<div class="image">
								<img data-src="/img/services/3_1.jpg" alt="Сервіс" srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="2">
							<div class="message"><?/*= BaseController::getMessage('278') */?></div>
							<div class="image">
								<img data-src="/img/services/3_2.jpg" alt="Сервіс" srcset="/img/services/3_2_m.jpg 1024w, /img/services/3_2.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="3">
							<div class="message"><?/*= BaseController::getMessage('280') */?></div>
							<div class="image">
								<img data-src="/img/services/3_3.jpg" alt="Сервіс" srcset="/img/services/3_3_m.jpg 1024w, /img/services/3_3.jpg 1366w">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="service-types__content-image service-image"><img data-src="/img/services/3_1.jpg" alt="Сервіс" data-srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w"></div>
		</div>
	</section>-->
    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->
	<section class="section connect" id="connect">
		<div class="container">
			<div class="connect__content">
				<div class="connect__content-title line-title">
					<strong class="h2"><span><?= BaseController::getMessage('364') ?></span></strong>
				</div>
                <form class="connect__content-question" id="question_form" data-post-url="index.html">
                    <div class="message">
                        <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                        <input class="custom-field" id="phone" type="text" id="phone" name="phone" placeholder="+380">
                        <input class="custom-field" type="text" id="email" name="email" placeholder="youremail@mail.com">
                        <textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
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

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Sunsay Energy",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('1') ?>",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= BaseController::getMessage('2') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"
        }]
    }
</script>
