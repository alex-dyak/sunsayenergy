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
    <section class="section service-info">
        <div class="service-info__content">
            <div class="service-info__content-info">
                <div class="complect"><?= BaseController::getMessage('73') ?></div>
                <div class="title">
                    <h1><?= BaseController::getMessage('74') ?></h1>
                </div>
                <div class="description"><?= BaseController::getMessage('75') ?></div>
                <div class="more"><a class="btn btn-primary" href="#equipment"><?= BaseController::getMessage('18') ?></a></div>
            </div>
            <div class="service-info__content-image">
                <img data-src="/img/reserve/1.jpg" alt="Комплект Дохід" data-srcset="/img/reserve/1_m.jpg 1024w, /img/reserve/1.jpg 1366w">
            </div>
        </div>
    </section>
    <!-- end info -->
    <!-- start miscount -->
    <section class="section service-miscount">
        <div class="service-miscount__content">
            <div class="service-miscount__content-calculation">
                <div class="title">
                    <h2><?= BaseController::getMessage('116') ?></h2>
                </div>
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
                <div class="service-miscount__content-icons__title"><?= BaseController::getMessage('146') ?></div>
                <div class="service-miscount__content-icons__list">
                    <div class="service-miscount__content-icons__list-item" data-icon="1">
                        <img data-src="/img/reserve/icons/1.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="2">
                        <img data-src="/img/reserve/icons/2.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="3">
                        <img data-src="/img/reserve/icons/3.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="4">
                        <img data-src="/img/reserve/icons/4.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="5">
                        <img data-src="/img/reserve/icons/5.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="6">
                        <img data-src="/img/reserve/icons/6.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="7">
                        <img data-src="/img/reserve/icons/7.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="8">
                        <img data-src="/img/reserve/icons/8.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="9">
                        <img data-src="/img/reserve/icons/9.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="10">
                        <img data-src="/img/reserve/icons/10.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="11">
                        <img data-src="/img/reserve/icons/11.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="12">
                        <img data-src="/img/reserve/icons/12.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="13">
                        <img data-src="/img/reserve/icons/13.svg" alt="">
                    </div>
                    <div class="service-miscount__content-icons__list-item" data-icon="14">
                        <img data-src="/img/reserve/icons/14.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end miscount -->
    <!-- start equipments -->
    <section class="section service-equipment" id="equipment">
        <div class="service-equipment__content">
            <div class="service-equipment__content-image service-image">
                <img data-src="/img/reserve/2_1.jpg" alt="Обладнання" data-srcset="/img/reserve/2_1_m.jpg 1024w, /img/reserve/2_1.jpg 1366w">
            </div>
            <div class="service-equipment__content-info">
                <div class="title">
                    <h2><?= BaseController::getMessage('91') ?></h2>
                </div>
                <div class="tabs tabs-equipment">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/reserve/2_1.jpg" data-image-srcset="/img/reserve/2_1_m.jpg 1024w, /img/reserve/2_1.jpg 1366w">
                            <span><?= BaseController::getMessage('92') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2" data-image-desktop="/img/reserve/2_2.jpg" data-image-srcset="/img/reserve/2_2_m.jpg 1024w, /img/reserve/2_2.jpg 1366w">
                            <span><?= BaseController::getMessage('93') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="3" data-image-desktop="/img/reserve/2_3.jpg" data-image-srcset="/img/reserve/2_3_m.jpg 1024w, /img/reserve/2_3.jpg 1366w">
                            <span><?= BaseController::getMessage('94') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="4" data-image-desktop="/img/reserve/2_4.jpg" data-image-srcset="/img/reserve/2_4_m.jpg 1024w, /img/reserve/2_4.jpg 1366w">
                            <span><?= BaseController::getMessage('95') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1">
                            <div class="message"><?= BaseController::getMessage('96') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="2">
                            <div class="message"><?= BaseController::getMessage('99') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="3">
                            <div class="message"><?= BaseController::getMessage('102') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                        <div class="tabs__content-item" data-id="4">
                            <div class="message"><?= BaseController::getMessage('103') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                    </div>
                </div>
                <div class="slider-equipment">
                    <div class="slider-equipment__list">
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('92') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('93') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('94') ?></span></div>
                        <div class="slider-equipment__list-item"><span><?= BaseController::getMessage('95') ?></span></div>
                    </div>
                    <div class="slider-equipment__content">
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('96') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/reserve/2_1.jpg" alt="Обладнання" data-srcset="/img/reserve/2_1_m.jpg 1024w, /img/reserve/2_1.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('99') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/reserve/2_2.jpg" alt="Обладнання" data-srcset="/img/reserve/2_2_m.jpg 1024w, /img/reserve/2_2.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('102') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/reserve/2_3.jpg" alt="Обладнання" data-srcset="/img/reserve/2_3_m.jpg 1024w, /img/reserve/2_3.jpg 1366w">
                            </div>
                        </div>
                        <div class="slider-equipment__content-item">
                            <div class="message"><?= BaseController::getMessage('103') ?></div>
                            <div class="more"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types-of-solar-power-plants#hybrid']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                            <div class="image">
                                <img data-src="/img/reserve/2_4.jpg" alt="Обладнання" data-srcset="/img/reserve/2_4_m.jpg 1024w, /img/reserve/2_4.jpg 1366w">
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
                        <div class="tabs__list-item active" data-tab="1" data-image-desktop="/img/reserve/3_1.jpg"
                            data-image-srcset="/img/reserve/3_1_m.jpg 1024w, /img/reserve/3_1.jpg 1366w"><span><?= BaseController::getMessage('151') ?></span></div>
                        <div class="tabs__list-item" data-tab="2" data-image-desktop="/img/reserve/3_2.jpg"
                            data-image-srcset="/img/reserve/3_2_m.jpg 1024w, /img/reserve/3_2.jpg 1366w"><span><?= BaseController::getMessage('154') ?></span></div>
                        <div class="tabs__list-item" data-tab="3" data-image-desktop="/img/reserve/3_3.jpg"
                            data-image-srcset="/img/reserve/3_3_m.jpg 1024w, /img/reserve/3_3.jpg 1366w"><span><?= BaseController::getMessage('158') ?></span></div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1"><?= BaseController::getMessage('166') ?></div>
                        <div class="tabs__content-item" data-id="2"><?= BaseController::getMessage('169') ?></div>
                        <div class="tabs__content-item" data-id="3"><?= BaseController::getMessage('172') ?></div>
                    </div>
                </div>
                <!-- end desktop service -->
                <!-- start mobile service -->
                <div class="slider-types">
					<div class="slider-types__list">
						<div class="slider-types__list-item active" data-tab="1"><span><?= BaseController::getMessage('151') ?></span></div>
						<div class="slider-types__list-item" data-tab="2"><span><?= BaseController::getMessage('154') ?></span></div>
						<div class="slider-types__list-item" data-tab="3"><span><?= BaseController::getMessage('158') ?></span></div>
					</div>
					<div class="slider-types__content">
						<div class="slider-types__content-item active" data-id="1">
							<div class="message"><?= BaseController::getMessage('166') ?></div>
							<div class="image">
								<img data-src="/img/services/3_1.jpg" alt="Сервіс" data-srcset="/img/services/3_1_m.jpg 1024w, /img/services/3_1.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="2">
							<div class="message"><?= BaseController::getMessage('169') ?></div>
							<div class="image">
								<img data-src="/img/services/3_2.jpg" alt="Сервіс" data-srcset="/img/services/3_2_m.jpg 1024w, /img/services/3_2.jpg 1366w">
							</div>
						</div>
						<div class="slider-types__content-item" data-id="3">
							<div class="message"><?= BaseController::getMessage('172') ?></div>
							<div class="image">
								<img data-src="/img/services/3_3.jpg" alt="Сервіс" data-srcset="/img/services/3_3_m.jpg 1024w, /img/services/3_3.jpg 1366w">
							</div>
						</div>
					</div>
				</div>
                <!-- end mobile service -->
            </div>
            <div class="service-types__content-image service-image"><img data-src="/img/reserve/3_1.jpg" alt="Сервіс" data-srcset="/img/reserve/3_1_m.jpg 1024w, /img/reserve/3_1.jpg 1366w"></div>
        </div>
    </section>
    <!-- end service -->
    <!-- start example -->
    <?= $this->render('../section/_example.php');?>
    <!-- end example -->
    <!-- start review -->
    <?= $this->render('../section/_review.php', compact('reviews')); ?>
    <!-- end review -->
    <!-- start connect -->
    <section class="section connect" id="connect">
		<div class="connect__content">
			<div class="connect__content-title line-title">
				<h2><span><?= BaseController::getMessage('364') ?></span></h2>
			</div>
			<form class="connect__content-question" data-post-url="index.html">
				<div class="message">
					<input class="custom-field" type="text" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
					<input class="custom-field" id="phone" type="text" name="phone" placeholder="+380">
					<input class="custom-field" type="text" name="email" placeholder="youremail@mail.com">
					<textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
					<div class="connect__content-button">
						<button class="btn connect-btn btn-primary"><?= BaseController::getMessage('14') ?></button>
						<div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
					</div>
				</div>
			</form>
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