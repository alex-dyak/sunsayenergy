<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\VideoReview */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="video-review-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'video_name_uk')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'video_name_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'video_name_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'video_url')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
