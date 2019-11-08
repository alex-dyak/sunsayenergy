<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\Reviews */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="reviews-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'role')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'role_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'role_en')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'message')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'message_ru')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'message_en')->textarea(['rows' => 6]) ?>
    <?= $form->field($model, 'project_id')->dropDownList(\yii\helpers\ArrayHelper::map(\backend\models\Project::find()->asArray()->all(),'id','header')); ?>

    <?= \backend\controllers\FileUploadController::generateImageField('imagePreview', 'reviews', 1, $model, $form) ?>

    <?= \backend\controllers\FileUploadController::generateImageField('avatar', 'reviews', 2, $model, $form) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
