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
        if (!empty($_GET['utm_content'])) {
            $session->set('utm_content', $_GET['utm_content']);
        }
        if (!empty($_GET['utm_term'])) {
            $session->set('utm_term', $_GET['utm_term']);
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

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
        $this->setOgDescription(self::getDescription('project'));
        $this->setMeta(self::getTitle('project'), self::getDescription('project'));

        return $this->render('project', compact('model'));
    }

    public function actionDetailed($symbol)
    {
        $model = Project::findOne(['symbol' => $symbol]);
        if (isset($model)) {
            $all_projects = Project::find()->where(['!=', 'symbol', $symbol])->all();
            $rand_keys = array_rand($all_projects, 4);
            $other_project = [];
            foreach ($rand_keys as $key) {
                $other_project[$key] = $all_projects[$key];
            }
            $reviews = Reviews::find()->where(['=', 'project_id', $model->id])->all();
            $images = $model->getImages();
        } else {
            throw new NotFoundHttpException('Page not found');
        }

        $this->setOgImage('https://sunsayenergy.com' . $model->getFirstImg());
        $this->setOgDescription($model->description);
        $this->setMeta($model->title, $model->description);

        return $this->render('detailed', compact('model', 'images', 'other_project', 'reviews'));
    }

    public function actionCategory($symbol)
    {
        $model = Project::find()->where(['category' => $symbol])->all();

        if ($symbol == 'network'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
            $this->setOgDescription(self::getDescription('project_category_network'));
            $this->setMeta(self::getTitle('project_category_network'), self::getDescription('project_category_network'));
        elseif ($symbol == 'stand-alone'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
            $this->setOgDescription(self::getDescription('project_category_stand'));
            $this->setMeta(self::getTitle('project_category_stand-alone'), self::getDescription('project_category_stand-alone'));
        elseif ($symbol == 'hybrid'):
            $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
            $this->setOgDescription(self::getDescription('project_category_hybrid'));
            $this->setMeta(self::getTitle('project_category_hybrid'), self::getDescription('project_category_hybrid'));
        endif;

        return $this->render('category', compact('model', 'symbol'));
    }
}