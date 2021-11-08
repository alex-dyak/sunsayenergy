<?php use frontend\controllers\BaseController; ?>

    <main>
         <!-- start info -->
        <section class="new-electrostation-section">
            <div class="container">

                <h3 class="new-subtitle">
                    <?= strtoupper(BaseController::getMessage('731')) ?>               
                </h3>
                <div class="new-bg-block-right"></div>
                <div class="new-title-wrapper">
                    <div class="new-title-blok">
                        <div class="new-title-inner">
                            <a href="https://sunsayenergy.com/commercial_stations">
                                <h2 class="new-title-plant">
                                    <?= strtoupper(BaseController::getMessage('732')) ?>                      
                                </h2>
                            </a>
                            <a href=" https://sunsayenergy.com/dohod-6000-zelyonyi-tarif">
                                <h2 class="new-title-house">
                                    <?= strtoupper(BaseController::getMessage('733')) ?>                     
                                </h2>
                            </a>
                        </div>
                    </div>                    
                </div>

                <div class="new-bg-block-left"></div>
                <div class="button__center new-button__center">
                    <a class="button btn-lg consult-btn station-types__button new-consult-btn" href="#connect"><?= BaseController::getMessage('402') ?></a>
                </div>
            </div>
        </section>

        <section class="new-possibilities">
            <div class="container">
                <div class="title-block title-block__possibility">
                    <h2 class="line-title"><?= strtoupper(BaseController::getMessage('734')) ?></h2>
                    <div class="subtitle subtitle__possibility">
                        <p><?= BaseController::getMessage('735') ?></p>
                    </div>
                    <div class="subtitle__slider">
                        <p><?= strtoupper(BaseController::getMessage('736')) ?>:</p>
                    </div>
                </div>
                <ul class="possibility-list-slider">
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/Vector1.png" alt="">
                                </div>
                                <p class="possibility-text"><?= BaseController::getMessage('737') ?></p>
                            </div>
                        </li>
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/Vector2.png" alt="">
                                </div>
                                <p class="possibility-text"><?= BaseController::getMessage('738') ?></p>
                            </div>
                        </li>                        
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/Vector1.png" alt="">
                                </div>
                                <p class="possibility-text"><?= BaseController::getMessage('739') ?></p>
                            </div>
                        </li>                        
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/Vector2.png" alt="">
                                </div>
                                <p class="possibility-text"><?= BaseController::getMessage('740') ?></p>
                            </div>
                        </li>                        
                    </div>
                </ul>

            </div>
        </section>

        <section class="station-types">
            <div class="container">
                <div class="station-types__wrap">
                    <div class="station-types__content">
                        <div class="station-types__text">
                            <p><?= strtoupper(BaseController::getMessage('741')) ?></p>
                        </div>
                        <div class="station-types__inner">
                            <a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>" class="station-types__item"><?= BaseController::getMessage('742') ?></a>
                            <a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>" class="station-types__item"><?= BaseController::getMessage('743') ?></a>
                            <a href="<?= \yii\helpers\Url::to(['/commercial_stations']); ?>" class="station-types__item station-types__item-color"><?= BaseController::getMessage('744') ?></a>
                        </div>
                        <div class="station-types__text">
                            <p><?= strtoupper(BaseController::getMessage('745')) ?></p>
                        </div>
                        <div class="button__center">
                            <a class="button btn-lg consult-btn station-types__button new-consult-btn" href="#connect"><?= BaseController::getMessage('402') ?></a>
                        </div>
                    </div>
                    <div class="station-types__img-mob"></div>
                    <div class="station-types__img">
                        <img oncontextmenu="return false" data-src="/img/homepage/n-panels4.png" alt="">
                    </div>
                </div>
            </div>
        </section>
       
            <?= $this->render('../section/_video.php', compact('videos')); ?>

        <section class="new-pros-section pros-section">
            <div class="container">
                <div class="title-block">
                    <h2 class="line-title new-line-title"><?= BaseController::getMessage('428') ?></h2>
                    <div class="subtitle new-pros-section-subtitle">
                        <p><?= BaseController::getMessage('430') ?></p>
                    </div>
                </div>

                <div class="project_slider_overlay">
                    <ul class="pros-list-slider">
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-1.jpg" alt="<?= BaseController::getMessage('431') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('431') ?></strong>                        
                                </div>
                                <p><?= BaseController::getMessage('432') ?></p>
                            </li>                        
                        </div>
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-2.jpg" alt="<?= BaseController::getMessage('433') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('433') ?></strong>
                                </div>
                                <p><?= BaseController::getMessage('434') ?></p>
                            </li>                        
                        </div>
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-3.jpg" alt="<?= BaseController::getMessage('435') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('435') ?></strong>
                                </div>
                                <p><?= BaseController::getMessage('436') ?></p>
                            </li>                        
                        </div>
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-4.jpg" alt="<?= BaseController::getMessage('437') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('437') ?></strong>
                                </div>
                                <p><?= BaseController::getMessage('438') ?></p>
                            </li>                      
                        </div>
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-5.jpg" alt="<?= BaseController::getMessage('439') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('439') ?></strong>
                                </div>
                                <p><?= BaseController::getMessage('440') ?></p>
                            </li>                      
                        </div>
                        <div class="pros-list-item">
                            <li>
                                <div class="img-round">
                                    <img oncontextmenu="return false" data-src="/img/pros-block/pros-6.jpg" alt="<?= BaseController::getMessage('441') ?>">
                                </div>
                                <div class="new-pros-subtitle">
                                    <strong class="new-pros-title"><?= BaseController::getMessage('441') ?></strong>
                                </div>
                                <p><?= BaseController::getMessage('442') ?></p>
                            </li>                      
                        </div>
                    </ul>                    
                </div>

                <div class="project_blok_overlay">
                    <ul class="pros-list">
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-1.jpg" alt="<?= BaseController::getMessage('431') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('431') ?></span></strong>
                            <p><?= BaseController::getMessage('432') ?></p>
                        </li>
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-2.jpg" alt="<?= BaseController::getMessage('433') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('433') ?></span></strong>
                            <p><?= BaseController::getMessage('434') ?></p>
                        </li>
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-3.jpg" alt="<?= BaseController::getMessage('435') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('435') ?></span></strong>
                            <p><?= BaseController::getMessage('436') ?></p>
                        </li>
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-4.jpg" alt="<?= BaseController::getMessage('437') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('437') ?></span></strong>
                            <p><?= BaseController::getMessage('438') ?></p>
                        </li>
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-5.jpg" alt="<?= BaseController::getMessage('439') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('439') ?></span></strong>
                            <p><?= BaseController::getMessage('440') ?></p>
                        </li>
                        <li>
                            <div class="img-round">
                                <img oncontextmenu="return false" data-src="/img/pros-block/pros-6.jpg" alt="<?= BaseController::getMessage('441') ?>">
                            </div>
                            <strong class="line-title"><span><?= BaseController::getMessage('441') ?></span></strong>
                            <p><?= BaseController::getMessage('442') ?></p>
                        </li>
                    </ul>                  
                </div>

            </div>
        </section>
            
        <!-- start video review -->
        <?= $this->render('../section/_video-reviews.php', compact('video_reviews')); ?>
        <!-- end video review -->

        <?= $this->render('../section/_seo_article.php', compact('seo_data')); ?>

        <!-- start connect -->
        <?= $this->render('../section/_connect-blue.php'); ?>
        <!-- end connect -->
    </main>

