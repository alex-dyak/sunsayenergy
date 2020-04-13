<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('1'),
];

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('3'),
];
?>
    <main class="page-container">
		<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
		</div>
    <!-- start info -->
    <section class="service-section">
        <div class="container">
            <div class="hero-block">
                <div class="title">
					<h1><?= BaseController::getMessage('74') ?></h1>
				</div>
				<div class="service-section-image">
					<img src="/img/house-3.png" alt="<?= BaseController::getMessage('74') ?>" srcset="/img/house-3-mob.png 1024w, /img/house-3.png 1366w">
				</div>
				<div class="description"><?= BaseController::getMessage('75') ?></div>
			</div>
            <span class="hero-yellow-circle"></span>
        </div>
        <div class="container">
            <div class="service-pros-block">
                <ol class="service-pros-list">
                    <li>
                        <strong><?= BaseController::getMessage('476') ?></strong>
                        <p><?= BaseController::getMessage('477') ?></p>
                    </li>
                    <li>
                        <strong><?= BaseController::getMessage('478') ?></strong>
                        <p><?= BaseController::getMessage('479') ?></p>
                    </li>
                </ol>
                <div class="service-pros-text">
                    <p><b><?= BaseController::getMessage('480') ?></b></p>
                    <div class="more">
                        <a href="#equipment" class="button"><?= BaseController::getMessage('18') ?></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- end info -->
    <!-- start miscount -->
    <section class="service-miscount miscount-icon">
		<div class="container">
			<h2 class="line-title"><?= BaseController::getMessage('116') ?></h2>
			<div class="service-miscount__content">
				<div class="service-miscount__content-calculation">
					<div class="description"><?= BaseController::getMessage('121') ?></div>
					<div class="calculation-form">
						<div class="form-group">
							<label for="houseEnergy"><?= BaseController::getMessage('122') ?>
								<div>
									<input class="js-range-slider" id="reserve-houseEnergy" type="text" name="houseEnergy" data-min="0" data-max="5000" data-step="100" data-hide-min-max="true" data-from="2000" data-thumbwidth="20">
								</div>
							</label>
						</div>
						<div class="form-group">
							<label for="timeReserv"><?= BaseController::getMessage('124') ?>
								<div>
									<input class="js-range-slider" id="reserve-timeReserv" type="text" name="timeReserv" data-min="1" data-max="12" data-step="1" data-hide-min-max="true" data-from="2" data-thumbwidth="20">
								</div>
							</label>
						</div>
						<div class="form-group">
							<label for="powerSes"><?= BaseController::getMessage('125') ?>
								<div>
									<input class="js-range-slider" id="reserve-powerSes" type="text" name="powerSes" data-min="5" data-max="35" data-step="2.5" data-hide-min-max="true" data-from="10" data-thumbwidth="20">
								</div>
							</label>
						</div>
						<div class="form-group">
							<label for="powerReserv"><?= BaseController::getMessage('127') ?>
								<div>
									<input class="js-range-slider" id="reserve-powerReserv" type="text" name="powerReserv" data-min="3" data-max="15" data-hide-min-max="true" data-values="3,5,8,10,15" data-thumbwidth="20">
								</div>
							</label>
						</div>
					</div>
					<div class="result">
                        <?= BaseController::getMessage('129') ?> <span><span class="result-value"></span></span>
					</div>
					<div class="income">
                        <?= BaseController::getMessage('137') ?><span class="income-value"></span> <?= BaseController::getMessage('144') ?>
					</div>
				</div>
				<div class="service-miscount__content-icons">
					<strong class="service-miscount__content-icons__title"><?= BaseController::getMessage('146') ?></strong>
					<div class="service-miscount__content-icons__list">
						<div class="service-miscount__content-icons__list-item" data-icon="1">
							<i class="icon-1"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="2">
							<i class="icon-2"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="3">
							<i class="icon-3"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="4">
							<i class="icon-4"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="5">
							<i class="icon-5"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="6">
							<i class="icon-6"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="7">
							<i class="icon-7"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="8">
							<i class="icon-8"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="9">
							<i class="icon-9"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="10">
							<i class="icon-10"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="11">
							<i class="icon-11"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="12">
							<i class="icon-12"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="13">
							<i class="icon-13"></i>
						</div>
						<div class="service-miscount__content-icons__list-item" data-icon="14">
							<i class="icon-14"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
    <!-- end miscount -->
		<!-- start banner-->
        <?= $this->render('../section/_service-banner.php'); ?>
		<!-- end banner -->

		<!-- start equipments -->
		<section class="equipment-section" id="equipment">
			<div class="container">
				<h2 class="line-title"><?= BaseController::getMessage('139') ?></h2>
				<div class="equipment-wrap">
					<div class="equipment-nav">
						<div class="nav-slide">
							<span><?= BaseController::getMessage('142') ?></span>
						</div>
						<div class="nav-slide" >
							<span><?= BaseController::getMessage('145') ?></span>
						</div>
						<div class="nav-slide">
							<span><?= BaseController::getMessage('147') ?></span>
						</div>
						<div class="nav-slide">
							<span><?= BaseController::getMessage('148') ?></span>
						</div>
					</div>
					<div class="equipment-slider">
						<div class="equipment-slide">
							<div class="equipment-text">
								<p><?= BaseController::getMessage('150') ?></p>
							</div>
							<div class="equipment-carousel equipment-slick">
								<div class="equipment-carousel-item">
									<div class="image-background">
										<div class="image" style="background-image: url('/img/types/inv.png')"></div>
										<div class="text">
                                            <?= BaseController::getMessage('226') ?>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="equipment-slide">
							<div class="equipment-text">
								<p><?= BaseController::getMessage('156') ?></p>
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
								<p><?= BaseController::getMessage('164') ?></p>
							</div>
							<div class="equipment-carousel mount-slick">
								<div class="equipment-carousel-item">
									<div class="image-background">
										<div class="image" style="background-image: url('/img/services/solar-panel.png')"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="equipment-slide">
							<div class="equipment-text">
								<p><?= BaseController::getMessage('170') ?></p>
							</div>
							<div class="equipment-carousel battery-slick">
								<div class="equipment-carousel-item">
									<div class="image-background">
										<div class="image" style="background-image: url('/img/types/Victron.png')"></div>
										<div class="text">
                                            <?= BaseController::getMessage('237') ?>
										</div>
									</div>
								</div>
								<div class="equipment-carousel-item">
									<div class="image-background">
										<div class="image" style="background-image: url('/img/types/EverExceed.png')"></div>
										<div class="text">
                                            <?= BaseController::getMessage('243') ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		<!-- end equipments -->

		<!-- start work -->
        <?= $this->render('../section/_work.php'); ?>
		<!-- end work -->

		<!-- start service slider -->
        <?= $this->render('../section/_service-slider.php'); ?>
		<!-- end service slider -->
    <!-- start connect -->
    <section class="section connect" id="connect">
		<div class="container">
			<div class="connect__content">
				<div class="connect__content-title line-title">
					<strong class="h2"><span><?= BaseController::getMessage('364') ?></span></strong>
				</div>
                <form class="connect__content-question" id="question_form" data-post-url="index.html">
                    <div class="message">
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
    <!-- end connect -->
</main>

<?php
$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/calc/reserve.js', ['position' => \yii\web\View::POS_END]);
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
            "name": "<?= BaseController::getMessage('3') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']) ?>"
        }]
    }
</script>
