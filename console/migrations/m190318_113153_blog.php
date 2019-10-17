<?php

use yii\db\Migration;

class m190318_113153_blog extends Migration
{
    public function safeUp()
    {
        $this->createTable('blog', [
            'id' => $this->primaryKey(),
            'symbol' => $this->string(),
            'header' => $this->text(),
            'header_ru' => $this->text(),
            'header_en' => $this->text(),
            'images' => $this->text(),
            'description' => $this->text(),
            'description_en' => $this->text(),
            'description_ru' => $this->text(),
            'text' => $this->text(),
            'text_ru' => $this->text(),
            'text_en' => $this->text(),
            'visible' => $this->integer(),
            'date' => $this->string(),

        ]);
    }

    public function safeDown()
    {
        $this->dropTable('blog');

    }


}
