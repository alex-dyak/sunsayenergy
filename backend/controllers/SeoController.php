<?php

namespace backend\controllers;

use Yii;
use backend\models\Seo;
use backend\models\searchSeoSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * SeoController implements the CRUD actions for Seo model.
 */
class SeoController extends Controller
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
     * Lists all Seo models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new \backend\models\search\Seo();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Seo model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Seo model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Seo();
        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            $model->title = $this->saveTitle($post);
            $model->description = $this->saveDescription($post);

            if($model->save()) {
                Yii::$app->session->setFlash('success', "Сохраниение прошло успешно");
            }else{
                $errStr = "";
                foreach ($model->getErrors() as $error){
                    $errStr .= "{$error[0]}<br/>";
                }
                Yii::$app->session->setFlash('error', "Исправьте следующие ошибки:<br/>".$errStr);
                return $this->redirect(Yii::$app->request->referrer);
            }

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Seo model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            $model->title = $this->saveTitle($post);
            $model->description = $this->saveDescription($post);
            if($model->save()) {
                Yii::$app->session->setFlash('success', "Сохраниение прошло успешно");
            }else{
                $errStr = "";
                foreach ($model->getErrors() as $error){
                    $errStr .= "{$error[0]}<br/>";
                }
                Yii::$app->session->setFlash('error', "Исправьте следующие ошибки:<br/>".$errStr);
                return $this->redirect(Yii::$app->request->referrer);
            }

            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Seo model.
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
     * Finds the Seo model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Seo the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Seo::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }

// TODO: Перенести в модель
    protected function saveTitle($post){
        $t = [];
        foreach ($post['Title'] as $lang=>$item){
            $t[$lang]=$item;
        }
        return json_encode($t, true);
    }
// TODO: Перенести в модель
    protected function saveDescription($post){
        $t = [];
        foreach ($post['Description'] as $lang=>$item){
            $t[$lang]=$item;
        }
        return json_encode($t,true);
    }
}
