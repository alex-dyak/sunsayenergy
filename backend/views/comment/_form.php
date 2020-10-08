<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\date\DatePicker;

/* @var $this yii\web\View */
/* @var $model common\models\Comment */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="comment-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'comment')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'comment_date')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'response')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'response_date')->widget(DatePicker::classname(), [
        'options' => ['placeholder' => 'Виберiть дату вiдповiдi ...'],
        'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'dd-m-yyyy',
            'todayHighlight' => true
        ]
    ]); ?>

    <?= $form->field($model, 'published')->dropDownList(['no' =>'no', 'yes' =>'yes']) ?>

    <?= $form->field($model, 'article_id')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Publish', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>