<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\Calculator */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="calculator-form container-fluid">

    <div class="row">
        <div class="col-lg-4">
            <?php $form = ActiveForm::begin(); ?>
            <b>Стоимость 1 кВт</b><br>
            <?php
            $arr = json_decode($model->value_y, true);
            for ($i = 1; $i <= 13; $i++): ?>
                <input class="val form-control-custom" value="<?= $arr['y' . $i] ?>" type="text"
                       name="value_y[y<?= $i ?>]"/>
            <?php endfor; ?>
        </div>


        <div class="col-lg-4">
            <b>Количество генерируемой электоэнергии в год</b><br>
            <?php
            $arr = json_decode($model->value_f, true);
            for ($i = 1; $i <= 13; $i++): ?>
                <input class="val form-control-custom" value="<?= $arr['f' . $i] ?>" type="text"
                       name="value_f[f<?= $i ?>]"/>
            <?php endfor; ?>
        </div>

        <div class="col-lg-4">
            <b> Стоимость резервной части установки</b><br>
            <?php
            $arr = json_decode($model->value_m, true);
            for ($i = 1; $i <= 5; $i++): ?>
                <input class="val form-control-custom" value="<?= $arr['m' . $i] ?>" type="text"
                       name="value_m[m<?= $i ?>]"/>
            <?php endfor; ?>
            <br>
            <b>Стоимость 1 кВА</b><br>
            <?php
            $arr = json_decode($model->value_m1, true);
            for ($i = 1; $i <= 5; $i++): ?>
                <input class="val form-control-custom" value="<?= $arr['m' . $i] ?>" type="text"
                       name="value_m1[m<?= $i ?>]"/>
            <?php endfor; ?>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <?= $form->field($model, 'value_j')->textInput(['class' => 'form-control-custom']) ?>
        </div>
        <div class="col-lg-4">
            <?= $form->field($model, 'value_g')->textInput(['class' => 'form-control-custom']) ?>
        </div>
        <div class="col-lg-4">
            <?= $form->field($model, 'value_l')->textInput(['class' => 'form-control-custom']) ?>
        </div>
        <div class="col-lg-4">
            <?= $form->field($model, 'value_coefsun')->textInput(['class' => 'form-control-custom']) ?>

        </div>
        <div class="col-lg-4">
            <?= $form->field($model, 'value_coefakb')->textInput(['class' => 'form-control-custom']) ?>

        </div>
        <div class="col-lg-4">
            <?= $form->field($model, 'value_coefnight')->textInput(['class' => 'form-control-custom']) ?>
        </div>

        <div class="col-lg-12">
            <div class="form-group">
                <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
            </div>
        </div>
    </div>
    <?php ActiveForm::end(); ?>

</div>
</div>
