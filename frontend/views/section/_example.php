<?php use frontend\controllers\BaseController; ?>


<?php $projects = \backend\models\Project::find()->all();


?>

<section class="section example">
    <div class="example__content">
        <div class="example__content-title">
            <h2><?= BaseController::getMessage('330') ?></h2>
        </div>
        <div class="example__content-list example-carousel">
            <?php foreach ($projects as $item): ?>
            <div class="example__content-list__item">
                <a href="<?= \yii\helpers\Url::to(['project/detailed', 'symbol' => $item->symbol]) ?>">
                  <picture>
                    <source media="(min-width: 800px)" srcset="<?= $item->getFirstImg(650); ?>" type="image/jpg">
                    <source media="(max-width: 799px)" srcset="<?= $item->getFirstImg(350); ?>" type="image/jpg">
                    <img src="<?= $item->getFirstImg(650); ?>" alt="" class="check-slick">
                  </picture>
                </a>
            </div>
            <?php endforeach; ?>
            <?php
              // <!-- <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/2_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/2_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/2_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/3_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/3_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/3_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/4_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/4_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/4_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/5_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/5_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/5_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/6_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/6_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/6_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/7_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/7_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/7_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/8_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/8_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/8_650w.jpg" alt="">
              //     </picture>
              // </div>
              // <div class="example__content-list__item">
              //     <picture>
              //       <source media="(min-width: 800px)" data-srcset="/img/example/9_650w.jpg" type="image/jpg">
              //       <source media="(max-width: 799px)" data-srcset="/img/example/9_220w.jpg" type="image/jpg">
              //       <img data-src="/img/example/9_650w.jpg" alt="">
              //     </picture>
              // </div> -->
            ?>
        </div>
    </div>
</section>
