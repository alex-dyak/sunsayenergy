<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('5'),
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

		<section class="green-hero-section">
			<span class="hero-yellow-circle"></span>
			<div class="green-hero-img" style="background-image: url('/img/green/hero.jpg')"></div>

			<div class="container">
				<div class="hero-text">
					<h1 class="line-title"><?= BaseController::getMessage('532') ?></h1>
					<div class="hero-description"><?= BaseController::getMessage('533') ?></div>
				</div>
				<ul class="green-hero-list">
					<li>
						<p><?= BaseController::getMessage('534') ?></p>
					</li>
					<li>
						<p><?= BaseController::getMessage('535') ?></p>
					</li>
				</ul>
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
		<section class="green-customer">
			<div class="container">
				<h2 class="line-title"><?= BaseController::getMessage('536') ?></h2>
				<strong class="subtitle"><?= BaseController::getMessage('537') ?></strong>
				<div class="green-customer-wrap">
					<div class="green-customer-item">
						<div class="green-customer-top">
							<img oncontextmenu="return false" data-src="/img/green/icon/farm.svg" alt="plant" width="47">
							<strong><?= BaseController::getMessage('538') ?></strong>
						</div>
						<div class="green-customer-info">
							<p><?= BaseController::getMessage('539') ?></p>
						</div>
					</div>
					<div class="green-customer-item">
						<div class="green-customer-top">
							<img oncontextmenu="return false" data-src="/img/green/icon/plant.svg" alt="plant" width="47">
							<strong><?= BaseController::getMessage('540') ?></strong>
						</div>
						<div class="green-customer-info">
							<p><?= BaseController::getMessage('541') ?></p>
						</div>
					</div>
				</div>
			</div>
			<div class="commercial-cta">
				<div class="container">
					<div class="cta-wrap">
						<div class="cta-text"><?= BaseController::getMessage('542') ?></div>
						<div class="btn-wrap">
							<a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="green-rate">
			<div class="container">
				<div class="rate-block">
					<div class="rate-left">
						<h2 class="line-title"><?= BaseController::getMessage('543') ?></h2>
						<strong class="subtitle"><?= BaseController::getMessage('544') ?></strong>
					</div>
					<div class="rate-right">
						<ul class="rate-list">
							<li>
								<strong><?= BaseController::getMessage('545') ?></strong>
								<p><?= BaseController::getMessage('546') ?></p>
							</li>
							<li>
								<strong><?= BaseController::getMessage('547') ?></strong>
								<p><?= BaseController::getMessage('548') ?></p>
							</li>
						</ul>
						<div class="blockquote">
							<p><?= BaseController::getMessage('549') ?></p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="green-payment">
			<div class="container">
				<ul class="green-payment-list">
					<li class="green-payment-item background-lazy" style="background-image: url('/img/logo.svg')" data-src="/img/green/green-bg.jpg">
						<strong><?= BaseController::getMessage('550') ?></strong>
					</li>
					<li class="green-payment-img">
						<img oncontextmenu="return false" data-src="/img/green/icon/money.svg" alt="<?= BaseController::getMessage('550') ?>" width="70">
					</li>
					<li class="green-payment-info">
						<?= BaseController::getMessage('551') ?>
					</li>
				</ul>
			</div>
			<div class="commercial-cta">
				<div class="container">
					<div class="cta-wrap">
						<div class="cta-text"><?= BaseController::getMessage('552') ?></div>
						<div class="btn-wrap">
							<a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="stage-section">
			<div class="container">
				<div class="stage-wrap">
					<div class="title-wrap">
						<h2 class="line-title"><?= BaseController::getMessage('563') ?></h2>
						<div class="title-text"><?= BaseController::getMessage('564') ?></div>
					</div>

					<ul class="stage-list">
						<li>
							<div class="stage-img">
								<img oncontextmenu="return false" data-src="/img/green/icon/counter.svg" width="50" alt="<?= BaseController::getMessage('553') ?>">
							</div>
							<div class="stage-info">
								<strong><?= BaseController::getMessage('553') ?></strong>
                                <?= BaseController::getMessage('554') ?>
							</div>
						</li>
						<li>
							<div class="stage-img">
								<img oncontextmenu="return false" data-src="/img/green/icon/account.svg" width="52" alt="<?= BaseController::getMessage('555') ?>">
							</div>
							<div class="stage-info">
								<strong><?= BaseController::getMessage('555') ?></strong>
                                <?= BaseController::getMessage('556') ?>
							</div>
						</li>
						<li>
							<div class="stage-img">
								<img oncontextmenu="return false" data-src="/img/green/icon/application.svg" width="52" alt="<?= BaseController::getMessage('557') ?>">
							</div>
							<div class="stage-info">
								<strong><?= BaseController::getMessage('557') ?></strong>
                                <?= BaseController::getMessage('558') ?>
							</div>
						</li>
						<li>
							<div class="stage-img">
								<img oncontextmenu="return false" data-src="/img/green/icon/contract.svg" width="52" alt="<?= BaseController::getMessage('559') ?>">
							</div>
							<div class="stage-info">
								<strong><?= BaseController::getMessage('559') ?></strong>
                                <?= BaseController::getMessage('560') ?>
							</div>
						</li>
						<li>
							<div class="stage-img">
								<img oncontextmenu="return false" data-src="/img/green/icon/leaf.svg" width="52" alt="<?= BaseController::getMessage('561') ?>">
							</div>
							<div class="stage-info">
								<strong><?= BaseController::getMessage('561') ?></strong>
                                <?= BaseController::getMessage('562') ?>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</section>
		<div class="seo-article collapsed">
			<div class="container">
				<div class="seo-article-wrap">
                    <?= BaseController::getMessage('570') ?>
				</div>
				<span class="seo-article-opener">
					<i class="icon-angle-right"></i>
				</span>
			</div>
		</div>
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
            "name": "<?= BaseController::getMessage('5') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/green-tariff']); ?>"
        }]
    }
</script>
