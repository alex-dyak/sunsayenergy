<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "seo".
 *
 * @property integer $id
 * @property string $name_page
 * @property string $sumbol_id
 * @property string $title
 * @property string $description
 * @property string $article_title
 * @property string $article_body
 */
class Seo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'seo';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'description', 'article_body'], 'string'],
            [['name_page', 'sumbol_id', 'article_title'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name_page' => 'Название страницы',
            'sumbol_id' => 'Sumbol ID',
            'title' => 'Title',
            'description' => 'Description',
            'article_title' => 'Article title',
            'article_body' => 'Article body',
        ];
    }

    public function afterFind()
    {
        $this->title = json_decode(json_decode($this->title),true);
        $this->description = json_decode(json_decode($this->description),true);
        $this->article_title = json_decode(json_decode($this->article_title),true);
        $this->article_body = json_decode(json_decode($this->article_body),true);
        parent::afterFind(); // TODO: Change the autogenerated stub

    }

    public function beforeSave($insert)
    {
        $this->title = json_encode($this->title);
        $this->description = json_encode($this->description);
        $this->article_title = json_encode($this->article_title);
        $this->article_body = json_encode($this->article_body);
        Yii::$app->cacheFrontend->delete('title');
        Yii::$app->cacheFrontend->delete('description');
        Yii::$app->cacheFrontend->delete('article_title');
        Yii::$app->cacheFrontend->delete('article_body');

        $cache = Yii::$app->cache;
        $key = "update_time";
        $cache->set($key, time());

        return parent::beforeSave($insert); // TODO: Change the autogenerated stub
    }

    /**
     * Save Title.
     *
     * @param $post
     *
     * @return false|string
     */
    public function saveTitle($post){
        $t = [];
        foreach ($post['seo_title'] as $lang => $item) {
            $t[$lang] = $item;
        }

        return json_encode($t, true);
    }

    /**
     * Save Description.
     *
     * @param $post
     *
     * @return false|string
     */
    public function saveDescription($post){
        $t = [];
        foreach ($post['seo_description'] as $lang => $item){
            $t[$lang] = $item;
        }

        return json_encode($t,true);
    }

    /**
     * Save Article Title.
     *
     * @param $post
     *
     * @return false|string
     */
    public function saveArticleTitle($post){
        $t = [];
        foreach ($post['seo_article_title'] as $lang => $item){
            $t[$lang] = $item;
        }

        return json_encode($t,true);
    }

    /**
     * Save Article Body.
     *
     * @param $post
     *
     * @return false|string
     */
    public function saveArticleBody($post){
        $t = [];
        foreach ($post['seo_article_body'] as $lang => $item){
            $t[$lang] = $item;
        }

        return json_encode($t,true);
    }
}
