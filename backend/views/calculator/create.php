<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\Calculator */

$this->title = 'Create Calculator';
$this->params['breadcrumbs'][] = ['label' => 'Calculators', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="calculator-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
