<?php

namespace common\models;

use Yii;
use kartik\date\DatePicker;

/**
 * This is the model class for table "comment".
 *
 * @property int $id
 * @property string $name
 * @property string $comment
 * @property string $comment_date
 * @property string $response
 * @property string $response_date
 * @property string $published
 * @property int $article_id
 */
class Comment extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'comment';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'comment', 'comment_date', 'article_id'], 'required'],
            [['comment', 'response'], 'string'],
            [['article_id'], 'integer'],
            [['name', 'comment_date', 'response_date'], 'string', 'max' => 255],
            [['published'], 'string', 'max' => 128],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'comment' => 'Comment',
            'comment_date' => 'Comment Date',
            'response' => 'Response',
            'response_date' => 'Response Date',
            'published' => 'Publish',
            'article_id' => 'Article ID',
        ];
    }
}
