<?php use frontend\controllers\BaseController; ?>

    <main class="page-container">

        <!-- start top information -->
        <section class="section electrostation">
            <div class="electrostation__info">
                <div class="electrostation__title">
                    <h1><?= BaseController::getMessage('16') ?></h1>
                </div>
                <div class="electrostation__description">
                    <?= BaseController::getMessage('17') ?>
                </div>
                <div class="electrostation__button"><a class="btn btn-primary"
                                                       href="#info"><?= BaseController::getMessage('18') ?></a></div>
            </div>
            <div class="electrostation__contact">
                <div class="phone"><a class="binct-phone-number-1" href="tel:<?= $contacts->phone ?>" target="_blank"><?= $contacts->phone ?></a></div>
                <div class="address"><?= $contacts->address ?></div>
            </div>
            <div class="electrostation__switch">
			<a <?= (Yii::$app->language=='ua')?'class="active"':''   ?> href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a>
			<!--<a <?/*= (Yii::$app->language=='en')?'class="active"':''   */?>  href="/en/<?/*= \frontend\components\UrlTrimLang::widget() */?>">EN</a>-->
			<a <?= (Yii::$app->language=='ru')?'class="active"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a>
		</div>
            <div class="electrostation__house">
                <svg id="electroBack" width="949" height="1239.6">
                    <path id="electroFrom" fill="#ffd100" fill-rule="evenodd" d="M1718.4,0l-948,0"></path>
                </svg>
                <picture>
                      <source media="(min-width: 800px)" data-srcset="/img/header_house_1100w.webp" type="image/webp">
                      <source media="(max-width: 799px)" data-srcset="/img/header_house_350w.webp" type="image/webp">
                      <source media="(min-width: 800px)" data-srcset="/img/header_house_1100w.png" type="image/png">
                      <source media="(max-width: 799px)" data-srcset="/img/header_house_350w.png" type="image/png">
                      <!-- <source data-srcset="/img/header_house_350w.webp 440w, /img/header_house_1100w.webp 900w" sizes="90w" type="image/webp" >
                      <source data-srcset="/img/header_house_350w.png 350w, /img/header_house_1100w.png 1100w" sizes="90w" type="image/png">  -->
                      <img class="electrostation__house-img" data-src="/img/header_house_1100w.png" alt="">
                    </picture>
                
            </div>
        </section>
        <!-- end top information -->

        <!-- start info -->
        <section class="section info" id="info">
            <div class="info__list">
                <div class="info__list-item">
                    <h2 class="title"><span><span> <?= BaseController::getMessage('19') ?></span></span></h2>
                    <div class="description">
                        <?= BaseController::getMessage('20') ?>
                    </div>
                    <div class="image"><img data-src="/img/info/1.jpg" alt="Незалежність"></div>
                </div>
                <div class="info__list-item">
                    <h2 class="title"><span><span> <?= BaseController::getMessage('21') ?></span></span></h2>
                    <div class="description"><?= BaseController::getMessage('22') ?>
                    </div>
                    <div class="image"><img data-src="/img/info/2.jpg" alt="Заробіток"></div>
                </div>
                <div class="info__list-item">
                    <h2 class="title"><span><span><?= BaseController::getMessage('23') ?></span></span></h2>
                    <div class="description"><?= BaseController::getMessage('24') ?>
                    </div>
                    <div class="image"><img data-src="/img/info/3.jpg" alt="Іноваційність"></div>
                </div>
            </div>
        </section>
        <!-- end info -->

        <!-- start type -->
        <section class="section type">
            <picture>
              <source media="(min-width: 500px)" data-srcset="/img/type.jpg" type="image/jpg">
              <source media="(max-width: 499px)" data-srcset="/img/type_m.jpg" type="image/jpg">
              <img class="section__type--image" data-src="/img/type.jpg">
            </picture>
            <div class="type__content">
                <div class="type__content-title">
                    <h2><?= BaseController::getMessage('25') ?></h2>
                </div>
                <div class="type__content-list">
                    <div class="type__content-list__item" data-type="standalone">
                        <div class="type-item__background">
                            <svg id="standaloneBack">
                                <path id="standalonePath" fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                      d="M151.1,197c0,0,2.4-52.5,107.5-49.4c50,1.5,125.5,29.3,113.8,63.6s-53.3,49.6-106.2,49.3 C213.3,260.2,143.9,245.1,151.1,197z"></path>
                            </svg>
                        </div>
                        <div class="type-item__content">
                            <div class="type-item__content-title"><span><span><?= BaseController::getMessage('26') ?></span></span></div>
                            <div class="type-item__content-text"><?= BaseController::getMessage('27') ?>
                            </div>
                            <div class="type-item__content-button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                    </div>
                    <div class="type__content-list__item" data-type="network">
                        <div class="type-item__background">
                            <svg id="networkBack">
                                <path id="networkPath" fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                      d="M110.2,201c6.8-21,31.7-40.9,103-48c63.9-6.3,113.7,20,116,59c1.5,25.3-30.2,48.9-92,51 C157,265.7,95.4,246.6,110.2,201L110.2,201"></path>
                            </svg>
                        </div>
                        <div class="type-item__content">
                            <div class="type-item__content-title"><span><span><?= BaseController::getMessage('28') ?></span></span></div>
                            <div class="type-item__content-text"><?= BaseController::getMessage('29') ?>
                            </div>
                            <div class="type-item__content-button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                    </div>
                    <div class="type__content-list__item" data-type="hybrid">
                        <div class="type-item__background">
                            <svg id="hybridBack">
                                <path id="hybridPath" fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                      d="M329.1,208.1c0.5,29-31.5,56.2-105,55c-73.5-1.2-140.4-29.2-107-78 c23.9-34.9,78.4-35.4,122-31C275.9,157.9,328.5,171.5,329.1,208.1z"></path>
                            </svg>
                        </div>
                        <div class="type-item__content">
                            <div class="type-item__content-title"><span><span><?= BaseController::getMessage('30') ?></span></span></div>
                            <div class="type-item__content-text"><?= BaseController::getMessage('31') ?>
                            </div>
                            <div class="type-item__content-button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/types']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end type -->

        <!-- start work -->
        <?= $this->render('../section/_work.php'); ?>
        <!-- end work -->
        <!-- start rate -->
        <section class="section rate">
            <div class="rate__content">
                <div class="rate__content-image"><img data-srcset="/img/m_green.jpg 1024w, /img/green.jpg 1366w"
                                                      data-src="/img/green.jpg" alt="Зелений тариф"></div>
                <div class="rate__content-info">
                    <h2 class="title"><?= BaseController::getMessage('54') ?></h2>
                    <div class="description"><?= BaseController::getMessage('55') ?>
                    </div>
                    <div class="button"><a class="btn btn-secondary" href="<?= \yii\helpers\Url::to(['/green']); ?>"><?= BaseController::getMessage('18') ?></a></div>
                </div>
            </div>
        </section>
        <!-- end rate -->
        <!-- start complex -->
        <?= $this->render('../section/_complex.php'); ?>
        <!-- end complex -->
        <?= $this->render('../section/_example.php'); ?>
        <!-- start review -->
        <?= $this->render('../section/_review.php', compact('reviews')); ?>
        <!-- end review -->
        <!-- start connect -->
        <?= $this->render('../section/_connect.php'); ?>
        <!-- end connect -->
    </main>

    

<?php
// $this->registerJsFile('/js/index.js', ['position' => \yii\web\View::POS_END]);
$this->registerJsFile('/js/onload/index.js', ['position' => \yii\web\View::POS_END]);
?>