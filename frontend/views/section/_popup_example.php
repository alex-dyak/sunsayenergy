<?php use frontend\controllers\BaseController; ?>

<?php if ( 0 && Yii::$app->controller->route != 'site/green' && Yii::$app->controller->route != 'site/types' && Yii::$app->controller->route != 'technology/technology' && Yii::$app->controller->route != 'technology/nine' && Yii::$app->controller->route != 'technology/detailed'): ?>
    <?php $projects = \backend\models\Project::find()->all(); ?>

	<!-- start example popup -->
	<div class="popup">
		<div class="popup__container">
			<div class="popup-close"><img data-src="/img/icon/Close.svg" alt=""></div>
			<div class="popup-example">
                <?php foreach ($projects as $item): ?>
					<div class="popup-example-item">
						<picture>
							<source media="(min-width: 800px)" data-srcset="<?= $item->getFirstImg(650); ?>" type="image/jpg">
							<source media="(max-width: 799px)" data-srcset="<?= $item->getFirstImg(220); ?>" type="image/jpg">
							<img data-src="<?= $item->getFirstImg(650); ?>" alt="">
						</picture>
					</div>
                <?php endforeach; ?>
			</div>
		</div>
	</div>
	<!-- end example popup -->
<?php endif; ?>