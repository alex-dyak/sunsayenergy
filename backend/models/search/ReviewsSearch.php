<?php

namespace backend\models\search;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use backend\models\Reviews;

/**
 * ReviewsSearch represents the model behind the search form about `backend\models\Reviews`.
 */
class ReviewsSearch extends Reviews
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name', 'name_ru', 'name_en', 'role', 'role_ru', 'role_en', 'message', 'message_ru', 'message_en', 'images'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Reviews::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'name_ru', $this->name_ru])
            ->andFilterWhere(['like', 'name_en', $this->name_en])
            ->andFilterWhere(['like', 'role', $this->role])
            ->andFilterWhere(['like', 'role_ru', $this->role_ru])
            ->andFilterWhere(['like', 'role_en', $this->role_en])
            ->andFilterWhere(['like', 'message', $this->message])
            ->andFilterWhere(['like', 'message_ru', $this->message_ru])
            ->andFilterWhere(['like', 'message_en', $this->message_en])
            ->andFilterWhere(['like', 'images', $this->images]);

        return $dataProvider;
    }
}
