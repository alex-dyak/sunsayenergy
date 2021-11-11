<?php

use yii\db\Migration;

/**
 * Class m211104_112211_add_seo_article
 */
class m211104_112211_add_seo_article extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('seo','article_title', $this->text());
        $this->addColumn('seo','article_body', $this->text());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('seo','article_title');
        $this->dropColumn('seo','article_body');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m211104_112211_add_seo_article cannot be reverted.\n";

        return false;
    }
    */
}
