<?php use frontend\controllers\BaseController; ?>
<main class="page-container">
    <section class="section about">
        <div class="about__title">
            <h1><?= BaseController::getMessage('76') ?></h1>
        </div>
        <div class="about__description">
            <p><?= BaseController::getMessage('77') ?></p>
            <picture>
                <source media="(min-width: 600px)" data-srcset="/img/about/1.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/about/m_1.jpg" type="image/jpg">
                <img data-src="/img/about/1.jpg" alt=""  class="about__image">
            </picture>
            <p><?= BaseController::getMessage('78') ?></p>
            <p><?= BaseController::getMessage('79') ?></p>
            <p><?= BaseController::getMessage('80') ?></p>
            <ul>
                <li><?= BaseController::getMessage('81') ?></li>
                <li><?= BaseController::getMessage('82') ?></li>
                <li><?= BaseController::getMessage('83') ?></li>
            </ul>
        </div>

        <div class="about__image-list">
            <div class="about__image-list__item">
                <picture>
                <source media="(min-width: 600px)" data-srcset="/img/about/2.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/about/m_2.jpg" type="image/jpg">
                <img data-src="/img/about/2.jpg" alt="">
            </picture>
            </div>
            <div class="about__image-list__item">
                <picture>
                <source media="(min-width: 600px)" data-srcset="/img/about/3.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/about/m_3.jpg" type="image/jpg">
                <img data-src="/img/about/3.jpg" alt=""  class="about__image">
            </picture>
            </div>
        </div>
            
        <div class="about__description">
            <p class="about__center"><?= BaseController::getMessage('84') ?></p>
            <div class="about__image-block">
                <picture>
                    <source media="(min-width: 600px)" data-srcset="/img/about/4.jpg" type="image/jpg">
                    <source media="(max-width: 599px)" data-srcset="/img/about/m_4.jpg" type="image/jpg">
                    <img data-src="/img/about/4.jpg" alt=""  class="about__image">
                </picture>
                <p class="about__image-description"><?= BaseController::getMessage('85') ?></p>
            </div>
        </div>
    </section>
    <!-- start review -->
	<?= $this->render('../section/_review.php', compact('reviews'));?>
	<!-- end review -->
    <!-- start connect -->
    <?= $this->render('../section/_connect.php'); ?>
	<!-- end connect -->
</main>