<?php if ($seo_data['article_body']) : ?>
    <div class="new-seo-article new-collapsed ">
        <div class="container">
            <h1><?= strtoupper($seo_data['article_title'][Yii::$app->language]) ?></h1>
            <div class="seo-article-inner">
                <p><?= $seo_data['article_body'][Yii::$app->language] ?></p>
            </div>
            <span class="seo-article-opened"></span>
        </div>
    </div>
<?php endif; ?>
