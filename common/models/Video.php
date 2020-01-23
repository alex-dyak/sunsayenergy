<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "video".
 *
 * @property int $id
 * @property string $video_name_uk
 * @property string $video_name_ru
 * @property string $video_name_en
 * @property string $video_url
 * @property string $video_category
 * @property int $on_home
 */
class Video extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'video';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['video_name_uk', 'video_name_ru', 'video_name_en', 'video_url', 'video_category', 'on_home'], 'required'],
            [['on_home'], 'integer'],
            [['video_name_uk', 'video_name_ru', 'video_name_en', 'video_url', 'video_category'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'video_name_uk' => 'Video Name Uk',
            'video_name_ru' => 'Video Name Ru',
            'video_name_en' => 'Video Name En',
            'video_url' => 'Video Url',
            'video_category' => 'Video Category',
            'on_home' => 'On Home',
        ];
    }
}
