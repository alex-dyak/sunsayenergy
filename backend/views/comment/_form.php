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

    <?= $form->field($model, 'admin')->hiddenInput(['value' => 1])->label(false); ?>

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

    <?= $form->field($model, 'article_title')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Зберегти', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
