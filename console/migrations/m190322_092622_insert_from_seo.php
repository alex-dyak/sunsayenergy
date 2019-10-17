<?php

use yii\db\Migration;

class m190322_092622_insert_from_seo extends Migration
{
    public function safeUp()
    {
        $this->insert('seo',[
            'id' => '1',
            'name_page' => "Главная страница",
            'sumbol_id' => 'index',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '2',
            'name_page' => "Станції для заробітку",
            'sumbol_id' => 'income',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '3',
            'name_page' => "Зелений тариф",
            'sumbol_id' => 'green',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);


        $this->insert('seo',[
            'id' => '4',
            'name_page' => "Станції для автономного живлення",
            'sumbol_id' => 'comfort',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '5',
            'name_page' => "Станції для резервного живлення",
            'sumbol_id' => 'reserve',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '6',
            'name_page' => "Види сонячних електростанцій",
            'sumbol_id' => 'types',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '7',
            'name_page' => "Блог: детальна",
            'sumbol_id' => 'detailed',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '8',
            'name_page' => "Блог: технології",
            'sumbol_id' => 'technology',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);

        $this->insert('seo',[
            'id' => '9',
            'name_page' => "Блог: 9 головних питань",
            'sumbol_id' => 'nine',
            'title' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"',
            'description' => '"{\"ua\":\"Sunsay Energy\",\"ru\":\"\",\"en\":\"\"}"'
        ]);
    }

    public function safeDown()
    {
        $this->delete('seo', 'id=1');
        $this->delete('seo', 'id=2');
        $this->delete('seo', 'id=3');
        $this->delete('seo', 'id=4');
        $this->delete('seo', 'id=5');
        $this->delete('seo', 'id=6');
        $this->delete('seo', 'id=7');
        $this->delete('seo', 'id=8');
        $this->delete('seo', 'id=9');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m190322_092622_insert_from_seo cannot be reverted.\n";

        return false;
    }
    */
}
