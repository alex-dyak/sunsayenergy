<?php

use yii\helpers\Html;
use yii\grid\GridView;

?>
<div class="subscribe-index">
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'email:email',
            'time',

        ],
    ]); ?>
</div>
