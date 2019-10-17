<?php
return [
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
            'cachePath' => Yii::getAlias('@frontend') . '/runtime/cache'
        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
        ],
    ],
    'modules' => [
        'gallery' => [
            'class' => 'dvizh\gallery\Module',
            'imagesStorePath' => dirname(dirname(__DIR__)).'/frontend/web/images/store', //path to origin images
            'imagesCachePath' => dirname(dirname(__DIR__)).'/frontend/web/images/cache', //path to resized copies
            'graphicsLibrary' => 'GD',
            'placeHolderPath' => '@webroot/images/placeHolder.png',
            'adminRoles' => [],
        ],
        //...
    ],
];
