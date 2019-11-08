<?php

use yii\db\Migration;

class m190321_133901_add_table_SEO extends Migration
{
    public function safeUp()
    {
        $this->createTable('seo', [
            'id' => $this->primaryKey(),
            'name_page' => $this->string(255),
            'sumbol_id' => $this->string(255),
            'title' => $this->text(),
            'description' => $this->text(),
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('seo');
    }

}
