<?php
use frontend\controllers\BaseController;
use frontend\controllers\TechnologyController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('6'),
];
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
                        <h1>Солнечные модули</h1>
                    </div>
                    <div class="solar-modules__data">
                        07.05.21 
                    </div>
                </div>
            </div>
        </section>

        <section class="history-panels">
            <div class="container">
                <p class="history-panels__text single-blog__text">
                    Солнечная энергетика в Украине не только существует, но и продолжает процветать. 
                    Этот тезис подкрепляется различными исследованиями. Например, в исследовании 
                    «Экономические последствия постепенного отказа от использования угля в Украине до 
                    2030» от компании «Aurora Energy Research» указывается, что альтернативные источники 
                    энергии обеспечат более 50% производства электроэнергии и создадут до 161 тысячи рабочих 
                    мест в стране до 2030 года. И пока различные фабрики и заводы устанавливают солнечные 
                    электростанции на своих производствах, украинские семьи также используют преимущества 
                    солнечной энергии. Но, чтобы понять, какие плюсы у солнечных батарей, нужно разобраться, 
                    как они устроены. В этой статье мы рассмотрим, как солнечные модули появились и почему 
                    возымели такое широкое распространение.
                </p>
                <img class="history-panels__image" src="/img/single-blog/history_img.jpg" alt="solar panels">
                <h3 class="history-panels__sub-title single-blog__sub-title">
                    Кто придумал солнечные батареи
                </h3>
                <p class="history-panels__text single-blog__text">
                    Эффект преобразования солнечного света в традиционное электричество открыл 
                    французский физик Александр Эдмон Беккерель в 1842 году. А вот первые 
                    <span>солнечные модули</span> создали сотрудники компании Bell Laboratories в апреле 1948 года. 
                    Правда, широкое применение солнечные батареи получили только последние 10-15 лет. 
                    Причина проста: изначально создание солнечных модулей было нерелевантным из-за 
                    высокой стоимости производства, а вот спустя года цены на технологии значительно 
                    снизились. Что и позволило массово производить солнечные панели.
                </p>
            </div>
        </section>

        <section class="innovation">
            <div class="container">
                <div class="innovation__inner">
                    <div class="innovation__content">
                        <h3 class="single-blog__sub-title">
                            Почему выгодно устанавливать солнечные модули 
                        </h3>
                        <p class="single-blog__text">
                            В отличие от традиционных источников энергии, солнечный свет дает бесплатную и безопасную 
                            энергию. Построить солнечную электростанцию и получать от нее электроэнергию дешевле, чем 
                            просто продолжать эксплуатировать электростанции, работающие, например, на угле. 
                            Это подтверждают и западные страны — например, с 2015 года в Европе закрыли уже половину 
                            угольных станций — после подписания Парижского соглашения. 
                        </p>
                        <p class="single-blog__text innovation__text">
                            К тому же, благодаря солнечным станциям можно зарабатывать. 
                            Механизм <span>«зеленый» тариф — государственная программа</span>, которая 
                            позволяет владельцам сетевых или гибридных электростанций продавать 
                            государству излишки сгенерированной электроэнергии за евровалюту. 
                            Таким образом, можно быстрее окупить солнечную электростанцию и в 
                            дальнейшем получать стабильный доход. 
                        </p>
                        <h3 class="single-blog__sub-title">
                            Инновации в создании солнечных батарей
                        </h3>
                        <p class="single-blog__text">
                            Технологии, которые применяются в солнечных панелях, не стоят на месте и 
                            продолжают стремительно развиваться и сейчас. Инновационные решения, используемые 
                            в производстве солнечных модулей позволяют совершенствовать их из года год. Это 
                            заметно даже в разрезе последних 2-х лет: если в 2019 SUNSAY Energy устанавливала 
                            станции с модулями мощностью 270-290 Вт, то сейчас наиболее типичные панели для 
                            инсталляции — это 430-450 Вт. К тому же, панели не только помогают вырабатывать 
                            чистую и возобновляемую энергию, но и могут быть переработаны практически полностью 
                            после утилизации. Сейчас большинство производителей гарантируют от 85 до 95% вторичной 
                            переработки модулей. 
                        </p>
                        <p class="single-blog__text">
                            Желаете присоединиться к солнечному сообществу и начать использовать 
                            возобновляемую энергию? Специалисты SUNSAY Energy помогут вам выбрать 
                            оптимальный вариант для вашего домохозяйства. А если вы хотите узнать 
                            стоимость на сетевые или гибридные солнечные электростанции — калькулятор 
                            на нашем сайте покажет вам все необходимые расчеты.
                        </p>
                        <p class="innovation__author">
                            ДМИТРИЙ ЗИНКЕВИЧ
                        </p>
                    </div>
                    <div class="innovation__form">

                        <div class="innovation__bg-form">
                            <strong class="single-blog__sub-title innovation__sub-title">Хотите максимально выгодно и эффективно использовать энергию солнца — обращайтесь к экспертам sunsay energy</strong>
                            <strong class="single-blog__text innovation__text-form">Закажите бесплатный змер крыши нашим инженерам</strong> 
                            <form class="connect__content-question" id="question_form" data-post-url="index.html">
                                <div class="message">
                                    <label for="fullname" class="hidden"><?= BaseController::getMessage('366') ?></label>
                                    <input class="custom-field" type="text" id="fullname" name="fullname" placeholder="<?= BaseController::getMessage('366') ?>">
                                    <label for="phone" class="hidden">Телефон</label>
                                    <input class="custom-field" id="phone" type="text"  name="phone" placeholder="+380">
                                    
                                    <div class="connect__content-button">
                                        <button class="btn connect-btn btn-primary" id="submit_button">
                                            <?= BaseController::getMessage('14') ?>
                                        </button>
                                    </div>
                                </div>
                                <div class="form-compelete"><?= BaseController::getMessage('374') ?></div>
                            </form>
                        </div>

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
