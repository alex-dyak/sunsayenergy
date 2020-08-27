<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\VideoReview */

$this->title = 'Створити новий вiдео вiдгук';
$this->params['breadcrumbs'][] = ['label' => 'Вiдео Вiдгуки', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="video-review-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
