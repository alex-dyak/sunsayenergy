<?php

use yii\db\Migration;

/**
 * Class m191107_095932_additional_phone_numbers
 */
class m191107_095932_additional_phone_numbers extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('contact','mobile_1', $this->string(255));
        $this->addColumn('contact','mobile_2', $this->string(255));
        $this->addColumn('contact','mobile_3', $this->string(255));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('contact','mobile_1');
        $this->dropColumn('contact','mobile_2');
        $this->dropColumn('contact','mobile_3');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191107_095932_additional_phone_numbers cannot be reverted.\n";

        return false;
    }
    */
}
