<?php

use yii\helpers\Html;
use yii\grid\GridView;
//use kartik\export\ExportMenu;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\Request */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Заявки с сайта';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="request-index">
<?php
$gridColumns = [
    ['class' => 'yii\grid\SerialColumn'],
    // 'id',
    'name',
    'type',
    'phone',
    'email:email',
    'date',
    //['class' => 'yii\grid\ActionColumn'],
];

?>
<?php
// Renders a export dropdown menu
/*echo ExportMenu::widget([
    'dataProvider' => $dataProvider,
    'columns' => $gridColumns
]);*/

// You can choose to render your own GridView separately
echo \kartik\grid\GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => $gridColumns
]);
?>
</div>
