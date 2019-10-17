<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 18.03.2019
 * Time: 16:55
 */

namespace frontend\controllers;


use backend\models\Blog;
use yii\web\HttpException;

class TechnologyController extends BaseController
{
    public function actionTechnology()
    {
        $articles = Blog::findAll(['visible'=>1]);
        $this->setMeta(self::getTitle('technology'), self::getDescription('technology'));
        return $this->render('technology', compact('articles'));
    }

    public function actionDetailed($symbol)
    {
        $article = Blog::findOne(['symbol'=>$symbol]);
        $other_articles = Blog::find()->andWhere(['<>','symbol', $symbol])->limit(4)->all();
        $this->setMeta($article->title, $article->descriptionSEO);

        return $this->render('detailed', compact(['article','other_articles']));
    }

    public function actionNine()
    {
        $other_articles = Blog::find()->where(['visible'=>1])->limit(4)->all();
        $this->setMeta(self::getTitle('nine'), self::getDescription('nine'));
        return $this->render('nine', compact(['other_articles']));
    }

}