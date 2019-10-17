<?php

namespace backend\controllers;

use Yii;
use backend\models\Calculator;
use backend\models\search\CalculatorSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CalculatorController implements the CRUD actions for Calculator model.
 */
class CalculatorController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Calculator models.
     * @return mixed
     */
    public function actionIndex($id=1)
    {
        $model = $this->findModel($id);
        if ($model->load(Yii::$app->request->post()) ) {
            $post = Yii::$app->request->post();
            $model->value_y = json_encode($post['value_y']);
            $model->value_f = json_encode($post['value_f']);
            $model->value_m = json_encode($post['value_m']);
           /* $model->value_j = $post['value_j'];
            $model->value_g = $post['value_g'];
            $model->value_l = $post['value_l'];*/
            $model->value_m1 = json_encode($post['value_m1']);
        /*    $model->value_coefsun = $post['value_coefsun'];
            $model->value_coefakb = $post['value_coefakb'];
            $model->value_coefnight = $post['value_coefnight'];*/
            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }


    public function actionView($id)
    {
        $searchModel = new CalculatorSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Creates a new Calculator model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Calculator();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Calculator model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {

        $model = $this->findModel($id);



        if ($model->load(Yii::$app->request->post()) ) {
            $post = Yii::$app->request->post();
            $model->value_y = json_encode($post['value_y']);
            $model->value_f = json_encode($post['value_f']);
            $model->value_m = json_encode($post['value_m']);
            $model->value_j = $post['value_j'];
            $model->value_g = $post['value_g'];
            $model->value_l = $post['value_l'];
            $model->value_m1 = json_encode($post['value_m1']);
            $model->value_coefsun = $post['value_coefsun'];
            $model->value_coefakb = $post['value_coefakb'];
            $model->value_coefnight = $post['value_coefnight'];
            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Calculator model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Calculator model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Calculator the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Calculator::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
