<?php

namespace backend\models\search;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use backend\models\Calculator;

/**
 * CalculatorSearch represents the model behind the search form about `backend\models\Calculator`.
 */
class CalculatorSearch extends Calculator
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name', 'value_y', 'value_f', 'value_m', 'value_m1'], 'safe'],
            [['value_j', 'value_g', 'value_l'], 'number'],
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
        $query = Calculator::find();

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
            'value_j' => $this->value_j,
            'value_g' => $this->value_g,
            'value_l' => $this->value_l,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'value_y', $this->value_y])
            ->andFilterWhere(['like', 'value_f', $this->value_f])
            ->andFilterWhere(['like', 'value_m', $this->value_m])
            ->andFilterWhere(['like', 'value_m1', $this->value_m1])
            ->andFilterWhere(['like', 'value_f1', $this->value_f1]);

        return $dataProvider;
    }
}
