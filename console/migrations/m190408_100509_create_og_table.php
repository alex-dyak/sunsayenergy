<?php

use yii\db\Migration;

/**
 * Handles the creation of table `og`.
 */
class m190408_100509_create_og_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('og', [
            'id' => $this->primaryKey(),
            'title' => $this->string(500),
            'title_ru' => $this->string(500),
            'title_en' => $this->string(500),
            'description' => $this->text(),
            'description_ru' => $this->text(),
            'description_en' => $this->text(),
            'images' => $this->text(),
        ]);

        $this->insert('og',[
            'id' => '1',
            'title' => 'Sunsay Energy',
            'title_ru' => 'Sunsay Energy',
            'title_en' => 'Sunsay Energy',
            'description' => 'Sunsay Energy',
            'description_ru' => 'Sunsay Energy',
            'description_en' => 'Sunsay Energy',
            'images' => '',
        ]);

    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('og');
    }
}
