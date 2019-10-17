<?php

use yii\db\Migration;

class m190411_094954_add_header_culomn extends Migration
{
    public function safeUp()
    {
        $this->addColumn('project','header_ru', $this->string(500));
        $this->addColumn('project','header_en', $this->string(500));
        $this->addColumn('project','symbol', $this->string(500));
    }

    public function safeDown()
    {
        $this->dropColumn('project','header_ru');
        $this->dropColumn('project','header_en');
        $this->dropColumn('project','symbol');
    }

}
