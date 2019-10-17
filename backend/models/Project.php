<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "project".
 *
 * @property integer $id
 * @property string $header
 * @property string $images
 * @property string $text
 * @property string $text_ru
 * @property string $text_en
 * @property string $category
 * @property string $reviews
 */
class Project extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'project';
    }

    function behaviors()
    {
        return [
            'images' => [
                'class' => 'dvizh\gallery\behaviors\AttachImages',
                'mode' => 'gallery',
                'quality' => 60,
                'galleryId' => 'picture'
            ],
        ];
    }


    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title','title_ru','title_en','description','description_ru','description_en','text', 'text_ru', 'text_en'], 'string'],
            [['header', 'header_ru', 'header_en', 'category', 'symbol'], 'string', 'max' => 500],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'header' => 'Header',
            'header_ru' => 'Header Ru',
            'header_en' => 'Header En',
            'text' => 'Text',
            'text_ru' => 'Text Ru',
            'text_en' => 'Text En',
            'category' => 'Category',

            'symbol' => 'Символьный код страницы (Можно не заполнять)',
        ];
    }

    public function afterFind()
    {
        if(Yii::$app->language=='ru'){
            $this->text = $this->text_ru;
            $this->header = $this->header_ru;
            $this->title = $this->title_ru;
            $this->description = $this->description_ru;
        }

        if(Yii::$app->language=='en'){
            $this->text = $this->text_en;
            $this->header = $this->header_en;
            $this->title = $this->title_en;
            $this->description = $this->description_en;
        }
        parent::afterFind(); // TODO: Change the autogenerated stub
    }

    public function getFirstImg(){
        $images = $this->getImages();
        return $images[0]->getUrl();
    }

    public function getAllImg(){
        $images = $this->getImages();
        return $images;
    }

    private function rus2translit($string)
    {

        $converter = array(
            'а' => 'a', 'б' => 'b', 'в' => 'v',
            'г' => 'g', 'д' => 'd', 'е' => 'e',
            'ё' => 'e', 'ж' => 'zh', 'з' => 'z',
            'и' => 'i', 'й' => 'y', 'к' => 'k',
            'л' => 'l', 'м' => 'm', 'н' => 'n',
            'о' => 'o', 'п' => 'p', 'р' => 'r',
            'с' => 's', 'т' => 't', 'у' => 'u',
            'ф' => 'f', 'х' => 'h', 'ц' => 'c',
            'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch',
            'ь' => '\'', 'ы' => 'y', 'ъ' => '\'',
            'э' => 'e', 'ю' => 'yu', 'я' => 'ya',

            'ґ' => 'g', 'є' => 'ie', 'ї' => 'yi',
            'і' => 'i',

            'А' => 'A', 'Б' => 'B', 'В' => 'V',
            'Г' => 'G', 'Д' => 'D', 'Е' => 'E',
            'Ё' => 'E', 'Ж' => 'Zh', 'З' => 'Z',
            'И' => 'I', 'Й' => 'Y', 'К' => 'K',
            'Л' => 'L', 'М' => 'M', 'Н' => 'N',
            'О' => 'O', 'П' => 'P', 'Р' => 'R',
            'С' => 'S', 'Т' => 'T', 'У' => 'U',
            'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
            'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sch',
            'Ь' => '\'', 'Ы' => 'Y', 'Ъ' => '\'',
            'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',

            'Ґ' => 'G', 'Є' => 'Ye', 'Ї' => 'Yi',
            'І' => 'I',

        );

        return strtr($string, $converter);
    }

    protected function str2url($str)
    {
        // переводим в транслит
        $str = $this->rus2translit($str);
        // в нижний регистр
        $str = strtolower($str);
        // заменям все ненужное нам на "-"
        $str = preg_replace('~[^-a-z0-9_]+~u', '-', $str);
        // удаляем начальные и конечные '-'
        $str = trim($str, "-");

        return $str;
    }


    public function beforeSave($insert)
    {

        if ($this->symbol == '') {
            $this->symbol = $this->str2url($this->header);
        } else {
            $this->symbol = trim($this->symbol);
        }



            $cache = Yii::$app->cache;
            $key = "update_time";
            $cache->set($key, time());



        return parent::beforeSave($insert); // TODO: Change the autogenerated stub
    }

    public function getReviews()
    {
        return $this->hasMany(Reviews::className(), ['project_id'=>'id']);
    }

}
