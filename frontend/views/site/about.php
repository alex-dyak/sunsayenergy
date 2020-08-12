<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('7'),
];

$contacts = \backend\models\Contact::getContact();
?>
<main class="page-container">
	<div class="breadcrumbs-wrap">
		<div class="container">
            <?php echo Breadcrumbs::widget([
                'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]); ?>
		</div>
	</div>
	<section class="about-hero-section">
		<span class="hero-yellow-circle"></span>
		<div class="container">
			<div class="hero-text">
				<h1 class="line-title"><?= BaseController::getMessage('76') ?></h1>
				<div class="hero-description"><?= BaseController::getMessage('566') ?></div>
			</div>
		</div>
		<div class="hero-bottom-social">
			<div class="container">
				<ul class="social-list">
                    <?php if (!empty($contacts->link_fb)): ?>
						<li class="facebook">
							<a href="<?= $contacts->link_fb ?>" target="_blank">
								<i class="icon-facebook"></i>
							</a>
						</li>
                    <?php endif; ?>
                    <?php if (!empty($contacts->link_youtube)): ?>
						<li>
							<a href="<?= $contacts->link_youtube ?>" target="_blank">
								<i class="icon-youtube"></i>
							</a>
						</li>
                    <?php endif; ?>
                    <?php if (!empty($contacts->link_telegram)): ?>
						<li>
							<a href="<?= $contacts->link_telegram ?>" target="_blank">
								<i class="icon-telegram"></i>
							</a>
						</li>
                    <?php endif; ?>
                    <?php if (!empty($contacts->link_viber)): ?>
						<li>
							<a href="<?= $contacts->link_viber ?>" target="_blank">
								<i class="icon-viber"></i>
							</a>
						</li>
                    <?php endif; ?>
                    <?php if (!empty($contacts->link_insta)): ?>
						<li>
							<a href="<?= $contacts->link_insta ?>" target="_blank">
								<i class="icon-instagram"></i>
							</a>
						</li>
                    <?php endif; ?>
				</ul>
			</div>
		</div>
	</section>
	<section class="our-steps-section">
		<div class="container">
			<strong class="title-h2"><?= BaseController::getMessage('567') ?></strong>
			<ol class="steps-list">
				<li>
					<div class="img-part background-lazy" data-src="/img/about/step-1.jpg"></div>

					<div class="yellow-part">
						<span class="step-number"></span>
						<strong class="title-h3"><?= BaseController::getMessage('568') ?></strong>
						<p><?= BaseController::getMessage('569') ?></p>
					</div>

				</li>
			</ol>
		</div>
	</section>

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
   <? /* echo $this->render('../section/_review.php', compact('reviews')); */ ?>
	<!-- end review -->
    <!-- start connect -->
    <?= $this->render('../section/_connect.php'); ?>
	<!-- end connect -->
</main>

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
            "name": "<?= BaseController::getMessage('7') ?>",
            "item": "https://sunsayenergy.com/about"
        }]
    }
</script>
