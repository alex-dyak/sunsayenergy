<?php

namespace frontend\controllers;

use backend\models\File;
use backend\models\Message;
use backend\models\Og;
use backend\models\Seo;
use backend\models\Service;
use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use app\components\Language;

/**
 * Site controller
 */
class BaseController extends Controller
{

    public function beforeaction($action){
        $absoluteUrl = Yii::$app->request->absoluteUrl;
        if ((strpos($absoluteUrl, '/site') !== false) && (strpos($absoluteUrl, '/request') === false)
            && (strpos($absoluteUrl, '/subscribe') === false)
            && (strpos($absoluteUrl, '/calculator') === false)
            && (strpos($absoluteUrl, '/sitemap') === false)) {
            $scriptUrl = '/site';
            $new_url = str_replace($scriptUrl, "", $absoluteUrl);
            $this->redirect($new_url, 301);
        }
        return true;
    }

    public function init()
    {
        parent::init();
        Language::saveLang();
        $id = $this->id;
        if ($id != 'single-blog') {
            $og = Og::findOne(1);
            $this->setOg($og->title);
        }

        // Redirect from english site version.
//        $langs = $this->prefered_language();
//        $lang = '';
//        foreach ($langs as $key => $value) {
//            $lang = $key;
//            break;
//        }
//
//        if (stripos($_SERVER['REQUEST_URI'], '/en/') !== false) {
//            $goal_page = str_replace('/en/', '', $_SERVER['REQUEST_URI']);
//            if ($lang != 'uk') {
//                $lang = $lang . '/';
//            } else {
//                $lang = '';
//            }
//            header('Location: ' . $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/' . $lang . $goal_page);
//            die;
//        }
    }

    /**
     * Return language message
     * @param $id
     * @return string
     */
    public static function getMessage($id)
    {
        $arMess = Yii::$app->cache->get('messages');
        if ($arMess === false) {
            $arMess = Message::find()->asArray()->indexBy('id')->all();
            Yii::$app->cache->set('messages', $arMess, Yii::$app->params['cache']['messages']);
        }

        $arMess[$id]['message'] = json_decode($arMess[$id]['message'], 1);
        if ($arMess[$id]) {
            return $arMess[$id]['message'][Yii::$app->language];
        } else {
            return '';
        }

    }

    public static function is_mobile()
    {
    
         $useragent = $_SERVER['HTTP_USER_AGENT'];
        if (!preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent) || preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr($useragent, 0, 4))):

            return false;

        else:

            return true;

        endif;
    }

    public static function getSeo($symbol)
    {
        return Seo::findOne(['sumbol_id' => $symbol]);
    }

    public static function getTitle($symbol)
    {
        $arMess = Seo::findOne(['sumbol_id' => $symbol]);
        return $arMess->title[Yii::$app->language];
    }

    public static function getDescription($symbol)
    {
        $arMess = Seo::findOne(['sumbol_id' => $symbol]);
        return $arMess->description[Yii::$app->language];
    }

    /**
     * Return service
     * @param $id
     * @return string
     */
    public static function getService($id)
    {
        $arMess = Yii::$app->cache->get('services');
        if ($arMess === false) {
            $arMess = Service::find()->asArray()->indexBy('id')->all();
            Yii::$app->cache->set('services', $arMess, Yii::$app->params['cache']['services']);
        }
        if ($arMess[$id]) {
            return $arMess[$id]['value'];
        } else {
            return '';
        }

    }

    /**
     * Return file and leng title
     * @param $id
     * @return string
     */
    public static function getFile($id)
    {
        $arRes = Yii::$app->cache->get('files');
        if ($arRes === false) {
            $arRes = File::find()->asArray()->indexBy('id')->all();
            Yii::$app->cache->set('files', $arRes, Yii::$app->params['cache']['files']);
        }
        if ($arRes[$id]) {
            $arTemp[$id]['title'] = json_decode($arRes[$id]['title'], 1);
            $arTemp[$id]['title'] = $arTemp[$id]['title'][Yii::$app->language];
            $arTemp[$id]['file'] = $arRes[$id]['file'];
            return $arTemp[$id];
        } else {
            return ["title" => "", "file" => ""];
        }

    }

    protected function setMeta( $title=null, $description=null){
        $this->view->title = $title;
        $this->view->registerMetaTag(['name'=>'description', 'content'=>"$description"]);
    }

    protected function setOg($title){
        $this->view->registerMetaTag(['property'=>'og:url', 'content'=>Yii::$app->request->absoluteUrl]);
        $this->view->registerMetaTag(['property'=>'og:type', 'content'=>"website"]);
        $this->view->registerMetaTag(['property'=>'og:title', 'content'=>"{$title}"]);
    }

    protected function setOgDescription($desc){
        $this->view->registerMetaTag(['property'=>'og:description', 'content'=>"{$desc}"]);
    }

    protected function setOgImage($img){
        $this->view->registerMetaTag(['property'=>'og:image', 'content'=>"{$img}"]);
    }

    protected function setOgLang($lang){
        $this->view->registerMetaTag(['property'=>'og:locale', 'content'=>$lang . "_UK"]);
    }

    protected function setOgSiteName(){
        $this->view->registerMetaTag(['property'=>'og:site_name', 'content'=>'SUNSAY Energy']);
    }

    private function prefered_language()
    {
        $http_accept_language = $_SERVER["HTTP_ACCEPT_LANGUAGE"];

        $available_languages = array("en", "en-US", "uk", "ru", "ru-RU");
        $available_languages = array_flip($available_languages);
        $langs = [];
        preg_match_all('~([\w-]+)(?:[^,\d]+([\d.]+))?~', strtolower($http_accept_language), $matches, PREG_SET_ORDER);
        foreach ($matches as $match) {
            list($a, $b) = explode('-', $match[1]) + array('', '');
            $value = isset($match[2]) ? (float)$match[2] : 1.0;
            if (isset($available_languages[$match[1]])) {
                $langs[$match[1]] = $value;
                continue;
            }
            if (isset($available_languages[$a])) {
                $langs[$a] = $value - 0.1;
            }
        }
        arsort($langs);

        return $langs;
    }

}
