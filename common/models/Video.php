<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "video".
 *
 * @property int $id
 * @property string $video_name
 * @property string $video_url
 * @property string $video_category
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
            [['video_name', 'video_url', 'video_category'], 'required'],
            [['video_name', 'video_url', 'video_category'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'video_name' => 'Video Name',
            'video_url' => 'Video Url',
            'video_category' => 'Video Category',
        ];
    }
}
