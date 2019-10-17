<?php

use yii\db\Migration;

class m190326_110526_add_contact extends Migration
{
    public function safeUp()
    {
        $this->createTable('contact', [
            'id' => $this->primaryKey(),
            'phone' => $this->string(255),
            'email' => $this->string(255),
            'address' => $this->string(255),
            'address_ru' => $this->string(255),
            'address_en' => $this->string(255),
            'link_fb' => $this->string(255),
            'link_linkedin' => $this->string(255),
            'link_viber' => $this->string(255),
            'link_mail' => $this->string(255),
        ]);

        $this->insert('contact',[
            'id' => 1,
            'phone' => '+38 044 334 50 10',
            'email' => 'hello@sunsayenergy.com',
            'address' => 'м. Київ, вул. Машинобудівна, 41',
            'address_ru' => 'м. Київ, вул. Машинобудівна, 41',
            'address_en' => 'м. Київ, вул. Машинобудівна, 41',
            'link_fb' => '',
            'link_linkedin' => '',
            'link_viber' => '',
            'link_mail' => '',
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('contact');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190326_110526_add_contact cannot be reverted.\n";

        return false;
    }
    */
}
