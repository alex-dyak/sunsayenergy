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

class ProjectController extends BaseController
{
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    public function actionProject()
    {
        $model = Project::find()->all();
        $this->setMeta(self::getTitle('project'), self::getDescription('project'));
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

        $this->setMeta($model->title, $model->description);
        return $this->render('detailed', compact('model', 'images', 'other_project', 'reviews'));
    }

    public function actionCategory($symbol)
    {
        $model = Project::find()->where(['category' => $symbol])->all();

        if ($symbol == 'network'):
            $this->setMeta(self::getTitle('project_category_network'), self::getDescription('project_category_network'));
        elseif ($symbol == 'stand-alone'):
            $this->setMeta(self::getTitle('project_category_stand-alone'), self::getDescription('project_category_stand-alone'));
        elseif ($symbol == 'hybrid'):
            $this->setMeta(self::getTitle('project_category_hybrid'), self::getDescription('project_category_hybrid'));
        endif;

        return $this->render('category', compact('model', 'symbol'));
    }
}