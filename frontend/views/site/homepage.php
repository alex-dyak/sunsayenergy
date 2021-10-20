<?php use frontend\controllers\BaseController; ?>

    <main>
         <!-- start info -->
        <section class="new-electrostation-section">
            <div class="container">

                <h3 class="new-subtitle">
                    МЫ СТРОИМ СОЛНЕЧНЫЕ СТАНЦИИ, ЧТОБЫ ВЫ ПОЛУЧИЛИ ДОСТУП К ЧИСТОЙ НЕИСЧЕРПАЕМОЙ ЭНЕРГИИ
                </h3>
                <div class="new-bg-block-right"></div>
                <div class="new-title-blok">
                    <h1 class="new-title">
                        СОЛНЕЧНЫЕ СТАНЦИИ ДЛЯ ВАШЕГО БИЗНЕСА
                        <span class="new-title-span">СОЛНЕЧНЫЕ СТАНЦИИ ДЛЯ ВАШЕГО ДОМА</span>
                    </h1>
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
                    <h2 class="line-title">ПОЧЕМУ ВАМ НУЖНА СОЛНЕЧНАЯ СТАНЦИЯ?</h2>
                    <div class="subtitle subtitle__possibility">
                        <p>Солнечная энергетика переживает бум развития во всем мире. У нее есть свои преимущества перед традиционным потреблением электроэнергии</p>
                    </div>
                    <div class="subtitle__slider">
                        <p>С НЕЙ ВЫ СМОЖЕТЕ:</p>
                    </div>
                </div>
                <ul class="possibility-list-slider">
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/investments.svg" alt="">
                                </div>
                                <p class="possibility-text">Сделать выгодную инвестицию и зарабатывать на зеленом тарифе до $7 000</p>                                
                            </div>
                        </li>
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/profit.svg" alt="">
                                </div>
                                <p class="possibility-text">Получать прибыль выше на 1 000 000 грн и не зависеть от роста тарифов энергорынка</p>
                            </div>
                        </li>                        
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/voltage.svg" alt="">
                                </div>
                                <p class="possibility-text">Повысить качество напряжения для своих нужд при минимальном обслуживании</p>
                            </div>
                        </li>                        
                    </div>
                    <div class="possibility-item-slider">
                        <li class="possibility-item">
                            <div class="possibility-item-inner">
                                <div class="possibility-img">
                                    <img oncontextmenu="return false" data-src="/img/homepage/status.svg" alt="">
                                </div>
                                <p class="possibility-text">Получить статус инновационной экологичной  компании и прогрессивного хозяина</p>
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
                            <p>Солнечную СТАНЦИЮ ЛЕГКО ВСТРОИТЬ В ВАШУ ЭЛЕКТРОСИСТЕМУ. ВЫБЕРИТЕ ТИП СТАНЦИИ, КОТОРАЯ ВАМ НУЖНА </p>
                        </div>
                        <div class="station-types__inner">
                            <a class="station-types__item">Для заработка</a>
                            <a class="station-types__item">Для автономии</a>
                            <a class="station-types__item">Для підприємства</a>
                        </div>
                        <div class="station-types__text">
                            <p>ИЛИ РАССКАЖИТЕ НАМ ДЕТАЛИ И МЫ ВАМ РАССЧИТАЕМ ПРАВИЛЬНУЮ СТАНЦИЮ</p>
                        </div>
                        <div class="button__center">
                            <a class="button btn-lg consult-btn station-types__button new-consult-btn" href="#connect"><?= BaseController::getMessage('402') ?></a>
                        </div>
                        
                    </div>
                    <div class="station-types__img">
                        <img oncontextmenu="return false" data-src="/img/homepage/new-home1.png" alt="">
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

            <div class="new-seo-article new-collapsed ">
                <div class="container">
                    <div class="seo-article-inner">
                        <strong>ТЕКСТ СЕО</strong>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, recusandae sunt illo facilis tempora deleniti beatae eum quas? Officia voluptatibus ad corrupti ipsam qui repellendus quidem soluta quas aperiam excepturi?
                        Quod voluptate sed labore doloribus atque doloremque inventore magnam modi! Cum incidunt molestiae quis dolorem quos, pariatur ducimus soluta laborum sint illum, dicta eveniet officia atque distinctio eos, voluptatum commodi.</p>
                    </div>
                    <span class="seo-article-opened"></span>
                </div>
            </div>

            <!-- start connect -->
            <?= $this->render('../section/_connect-blue.php'); ?>
            <!-- end connect -->
    </main>

