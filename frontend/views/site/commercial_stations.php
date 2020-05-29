<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('7'),
];

$contacts = \backend\models\Contact::getContact();
?>
	<header class="header" id="header">
		<div class="container">
			<div class="header-wrap">
				<div class="mobile-top-block">
					<div class="contact-block" itemscope itemtype="http://schema.org/PostalAddress">
						<a class="contact-opener" href="#contact-opener">
							<i class="icon-phone"></i>
							<i class="icon-close"></i>
                            <?= BaseController::getMessage('8') ?>
						</a>
						<ul class="header-contact-list">
							<li><a itemprop="telephone" class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
							<li><a itemprop="telephone" class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a itemprop="telephone" class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
							<li class="address-list">
								<i class="icon-envelope"></i>
								<a itemprop="email" href="mailto:<?= $contacts->email ?>">
                                    <?= $contacts->email ?>
								</a>
							</li>
							<li class="address-list">
								<i class="icon-pin"></i>
								<address itemprop="streetAddress"><?= $contacts->address ?></address>
							</li>

							<li class="social-media">
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
							</li>
						</ul>
					</div>
					<div id="nav-opener">
						<span><?= BaseController::getMessage('405') ?></span>
						<i class="icon-menu"></i>
						<i class="icon-close"></i>
					</div>
				</div>
				<strong class="main-logo">
					<a href="<?= \yii\helpers\Url::to(['/']); ?>">
						<img class="logo-def" src="/img/logo.svg" width="184" alt="sunsay energy">
						<img class="logo-white" src="/img/logo-navbar.svg" width="184" alt="sunsay energy">
						<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
					</a>
				</strong>
				<nav class="header-nav">
					<strong class="nav-logo">
						<a href="<?= \yii\helpers\Url::to(['/']); ?>">
							<img src="/img/logo-navbar.svg" width="148" alt="sunsay energy">
						</a>
					</strong>
					<ul class="nav-list">
						<li class="dropdown-wrapper">
							<span><?= BaseController::getMessage('1') ?> <i class="icon-angle-down"></i></span>
							<ul class="dropdown header-drop-list">
								<li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-station-for-income']) ?>"><?= BaseController::getMessage('2') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']); ?>"><?= BaseController::getMessage('3') ?></a></li>
								<li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>"><a href="<?= \yii\helpers\Url::to(['/solar-power-for-autonomous-power']); ?>"><?= BaseController::getMessage('4') ?></a></li>
							</ul>
						</li>
						<li class="subnav"><?= BaseController::getMessage('12') ?></li>
						<li class="<?= (Yii::$app->controller->route == 'site/green') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/green-tariff']); ?>"><?= BaseController::getMessage('5') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'technology/technology') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/technology']); ?>"><?= BaseController::getMessage('6') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'site/video') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/video']); ?>"><?= BaseController::getMessage('412') ?></a>
						</li>
						<li class="subnav"><?= BaseController::getMessage('11') ?></li>
						<li class="<?= (Yii::$app->controller->route == 'project/project') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/project']); ?>"><?= BaseController::getMessage('320') ?></a>
						</li>
						<li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
							<a href="<?= \yii\helpers\Url::to(['/about']); ?>"><?= BaseController::getMessage('7') ?></a>
						</li>
						<li class="to_contact">
							<a href="#contact"><?= BaseController::getMessage('8') ?></a>
						</li>
					</ul>
					<div class="btn-wrap">
						<a class="button header-btn" href="#" id="order-form"><?= BaseController::getMessage('9') ?></a>
					</div>
					<ul class="language-switch">
						<li><a <?= (Yii::$app->language=='ua')?'class="active"':''   ?>  href="/<?= \frontend\components\UrlTrimLang::widget() ?>">UA</a></li>
						<li><a <?= (Yii::$app->language=='ru')?'class="active"':''   ?>  href="/ru/<?= \frontend\components\UrlTrimLang::widget() ?>">RU</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
<div id="fullpage">

    <div class="section hero-section" style="background-image: url('img/commercial-station/hero-commercial.jpg')">
        <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur cum et explicabo fugiat impedit, incidunt inventore laudantium minima minus nam natus, nobis officiis possimus quisquam saepe ullam! Quibusdam, temporibus!
        </div>
    </div>
    <div class="section">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus dolore dolorem nam provident rem saepe sint? </div>
    <div class="section">Adipisci dolorum, facere, illo incidunt iure laborum nemo praesentium reiciendis sed, tenetur vitae!</div>
    <div class="section">Delectus dicta fugit illo pariatur placeat! Ab ad, culpa cum distinctio doloremque est facere id</div>
	<div class="section connect" id="connect">
		<div class="container">
			<div class="connect-bg">
				<div class="connect__content">
					<div class="connect__content-title line-title">
						<strong class="h2"><?= BaseController::getMessage('364') ?></strong>
					</div>
					<form class="connect__content-question" id="question_form" data-post-url="index.html">
						<div class="message">
							<input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
							<input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
							<input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
							<input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
							<input class="custom-field" id="phone" type="text" id="phone" name="phone" placeholder="+380">
							<input class="custom-field" type="text" id="email" name="email" placeholder="youremail@mail.com">
							<textarea class="custom-field" name="question" id="question" rows="5" placeholder="<?= BaseController::getMessage('403') ?>"></textarea>
							<div class="connect__content-button">
								<button class="btn connect-btn btn-primary" id="submit_button">
                                    <?= BaseController::getMessage('14') ?>
								</button>
							</div>
						</div>
						<div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
					</form>
				</div>
			</div>
		</div>
	</div>
<?php if (Yii::$app->controller->route != 'site/error'): ?>
	<div class="section fp-auto-height bottom-contact-block" id="contact" itemscope itemtype="http://schema.org/PostalAddress">
		<div class="container">
			<ul class="bottom-contact-list">
				<li>
					<ul class="mobile-open-close">
						<li>
							<i class="icon-phone"></i>
							<a itemprop="telephone" class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone) ?>"><?= $contacts->phone ?></a>
							<span class="open-close-opener">
								<i class="icon-angle-right"></i>
							</span>
						</li>
						<li>
							<a itemprop="telephone" class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a>
						</li>
						<li>
							<a itemprop="telephone" class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a>
						</li>
					</ul>
				</li>
				<li class="border"></li>
				<li class="address-item">
					<i class="icon-envelope"></i>
					<a itemprop="email" href="mailto:<?= $contacts->email ?>"><?= $contacts->email ?></a>
				</li>
				<li class="border"></li>
				<li class="address-item">
					<i class="icon-pin"></i>
					<address itemprop="streetAddress"><?= $contacts->address ?></address>
				</li>
			</ul>
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

        <?php if(Yii::$app->controller->route == 'site/index'){ ?>
			<div id="map"></div>
        <?php } ?>
	</div>
	<!-- start footer -->
	<footer class="footer section fp-auto-height">
		<div class="footer__nav">
			<div class="container">
				<div class="footer__nav-info">
					<div class="company-info">
						<strong class="footer-logo">
							<a href="<?= \yii\helpers\Url::to(['/']); ?>">
								<img src="/img/logo-navbar.svg" width="185" alt="sunsay energy">
								<span class="logo-text"><?= BaseController::getMessage('406') ?></span>
							</a>
						</strong>
						<div class="copyright">
							<p><?= BaseController::getMessage('15') ?></p>
							<a href="<?= \yii\helpers\Url::to(['/']); ?>">&copy; SUNSAY Energy <?= date('Y'); ?></a>
						</div>
					</div>
					<div class="footer__nav-menu">
						<h4 class="title"><?= BaseController::getMessage('1') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'site/income') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-station-for-income']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-station-for-income']) . '"' ?>>
									<span><?= BaseController::getMessage('2') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/reserve') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-for-backup-power']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-for-backup-power']) . '"' ?>>
									<span><?= BaseController::getMessage('3') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/comfort') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/solar-power-for-autonomous-power']) ? '' : 'href="' . \yii\helpers\Url::to(['/solar-power-for-autonomous-power']) . '"' ?>>
									<span><?= BaseController::getMessage('4') ?></span></a></li>
						</ul>
					</div>
					<div class="footer__nav-menu">
						<h4><?= BaseController::getMessage('11') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'project/project') ? 'active' : ''; ?>">
								<a <?=  Yii::$app->request->url == \yii\helpers\Url::to(['/project']) ? '' : 'href="' . \yii\helpers\Url::to(['/project']) . '"' ?>>
									<span><?= BaseController::getMessage('320') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'site/about') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/about']) ? '' : 'href="' . \yii\helpers\Url::to(['/about']) . '"' ?>>
									<span><?= BaseController::getMessage('7') ?></span></a></li>
						</ul>
					</div>
					<div class="footer__nav-menu">
						<h4><?= BaseController::getMessage('12') ?></h4>
						<ul>
							<li class="<?= (Yii::$app->controller->route == 'site/green') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/green-tariff']) ? '' : 'href="' . \yii\helpers\Url::to(['/green-tariff']) . '"' ?>>
									<span><?= BaseController::getMessage('5') ?></span></a></li>
							<li class="<?= (Yii::$app->controller->route == 'technology/technology') ? 'active' : ''; ?>">
								<a <?= Yii::$app->request->url == \yii\helpers\Url::to(['/technology']) ? '' : 'href="' . \yii\helpers\Url::to(['/technology']) . '"' ?>>
									<span><?= BaseController::getMessage('6') ?></span></a></li>
						</ul>
					</div>
					<div class="footer-contact-wrap">
						<h4>Контакты</h4>
						<ul class="footer-contact-list">
							<li><a class="binct-phone-number-1" href="tel:<?= str_replace(' ', '', $contacts->phone); ?>"><?= $contacts->phone; ?></a></li>
							<li><a class="binct-phone-number-3" href="tel:<?= str_replace(' ', '', $contacts->mobile_1); ?>"><?= $contacts->mobile_1; ?></a></li>
							<li><a class="binct-phone-number-2" href="tel:<?= str_replace(' ', '', $contacts->mobile_2); ?>"><?= $contacts->mobile_2; ?></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-social-nav">
			<div class="container">
				<div class="footer-social-wrap">
					<div class="newsletter-wrap modal" id="footer-newsletter">
						<span class="subscribe-close"><i class="icon-close-bold"></i></span>
						<strong class="title-mobile"><?= BaseController::getMessage('13') ?></strong>
						<strong class="title"><?= BaseController::getMessage('410') ?></strong>
						<form class="form subscribe" method="post">
							<input class="custom-field" type="email" name="email" placeholder="youremail@mail.com">
							<button class="button btn-subscribe"><?= BaseController::getMessage('14') ?></button>
						</form>
						<div class="success-msg"><?= BaseController::getMessage('411') ?></div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-mobile-bottom">
			<div class="container">
				<a href="#footer-newsletter" class="button newsletter-opener"><?= BaseController::getMessage('410') ?></a>
				<div class="copyright">
					<p><?= BaseController::getMessage('15') ?> &copy; SUNSAY Energy <?= date('Y'); ?></p>
				</div>
			</div>
		</div>
	</footer>
	<!-- end footer -->
</div>


<?php endif; ?>