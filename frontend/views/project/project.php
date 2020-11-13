<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('320'),
];
$contacts = \backend\models\Contact::getContact();
?>

<main class="page-container">
	<div class="container project-breadcrumb">
    <?php echo Breadcrumbs::widget([
        'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]); ?>
	</div>
	<section class="project-hero-section">
		<div class="container">
			<div class="hero-block">
				<div class="title">
					<h1 class="line-title"><?= BaseController::getMessage('320') ?></h1>
				</div>
				<div class="hero-description"><?= BaseController::getMessage('321') ?></div>
			</div>
			<span class="hero-yellow-circle"></span>
		</div>
		<div class="hero-bottom-social">
			<div class="container">
				<ul class="social-list">
                    <?php if (!empty($contacts->link_fb)): ?>
						<li>
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
	<section class="project-section">
		<div class="container">
			<div class="project-list">
                <?php $i = 0;
                foreach ($model as $item): ?>
                <?php if($i <= 2) : ?>
					<div class="project-list-item" data-order="<?= $item->project_order ?>">
						<a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>"
						   style="background-image: url('<?= $item->getFirstImg(550) ?>')">
							<div class="project-list-title"><strong><?= $item->header ?></strong></div>
						</a>
					</div>
                <?php else : ?>
					<div class="project-list-item" data-order="<?= $item->project_order ?>">
						<a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>" style="background-image: url('get_image.php?img=img/loader.gif')" class="background-lazy" data-src="<?= $item->getFirstImg(550) ?>">
							<div class="project-list-title"><strong><?= $item->header ?></strong></div>
						</a>
					</div>
                <?php endif; ?>
                <?php
                $i++;
                endforeach; ?>
			</div>
		</div>

	</section>
    
    <?= $this->render('../section/_complex-project.php'); ?>
    
    <?= $this->render('../section/_connect-blue.php'); ?>
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
            "name": "<?= BaseController::getMessage('320') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/project']); ?>"
        }]
    }
</script>
