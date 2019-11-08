<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use mihaildev\ckeditor\CKEditor;
use mihaildev\elfinder\ElFinder;

/* @var $this yii\web\View */
/* @var $model backend\models\Project */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="project-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>



    <?= $form->field($model, 'header')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'header_ru')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'header_en')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'title_ru')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'title_en')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'description_en')->textInput(['maxlength' => true]) ?>
    <?= $form->field($model, 'description_ru')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'text')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'text_ru')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'text_en')->widget(CKEditor::className(), [
        'editorOptions' => ElFinder::ckeditorOptions('elfinder', []),
    ]); ?>

    <?= $form->field($model, 'category')->dropDownList(['network'=>'Мережеві установки','stand-alone'=>'Автономні установки','hybrid'=>'Гібридні установки']) ?>


    <?= $form->field($model, 'symbol')->textInput(['maxlength' => true]) ?>

    <?=\dvizh\gallery\widgets\Gallery::widget(
        [
            'model' => $model,
            'previewSize' => '50x50',
            'fileInputPluginLoading' => true,
            'fileInputPluginOptions' => []
        ]
    ); ?>


    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
