<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\Service */

$this->title = 'Создание';
$this->params['breadcrumbs'][] = ['label' => 'Служебные', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="service-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
