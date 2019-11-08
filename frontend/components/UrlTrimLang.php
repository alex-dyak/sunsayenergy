<?php

namespace frontend\components;

use backend\models\Store;
use frontend\controllers\BaseController;
use frontend\controllers\BotController;
use Yii;
use frontend\models\Menu;
use yii\base\Widget;
use yii\helpers\Url;

class UrlTrimLang extends Widget
{
    public function init()
    {

    }

    public function run()
    {
        $url = Yii::$app->request->url;
        $url = preg_replace('/\/ru\//', '', $url);
        $url = preg_replace('/\/en\//', '', $url);
        $url = ltrim($url, '\/');
        return $url;
    }
}