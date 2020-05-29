<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\GalerySearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Galeries';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="galery-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Galery', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'images:ntext',
            'alt:ntext',
            'alt_ru:ntext',
            'alt_en:ntext',
            //'category',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
