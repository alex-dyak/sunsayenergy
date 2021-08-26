<?php
use frontend\controllers\BaseController;
use frontend\controllers\TechnologyController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('6'),
    'url' => ['/technology']
];
$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => $article->header,
];

$datetime = strtotime($article->date);
$seo_date = date('Y-m-d', $datetime);
?>
    <main class="page-container">
		<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
		</div>

        <section class="solar-modules">
            <div class="container">
                <div class="solar-modules__inner">
                    <div class="solar-modules__title">
                        <h1><?= $article->header ?></h1>
                    </div>
                    <div class="solar-modules__data">
                        <?= $article->date ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="history-panels history-panels__fixed">
            <div class="container">
                <div class="history-panels__inner">
                    <div class="history-panels__content fixed__contact">
                        <?= $article->text ?>   
                    </div>
                    <div class="innovation__bg-form bg-form__fixed">
                        <strong class="single-blog__sub-title innovation__sub-title"><?= BaseController::getMessage('729') ?></strong>
                        <strong class="single-blog__text innovation__text-form"><?= BaseController::getMessage('730') ?></strong>
                        <form class="connect__content-measuring-desktop" id="question_form" data-post-url="index.html">
                            <div class="message">
                                <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                                <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                                <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                                <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                                <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
                                <input type="hidden" name="email" value="blog_form_desktop@call.com" >
                                <input type="hidden" name="question" value="Форма Блога Десктоп" >
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                                    
                                <div class="connect__content-button">
                                    <button class="btn measuring-btn-desk btn-primary" id="submit_button">
                                        <?= BaseController::getMessage('14') ?>
                                    </button>
                                </div>
                            </div>
                            <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                        </form>
                    </div>

                    <div class="form_test__static">
                        <strong class="single-blog__sub-title innovation__sub-title"><?= BaseController::getMessage('729') ?></strong>
                        <strong class="single-blog__text innovation__text-form"><?= BaseController::getMessage('730') ?></strong>
                        <form class="connect__content-measuring-mob" id="measuring_form" data-post-url="index.html">
                            <div class="message">
                                <input type="hidden" name="utm_source" <?php echo !empty($_SESSION['utm_source']) ? ' value="' . $_SESSION['utm_source'] .'"': ''?> >
                                <input type="hidden" name="utm_medium" <?php echo !empty($_SESSION['utm_medium']) ? ' value="' . $_SESSION['utm_medium'] .'"': ''?> >
                                <input type="hidden" name="utm_campaign" <?php echo !empty($_SESSION['utm_campaign']) ? ' value="' . $_SESSION['utm_campaign'] .'"': ''?> >
                                <input type="hidden" name="utm_content" <?php echo !empty($_SESSION['utm_content']) ? ' value="' . $_SESSION['utm_content'] .'"': ''?> >
                                <input type="hidden" name="utm_term" <?php echo !empty($_SESSION['utm_term']) ? ' value="' . $_SESSION['utm_term'] .'"': ''?> >
                                <input type="hidden" name="email" value="blog_form_mob@call.com" >
                                <input type="hidden" name="question" value="Форма Блога Мобильный" >
                                <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="phone" class="hidden">Телефон</label>
                                <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                                    
                                <div class="connect__content-button">
                                    <button class="btn measuring-btn-mob btn-primary" id="submit_button">
                                        <?= BaseController::getMessage('14') ?>
                                    </button>
                                </div>
                            </div>
                            <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <?php if (!empty($other_articles)): ?>
        <section class="section blog-more">
			<div class="container">
                <div class="blog-more__title">
                    <strong class="h2"><?= BaseController::getMessage('343') ?></strong>
                </div>
                <div class="single__blog-inner">

                    <div class="single__blog-more">
                        <div class="blog__list">
                            <?php foreach ($other_articles as $item): ?>
                                <div class="blog__list-item single__list-item">
                                    <div class="image">
                                        <img oncontextmenu="return false" src="/img/logo.svg" data-src="/images/<?= $item->images->imagePreview ?>" alt="<?= $item->header ?>">
                                    </div>
                                    <div class="date"><?= $item->date ?></div>
                                    <div class="title">
                                        <a href="<?= \yii\helpers\Url::to(['technology/detailed', 'symbol' => $item->symbol]) ?>"><?= $item->header ?></a>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>                        
                    </div>

                    <div class="comment-wrap single__comment-wrap">
                        <strong class="h2 line-title single__line-title"><?= BaseController::getMessage('604') ?></strong>
                        <form class="comment-content-question" id="comment_form">
                            <div class="comment">
                                <?php /* echo  \himiklab\yii2\recaptcha\ReCaptcha3::widget(['name' => 'reCaptcha']) */?>
                                <input type="hidden" name="article_title" value="<?php echo $article->header; ?>" >
                                <input type="hidden" name="article_id" value="<?php echo $article->id; ?>" >
                                <input type="hidden" name="comment_date" value="<?php echo date('d-m-Y'); ?>" >
                                <input type="hidden" name="response_date" value="<?php echo date('d-m-Y'); ?>" >
                                <input type="hidden" name="published" value="no" >
                                <label for="name" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                <input class="custom-field" type="text" id="name" name="name" placeholder="<?= BaseController::getMessage('366') ?>">
                                <label for="question" class="hidden"><?= BaseController::getMessage('605') ?></label>
                                <textarea class="custom-field single__custom-field" id="comment" name="comment" rows="5" placeholder="<?= BaseController::getMessage('605') ?>"></textarea>
                                <div class="comment-button-wrap">
                                    <button class="button comment-button single__comment-button">
                                        <?= BaseController::getMessage('14') ?>
                                    </button>
                                </div>
                            </div>
                            <div class="form-compelete"><?= BaseController::getMessage('607') ?></div>
                        </form>
                    </div>

                </div>
			</div>
        </section>
    
        <?php endif; ?>

        <?= $this->render('../section/_connect-blue.php'); ?>
</main>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "SUNSAY Energy",
            "item": "https://sunsayenergy.com/"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('6') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/technology']); ?>"
        }]
    }
</script>
