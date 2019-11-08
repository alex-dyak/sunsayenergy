<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\search\CalculatorSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="calculator-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'value_y') ?>

    <?= $form->field($model, 'value_f') ?>

    <?= $form->field($model, 'value_m') ?>

    <?php // echo $form->field($model, 'value_j') ?>

    <?php // echo $form->field($model, 'value_g') ?>

    <?php // echo $form->field($model, 'value_l') ?>

    <?php // echo $form->field($model, 'value_m1') ?>

    <?php // echo $form->field($model, 'value_f1') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
