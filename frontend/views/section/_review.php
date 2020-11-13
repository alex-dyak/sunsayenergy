<?php use frontend\controllers\BaseController; ?>

<?php if (!empty($reviews)): ?>
    <section class="section review">
        <div class="review__content">
            <div class="review__content-title">
                <h2><?= BaseController::getMessage('331') ?></h2><span class="mobile-count"><?= count($reviews) ?> <?= BaseController::getMessage('332') ?></span>
            </div>
            <div class="review__content-list">
                <?php foreach ($reviews as $item): ?>
                    <div class="review-item">
                        <div class="review__content-list__item">
                            <div class="review__content-list__item-image">
                                <div class="review-image"><img oncontextmenu="return false" src="/images/<?= $item->images->imagePreview ?>" alt="">
                                    <?php if($item->images->avatar != ''): ?>
                                    <div class="review-photo"><img oncontextmenu="return false" src="/images/<?= $item->images->avatar ?>" alt=""></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="review__content-list__item-info">
                                <div class="review-count"><?= count($reviews) ?> <?= BaseController::getMessage('332') ?></div>
                                <div class="review-name"><?= $item->name ?></div>
                                <div class="review-role"><?= $item->role ?></div>
                                <div class="review-message"><?= $item->message ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
<?php endif; ?>