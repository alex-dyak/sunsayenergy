<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model backend\models\Calculator */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Calculators', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="calculator-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'value_y:ntext',
            'value_f:ntext',
            'value_m:ntext',
            'value_j',
            'value_g',
            'value_l',
            'value_m1:ntext',
            'value_f1:ntext',
        ],
    ]) ?>

</div>
