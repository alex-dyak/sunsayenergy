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
					<div class="img-part background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/about/step-1.jpg"></div>
					<div class="yellow-part">
						<div class="text-wrap">
							<span class="step-number">1</span>
							<strong class="title-h3"><?= BaseController::getMessage('568') ?></strong>
							<p><?= BaseController::getMessage('569') ?></p>
						</div>
					</div>
				</li>
				<li>
					<div class="img-part background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/about/step-2.jpg"></div>
					<div class="yellow-part">
						<div class="text-wrap">
							<span class="step-number">2</span>
							<strong class="title-h3"><?= BaseController::getMessage('582') ?></strong>
							<p><?= BaseController::getMessage('573') ?></p>
						</div>
					</div>
				</li>
				<li>
					<div class="img-part background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/about/step-3.jpg"></div>
					<div class="yellow-part">
						<div class="text-wrap">
							<span class="step-number">3</span>
							<strong class="title-h3"><?= BaseController::getMessage('574') ?></strong>
							<p><?= BaseController::getMessage('575') ?></p>
						</div>
					</div>
				</li>
				<li>
					<div class="img-part background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/about/step-4.jpg"></div>
					<div class="yellow-part">
						<div class="text-wrap">
							<span class="step-number">4</span>
							<strong class="title-h3"><?= BaseController::getMessage('576') ?></strong>
							<p><?= BaseController::getMessage('577') ?></p>
						</div>
					</div>
				</li>
			</ol>
		</div>
	</section>
	<section class="green-payment">
		<div class="container">
			<ul class="green-payment-list">
				<li class="green-payment-item background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/warranty.jpg"></li>
				<li class="green-payment-img">
					<img data-src="/img/green/icon/check.svg" alt="<?= BaseController::getMessage('550') ?>" width="65">
				</li>
				<li class="green-payment-info">
                    <?= BaseController::getMessage('578') ?>
				</li>
			</ul>
		</div>
	</section>
    <section class="about-us-section">
        <div class="container">
			<div class="staff-description">
				<p><?= BaseController::getMessage('579') ?></p>
			</div>
			<div class="staff-slider">
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/1.jpg" alt="<?= BaseController::getMessage('580') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('580') ?></strong>
						<p><?= BaseController::getMessage('581') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/2.jpg" alt="<?= BaseController::getMessage('583') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('583') ?></strong>
						<p><?= BaseController::getMessage('584') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/3.jpg" alt="<?= BaseController::getMessage('585') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('585') ?></strong>
						<p><?= BaseController::getMessage('586') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/4.jpg" alt="<?= BaseController::getMessage('587') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('587') ?></strong>
						<p><?= BaseController::getMessage('588') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/5.jpg" alt="<?= BaseController::getMessage('589') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('589') ?></strong>
						<p><?= BaseController::getMessage('590') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/6.jpg" alt="<?= BaseController::getMessage('591') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('591') ?></strong>
						<p><?= BaseController::getMessage('592') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/7.jpg" alt="<?= BaseController::getMessage('593') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('593') ?></strong>
						<p><?= BaseController::getMessage('594') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/8.jpg" alt="<?= BaseController::getMessage('595') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('595') ?></strong>
						<p><?= BaseController::getMessage('596') ?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/9.jpg" alt="<?= BaseController::getMessage('597') ?>">
					</div>
					<div class="staff-info">
						<strong><?= BaseController::getMessage('597') ?></strong>
						<p><?= BaseController::getMessage('598') ?></p>
					</div>
				</div>
				<!--<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/10.jpg" alt="<?/*= BaseController::getMessage('599') */?>">
					</div>
					<div class="staff-info">
						<strong><?/*= BaseController::getMessage('599') */?></strong>
						<p><?/*= BaseController::getMessage('600') */?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/11.jpg" alt="<?/*= BaseController::getMessage('601') */?>">
					</div>
					<div class="staff-info">
						<strong><?/*= BaseController::getMessage('601') */?></strong>
						<p><?/*= BaseController::getMessage('602') */?></p>
					</div>
				</div>
				<div class="slide">
					<div class="img-block">
						<img data-src="/img/about/worker/12.jpg" alt="<?/*= BaseController::getMessage('603') */?>">
					</div>
					<div class="staff-info">
						<strong><?/*= BaseController::getMessage('603') */?></strong>
						<p><?/*= BaseController::getMessage('602') */?></p>
					</div>
				</div>-->
			</div>
		</div>
    </section>

    <!-- start connect -->
    <?= $this->render('../section/_connect-blue.php'); ?>
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
