<?php

use yii\db\Migration;

class m190319_115807_calculator extends Migration
{
    public function safeUp()
    {
        $this->createTable('calculator', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'value_y' => $this->text(),
            'value_f' => $this->text(),
            'value_m' => $this->text(),
            'value_j' => $this->float(),
            'value_g' => $this->float(),
            'value_l' => $this->float(),
            'value_m1' => $this->text(),
            'value_coefsun' => $this->float(),
            'value_coefakb' => $this->float(),
            'value_coefnight' => $this->float(),
        ]);

        $this->insert('calculator',[
            'id' => 1,
            'name' => 'Калькулятор',
            'value_y' => '{"y1":"1018","y2":"904","y3":"834","y4":"819","y5":"776","y6":"798","y7":"760","y8":"744","y9":"724","y10":"736","y11":"737","y12":"721","y13":"713"}',
            'value_f' => '{"f1":"5367","f2":"8206","f3":"10273","f4":"12914","f5":"15507","f6":"18100","f7":"20764","f8":"23200","f9":"25800","f10":"28400","f11":"31000","f12":"33600","f13":"36100"}',
            'value_m' => '{"m1":"2181","m2":"3160","m3":"4553","m4":"5356","m5":"6912"}',
            'value_j' => 1.68,
            'value_g' => 0.145386,
            'value_l' => 225,
            'value_m1' => '{"m1":"2255","m2":"2220","m3":"2316","m4":"1941","m5":"1842"}',
            'value_coefsun' => 3.1,
            'value_coefakb' => 1.3,
            'value_coefnight' => 0.3,
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('calculator');
    }
}
