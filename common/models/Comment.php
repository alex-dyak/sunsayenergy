<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "comment".
 *
 * @property int $id
 * @property string $comment
 * @property string $response
 * @property string $date_published
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
            [['comment', 'response', 'date_published', 'published', 'article_id'], 'required'],
            [['comment', 'response'], 'string'],
            [['date_published'], 'safe'],
            [['article_id'], 'integer'],
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
            'comment' => 'Comment',
            'response' => 'Response',
            'date_published' => 'Date Published',
            'published' => 'Published',
            'article_id' => 'Article ID',
        ];
    }
}
