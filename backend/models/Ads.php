<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "ads".
 *
 * @property int $id
 * @property string $header
 * @property string $body
 * @property string $bottom
 */
class Ads extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'ads';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['header', 'body', 'bottom'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'header' => 'Header',
            'body' => 'Body',
            'bottom' => 'Bottom',
        ];
    }
}
