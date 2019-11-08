<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\Calculator */

$this->title = 'Update Calculator: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];

?>
<div class="calculator-update">


    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
