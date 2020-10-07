<?php use frontend\controllers\BaseController; ?>

<section class="section comment" id="comment">
    <div class="container">
        <div class="connect__content">
            <div class="connect__content-title line-title">
                <strong class="h2"><span><?= BaseController::getMessage('604') ?></span> </strong>
            </div>
            <form class="comment__content-question" id="comment_form">
                <div class="comment">
                    <input type="hidden" name="article_id" value="<?php echo $article->id; ?>" >
                    <input type="hidden" name="comment_date" value="<?php echo date('d-m-Y'); ?>" >
                    <input type="hidden" name="response_date" value="<?php echo date('d-m-Y'); ?>" >
                    <input type="hidden" name="published" value="no" >
                    <label for="name" class="hidden"><?= BaseController::getMessage('366') ?></label>
                    <input class="custom-field" type="text" id="name" name="name" placeholder="<?= BaseController::getMessage('366') ?>">
                    <label for="question" class="hidden"><?= BaseController::getMessage('605') ?></label>
                    <textarea class="custom-field" id="comment" name="comment" rows="5" placeholder="<?= BaseController::getMessage('605') ?>"></textarea>
                    <div class="connect__content-button">
                        <button class="btn comment-btn btn-primary" id="submit_button">
                            <?= BaseController::getMessage('14') ?>
                        </button>
                    </div>
                </div>
                <div class="form-compelete"><?= BaseController::getMessage('607') ?></div>
            </form>
        </div>
        <div class="comments-list">
            <?php foreach ($comments as $comment) : ?>
            <div class="comment-item">
                <span class="comment-author"><?= $comment->name ?></span>
                <span class="comment-text"><?= $comment->comment ?></span>
                <span class="comment-date"><?= $comment->comment_date ?></span>
                <?php if ($comment->response) : ?>
                        <span class="comment-text"><?= $comment->response ?></span>
                        <span class="comment-date"><?= $comment->response_date ?></span>
                <?php endif; ?>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>