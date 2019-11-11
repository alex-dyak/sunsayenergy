<?php

namespace frontend\controllers;

use backend\models\Blog;
use backend\models\Calculator;
use backend\models\Contact;
use backend\models\Request;
use backend\models\Reviews;
use backend\models\Subscribe;
use backend\models\Project;
use Yii;

/**
 * Site controller
 */
class SiteController extends BaseController
{

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    public function actionIndex()
    {
        $contacts = Contact::getContact();
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        $this->setMeta(self::getTitle('index'), self::getDescription('index'));
        return $this->render('index', compact('contacts', 'reviews', 'project'));
    }

    public function actionGreen()
    {
        $this->setMeta(self::getTitle('green'), self::getDescription('green'));
        return $this->render('green');
    }

    public function actionComfort()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        $this->setMeta(self::getTitle('comfort'), self::getDescription('comfort'));
        return $this->render('comfort', compact('reviews','project'));
    }

    public function actionIncome()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        $this->setMeta(self::getTitle('income'), self::getDescription('income'));
        return $this->render('income', compact('reviews','project'));
    }

    public function actionReserve()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        $this->setMeta(self::getTitle('reserve'), self::getDescription('reserve'));
        return $this->render('reserve', compact('reviews','project'));
    }

    public function actionTypes()
    {
        $this->setMeta(self::getTitle('types'), self::getDescription('types'));
        return $this->render('types');
    }

    public function actionAbout()
    {
        $this->setMeta(self::getTitle('about'), self::getDescription('about'));
        return $this->render('about');
    }

    public function actionSuccess()
    {
        return $this->render('success');
    }

    //---------далее экшины которые приходят через ajax---------

    // Заявки с сайта
    public function actionRequest()
    {
        if (Yii::$app->request->isAjax) {
            $post = Yii::$app->request->post();
            $model = new Request();
            $model->sendBitrix($post['name'], $post['phone'], $post['email'], $post['type']);
            //TODO: переименовать метод
            Request::subscribeEsputnik($post['email'], "request_measurement", $post['name'], $post['phone']);
            //TODO: Вынести эту дрянь в модель
            $model->name = $post['name'];
            $model->email = $post['email'];
            $model->phone = $post['phone'];
            $model->type = $post['type'];
            $model->date = date('d.m.Y H:i:s');
            if ($model->save()) {
                return true;
            }
        }
    }

    //подписка с футера
    public function actionSubscribe()
    {
        if (Yii::$app->request->isAjax) {
            $post = Yii::$app->request->post();
            //TODO: Вынести эту дрянь в модель
            $model = new Subscribe();
            $model->email = $post['email'];
            $model->time = date('d.m.Y H:i:s');
            Request::subscribeEsputnik($post['email'], $post['esputnik']);
            if ($model->save()) {
                return true;
            }
        }
    }

    public function actionCalculator($type)
    {
        if (Yii::$app->request->isAjax) {
            $find = 'value_' . strtolower($type);
            $data = Calculator::findOne(['id' => 1]);
            return $data[$find];
        }
    }

    public function actionSitemap()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_XML;
        //повторно т.к. может не сработать
        header("Content-type: text/xml");
        echo $this->getXml();
        Yii::$app->end();

    }


    public function getXml()
    {
        $host = Yii::$app->request->hostInfo; // домен сайта
        $dinamimic_link = Blog::find()->select('symbol')->all();
        $static_link = [
            '/green-tariff',
            '/solar-power-for-autonomous-power',
            '/solar-power-station-for-income',
            '/solar-power-for-backup-power',
            '/technology',
            '/technology/faq-about-solar-energy',
            '/types-of-solar-power-plants',
            '/about',
            '/project',
            '/project/category/network',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-martusivka',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-gatne',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-nove',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-lebedivka',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-ivankiv',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-marhalivka',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-vishen-ki',
            '/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-plyuti',
        ];

        ob_start();
        echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc><?= $host ?></loc>
                <changefreq>always</changefreq>
                <priority>1.0</priority>
            </url>
            <url>
                <loc><?= $host.'/ru/' ?></loc>
                <changefreq>always</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc><?= $host.'/en/' ?></loc>
                <changefreq>always</changefreq>
                <priority>0.8</priority>
            </url>

            <?php foreach ($static_link as $item): ?>
                <url>
                    <loc><?= $host . $item ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc><?= $host .'/ru'. $item ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>
                </url>
                <url>
                    <loc><?= $host .'/en'. $item ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>
                </url>
            <?php endforeach; ?>

            <?php foreach ($dinamimic_link as $item): ?>
                <url>
                    <loc><?= $host . '/technology/' . $item->symbol ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>

                </url>
            <?php endforeach; ?>

            <?php foreach ($dinamimic_link as $item): ?>
                <url>
                    <loc><?= $host . '/ru/technology/' . $item->symbol ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>

                </url>
            <?php endforeach; ?>
            <?php foreach ($dinamimic_link as $item): ?>
                <url>
                    <loc><?= $host . '/en/technology/' . $item->symbol ?></loc>
                    <changefreq>always</changefreq>
                    <priority>0.8</priority>

                </url>
            <?php endforeach; ?>
        </urlset>
        <?php return ob_get_clean();
    }


}

