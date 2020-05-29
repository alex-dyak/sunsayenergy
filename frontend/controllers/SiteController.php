<?php

namespace frontend\controllers;

use backend\models\Blog;
use backend\models\Calculator;
use backend\models\Contact;
use backend\models\Request;
use backend\models\Reviews;
use backend\models\Subscribe;
use backend\models\Project;
use common\models\Video;
use Yii;

/**
 * Site controller
 */
class SiteController extends BaseController
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

    public function actionIndex()
    {
        $contacts = Contact::getContact();
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        usort($project, function($a, $b)
        {
            return strcmp($a->project_order, $b->project_order);
        });
        $videos = Video::find()->all();

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-desktop.png');
        $this->setMeta(self::getTitle('index'), self::getDescription('index'));

        return $this->render('index', compact('contacts', 'reviews', 'project', 'videos'));
    }

	/**
	 * Displays video page.
	 */
	public function actionVideo()
	{
	    $videos = Video::find()->all();

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-desktop.png');
        $this->setMeta(self::getTitle('video'), self::getDescription('video'));

		return $this->render('video',compact('videos'));
	}

    public function actionGreen()
    {
        $this->setOgImage('https://sunsayenergy.com' . '/img/green/1.jpg');
        $this->setMeta(self::getTitle('green'), self::getDescription('green'));

        return $this->render('green');
    }

    public function actionComfort()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        usort($project, function($a, $b)
        {
            return strcmp($a->project_order, $b->project_order);
        });

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-2.png');
        $this->setMeta(self::getTitle('comfort'), self::getDescription('comfort'));

        return $this->render('comfort', compact('reviews','project'));
    }

    public function actionIncome()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        usort($project, function($a, $b)
        {
            return strcmp($a->project_order, $b->project_order);
        });

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
        $this->setMeta(self::getTitle('income'), self::getDescription('income'));

        return $this->render('income', compact('reviews','project'));
    }

    public function actionReserve()
    {
        $reviews = Reviews::getReviews();
        $project = Project::find()->all();
        usort($project, function($a, $b)
        {
            return strcmp($a->project_order, $b->project_order);
        });

        $this->setOgImage('https://sunsayenergy.com' . '/img/house-3.png');
        $this->setMeta(self::getTitle('reserve'), self::getDescription('reserve'));

        return $this->render('reserve', compact('reviews','project'));
    }

    public function actionTypes()
    {
        $this->setOgImage('https://sunsayenergy.com' . '/img/types/SolarEdge.png');
        $this->setMeta(self::getTitle('types'), self::getDescription('types'));

        return $this->render('types');
    }

    public function actionAbout()
    {
        $this->setOgImage('https://sunsayenergy.com' . '/img/about/1.jpg');
        $this->setMeta(self::getTitle('about'), self::getDescription('about'));

        return $this->render('about');
    }

    public function actionSuccess()
    {
        return $this->render('success');
    }

    public function actionCommercial()
    {
        $this->setOgImage('https://sunsayenergy.com' . '/img/house-1.png');
        $this->setMeta(self::getTitle('commercial_stations'), self::getDescription('commercial_stations'));

        return $this->render('commercial_stations');
    }

    //---------далее экшины которые приходят через ajax---------

    // Заявки с сайта
    public function actionRequest()
    {
        if (Yii::$app->request->isAjax) {
            $post = Yii::$app->request->post();
            $model = new Request();
            $model->sendBitrix($post['name'], $post['phone'], $post['email'], $post['type'], $post['utm_source'], $post['utm_medium'], $post['utm_campaign']);
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
            '/video',
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
        $a =  '<?xml version="1.0" encoding="UTF-8"?>' .
        '<urlset
                xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


            <url>
                <loc>https://sunsayenergy.com/</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>1.00</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/solar-power-station-for-income</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/solar-power-for-backup-power</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/solar-power-for-autonomous-power</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/green-tariff</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/about</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/video</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-ivankiv</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-gatne</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-marhalivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-plyuti</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-lebedivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-vishen-ki</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-nove</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-martusivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/solar-power-station-for-income</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/types-of-solar-power-plants</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/solar-power-for-backup-power</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/solar-power-for-autonomous-power</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/green-tariff</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/pdf/law.pdf</loc>
                <lastmod>2019-11-11T09:29:58+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/pdf/rate.pdf</loc>
                <lastmod>2019-11-11T09:29:58+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/faq-about-solar-energy</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/efektivnist-sonyachnih-batarey-v-pohmuru-pogodu</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/yaki-sonyachni-paneli-kraschi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/chi-pracyuyut-sonyachni-batareyi-vzimku</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/okupnist-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/svitovi-innovaciyi-v-sonyachniy-energetici-za-2019-rik</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/scho-podibnogo-mizh-kaliforniys-koyu-kachkoyu-ta-strimkim-zletom-vde-v-ukrayini</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/rezervna-ses-vs-palivniy-generator</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/efektivnist-kkd-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/ochikuvannya-vs-real-nist-komplekt-sonyachnih-batarey-dlya-domu-razom-z-usima-komplektuyuchimi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/ne-pro-sonyachni-batareyi-zeleniy-tarif-ta-yogo-vpliv-na-sonyachnu-energetiku-v-ukrayini</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/vstanovlennya-sonyachnih-paneley-na-dahu-yak-uniknuti-vtratu-generaciyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/ogolosit-ves-spisok-bud-laska-tipi-sonyachnih-elektrostanciy</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/sistemi-avtonomnogo-elektropostachannya-budinku</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/amorfniy-kremniy-modifikuie-kristalichni-sonyachni-batareyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/scho-vazhlivo-znati-persh-nizh-kupiti-sonyachni-batareyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/na-pochatku-buv-kremniy-virobnictvo-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/kontroler-zaryadu-dlya-sonyachnoyi-elektrostanciyi-yogo-funkciyi-ta-osnovni-tipi-pristroyiv</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/zakon-10357-vstupiv-u-silu-scho-dali</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/dvonapravleniy-lichil-nik-dlya-zelenogo-tarifu</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/znayomstvo-z-zelenim-tarifom-perevagi-vikoristannya-procedura-oformlennya-ta-yogo-koristuvachi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/bez-vitrat-yak-potuzhnist-sonyachnoyi-elektrostanciyi-1kvt-poetapno-zbil-shiti-do-30-kvt</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/3-vidtinki-tier-yak-klasifikuiet-sya-sonyachna-batareya</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/zakonoproekt-10357-na-storoni-al-ternativnoyi-energetiki</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/7-strahiv-investora-vse-pro-sonyachni-paneli</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/hto-krutishiy-vidi-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/technology/magiya-tehnologiy-chomu-pri-zamiri-ne-vikoristovuiet-sya-ruletka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/project/category/network</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/about</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/video</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-ivankiv</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-gatne</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-marhalivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-plyuti</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-lebedivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-vishen-ki</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-nove</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/ustanovka-merezhevoyi-sonyachnoyi-elektrostanciyi-s-martusivka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.64</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/types-of-solar-power-plants</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/faq-about-solar-energy</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/efektivnist-sonyachnih-batarey-v-pohmuru-pogodu</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/yaki-sonyachni-paneli-kraschi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/chi-pracyuyut-sonyachni-batareyi-vzimku</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/okupnist-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/svitovi-innovaciyi-v-sonyachniy-energetici-za-2019-rik</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/scho-podibnogo-mizh-kaliforniys-koyu-kachkoyu-ta-strimkim-zletom-vde-v-ukrayini</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/rezervna-ses-vs-palivniy-generator</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/efektivnist-kkd-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/ochikuvannya-vs-real-nist-komplekt-sonyachnih-batarey-dlya-domu-razom-z-usima-komplektuyuchimi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/ne-pro-sonyachni-batareyi-zeleniy-tarif-ta-yogo-vpliv-na-sonyachnu-energetiku-v-ukrayini</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/vstanovlennya-sonyachnih-paneley-na-dahu-yak-uniknuti-vtratu-generaciyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/ogolosit-ves-spisok-bud-laska-tipi-sonyachnih-elektrostanciy</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/sistemi-avtonomnogo-elektropostachannya-budinku</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/amorfniy-kremniy-modifikuie-kristalichni-sonyachni-batareyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/scho-vazhlivo-znati-persh-nizh-kupiti-sonyachni-batareyi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/na-pochatku-buv-kremniy-virobnictvo-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/kontroler-zaryadu-dlya-sonyachnoyi-elektrostanciyi-yogo-funkciyi-ta-osnovni-tipi-pristroyiv</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/zakon-10357-vstupiv-u-silu-scho-dali</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/dvonapravleniy-lichil-nik-dlya-zelenogo-tarifu</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/znayomstvo-z-zelenim-tarifom-perevagi-vikoristannya-procedura-oformlennya-ta-yogo-koristuvachi</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/bez-vitrat-yak-potuzhnist-sonyachnoyi-elektrostanciyi-1kvt-poetapno-zbil-shiti-do-30-kvt</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/3-vidtinki-tier-yak-klasifikuiet-sya-sonyachna-batareya</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/zakonoproekt-10357-na-storoni-al-ternativnoyi-energetiki</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/7-strahiv-investora-vse-pro-sonyachni-paneli</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/hto-krutishiy-vidi-sonyachnih-batarey</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/technology/magiya-tehnologiy-chomu-pri-zamiri-ne-vikoristovuiet-sya-ruletka</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>
            <url>
                <loc>https://sunsayenergy.com/ru/project/category/network</loc>
                <lastmod>2020-02-05T16:03:34+00:00</lastmod>
                <priority>0.51</priority>
            </url>


        </urlset>';
       // ob_clean();
        return $a;
    }
}
