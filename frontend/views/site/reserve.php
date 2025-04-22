<?php
use frontend\controllers\BaseController;
use yii\widgets\Breadcrumbs;

$this->params['breadcrumbs'][] = [
    'template' => "<li>{link}</li>\n",
    'label' => BaseController::getMessage('1'),
];

$this->params['breadcrumbs'][] = [
    'template' => "<li><b>{link}</b></li>\n",
    'label' => BaseController::getMessage('3'),
];
?>
    <main class="page-container">
		<div class="container">
        <?php echo Breadcrumbs::widget([
            'homeLink' => ['label' => BaseController::getMessage('404'), 'url' => Yii::$app->homeUrl],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]); ?>
		</div>
    <!-- start info -->
    <section class="service-section">
        <div class="container">
            <div class="hero-block">
                <div class="title">
					<h1><?= BaseController::getMessage('74') ?></h1>
				</div>
				<div class="service-section-image">
					<picture>
						  <source media="(max-width: 767px)" srcset="/img/house-3-mob.webp" type="image/webp">
						  <source srcset="/img/house-3.webp" type="image/webp">
						  <source media="(max-width: 767px)" srcset="/img/house-3-mob.png">
						<img oncontextmenu="return false" src="/img/bess-hero-img.png" alt="BESS">
					</picture>
				</div>
				<div class="description"><?= BaseController::getMessage('75') ?></div>
			</div>
            <span class="hero-yellow-circle"></span>
        </div>
        <div class="container">
            <div class="service-pros-block">
                <ol class="service-pros-list">
                    <li>
                        <strong><?= BaseController::getMessage('476') ?></strong>
                        <p><?= BaseController::getMessage('477') ?></p>
                    </li>
                    <li>
                        <strong><?= BaseController::getMessage('478') ?></strong>
                        <p><?= BaseController::getMessage('479') ?></p>
                    </li>
                </ol>
                <div class="service-pros-text">
                    <p><b><?= BaseController::getMessage('480') ?></b></p>
                    <div class="more">
                        <a href="#equipment" class="button"><?= BaseController::getMessage('	402') ?></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- end info -->

    <!-- start banner-->
    <?= $this->render('../section/_service-banner.php'); ?>
    <!-- end banner -->

    <!-- start profit -->
        <section class=" profit-section">
            <div class="container">
                <div class="profit-wrap">
                    <div class="profit-wrap-title">
                        <h2 class="line-title"><?= BaseController::getMessage('490') ?></h2>
                        <div class="title-img background-lazy" style="background-image: url('/img/logo.svg')" data-src="/img/commercial-station/profit.jpg"></div>
                    </div>
                    <ul class="profit-list">
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/pig.svg" alt="<?= BaseController::getMessage('870') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('870') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('871') ?></p>
                        </li>
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/document.svg" alt="<?= BaseController::getMessage('872') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('872') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('873') ?></p>
                        </li>
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/station.svg" alt="<?= BaseController::getMessage('876') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('876') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('877') ?></p>
                        </li>
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/calendar.svg" alt="<?= BaseController::getMessage('874') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('874') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('875') ?></p>
                        </li>
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/money.svg" alt="<?= BaseController::getMessage('878') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('878') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('879') ?></p>
                        </li>
                        <li>
                            <div class="profit-list-title">
                                <div class="profit-img">
                                    <img oncontextmenu="return false" data-src="/img/commercial-station/icon/station.svg" alt="<?= BaseController::getMessage('880') ?>">
                                </div>
                                <strong><?= BaseController::getMessage('880') ?></strong>
                            </div>
                            <p><?= BaseController::getMessage('881') ?></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="commercial-cta">
                <div class="container">
                    <div class="cta-wrap">
                        <div class="cta-text"><?= BaseController::getMessage('501') ?></div>
                        <div class="btn-wrap">
                            <a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- end profit -->

    <!-- start video -->
        <section class="video-section">
            <div class="container">
                <h2 class="line-title"><?= BaseController::getMessage('320') ?></h2>
                <div class="video-row">
                    <?php
                    foreach ($video_reviews as $item): ?>
                        <?php
                        $lang = $_SERVER['REQUEST_URI'];
                        if (stripos($lang, 'ru') !== false && $item->video_name_ru) {
                            $video_name = $item->video_name_ru;
                        } elseif (stripos($lang, 'en') !== false && $item->video_name_en) {
                            $video_name = $item->video_name_en;
                        } else {
                            $video_name = $item->video_name_uk;
                        }
                        ?>
                        <div class="video-col">
                            <div class="embed-responsive">
                                <a href="https://www.youtube.com/watch?v=<?= $item->video_url ?>" target="_blank" rel="nofollow">
                                    <img oncontextmenu="return false" src="/img/logo.svg" data-src="https://i1.ytimg.com/vi/<?= $item->video_url ?>/mqdefault.jpg" alt="<?= $video_name ?>">
                                </a>
                            </div>
                            <strong class="video-title"><?= $video_name ?></strong>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    <!-- end video -->

    <!-- start equipments -->
    <!--<section class="equipment-section" id="equipment">
        <div class="container">
            <h2 class="line-title"><?php /*= BaseController::getMessage('139') */?></h2>
            <div class="equipment-wrap">
                <div class="equipment-nav">
                    <div class="nav-slide">
                        <span><?php /*= BaseController::getMessage('142') */?></span>
                    </div>
                    <div class="nav-slide" >
                        <span><?php /*= BaseController::getMessage('145') */?></span>
                    </div>
                    <div class="nav-slide">
                        <span><?php /*= BaseController::getMessage('148') */?></span>
                    </div>
                    <div class="nav-slide">
                        <span><?php /*= BaseController::getMessage('147') */?></span>
                    </div>
                </div>
                <div class="equipment-slider">
                    <div class="equipment-slide">
                        <div class="equipment-text">
                            <p><?php /*= BaseController::getMessage('150') */?></p>
                        </div>
                        <div class="equipment-carousel equipment-slick">
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/inv.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('226') */?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="logo-row">
                            <ul>
                                <li><img oncontextmenu="return false" data-src="/img/logos/invertor/fronius.png" class="check-slick" alt="fronius"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/invertor/huawei.png" alt="huawei"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/invertor/solar-edge.png" alt="solar edge"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="equipment-slide">
                        <div class="equipment-text">
                            <p><?php /*= BaseController::getMessage('156') */?></p>
                        </div>
                        <div class="equipment-carousel pannel-slick">
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Jinko.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('194') */?>
                                    </div>
                                </div>
                            </div>
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Qcell.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('195') */?>
                                    </div>
                                </div>
                            </div>
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Longi.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('198') */?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="logo-row">
                            <ul>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/ja-solar.png" alt="ja solar"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/longi-solar.png" alt="longi solar"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/canadian-solar.png" alt="canadian solar"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/sunpower.png" alt="sunpower"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/jinco-solar.png" alt="jinco solar"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/pannel/qcells.png" alt="qcells"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="equipment-slide">
                        <div class="equipment-text">
                            <p><?php /*= BaseController::getMessage('170') */?></p>
                        </div>
                        <div class="equipment-carousel battery-slick">
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/Victron.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('237') */?>
                                    </div>
                                </div>
                            </div>
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/types/EverExceed.png'></div>
                                    <div class="text">
                                        <?php /*= BaseController::getMessage('243') */?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="logo-row">
                            <ul>
                                <li><img oncontextmenu="return false" data-src="/img/logos/battery/lg.png" alt="LG"></li>
                                <li><img oncontextmenu="return false" src="/img/logos/battery/byd.png" alt="BYD"></li>
                                <li><img oncontextmenu="return false" data-src="/img/logos/battery/pylon-tech.png" alt="pylon tech"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="equipment-slide">
                        <div class="equipment-text">
                            <p><?php /*= BaseController::getMessage('164') */?></p>
                        </div>
                        <div class="equipment-carousel mount-slick">
                            <div class="equipment-carousel-item">
                                <div class="image-background">
                                    <div class="image background-lazy" style="background-image: url('/img/logo.svg')" data-src='/img/services/solar-panel.png'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>-->
    <!-- end equipments -->

    <!-- start work -->
<!--    --><?php //= $this->render('../section/_work.php'); ?>
        <section class="stage-section">
            <div class="container">
                <div class="stage-wrap">
                    <h2 class="line-title"><?= BaseController::getMessage('884') ?></h2>
                    <ul class="stage-list">
                        <li>
                            <div class="stage-img">
                                <img oncontextmenu="return false" data-src="/img/commercial-station/icon/dron.svg" width="90" alt="<?= BaseController::getMessage('885') ?>">
                            </div>
                            <div class="stage-info">
                                <strong><?= BaseController::getMessage('885') ?></strong>
                                <?= BaseController::getMessage('886') ?>
                            </div>
                        </li>
                        <li>
                            <div class="stage-img">
                                <img oncontextmenu="return false" data-src="/img/commercial-station/icon/analysis.svg" width="62" alt="<?= BaseController::getMessage('887') ?>">
                            </div>
                            <div class="stage-info">
                                <strong><?= BaseController::getMessage('887') ?></strong>
                                <?= BaseController::getMessage('888') ?>
                            </div>
                        </li>
                        <li>
                            <div class="stage-img">
                                <img oncontextmenu="return false" data-src="/img/commercial-station/icon/development.svg" width="65" alt="<?= BaseController::getMessage('889') ?>">
                            </div>
                            <div class="stage-info">
                                <strong><?= BaseController::getMessage('889') ?></strong>
                                <?= BaseController::getMessage('890') ?>
                            </div>
                        </li>
                        <li>
                            <div class="stage-img">
                                <img oncontextmenu="return false" data-src="/img/commercial-station/icon/logistic.svg" width="75" alt="<?= BaseController::getMessage('891') ?>">
                            </div>
                            <div class="stage-info">
                                <strong><?= BaseController::getMessage('891') ?></strong>
                                <?= BaseController::getMessage('892') ?>
                            </div>
                        </li>
                        <li>
                            <div class="stage-img">
                                <img oncontextmenu="return false" data-src="/img/commercial-station/icon/instalation.svg" width="90" alt="<?= BaseController::getMessage('893') ?>">
                            </div>
                            <div class="stage-info">
                                <strong><?= BaseController::getMessage('893') ?></strong>
                                <?= BaseController::getMessage('894') ?>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="commercial-cta">
                <div class="container">
                    <div class="cta-wrap">
                        <div class="cta-text"><?= BaseController::getMessage('521') ?></div>
                        <div class="btn-wrap">
                            <a href="#connect" class="button order-btn"><?= BaseController::getMessage('468') ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- end work -->

    <!-- start service slider -->
<!--    --><?php //= $this->render('../section/_service-slider.php'); ?>
    <!-- end service slider -->

    <?= $this->render('../section/_seo_article.php', compact('seo_data')); ?>

    <!-- start connect -->
    <?= $this->render('../section/_connect-blue.php'); ?>
    <!-- end connect -->
</main>

<?php
/*$this->registerJsFile('/js/lib/ion.rangeSlider.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/lib/Chart.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerJsFile('/js/calc/reserve.min.js', ['position' => \yii\web\View::POS_END, 'async'=>false, 'defer'=>true]);
$this->registerCssFile('/style/lib/ion.rangeSlider.css', ['position' => \yii\web\View::POS_END]);*/
?>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "SUNSAY NRG",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "<?= BaseController::getMessage('1') ?>",
            "item": "https://sunsayenergy.com"
        },{
            "@type": "ListItem",
            "position": 3,
            "name": "<?= BaseController::getMessage('3') ?>",
            "item": "https://sunsayenergy.com<?= \yii\helpers\Url::to(['/solar-power-for-backup-power']) ?>"
        }]
    }
</script>



<p>Современный бизнес работает в условиях растущих энергетических проблем - высоких тарифов на электроэнергию, пиковых
    нагрузок, отключений в чрезвычайных ситуациях и ограничений со стороны поставщика. В таких обстоятельствах особенно
    важно гарантировать плавную работу критических процессов. Коммерческие системы хранения энергии (BESS) - это
    инновационное решение, которое не только оптимизирует потребление энергии, но также позволяет получать
    дополнительный доход путем монетизации избыточной энергии. Используя BESS, предприятия эффективно управляют
    энергетическими потоками, снижают эксплуатационные расходы и обеспечивают резервную мощность даже в сложных
    условиях.
</p>
<p><strong>Инновационные технологии для современного бизнеса</strong></p>
<p>BESS легко интегрируется с существующими системами возобновляемых источников энергии, включая солнечные и ветровые
    электростанции, образуя полную энергетическую экосистему. В то же время системы могут работать эффективно без RES -
    исключительно в сочетании с сетью электроэнергии. Благодаря расширенным технологиям накопления, системы обеспечивают
    мгновенный (<1 C) переключение в режим резервного копирования, что гарантирует плавную работу производственных
    процессов. Алгоритмы накопления и распределения энергии позволяют как можно эффективно использовать каждый киловатт
    электричества. Кроме того, чтобы обеспечить дополнительную гибкость и независимость, Бесс может перезарядиться с
    помощью дизельного генератора.
</p>
<p><strong>Экономическая выгода и быстрая окупаемость</strong></p>
<p>Если вы знакомы с активной потребительской программой, вы знаете, что средняя цена продажи электроэнергии для сети
    NDN составляет около 0,5 уах/кВтч*ч, а в течение периодов низкого поколения электричество может стоить 8-12
    уах/кВтч. Благодаря системе BESS, вы можете накопить избыточную энергию и использовать их в прибыльные часы, что
    позволяет вам возвращать инвестиции в дополнительное оборудование в течение 5-6 лет. Это решение обеспечивает
    значительное снижение эксплуатационных расходов и повышение стабильности бизнеса.
</p>
<p><strong>Энергоэффективность и экологичность</strong></p>
<p>Системы хранения энергии BESS оптимизируют использование ресурсов, значительно снижая зависимость от поставки
    электроэнергии от сети. Это решение является важным элементом стратегии энергосбережения современных компаний,
    стремящихся повысить энергоэффективность и снизить эксплуатационные расходы.
</p>
<p><strong>Гибкость и масштабируемость решения</strong></p>

<p>Одним из ключевых преимуществ BESS является их модульная архитектура, которая позволяет предприятиям легко
    масштабировать систему в соответствии с увеличением расходов на энергию. Независимо от размера предприятия - от
    небольшого офисного центра до большого производственного комплекса - BESS приспосабливается к конкретным условиям
    труда, обеспечивая стабильность и эффективность энергосистемы.
</p>
<p><strong>Повышение конкурентоспособности бизнесау</strong></p>
<p>Внедрение BESS позволяет снизить затраты на электроэнергию и повысить надежность энергии. Инвестиции в эти системы
    являются важным шагом на направлении обеспечения устойчивого развития компании, повышения ее конкурентоспособности и
    реализации стратегии энергосбережения.
</p>
<p>Если вы хотите сделать свой бизнес энергоэффективным, уменьшите эксплуатационные расходы и обеспечите плавную работу
    критических систем вашего предприятия, закажите рекомендации наших экспертов сегодня. Получите индивидуальное
    решение для реализации системы хранения энергии BESS и предоставьте вашему бизнесу надежное энергоснабжение.
</p>
<p>Снизить затраты и повысить энергоэффективность! - тратить меньше, получить больше - благодаря разумной энергетической
    стратегии.
</p>