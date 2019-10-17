<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\search\ProjectSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="project-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'header') ?>

    <?= $form->field($model, 'images') ?>

    <?= $form->field($model, 'text') ?>

    <?= $form->field($model, 'text_ru') ?>

    <?php // echo $form->field($model, 'text_en') ?>

    <?php // echo $form->field($model, 'category') ?>

    <?php // echo $form->field($model, 'reviews') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
