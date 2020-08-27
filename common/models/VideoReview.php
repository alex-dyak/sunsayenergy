<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "video_review".
 *
 * @property int $id
 * @property string $video_name_uk
 * @property string $video_name_ru
 * @property string $video_name_en
 * @property string $video_url
 */
class VideoReview extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'video_review';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['video_name_uk', 'video_name_ru', 'video_name_en', 'video_url'], 'required'],
            [['video_name_uk', 'video_name_ru', 'video_name_en', 'video_url'], 'string', 'max' => 255],
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
        ];
    }
}
