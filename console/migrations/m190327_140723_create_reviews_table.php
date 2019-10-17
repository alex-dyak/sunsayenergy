<?php

use yii\db\Migration;

/**
 * Handles the creation of table `reviews`.
 */
class m190327_140723_create_reviews_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('reviews', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255),
            'name_ru' => $this->string(255),
            'name_en' => $this->string(255),
            'role' => $this->string(255),
            'role_ru' => $this->string(255),
            'role_en' => $this->string(255),
            'message' => $this->text(),
            'message_ru' => $this->text(),
            'message_en' => $this->text(),
            'images' => $this->text(),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('reviews');
    }
}
