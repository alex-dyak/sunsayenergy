<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 18.03.2019
 * Time: 16:55
 */

namespace frontend\controllers;


use backend\models\Blog;
use common\models\Comment;
use Yii;

class TechnologyController extends BaseController
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

    public function actionTechnology()
    {
        $articles = Blog::find()->orderBy(['id' => SORT_DESC, 'visible'=>1])->all();

        $this->setOg(self::getTitle('technology'));
        $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
        $this->setOgDescription(self::getDescription('technology'));
        $this->setMeta(self::getTitle('technology'), self::getDescription('technology'));

        return $this->render('technology', compact('articles'));
    }

    public function actionDetailed($symbol)
    {
        $article = Blog::findOne(['symbol'=>$symbol]);
        $other_articles = Blog::find()->where(['<>','symbol', $symbol])->orderBy(['id' => SORT_DESC])->limit(4)->all();

        // Get comments for current article.
        $comments = Comment::find()->where(['article_id' => $article->id, 'published' => 'yes'])->orderBy(['id' => SORT_DESC])->all();

        if (stripos($_SERVER['REDIRECT_URL'], 'ru') === false) {
            $lang = 'ua';
        } else {
            $lang = 'ru';
        }

        $this->setOgLang($lang);
        $this->setOgSiteName();
        $img = 'https://sunsayenergy.com/images/' . $article->images->imagePreview;
        $this->setMeta($article->title, $article->descriptionSEO);

        return $this->render('detailed', compact(['article','other_articles', 'img', 'comments']));
    }

    public function actionNine()
    {
        $other_articles = Blog::find()->where(['visible'=>1])->limit(4)->all();
        $this->setOgImage('https://sunsayenergy.com' . '/img/house-desktop.png');
        $this->setOgDescription(self::getDescription('nine'));
        $this->setMeta(self::getTitle('nine'), self::getDescription('nine'));

        return $this->render('nine', compact(['other_articles']));
    }

}