<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('7'),
];
?>
<?php
echo 111;
?>
<?php if (!empty($images)): ?>
    <section class="section blog-more">
        <div class="blog__list">
            <?php foreach ($images as $item): ?>
                <div class="blog__list-item">
                    <div class="image">
                        <img data-src="/images/<?= $item->images->imagePreview ?>" alt="<?= $item->title ?>">
                    </div>
                    <div class="description">
                        <?= $item->alt ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
<?php endif; ?>
