<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model backend\models\Seo */
/* @var $form yii\widgets\ActiveForm */
?>
<?php
$fieldCode = "seo_title";
$fieldLabel = "SEO Title";
$fieldsTitle = "";
foreach (Yii::$app->params['languages'] as $lang) {
    $pref = $lang['url'];
    $field = $fieldLabel . "[" . $lang['url'] . "]";
    $field_name = $fieldCode . "[" . $lang['url'] . "]";
    $value = (isset($model->title[$pref])) ? $model->title[$pref] : "";
    $col_md = "col-md-" . (int)(12 / count(Yii::$app->params['languages']));
    $fieldsTitle .= '
<div class="form-group field-seo-title ' . $col_md . '">
    <label class="control-label" for="seo-title">' . $field . '</label>
    <textarea id="seo-title" class="form-control" name="' . $field_name . '" maxlength="255" rows="6" aria-invalid="false">' . $value . '</textarea>
</div>';
}
?>

<?php
$fieldCode = "seo_description";
$fieldLabel = "SEO Description";
$fieldsDescription = "";
foreach (Yii::$app->params['languages'] as $lang) {
    $pref = $lang['url'];
    $field = $fieldLabel . "[" . $lang['url'] . "]";
    $field_name = $fieldCode . "[" . $lang['url'] . "]";
    $value = (isset($model->description[$pref])) ? $model->description[$pref] : "";
    $col_md = "col-md-" . (int)(12 / count(Yii::$app->params['languages']));
    $fieldsDescription .= '
<div class="form-group field-seo-description ' . $col_md . '">
    <label class="control-label" for="seo-description">' . $field . '</label>
    <textarea id="seo-description" class="form-control" name="' . $field_name . '" maxlength="255" rows="6" aria-invalid="false">' . $value . '</textarea>
</div>';
}
?>
<?php
$fieldCode = "seo_article_title";
$fieldLabel = "SEO Заголовок статьи";
$fieldsArticleTitle = "";
foreach (Yii::$app->params['languages'] as $lang) {
    $pref = $lang['url'];
    $field = $fieldLabel . "[" . $lang['url'] . "]";
    $field_name = $fieldCode . "[" . $lang['url'] . "]";
    $value = (isset($model->article_title[$pref])) ? $model->article_title[$pref] : "";
    $col_md = "col-md-" . (int)(12 / count(Yii::$app->params['languages']));
    $fieldsArticleTitle .= '
<div class="form-group field-seo-article-title ' . $col_md . '">
    <label class="control-label" for="seo-article-title">' . $field . '</label>
    <input type="text" id="seo-article-title" class="form-control" name="' . $field_name . '" value="' . $value . '">
</div>';
}
?>
<?php
$fieldCode = "seo_article_body";
$fieldLabel = "SEO статья";
$fieldsArticleBody = "";
foreach (Yii::$app->params['languages'] as $lang) {
    $pref = $lang['url'];
    $field = $fieldLabel . "[" . $lang['url'] . "]";
    $field_name = $fieldCode . "[" . $lang['url'] . "]";
    $value = (isset($model->article_body[$pref])) ? $model->article_body[$pref] : "";
    $col_md = "col-md-" . (int)(12 / count(Yii::$app->params['languages']));
    $fieldsArticleBody .= '
<div class="form-group field-seo-article-body ' . $col_md . '">
    <label class="control-label" for="seo-article-body">' . $field . '</label>
    <textarea id="seo-article-body" class="form-control" name="' . $field_name . '" rows="10" aria-invalid="false">' . $value . '</textarea>
</div>';
}
?>

<div class="seo-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="row">
        <div class="col-lg-4">
            <?= $form->field($model, 'name_page')->textInput(['maxlength' => true]) ?>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <?= $form->field($model, 'sumbol_id')->textInput(['maxlength' => true]) ?>
        </div>
    </div>
    <div class="row">
        <?= $fieldsTitle ?>
    </div>
    <div class="row">
        <?= $fieldsDescription ?>
    </div>
    <div class="row">
        <?= $fieldsArticleTitle ?>
    </div>
    <div class="row">
        <?= $fieldsArticleBody ?>
    </div>
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
