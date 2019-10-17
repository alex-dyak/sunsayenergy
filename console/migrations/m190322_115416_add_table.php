<?php

use yii\db\Migration;

class m190322_115416_add_table extends Migration
{
    public function safeUp()
    {
        $this->createTable('files', [
            'id' => $this->primaryKey(),
            'name' => $this->string(512),
            'files' => $this->string(512),
        ]);
        $this->insert('files',[
            'id' => '1',
            'name' => 'Закон',
            'files' => '',
        ]);
        $this->insert('files',[
            'id' => '2',
            'name' => 'Тарифи',
            'files' => '',
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('files');
    }

}
