<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\models\File */

$this->title = 'Обновление файла: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Хранилище файлов', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Обновление';
?>
<div class="file-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
