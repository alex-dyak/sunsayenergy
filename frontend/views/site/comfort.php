<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('1'),
];

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('4'),
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
                    <h1><?= BaseController::getMessage('87') ?></h1>
                </div>
                <div class="service-section-image">
					<picture>
						  <source media="(max-width: 767px)" srcset="/img/house-2-mob.webp" type="image/webp">
						  <source srcset="/img/house-2.webp" type="image/webp">
						  <source media="(max-width: 767px)" srcset="/img/house-2-mob.png">
						<img oncontextmenu="return false" src="/img/house-2.png" alt="Дом с панелями">
					</picture>
                </div>
                <div class="description"><?= BaseController::getMessage('132') ?></div>
            </div>
            <span class="hero-yellow-circle"></span>
        </div>
        <div class="container">
            <div class="service-pros-block">
                <ol class="service-pros-list">
                    <li>
                        <strong><?= BaseController::getMessage('481') ?></strong>
                        <p><?= BaseController::getMessage('482') ?></p>
                    </li>
                    <li>
                        <strong><?= BaseController::getMessage('483') ?></strong>
                        <p><?= BaseController::getMessage('484') ?></p>
                    </li>
                </ol>
                <div class="service-pros-text">
                    <p><b><?= BaseController::getMessage('485') ?></b></p>
                    <div class="more">
                        <a href="#equipment" class="button"><?= BaseController::getMessage('18') ?></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- end info -->
    <!-- start miscount -->
<!--    <section class="service-miscount">
		<div class="container">
			<h2 class="line-title"><?/*= BaseController::getMessage('116') */?></h2>
			<div class="service-miscount__content">
				<div class="service-miscount__content-calculation">
					<div class="description">
						<p><?/*= BaseController::getMessage('233') */?></p>
					</div>
					<div class="calculation-form">
						<div class="form-group">
							<label for="houseEnergy"><?/*= BaseController::getMessage('239') */?>
								<div>
									<input class="js-range-slider" id="comfort-houseEnergy" type="text" name="houseEnergy" data-min="150" data-max="1000" data-step="50" data-hide-min-max="true" data-from="400" data-thumbwidth="20">
								</div>
							</label>
						</div>
						<div class="form-group">
							<label for="days"><?/*= BaseController::getMessage('242') */?>
								<div>
									<input class="js-range-slider" id="comfort-days" type="text" name="days" data-min="1" data-max="10" data-step="1" data-hide-min-max="true" data-from="3" data-thumbwidth="20">
								</div>
							</label>
						</div>
					</div>
                    <div class="result">
                        <p><?/*= BaseController::getMessage('248') */?> <span><span class="result-value"></span></span></p>
                    </div>
                    <div class="income">
                        <p><?/*= BaseController::getMessage('251') */?> <b class="power-value"></b> <?/*= BaseController::getMessage('376') */?></p>
                    </div>
				</div>
				<div class="service-miscount__content-graphic">
					<div class="service-miscount__content-graphic__title">
						<strong><?/*= BaseController::getMessage('255') */?></strong>
						<p><?/*= BaseController::getMessage('256') */?></p>
					</div>
					<canvas id="comfort-graphic"></canvas>
				</div>
			</div>
		</div>
    </section>-->
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
						<span><?= BaseController::getMessage('148') ?></span>
					</div>
					<div class="nav-slide">
						<span><?= BaseController::getMessage('147') ?></span>
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
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/inv.png'></div>
									<div class="text">
										<?= BaseController::getMessage('226') ?>
									</div>
								</div>
							</div>
						</div>
						<div class="logo-row">
							<ul>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/fronius.png"  alt="fronius"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/huawei.png" alt="huawei"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/solar-edge.png" alt="solar edge"></li>
							</ul>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('156') ?></p>
						</div>
						<div class="equipment-carousel pannel-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Jinko.png'></div>
									<div class="text">
										<?= BaseController::getMessage('194') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Qcell.png'></div>
									<div class="text">
										<?= BaseController::getMessage('195') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Longi.png'></div>
									<div class="text">
										<?= BaseController::getMessage('198') ?>
									</div>
								</div>
							</div>
						</div>
						<div class="logo-row">
							<ul>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/ja-solar.png" alt="ja solar"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/longi-solar.png" alt="longi solar"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/canadian-solar.png" alt="canadian solar"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/sunpower.png" alt="sunpower"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/jinco-solar.png" alt="jinco solar"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/pannel/qcells.png" alt="qcells"></li>
							</ul>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('170') ?></p>
						</div>
						<div class="equipment-carousel battery-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Victron.png'></div>
									<div class="text">
                                        <?= BaseController::getMessage('237') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/EverExceed.png'></div>
									<div class="text">
                                        <?= BaseController::getMessage('243') ?>
									</div>
								</div>
							</div>
						</div>
						<div class="logo-row">
							<ul>
								<li><img oncontextmenu="return false" data-src="/img/logos/battery/lg.png" alt="LG"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/battery/byd.png" alt="BYD"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/battery/pylon-tech.png" alt="pylon tech"></li>
							</ul>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('164') ?></p>
						</div>
						<div class="equipment-carousel mount-slick">
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/services/solar-panel.png'></div>
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

    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->

    <?= $this->render('../section/_seo_article.php'); ?>

    <!-- start connect -->
    <?= $this->render('../section/_connect-blue.php'); ?>
    <!-- end connect -->
</main>
    <script type = "text/javascript">
        var dni = '<?= " ".BaseController::getMessage('381') ?>';
        var dniv = '<?= " ".BaseController::getMessage('382') ?>';
        var den = '<?= " ".BaseController::getMessage('383') ?>';
    </script>
<?php
/*$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/calc/comfort.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);*/
?>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "SUNSAY Energy",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('1') ?>",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= BaseController::getMessage('4') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"
        }]
    }
</script>
