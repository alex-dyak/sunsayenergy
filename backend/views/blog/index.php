<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\Blog */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Blogs';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="blog-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Blog', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

         //   'id',
            'header:ntext',
            'symbol',
           // 'header_ru:ntext',
           // 'header_en:ntext',
            //'images:ntext',
            // 'description:ntext',
            // 'description_en:ntext',
            // 'description_ru:ntext',
            // 'text:ntext',
            // 'text_ru:ntext',
            // 'text_en:ntext',
            [
                'attribute'=>'visible',
                'value'=>function($model){
                    //echo "<pre>";print_r($model->status);echo "</pre>";die();
                    if($model->visible == '0'){
                        $status = '<span class="label label-warning">Нет</span>';
                    }elseif($model->visible == '1'){
                        $status = '<span class="label label-success">Да</span>';
                    }
                    return $status;
                },
                'format'=>'html',
            ],
             'date:ntext',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
