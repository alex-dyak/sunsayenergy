<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\Contact */

$this->title = 'Update Contact:';

?>
<div class="contact-update">
    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
