<?php use frontend\controllers\BaseController; ?>

    <main class="page-container">
        <!-- start type-info -->
        <section class="section type-info">
            <div class="type-info__content">
                <div class="type-info__content-info">
                    <div class="title">
                        <h1><?= BaseController::getMessage('176') ?></h1>
                    </div>
                    <div class="description"><?= BaseController::getMessage('180') ?></div>
                    <div class="more">
                        <a href="#network">
                            <button class="btn btn-primary"><?= BaseController::getMessage('18') ?></button>
                        </a>
                    </div>
                </div>
                <div class="type-info__content-image">
                    <img oncontextmenu="return false" data-src="get_image.php?img=img/type-page/1.jpg" alt="Види сонячних електростанцій">
                </div>
            </div>
        </section>
        <!-- end type-info -->
        <!-- start network -->
        <section class="section section-network" id="network">
            <div class="type-info__content">
                <div class="type-info__content-title">
                    <h2><?= BaseController::getMessage('185') ?></h2>
                </div>
                <div class="type-info__content-description"><?= BaseController::getMessage('186') ?></div>

                <div class="tabs tabs-network">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1">
                            <span><?= BaseController::getMessage('187') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2">
                            <span><?= BaseController::getMessage('188') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1">
                            <div class="network-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('189') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/SolarEdge.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/SolarEdge.png" alt="SolarEdge">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('191') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Huawei.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Huawei.png" alt="Huawei">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('193') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Fronius.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Fronius.png" alt="Fronius">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs__content-item" data-id="2">
                            <div class="network-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('194') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('195') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                 <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('198') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-type">
                    <div class="slider-type__list slider-network-list">
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('187') ?></span></div>
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('188') ?></span></div>
                    </div>
                    <div class="slider-type__content slider-network-content">
                        <div class="slider-type__content-item">
                            <div class="network-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('189') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/SolarEdge.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/SolarEdge.png" alt="SolarEdge">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('191') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Huawei.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Huawei.png" alt="Huawei">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('193') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Fronius.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Fronius.png" alt="Fronius">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-type__content-item">
                            <div class="network-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('194') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('195') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('198') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- end network -->
        <!-- start standalone -->
        <section class="section section-standalone" id="standalone">
            <div class="type-info__content">
                <div class="type-info__content-title">
                    <h2><?= BaseController::getMessage('213') ?></h2>
                </div>
                <div class="type-info__content-description">
                    <?= BaseController::getMessage('215') ?>
                </div>

                <div class="tabs tabs-standalone">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1">
                            <span><?= BaseController::getMessage('218') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2">
                            <span><?= BaseController::getMessage('219') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="3">
                            <span><?= BaseController::getMessage('222') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/inv.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Longi.inv" alt="inv">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                           <?= BaseController::getMessage('226') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs__content-item" data-id="2">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('194') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                        <?= BaseController::getMessage('195') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('198') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs__content-item" data-id="3">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Victron.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Victron.png" alt="Victron">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('237') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/EverExceed.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/EverExceed.png" alt="EverExceed">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('243') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-type">
                    <div class="slider-type__list slider-standalone-list">
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('218') ?></span></div>
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('219') ?></span></div>
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('222') ?></span></div>
                    </div>
                    <div class="slider-type__content slider-standalone-content">
                        <div class="slider-type__content-item">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/inv.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/inv.png" alt="inv">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                         <?= BaseController::getMessage('226') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-type__content-item">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('194') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                          <?= BaseController::getMessage('195') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('198') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-type__content-item">
                            <div class="standalone-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Victron.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Victron.png" alt="Victron">
                                                </picture>
                                            </div>
                                        </div>
                                        <div class="text">
                                            <?= BaseController::getMessage('237') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/EverExceed.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/EverExceed.png" alt="EverExceed">
                                                </picture>
                                            </div>
                                        </div>
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
        <!-- end standalone -->
        <!-- start standalone -->
        <section class="section section-hybrid" id="hybrid">
            <div class="type-info__content">
                <div class="type-info__content-title">
                    <h2><?= BaseController::getMessage('300') ?></h2>
                </div>
                <div class="type-info__content-description"><?= BaseController::getMessage('302') ?>
                </div>
                <div class="tabs tabs-hybrid">
                    <div class="tabs__list">
                        <div class="tabs__list-item active" data-tab="1">
                            <span><?= BaseController::getMessage('218') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="2">
                            <span><?= BaseController::getMessage('219') ?></span>
                        </div>
                        <div class="tabs__list-item" data-tab="3">
                            <span><?= BaseController::getMessage('222') ?></span>
                        </div>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__content-item active" data-id="1">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('282') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/inv.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/inv.png" alt="inv">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs__content-item" data-id="2">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('194') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('195') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                           <?= BaseController::getMessage('198') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="get_image.php?img=img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs__content-item" data-id="3">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                           <?= BaseController::getMessage('243') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/EverExceed.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/EverExceed.png" alt="EverExceed">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                          <?= BaseController::getMessage('237') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/Victron.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Victron.png" alt="Victron">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-type">
                    <div class="slider-type__list slider-hybrid-list">
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('218') ?></span></div>
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('219') ?></span></div>
                        <div class="slider-type__list-item"><span><?= BaseController::getMessage('222') ?></span></div>
                    </div>
                    <div class="slider-type__content slider-hybrid-content">
                        <div class="slider-type__content-item">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('282') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/inv.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="get_image.php?img=img/types/inv.png" alt="inv">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-type__content-item">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                           <?= BaseController::getMessage('194') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/Jinko.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Jinko.png" alt="Jinko">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                         <?= BaseController::getMessage('195') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/Qcell.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Qcell.png" alt="Qcell">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                          <?= BaseController::getMessage('198') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/Longi.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Longi.png" alt="Longi">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-type__content-item">
                            <div class="hybrid-carousel">
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                           <?= BaseController::getMessage('243') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/EverExceed.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/EverExceed.png" alt="EverExceed">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="type-info__carousel-item">
                                    <div class="content">
                                        <div class="text">
                                            <?= BaseController::getMessage('237') ?>
                                        </div>
                                        <div class="image">
                                            <div class="image-background">
                                                <picture>
                                                      <source data-srcset="/img/types/Victron.webp" type="image/webp">
                                                    <img oncontextmenu="return false" data-src="/img/types/Victron.png" alt="Victron">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end standalone -->
        <!-- start connect -->
        <?= $this->render('../section/_connect.php'); ?>
        <!-- end connect -->
    </main>

<?php
// $this->registerJsFile('/js/index.js', ['position' => \yii\web\View::POS_END]);
?>