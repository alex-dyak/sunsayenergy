<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "files".
 *
 * @property integer $id
 * @property string $files
 */
class Files extends \yii\db\ActiveRecord
{
    public $file; // Добавляем переменную
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'files';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['files','name'], 'string', 'max' => 512],
            [['file'], 'file'], // Добавленное правило валидации
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Название',
            'files' => 'Файл',
        ];
    }
}
