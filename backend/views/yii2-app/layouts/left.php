<aside class="main-sidebar">

    <section class="sidebar">
        <?= dmstr\widgets\Menu::widget(
            [
                'options' => ['class' => 'sidebar-menu'],
                'items' => [
                    (\Yii::$app->user->can('Користувачі'))?[
                        'label' => 'Користувачі',
                        'icon' => 'fa fa-users',
                        'url' => ['/user'],
                        'items' => [
                            ['label' => 'Користувачі', 'icon' => 'fa fa-user-plus', 'url' => ['/user']],
                            ['label' => 'Ролі', 'icon' => 'fa fa-user-secret', 'url' => ['/role']],
                            /*['label' => 'Права', 'icon' => 'fa fa-key', 'url' => ['/permission']],*/
                        ],
                    ]:"",

                   /* [
                        'label' => 'Статика',
                        'icon' => 'fa fa-folder-open',
                        'url' => '#',
                        'items' => [
                            ['label' => 'Языковые сообщения', 'icon' => 'fa fa-comment', 'url' => ['/message']],
                            ['label' => 'Хранилище файлов', 'icon' => 'fa fa-file', 'url' => ['/file']],
                            ['label' => 'Служебные', 'icon' => 'fa fa-link', 'url' => ['/service']],
                        ],
                    ],*/

                    (\Yii::$app->user->can('Блог'))?['label' => 'Блог', 'icon' => 'fa fa-book', 'url' => ['/blog']]:"",
                    (\Yii::$app->user->can('Переклади текстів'))?['label' => 'Переклади текстів', 'icon' => 'fa fa-comment', 'url' => ['/message']]:"",
                    (\Yii::$app->user->can('Контакти'))?['label' => 'Контакти', 'icon' => 'fa fa-address-book   ', 'url' => ['/contact']]:"",
                    (\Yii::$app->user->can('Відгуки'))?['label' => 'Відгуки', 'icon' => 'fa  fa-comments', 'url' => ['/reviews']]:"",
                    (\Yii::$app->user->can('Файли'))?['label' => 'Коментарi', 'icon' => 'fa  fa-comments', 'url' => ['/comment']]:"",
                    (\Yii::$app->user->can('Проекти'))?['label' => 'Проекти', 'icon' => 'fa  fa-camera-retro', 'url' => ['/project']]:"",
                    (\Yii::$app->user->can('Змінні в калькуляторах'))?['label' => 'Змінні в калькуляторах', 'icon' => 'fa fa-calculator', 'url' => ['/calculator']]:"",
                    (\Yii::$app->user->can('Заявки з сайту'))?['label' => 'Заявки з сайту', 'icon' => 'fa fa-bell', 'url' => ['/request']]:"",
                    (\Yii::$app->user->can('Підписки'))?['label' => 'Підписки', 'icon' => 'fa fa-envelope', 'url' => ['/subscribe']]:"",
                    (\Yii::$app->user->can('SEO'))?['label' => 'SEO', 'icon' => 'fa fa-search', 'url' => ['/seo']]:"",
                    (\Yii::$app->user->can('OG: теги'))?['label' => 'OG: теги', 'icon' => 'fa fa-reply', 'url' => ['/og']]:"",
                    (\Yii::$app->user->can('Файли'))?['label' => 'Файли', 'icon' => 'fa fa-file', 'url' => ['/files']]:"",
                    (\Yii::$app->user->can('Налаштування'))?['label' => 'Налаштування', 'icon' => 'fa fa-suitcase', 'url' => ['/settings']]:"",
                    (\Yii::$app->user->can('Файли'))?['label' => 'Вiдео', 'icon' => 'fa fa-video', 'url' => ['/video']]:"",
                    (\Yii::$app->user->can('Файли'))?['label' => "Комерційні станції (Фото)", 'icon' => 'fa fa-camera', 'url' => ['/commercial']]:"",
                    (\Yii::$app->user->can('Файли'))?['label' => 'Вiдео Вiдгуки', 'icon' => 'fa fa-video', 'url' => ['/video-review']]:"",
                ],
            ]
        ) ?>

    </section>

</aside>
