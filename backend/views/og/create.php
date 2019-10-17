<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\Og */

$this->title = 'Create Og';
$this->params['breadcrumbs'][] = ['label' => 'Ogs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="og-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
