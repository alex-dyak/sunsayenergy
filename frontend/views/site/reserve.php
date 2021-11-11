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
					<picture>
						  <source media="(max-width: 767px)" srcset="/img/house-3-mob.webp" type="image/webp">
						  <source srcset="/img/house-3.webp" type="image/webp">
						  <source media="(max-width: 767px)" srcset="/img/house-3-mob.png">
						<img oncontextmenu="return false" src="/img/house-3.png" alt="Дом с панелями">
					</picture>
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
                                <li><img oncontextmenu="return false" data-src="/img/logos/invertor/fronius.png" class="check-slick" alt="fronius"></li>
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
                                <li><img oncontextmenu="return false" src="/img/logos/battery/byd.png" alt="BYD"></li>
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

    <?= $this->render('../section/_seo_article.php', compact('seo_data')); ?>

    <!-- start connect -->
    <?= $this->render('../section/_connect-blue.php'); ?>
    <!-- end connect -->
</main>

<?php
/*$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/calc/reserve.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
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
            "name": "<?= BaseController::getMessage('3') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']) ?>"
        }]
    }
</script>
