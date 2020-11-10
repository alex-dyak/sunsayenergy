<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $model common\models\Comment */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Статтi з коментарями';
$this->params['breadcrumbs'][] = ['label' => 'Comments', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="comment-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= GridView::widget([
         'dataProvider' => $dataProvider,
         'columns' => [
             ['class' => 'yii\grid\SerialColumn'],
             'article_title',
             [
                 'class' => 'yii\grid\ActionColumn',
                 'header'=>'Дивитись коментарi',
                 'template' => '{view}',
                 'buttons' => [
                     //view button
                     'view' => function ($url, $model) {
                         return  Html::a('<span class="fa fa-search"></span>Коментарi', $url,
                                         [ 'title' => Yii::t('app', 'Коментарi'), 'class'=>'btn btn-primary btn-xs', ]) ;
                     },
                 ],
                 'urlCreator' => function ($action, $model, $key, $index) {
                     if ($action === 'view') {
                         $url = \yii\helpers\Url::toRoute(['comment/comments', 'article_id' => $model->article_id]);
                         return $url;
                     }
                 }

             ],
         ],
     ]); ?>

</div>
