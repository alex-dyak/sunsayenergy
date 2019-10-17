<?php
use yii\helpers\Html;

/* @var $this \yii\web\View */
/* @var $content string */
?>

<header class="main-header">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


    <a class="logo" href="/" style="background-image: url(/img/logo.png);background-size: 50%;background-repeat: no-repeat;background-position: center;"><span class="logo-mini">APP</span><span class="logo-lg"></span></a>
    <nav class="navbar navbar-static-top" role="navigation">

        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <ul class="nav navbar-nav" style="float:right">
            <li class="hidden-xxs">
                <a href="<?= \yii\helpers\Url::to(['/site/logout']) ?>" class="btn">
                    <?= Yii::$app->user->identity->username ?> <i class="fa fa-power-off"></i>
                </a>
            </li>
            </ul>
    </nav>
</header>
