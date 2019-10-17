<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "calculator".
 *
 * @property integer $id
 * @property string $name
 * @property string $value_y
 * @property string $value_f
 * @property string $value_m
 * @property double $value_j
 * @property double $value_g
 * @property double $value_l
 * @property string $value_m1
 * @property string $value_f1
 */
class Calculator extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'calculator';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['value_y', 'value_f', 'value_m', 'value_m1'], 'string'],
            [['value_j', 'value_g', 'value_l','value_coefsun','value_coefakb','value_coefnight'], 'number'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            $cache = Yii::$app->cache;
            $key = "update_time";
            $cache->set($key, time());
            return true;
        }
        return false;
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'value_y' => 'Value Y',
            'value_f' => 'Value F',
            'value_m' => 'Value M',
            'value_j' => 'Тариф на электроэнергию',
            'value_g' => 'Величина зелёного тариф и составляет',
            'value_l' => 'Стоимость кВт*ч аккумуляторной энергии',
            'value_m1' => 'Value M1',
            'value_coefsun' => 'Среднегодовой коэффициент солнечной активности',
            'value_coefakb' => 'Коеффициент запаса АКБ',
            'value_coefnight' => 'Коєффициент потребления в ночное время',
        ];
    }
}
