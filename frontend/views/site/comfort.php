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
        <div class="hero-block">
            <div class="container">
                <div class="service-section-info">
                    <div class="title">
                        <h1><?= BaseController::getMessage('87') ?></h1>
                    </div>
                    <div class="service-section-image square-img">
                        <img src="/img/house-2.png" alt="<?= BaseController::getMessage('87') ?>" srcset="/img/house-2-mob.png 1024w, /img/house-2.png 1366w">
                    </div>
                    <div class="description"><?= BaseController::getMessage('132') ?></div>
                    <span class="hero-yellow-circle"></span>
                </div>
            </div>
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
    <section class="section service-miscount">
		<div class="container">
			<div class="service-miscount__content">
				<div class="service-miscount__content-calculation">
					<div class="title">
						<h2><?= BaseController::getMessage('116') ?></h2>
					</div>
					<div class="description"><?= BaseController::getMessage('233') ?>
					</div>
					<div class="calculation-form">
						<div class="form-group">
							<label for="houseEnergy"><?= BaseController::getMessage('239') ?>
								<div>
									<input class="js-range-slider" id="comfort-houseEnergy" type="text" name="houseEnergy"
										   data-min="150" data-max="1000" data-step="50" data-hide-min-max="true"
										   data-from="400" data-thumbwidth="20">
								</div>
							</label>
						</div>
						<div class="form-group">
							<label for="days"><?= BaseController::getMessage('242') ?>
								<div>
									<input class="js-range-slider" id="comfort-days" type="text" name="days" data-min="1"
										   data-max="10" data-step="1" data-hide-min-max="true" data-from="3"
										   data-thumbwidth="20">
								</div>
							</label>
						</div>
					</div>
				</div>
				<div class="service-miscount__content-graphic">
					<span class="service-miscount__content-graphic__title"><?= BaseController::getMessage('255') ?><p><?= BaseController::getMessage('256') ?></p></span>
					<canvas id="comfort-graphic"></canvas>
				</div>
			</div>
            <div class="grafic-info">
                <div class="result">
                    <?= BaseController::getMessage('248') ?> <span><span class="result-value"></span></span>
                </div>
                <div class="income">
                    <?= BaseController::getMessage('251') ?> <span class="power-value"></span> <?= BaseController::getMessage('376') ?>
                </div>
            </div>
		</div>

    </section>
    <!-- end miscount -->
    <!-- start equipments -->
    <section class="section service-equipment" id="equipment">
        <div class="service-equipment__content">
            <div class="service-equipment__content-image service-image">
                <img data-src="/img/comfort/2_1.jpg" alt="Обладнання"
                     data-srcset="/img/comfort/2_1_m.jpg 1024w, /img/comfort/2_1.jpg 1366w">
            </div>
            <div class="service-equipment__content-info">
                <div class="title">
                    <h2><?= BaseController::getMessage('139') ?></h2>
                </div>
                <div class="tabs tabs-equipment">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/comfort/2_1.jpg"
                             data-image-srcset="/img/comfort/2_1_m.jpg 1024w, /img/comfort/2_1.jpg 1366w">
                            <span><?= BaseController::getMessage('142') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2" data-image-desktop="/img/comfort/2_2.jpg"
                             data-image-srcset="/img/comfort/2_2_m.jpg 1024w, /img/comfort/2_2.jpg 1366w">
                            <span><?= BaseController::getMessage('145') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="3" data-image-desktop="/img/comfort/2_3.jpg"
                             data-image-srcset="/img/comfort/2_3_m.jpg 1024w, /img/comfort/2_3.jpg 1366w">
                            <span><?= BaseController::getMessage('147') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="4" data-image-desktop="/img/comfort/2_4.jpg"
                             data-image-srcset="/img/comfort/2_4_m.jpg 1024w, /img/comfort/2_4.jpg 1366w">
                            <span><?= BaseController::getMessage('148') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1">
                            <div class="message"><?= BaseController::getMessage('150') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="2">
                            <div class="message"><?= BaseController::getMessage('156') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="3">
                            <div class="message"><?= BaseController::getMessage('164') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="4">
                            <div class="message"><?= BaseController::getMessage('170') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                    </div>
                </div>
                <div class="slider-equipment">
                    <div class="slider-equipment__list">
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('305') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('309') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('310') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('311') ?></span></div>
                    </div>
                    <div class="slider-equipment__content">
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('150') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/comfort/2_1.jpg" alt="Обладнання"
                                     data-srcset="/img/comfort/2_1_m.jpg 1024w, /img/comfort/2_1.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('156') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/comfort/2_2.jpg" alt="Обладнання"
                                     data-srcset="/img/comfort/2_2_m.jpg 1024w, /img/comfort/2_2.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('164') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/comfort/2_3.jpg" alt="Обладнання"
                                     data-srcset="/img/comfort/2_3_m.jpg 1024w, /img/comfort/2_3.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('170') ?>
                            </div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#standalone']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/comfort/2_4.jpg" alt="Обладнання"
                                     data-srcset="/img/comfort/2_4_m.jpg 1024w, /img/comfort/2_4.jpg 1366w">
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
    <!-- start service -->
    <section class="section service-types">
        <div class="service-types__content">
            <div class="service-types__content-info">
                <div class="title">
                    <h2><?= BaseController::getMessage('149') ?></h2>
                </div>
                <!-- start desktop service -->
                <div class="tabs tabs-types">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/comfort/3_1.jpg"
                             data-image-srcset="/img/comfort/3_1_m.jpg 1024w, /img/comfort/3_1.jpg 1366w"><span><?= BaseController::getMessage('259') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2" data-image-desktop="/img/comfort/3_2.jpg"
                             data-image-srcset="/img/comfort/3_2_m.jpg 1024w, /img/comfort/3_2.jpg 1366w">
                            <span><?= BaseController::getMessage('275') ?></span></div>
                        <div class="tabs__list-item" data-tab="3" data-image-desktop="/img/comfort/3_3.jpg"
                             data-image-srcset="/img/comfort/3_3_m.jpg 1024w, /img/comfort/3_3.jpg 1366w"><span><?= BaseController::getMessage('263') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1"><?= BaseController::getMessage('266') ?>
                        </div>
                        <div class="tabs__content-item" data-id="2"><?= BaseController::getMessage('268') ?>
                        </div>
                        <div class="tabs__content-item" data-id="3"><?= BaseController::getMessage('272') ?>
                        </div>
                    </div>
                </div>
                <!-- end desktop service -->
                <!-- start mobile service -->
                <div class="slider-types">
                    <div class="slider-types__list">
                        <div class="slider-types__list-item active" data-tab="1"><span><?= BaseController::getMessage('274') ?></span></div>
                        <div class="slider-types__list-item" data-tab="2"><span><?= BaseController::getMessage('275') ?></span></div>
                        <div class="slider-types__list-item" data-tab="3"><span><?= BaseController::getMessage('276') ?></span></div>
                    </div>
                    <div class="slider-types__content">
                        <div class="slider-types__content-item active" data-id="1">
                            <div class="message"><?= BaseController::getMessage('277') ?>
                            </div>
                            <div class="image">
                                <img data-src="/img/comfort/3_1.jpg" alt="Сервіс"
                                     data-srcset="/img/comfort/3_1_m.jpg 1024w, /img/comfort/3_1.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-types__content-item" data-id="2">
                            <div class="message"><?= BaseController::getMessage('279') ?>
                            </div>
                            <div class="image">
                                <img data-src="/img/comfort/3_2.jpg" alt="Сервіс"
                                     data-srcset="/img/comfort/3_2_m.jpg 1024w, /img/comfort/3_2.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-types__content-item" data-id="3">
                            <div class="message"><?= BaseController::getMessage('281') ?>
                            </div>
                            <div class="image">
                                <img data-src="/img/comfort/3_3.jpg" alt="Сервіс"
                                     data-srcset="/img/comfort/3_3_m.jpg 1024w, /img/comfort/3_3.jpg 1366w">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end mobile service -->
            </div>
            <div class="service-types__content-image service-image"><img data-src="/img/comfort/3_1.jpg" alt="Сервіс"
                                                                         data-srcset="/img/comfort/3_1_m.jpg 1024w, /img/comfort/3_1.jpg 1366w">
            </div>
        </div>
    </section>
    <!-- end service -->
    <!-- start example -->
    <?= $this->render('../section/_example.php'); ?>
    <!-- end example -->
    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->
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
    <script type = "text/javascript">
        var dni = '<?= " ".BaseController::getMessage('381') ?>';
        var dniv = '<?= " ".BaseController::getMessage('382') ?>';
        var den = '<?= " ".BaseController::getMessage('383') ?>';
    </script>
<?php
$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END]); 
$this->registerJsFile('/js/calc/comfort.js', ['position' => \yii\web\View::POS_END]); 
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
            "name": "<?= BaseController::getMessage('4') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"
        }]
    }
</script>
