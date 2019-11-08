<?php

use yii\db\Migration;

class m190411_125006_add_hasMoney extends Migration
{
    public function safeUp()
    {
        $this->addColumn('reviews', 'project_id', $this->string(500));
    }

    public function safeDown()
    {
        $this->dropColumn('reviews', 'project_id');
    }

}
