<?php

namespace backend\controllers;

use Yii;
use backend\models\Message;
use backend\models\search\Message as MessageSearch;
use yii\helpers\Url;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * MessageController implements the CRUD actions for Message model.
 */
class MessageController extends Controller
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
     * Lists all Message models.
     * @return mixed
     */
    public function actionIndex()
    {

        $searchModel = new MessageSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Message model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    protected function saveMessages($post)
    {
        $t = [];
        foreach ($post['Message'] as $lang => $item) {
            if ($lang != 'pages') {
                $t[$lang] = $item;
            }
        }

        return $t;
    }

    /**
     * Creates a new Message model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Message();

        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            $model->message = $this->saveMessages($post);


            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Сохраниение прошло успешно");
            } else {
                $errStr = "";
                foreach ($model->getErrors() as $error) {
                    $errStr .= "{$error[0]}<br/>";
                }
                Yii::$app->session->setFlash('error', "Исправьте следующие ошибки:<br/>" . $errStr);
                return $this->redirect(Yii::$app->request->referrer);
            }
            return $this->redirect(Url::previous());
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Message model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $post = Yii::$app->request->post();
        if ($model->load($post)) {
            $model->message = $this->saveMessages($post);


            if ($model->save()) {
                Yii::$app->session->setFlash('success', "Сохраниение прошло успешно");
            } else {
                $errStr = "";
                foreach ($model->getErrors() as $error) {
                    $errStr .= "{$error[0]}<br/>";
                }
                Yii::$app->session->setFlash('error', "Исправьте следующие ошибки:<br/>" . $errStr);
                return $this->redirect(Yii::$app->request->referrer);
            }
            return $this->redirect(Url::previous());
        } else {
            Url::remember(Yii::$app->request->referrer);
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Message model.
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
     * Finds the Message model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Message the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Message::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
