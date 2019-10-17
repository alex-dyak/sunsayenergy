<?php

use yii\db\Migration;

class m190320_122528_add_table_request extends Migration
{
    public function safeUp()
    {
        $this->createTable('request', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'type' => $this->string(),
            'phone' => $this->string(),
            'email' => $this->string(),
            'date' => $this->string(),

        ]);
    }

    public function safeDown()
    {
        $this->dropTable('request');
    }
}
