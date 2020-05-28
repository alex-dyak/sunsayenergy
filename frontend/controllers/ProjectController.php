<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 18.03.2019
 * Time: 16:55
 */

namespace frontend\controllers;


use backend\models\Project;
use backend\models\Reviews;
use yii\web\NotFoundHttpException;
use Yii;

class ProjectController extends BaseController
{
    public function actions()
    {
        $session = Yii::$app->session;
        if (!$session->isActive) {
            $session->open();
        }

        if (!empty($_GET['utm_source'])) {
            $session->set('utm_source', $_GET['utm_source']);
        }
        if (!empty($_GET['utm_medium'])) {
            $session->set('utm_medium', $_GET['utm_medium']);
        }
        if (!empty($_GET['utm_campaign'])) {
            $session->set('utm_campaign', $_GET['utm_campaign']);
        }

        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    public function actionProject()
    {
        $model = Project::find()->all();
        usort($model, function($a, $b)
        {
            return strcmp($a->project_order, $b->project_order);
        });
        $this->setMeta(self::getTitle('project'), self::getDescription('project'));
        $this->setOgImage('https://sunsayenergy.com' . '/img/blog/info.jpg');

        return $this->render('project', compact('model'));
    }

    public function actionDetailed($symbol)
    {
        $model = Project::findOne(['symbol' => $symbol]);
        if (isset($model)) {
            $other_project = Project::find()->where(['!=', 'symbol', $symbol])->all();
            $reviews = Reviews::find()->where(['=', 'project_id', $model->id])->all();
            $images = $model->getImages();
        } else {
            throw new NotFoundHttpException('Page not found');
        }

        $this->setOgImage('https://sunsayenergy.com' . $model->getFirstImg());
        $this->setMeta($model->title, $model->description);

        return $this->render('detailed', compact('model', 'images', 'other_project', 'reviews'));
    }

    public function actionCategory($symbol)
    {
        $model = Project::find()->where(['category' => $symbol])->all();

        if ($symbol == 'network'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/blog/info.jpg');
            $this->setMeta(self::getTitle('project_category_network'), self::getDescription('project_category_network'));
        elseif ($symbol == 'stand-alone'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/blog/info.jpg');
            $this->setMeta(self::getTitle('project_category_stand-alone'), self::getDescription('project_category_stand-alone'));
        elseif ($symbol == 'hybrid'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/blog/info.jpg');
            $this->setMeta(self::getTitle('project_category_hybrid'), self::getDescription('project_category_hybrid'));
        endif;

        return $this->render('category', compact('model', 'symbol'));
    }
}