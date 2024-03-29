<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\search\ContactSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="contact-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'phone') ?>

    <?= $form->field($model, 'email') ?>

    <?= $form->field($model, 'address') ?>

    <?= $form->field($model, 'address_ru') ?>

    <?php // echo $form->field($model, 'address_en') ?>

    <?php // echo $form->field($model, 'link_fb') ?>

    <?php // echo $form->field($model, 'link_linkedin') ?>

    <?php // echo $form->field($model, 'link_viber') ?>

    <?php // echo $form->field($model, 'link_mail') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
