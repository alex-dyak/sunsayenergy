<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use mihaildev\ckeditor\CKEditor;
use mihaildev\elfinder\ElFinder;

/* @var $this yii\web\View */
/* @var $model backend\models\Blog */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="blog-form">

    <?php $form = ActiveForm::begin(); ?>


    <!-- Навигация -->
  <!--  <ul class="nav nav-tabs mynav" role="tablist">
        <li class="active"><a href="#main" role="tab" data-toggle="tab">Основное</a></li>
        <li><a href="#ru" role="tab" data-toggle="tab">RU</a></li>
        <li><a href="#blocks" role="tab" data-toggle="tab">EN</a></li>
    </ul>-->

    <?= $form->field($model, 'symbol')->textarea(['rows' => 1]) ?>

    <?= \backend\controllers\FileUploadController::generateImageField('imagePreview', 'blog', 2, $model, $form) ?>


    <?= $form->field($model, 'title')->textarea(['rows' => 1]) ?>
    <?= $form->field($model, 'title_ru')->textarea(['rows' => 1]) ?>
    <?= $form->field($model, 'title_en')->textarea(['rows' => 1]) ?>
    <?= $form->field($model, 'descriptionSEO')->textarea(['rows' => 3]) ?>
    <?= $form->field($model, 'descriptionSEO_ru')->textarea(['rows' => 3]) ?>
    <?= $form->field($model, 'descriptionSEO_en')->textarea(['rows' => 3]) ?>

    <?= $form->field($model, 'header')->textarea(['rows' => 1]) ?>

    <?= $form->field($model, 'header_ru')->textarea(['rows' => 1]) ?>

    <?= $form->field($model, 'header_en')->textarea(['rows' => 1]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'description_en')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'description_ru')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'text')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'text_ru')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'text_en')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'visible')->dropDownList(['1'=>'Да','0'=>'Нет']) ?>



    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
