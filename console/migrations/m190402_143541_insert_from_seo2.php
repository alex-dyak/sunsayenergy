<?php

use yii\db\Migration;

class m190402_143541_insert_from_seo2 extends Migration
{
    public function safeUp()
    {
        $this->insert('seo',[
            'id' => '10',
            'name_page' => "Про нас",
            'sumbol_id' => 'about',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '11',
            'name_page' => "Проекти: всі проекти",
            'sumbol_id' => 'project',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '12',
            'name_page' => "Проекти: категорії",
            'sumbol_id' => 'project_category',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '13',
            'name_page' => "Проекти: детальна",
            'sumbol_id' => 'project_detailed',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);
    }

    public function safeDown()
    {
        $this->delete('seo', 'id=10');
        $this->delete('seo', 'id=11');
        $this->delete('seo', 'id=12');
        $this->delete('seo', 'id=13');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190402_143541_insert_from_seo2 cannot be reverted.\n";

        return false;
    }
    */
}
