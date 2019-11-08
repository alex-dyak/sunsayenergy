<?php

use yii\db\Migration;

/**
 * Handles the creation of table `subscribe`.
 */
class m190402_131927_create_subscribe_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('subscribe', [
            'id' => $this->primaryKey(),
            'email' => $this->string(500),
            'time' => $this->string(30),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('subscribe');
    }
}
