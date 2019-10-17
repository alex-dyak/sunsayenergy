<?php

use yii\db\Migration;

class m190411_084300_add_table_projects extends Migration
{
    public function up()
    {
        $this->dropTable('project');
        $this->createTable('project', [
            'id' => $this->primaryKey(),
            'header' => $this->string(500),
            'images' => $this->text(),
            'text' => $this->text(),
            'text_ru' => $this->text(),
            'text_en' => $this->text(),
            'category' => $this->string(500),
            'reviews' => $this->string(500),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('project');
    }
}
