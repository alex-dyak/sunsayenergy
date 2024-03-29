<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\Message */

$this->title = 'Языковые сообщения';
$this->params['breadcrumbs'][] = ['label' => 'Языковые сообщения', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="message-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
