<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Gallery */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="gallery-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= \backend\controllers\FileUploadController::generateImageField('imagePreview', 'gallery', 2, $model, $form) ?>

    <?= $form->field($model, 'alt')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'alt_ru')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'alt_en')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
