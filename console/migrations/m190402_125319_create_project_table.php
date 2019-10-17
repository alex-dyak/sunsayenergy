<?php

use yii\db\Migration;

/**
 * Handles the creation of table `project`.
 */
class m190402_125319_create_project_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('project', [
            'id' => $this->primaryKey(),
            'header' => $this->string(500),
            'images' => $this->text(),
            'text' => $this->text(),
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
