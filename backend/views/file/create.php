<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\File */

$this->title = 'Добавление';
$this->params['breadcrumbs'][] = ['label' => 'Хранилище файлов', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="file-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
