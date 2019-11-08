<?php

namespace backend\models\search;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use backend\models\Message as MessageModel;

/**
 * Message represents the model behind the search form about `backend\models\Message`.
 */
class Message extends MessageModel
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['message'], 'safe'],
            [['pages'], 'safe'],
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
        $query = MessageModel::find();

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



        $this->message = str_replace(['"',"null"], "", json_encode($this->message));
        $query->andFilterWhere(['like', 'message', $this->message])->andFilterWhere(['like', 'pages', $this->pages]);
        $this->message = str_replace('"',"",json_decode('"'.$this->message.'"'));


        return $dataProvider;
    }
}
