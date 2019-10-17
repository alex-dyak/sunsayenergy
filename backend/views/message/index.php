<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\Message */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Языковые сообщения';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="message-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Добавить', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            [
                'attribute' => "message",
                'value' => function ($model) {
                    $val = '';
                    foreach ($model->message as $lang => $msg) {
                        $val .= "[{$lang}] " . \yii\helpers\StringHelper::truncate( $msg, 100) . "<br>";
                    }
                    return $val;
                },
                'format' => 'html'
            ],

            [
                'attribute' => 'pages',
                'filter' => \yii\helpers\ArrayHelper::map(\backend\models\Message::find()->distinct()->orderBy('pages')->all(), 'pages', 'pages'),
                'filterInputOptions' => ['class' => 'form-control form-control-sm']
            ],

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
