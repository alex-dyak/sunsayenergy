<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;
use frontend\controllers\BaseController;

$this->title = $name;
?>
<main class="page-container error">
    <section class="section page-error">
        <div class="page-error__block">

            <div class="error-title">
                <span class="background">404</span>
                <span class="title"><?= nl2br(Html::encode($message)) ?></span>
            </div>

            <div class="error-message">
                <?= BaseController::getMessage('88') ?>
                <br/>
                <?= BaseController::getMessage('89') ?>
            </div>

            <div class="error-button">
                <a href="<?= \yii\helpers\Url::to(['/']); ?>">
                    <button class="btn btn-primary"><?= BaseController::getMessage('90') ?></button>
                </a>
            </div>

        </div>
    </section>
</main>
