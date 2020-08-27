<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\VideoReview */

$this->title = 'Оновити вiдео вiдгук: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Вiдео Вiдгуки', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="video-review-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
