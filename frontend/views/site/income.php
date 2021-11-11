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
					<picture>
						  <source media="(max-width: 767px)" srcset="/img/house-1-mob.webp" type="image/webp">
						  <source srcset="/img/house-1.webp" type="image/webp">
						  <source media="(max-width: 767px)" srcset="/img/house-1-mob.png">
						<img oncontextmenu="return false" src="/img/house-1.png" alt="Дом с панелями">
					</picture>
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

    <section class="service-miscount">
		<div class="container">
			<h2 class="line-title"><?= BaseController::getMessage('254') ?></h2>
			<div class="service-miscount__content">
                <?= BaseController::getMessage('728') ?>
			</div>
		</div>
    </section>
	<!-- start banner-->
    <?= $this->render('../section/_service-banner.php'); ?>
	<!-- end banner -->
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
									<div class="image background-lazy" style="background-image: url('//mg/loader.gif')" data-src='/img/types/SolarEdge.png'></div>
									<div class="text">
										<?= BaseController::getMessage('189') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Huawei.png'></div>
									<div class="text">
										<?= BaseController::getMessage('191') ?>
									</div>
								</div>
							</div>
							<div class="equipment-carousel-item">
								<div class="image-background">
									<div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Fronius.png'></div>
									<div class="text">
										<?= BaseController::getMessage('193') ?>
									</div>
								</div>
							</div>
						</div>
						<div class="logo-row">
							<ul>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/fronius.png" class="check-slick" alt="fronius"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/huawei.png" alt="huawei"></li>
								<li><img oncontextmenu="return false" data-src="/img/logos/invertor/solar-edge.png" alt="solar edge"></li>
							</ul>
						</div>
					</div>
					<div class="equipment-slide">
						<div class="equipment-text">
							<p><?= BaseController::getMessage('210') ?></p>
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
							<p><?= BaseController::getMessage('212') ?></p>
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
    <!-- start work -->
    <?= $this->render('../section/_work.php'); ?>
    <!-- end work -->

	<!-- start service slider -->
    <?= $this->render('../section/_service-slider.php'); ?>
    <!-- end service slider -->

    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->

    <?php if ($seo_data['article_body']) : ?>
        <div class="seo-article collapsed">
            <div class="container">
                <div class="seo-article-wrap">
                    <strong><?= strtoupper($seo_data['article_title'][Yii::$app->language]) ?></strong>
                    <?= $seo_data['article_body'][Yii::$app->language] ?>
                </div>
                <span class="seo-article-opener">
                        <i class="icon-angle-right"></i>
                    </span>
            </div>
        </div>
    <?php endif; ?>

	<!-- start connect -->
    <?= $this->render('../section/_connect-blue.php'); ?>
	<!-- end connect -->
</main>

    <script type = "text/javascript">
        var okupn = '<?= BaseController::getMessage('378').' ' ?>';
        var rokiv = '<?= " ".BaseController::getMessage('379') ?>';
        var rik = '<?= " ".BaseController::getMessage('380') ?>';
    </script>


<!--	--><?php
/*	$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
	$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
	$this->registerJsFile('/js/calc/income.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
	$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);
	*/?>


<script type="application/ld+json" defer>
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
            "name": "<?= BaseController::getMessage('2') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"
        }]
    }
</script>
