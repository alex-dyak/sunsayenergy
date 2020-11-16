<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('7'),
];

$contacts = \backend\models\Contact::getContact();
?>

<main>
	<section class="hero-section" style="background-image: url('/img/commercial-station/hero-commercial.jpg')">
		<span class="hero-yellow-circle"></span>
		<div class="container">
			<div class="hero-text">
				<div class="title">
					<h1 class="line-title"><?= BaseController::getMessage('488') ?></h1>
					<b><?= BaseController::getMessage('502') ?></b>
				</div>
				<div class="hero-description"><?= BaseController::getMessage('489') ?></div>
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
	<section class=" profit-section">
		<div class="container">
			<div class="profit-wrap">
				<div class="profit-wrap-title">
					<h2 class="line-title"><?= BaseController::getMessage('490') ?></h2>
					<div class="title-img background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/profit.jpg"></div>
				</div>
				<ul class="profit-list">
					<li>
						<div class="profit-list-title">
							<div class="profit-img">
								<img oncontextmenu="return false" data-src="/img/commercial-station/icon/pig.svg" alt="<?= BaseController::getMessage('491') ?>">
							</div>
							<strong><?= BaseController::getMessage('491') ?></strong>
						</div>
						<p><?= BaseController::getMessage('492') ?></p>
					</li>
					<li>
						<div class="profit-list-title">
							<div class="profit-img">
								<img oncontextmenu="return false" data-src="/img/commercial-station/icon/document.svg" alt="<?= BaseController::getMessage('493') ?>">
							</div>
							<strong><?= BaseController::getMessage('493') ?></strong>
						</div>
						<p><?= BaseController::getMessage('494') ?></p>
					</li>
					<li>
						<div class="profit-list-title">
							<div class="profit-img">
								<img oncontextmenu="return false" data-src="/img/commercial-station/icon/calendar.svg" alt="<?= BaseController::getMessage('495') ?>">
							</div>
							<strong><?= BaseController::getMessage('495') ?></strong>
						</div>
						<p><?= BaseController::getMessage('496') ?></p>
					</li>
					<li>
						<div class="profit-list-title">
							<div class="profit-img">
								<img oncontextmenu="return false" data-src="/img/commercial-station/icon/money.svg" alt="<?= BaseController::getMessage('497') ?>">
							</div>
							<strong><?= BaseController::getMessage('497') ?></strong>
						</div>
						<p><?= BaseController::getMessage('498') ?></p>
					</li>
					<li>
						<div class="profit-list-title">
							<div class="profit-img">
								<img oncontextmenu="return false" data-src="/img/commercial-station/icon/station.svg" alt="<?= BaseController::getMessage('499') ?>">
							</div>
							<strong><?= BaseController::getMessage('499') ?></strong>
						</div>
						<p><?= BaseController::getMessage('500') ?></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="commercial-cta">
			<div class="container">
				<div class="cta-wrap">
					<div class="cta-text"><?= BaseController::getMessage('501') ?></div>
					<div class="btn-wrap">
						<a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="station-work-section">
		<div class="container">
			<h2 class="line-title"><?= BaseController::getMessage('503') ?></h2>
			<div class="station-work-wrap">
				<ul class="station-work-list">
					<li>
						<strong><?= BaseController::getMessage('504') ?></strong>
                        <p><?= BaseController::getMessage('505') ?></p>
					</li>
					<li>
						<strong><?= BaseController::getMessage('506') ?></strong>
						<p><?= BaseController::getMessage('507') ?></p>
					</li>
					<li>
						<strong><?= BaseController::getMessage('508') ?></strong>
						<p><?= BaseController::getMessage('509') ?></p>
					</li>
				</ul>
				<div class="station-work-img">
					<img oncontextmenu="return false" src="/img/loader.gif" data-src="/img/commercial-station/solar-station.svg" alt="<?= BaseController::getMessage('503') ?>">
				</div>
			</div>
		</div>
	</section>
	<section class="stage-section">
		<div class="container">
			<div class="stage-wrap">
				<h2 class="line-title"><?= BaseController::getMessage('510') ?></h2>
				<ul class="stage-list">
					<li>
						<div class="stage-img">
							<img oncontextmenu="return false" data-src="/img/commercial-station/icon/dron.svg" width="90" alt="<?= BaseController::getMessage('511') ?>">
						</div>
						<div class="stage-info">
							<strong><?= BaseController::getMessage('511') ?></strong>
							<?= BaseController::getMessage('512') ?>
						</div>
					</li>
					<li>
						<div class="stage-img">
							<img oncontextmenu="return false" data-src="/img/commercial-station/icon/analysis.svg" width="62" alt="<?= BaseController::getMessage('513') ?>">
						</div>
						<div class="stage-info">
							<strong><?= BaseController::getMessage('513') ?></strong>
							<?= BaseController::getMessage('514') ?>
						</div>
					</li>
					<li>
						<div class="stage-img">
							<img oncontextmenu="return false" data-src="/img/commercial-station/icon/development.svg" width="65" alt="<?= BaseController::getMessage('515') ?>">
						</div>
						<div class="stage-info">
							<strong><?= BaseController::getMessage('515') ?></strong>
							<?= BaseController::getMessage('516') ?>
						</div>
					</li>
					<li>
						<div class="stage-img">
							<img oncontextmenu="return false" data-src="/img/commercial-station/icon/logistic.svg" width="75" alt="<?= BaseController::getMessage('519') ?>">
						</div>
						<div class="stage-info">
							<strong><?= BaseController::getMessage('519') ?></strong>
							<?= BaseController::getMessage('520') ?>
						</div>
					</li>
					<li>
						<div class="stage-img">
							<img oncontextmenu="return false" data-src="/img/commercial-station/icon/instalation.svg" width="90" alt="<?= BaseController::getMessage('517') ?>">
						</div>
						<div class="stage-info">
							<strong><?= BaseController::getMessage('517') ?></strong>
							<?= BaseController::getMessage('518') ?>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="commercial-cta">
			<div class="container">
				<div class="cta-wrap">
					<div class="cta-text"><?= BaseController::getMessage('521') ?></div>
					<div class="btn-wrap">
						<a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="reason-section">
		<div class="container">
			<div class="reason-wrapper"><h2 class="line-title"><?= BaseController::getMessage('522') ?></h2>
				<div class="reason-slider">
					<div class="reason-slide">
						<div class="reason-slide-img background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/service.jpg"></div>
						<div class="slide-description">
							<strong><?= BaseController::getMessage('523') ?></strong>
							<p><?= BaseController::getMessage('524') ?></p>
						</div>
					</div>
					<div class="reason-slide">
						<div class="reason-slide-img background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/warranty.jpg"></div>
						<div class="slide-description">
							<strong><?= BaseController::getMessage('525') ?></strong>
							<p><?= BaseController::getMessage('526') ?></p>
						</div>
					</div>
					<div class="reason-slide">
						<div class="reason-slide-img background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/efficient.jpg"></div>
						<div class="slide-description">
							<strong><?= BaseController::getMessage('527') ?></strong>
							<p><?= BaseController::getMessage('528') ?></p>
						</div>
					</div>
					<div class="reason-slide yellow">
						<div class="reason-slide-img background-lazy" style="background-image: url('/img/loader.gif')" data-src="/img/commercial-station/pr-support.jpg"></div>
						<div class="slide-description">
							<strong><?= BaseController::getMessage('529') ?></strong>
							<p><?= BaseController::getMessage('530') ?></p>
						</div>
					</div>
				</div>
				<!--<div class="btn-wrap">
					<a href="#connect" class="button order-btn"><?/*= BaseController::getMessage('468') */?></a>
				</div>-->
			</div>
		</div>
	</section>
    <?php if (!empty($images)): ?>
		<section class="clients-section">
			<div class="clients-slider">
                <?php foreach ($images as $item): ?>
					<div class="clients-slide">
						<div class="image background-lazy" style="background-image: url('/img/loader.gif')" data-src="/images/<?= $item->images->imagePreview ?>"></div>
						<div class="description">
							<div><?= $item->alt ?></div>
						</div>
					</div>
                <?php endforeach; ?>
			</div>
		</section>
    <?php endif; ?>

    <?= $this->render('../section/_connect-blue.php'); ?>

	<!--<section class="connect" id="connect">
		<div class="container">
			<div class="connect-bg">
				<div class="connect__content">
					<div class="connect__content-title line-title">
						<strong class="h2"><?/*= BaseController::getMessage('364') */?></strong>
					</div>
					<form class="connect__content-question" id="question_form" data-post-url="index.html">
						<div class="message">
							<input type="hidden" name="utm_source" <?php /*echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''*/?> >
							<input type="hidden" name="utm_medium" <?php /*echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''*/?> >
							<input type="hidden" name="utm_campaign" <?php /*echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''*/?> >
							<input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?/*= BaseController::getMessage('366') */?>">
							<input class="custom-field" id="phone" type="text" id="phone" name="phone" placeholder="+380">
							<input class="custom-field" type="text" id="email" name="email" placeholder="youremail@mail.com">
							<textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?/*= BaseController::getMessage('403') */?>"></textarea>
							<div class="connect__content-button">
								<button class="btn connect-btn btn-primary" id="submit_button">
                                    <?/*= BaseController::getMessage('14') */?>
								</button>
							</div>
						</div>
						<div class="form-compelete"><?/*= BaseController::getMessage('374') */?></div>
					</form>
				</div>
			</div>
		</div>
	</section>-->
</main>