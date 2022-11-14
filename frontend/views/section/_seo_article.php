<?php if ($seo_data['article_body']['ua'] || $seo_data['article_body']['ru']) :
    echo '<pre>';
    print_r($seo_data['article_body']);
    echo '<pre>';
    ?>
    <div class="seo-article collapsed">
        <div class="container">
            <strong><?= strtoupper($seo_data['article_title'][Yii::$app->language]) ?></strong>
            <div class="seo-article-wrap">
                <?= $seo_data['article_body'][Yii::$app->language] ?>
            </div>
            <span class="seo-article-opener"><i class="icon-angle-right"></i></span>
        </div>
    </div>
<?php endif; ?>

