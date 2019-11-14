<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('5'),
];
?>
    <main class="page-container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
    <section class="section why">
      <div class="greenwhy__content">
        <div class="greenwhy__content-info">
          <div class="greenwhy__content-info__title">
            <h1 class="title"><?= BaseController::getMessage('97') ?></h1>
          </div>
          <div class="greenwhy__content-info__description"><?= BaseController::getMessage('98') ?></div>
          <div class="greenwhy__content-info__more"><a class="btn btn-primary" href="#info"><?= BaseController::getMessage('100') ?></a></div>
        </div>
        <div class="greenwhy__content-image">
            <picture>
                <source media="(min-width: 600px)" data-srcset="/img/green/1.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/green/m_1.jpg" type="image/jpg">
                <img data-src="/img/green/1.jpg" alt=""  class="image-pc image-mobile">
            </picture>
          </div>
      </div>
    </section>
    <section class="section legislation" id="info">
      <div class="legislation__content">
        <div class="legislation__content-image">
          <picture>
                <source media="(min-width: 600px)" data-srcset="/img/green/2.jpg" type="image/jpg">
                <source media="(max-width: 599px)" data-srcset="/img/green/m_2.jpg" type="image/jpg">
                <img data-src="/img/green/2.jpg" alt=""  class="image-pc image-mobile">
            </picture>
          </div>
        <div class="legislation__content-info">
          <div class="legislation__content-info__title">
            <h2 class="title"><?= BaseController::getMessage('101') ?></h2>
          </div>
          <div class="legislation__content-info__description"><?= BaseController::getMessage('104') ?></div>
          <div class="legislation__content-info__more">
            <a class="btn btn-secondary" href="/pdf/law.pdf" target="_blank" download><?= BaseController::getMessage('105') ?></a>
            <a class="btn btn-secondary" href="/pdf/rate.pdf" target="_blank" download><?= BaseController::getMessage('106') ?></a></div>
        </div>
      </div>
    </section>
    <section class="section greenwork">
        <div class="type__content-title" style="opacity: 1;">
            <h2><?= BaseController::getMessage('398') ?></h2>
        </div>
      <div class="work__content">
        <div class="work__content-list">
          <div class="work__content-list__item active" data-id="1"><span><span><?= BaseController::getMessage('107') ?></span></span></div>
          <div class="work__content-list__item" data-id="2"><span><span><?= BaseController::getMessage('108') ?></span></span></div>
          <div class="work__content-list__item" data-id="3"><span><span><?= BaseController::getMessage('109') ?></span></span></div>
          <div class="work__content-list__item" data-id="4"><span><span><?= BaseController::getMessage('110') ?></span></span></div>
          <div class="work__content-list__item" data-id="5"><span><span><?= BaseController::getMessage('111') ?></span></span></div>
          <div class="work__content-list__item" data-id="6"><span><span><?= BaseController::getMessage('112') ?></span></span></div>
        </div>
        <div class="work__content-list-mobile">
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('107') ?></span></span></div>
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('108') ?></span></span></div>
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('109') ?></span></span></div>
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('110') ?></span></span></div>
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('111') ?></span></span></div>
          <div class="work__content-list-mobile__item"><span><span><?= BaseController::getMessage('112') ?></span></span></div>
        </div>
        <div class="work__content-info">
          <div class="work__content-info__item active" data-id="1">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('113') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/1.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_1.jpg" alt=""></div>
          </div>
          <div class="work__content-info__item" data-id="2">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('114') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/2.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_2.jpg" alt=""></div>
          </div>
          <div class="work__content-info__item" data-id="3">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('115') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/3.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_3.jpg" alt=""></div>
          </div>
          <div class="work__content-info__item" data-id="4">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('117') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/4.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_4.jpg" alt=""></div>
          </div>
          <div class="work__content-info__item" data-id="5">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('118') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/5.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_5.jpg" alt=""></div>
          </div>
          <div class="work__content-info__item" data-id="6">
            <div class="work__content-info__item-info">
              <div class="message"><?= BaseController::getMessage('120') ?></div>
            </div>
            <div class="work__content-info__item-image"><img class="rate-maskdesc" data-src="/img/green/work/6.jpg" alt=""><img
                class="rate-maskmobile" data-src="/img/green/work/m_6.jpg" alt=""></div>
          </div>
        </div>
      </div>
    </section>

    <?= $this->render('../section/_complex.php'); ?>
    <?= $this->render('../section/_connect.php'); ?>
  </main>

<?php

$this->registerJsFile('/js/onload/green.js', ['position' => \yii\web\View::POS_END]);

?>