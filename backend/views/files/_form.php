<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $model backend\models\Files */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="files-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?php if (!empty($model->files)) {
        echo $model->files;
    }else{
     echo $form->field($model, 'file')->fileInput();
    }
    ?>


    <?php
    echo Html::a('<span class="glyphicon glyphicon-trash"></span>', ['files/deleteimage', 'id' => $model->id], [
        'onclick' =>
            "$.ajax({
             type:'POST',
             cache: false,
             url: '" . Url::to(['files/deleteimage', 'id' => $model->id]) . "',
             success  : function(response) {
                 $('.link-del').html(response);
                 $('.postImg').remove();
             }
          });
     return false;
     $('.postImg').remove();",
        'class' => 'link-del'
    ]);


    ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
