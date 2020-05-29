<?php

namespace common\models;

use Yii;
use yii\web\UploadedFile;

/**
 * This is the model class for table "gallery".
 *
 * @property int $id
 * @property string $images
 * @property string $alt
 * @property string $alt_ru
 * @property string $alt_en
 * @property string $category
 */
class Gallery extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'gallery';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['imagePreview'], 'file', 'extensions' => 'png, jpg'],
            [['alt', 'alt_ru', 'alt_en'], 'string'],
            [['category'], 'required'],
            [['category'], 'string', 'max' => 256],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'images' => 'Images',
            'alt' => 'Alt',
            'alt_ru' => 'Alt Ru',
            'alt_en' => 'Alt En',
            'category' => 'Category',
        ];
    }

    public function beforeSave($insert)
    {
        $this->imagePreview = UploadedFile::getInstance($this, 'imagePreview');

        if ($this->images == null) {
            $this->images = [
                "imagePreview" => ""
            ];
            $this->images = json_encode($this->images);
            $this->images = json_decode($this->images);
        }

        if ($this->imagePreview) {
            $name = $this->generateName() . '.' . $this->imagePreview->extension;
            $this->imagePreview->saveAs(Yii::getAlias("@frontend") . '/web/images/' . $name);
            $this->images->imagePreview = $name;
        }
        $this->images = json_encode($this->images);


        $cache = Yii::$app->cache;
        $key = "update_time";
        $cache->set($key, time());

        return parent::beforeSave($insert);
    }

    public function afterFind()
    {
        $this->images = json_decode($this->images);

        if (Yii::$app->language == 'ru') {
            $this->alt = $this->alt_ru;
        }

        if (Yii::$app->language == 'en') {
            $this->alt = $this->alt_en;
        }

        parent::afterFind();
    }

}
