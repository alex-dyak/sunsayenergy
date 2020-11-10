<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $model common\models\Comment */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Коментарi до статтi';
$this->params['breadcrumbs'][] = ['label' => 'Comments', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="comment-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('До статей', ['articles'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
         'dataProvider' => $dataProvider,
         'columns' => [
             ['class' => 'yii\grid\SerialColumn'],

             'id',
             'name',
             'comment:ntext',
             'article_title',
             'response:ntext',
             'published',

             [
                 'class' => 'yii\grid\ActionColumn',
                 'template' => '{update} {delete}',

                 'urlCreator' => function ($action, $model, $key, $index) {
                     if ($action === 'update') {
                         $url = \yii\helpers\Url::toRoute(['comment/update', 'id' => $model->id, 'article_id' => $model->article_id]);
                         return $url;
                     } elseif ($action === 'delete') {
                         $url = \yii\helpers\Url::toRoute(['comment/delete', 'id' => $model->id, 'article_id' => $model->article_id]);
                         return $url;
                     }
                 }
             ],
         ],
     ]); ?>

</div>
