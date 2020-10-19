<?php
use frontend\controllers\BaseController;
use yii\widgets\ActiveForm;
use common\models\Comment;
$model = new Comment();
?>

<section class="section-comment" id="comment">
    <div class="container">
        <div class="comment-wrap">
			<strong class="h2 line-title"><?= BaseController::getMessage('604') ?></strong>
            <form class="comment-content-question" id="comment_form">
                <div class="comment">
                    <?php /* echo  \himiklab\yii2\recaptcha\ReCaptcha3::widget(['name' => 'reCaptcha']) */?>
                    <input type="hidden" name="article_id" value="<?php echo $article->id; ?>" >
                    <input type="hidden" name="comment_date" value="<?php echo date('d-m-Y'); ?>" >
                    <input type="hidden" name="response_date" value="<?php echo date('d-m-Y'); ?>" >
                    <input type="hidden" name="published" value="no" >
                    <label for="name" class="hidden"><?= BaseController::getMessage('366') ?></label>
                    <input class="custom-field" type="text" id="name" name="name" placeholder="<?= BaseController::getMessage('366') ?>">
                    <label for="question" class="hidden"><?= BaseController::getMessage('605') ?></label>
                    <textarea class="custom-field" id="comment" name="comment" rows="5" placeholder="<?= BaseController::getMessage('605') ?>"></textarea>
					<div class="comment-button-wrap">
						<button class="button comment-button">
                            <?= BaseController::getMessage('14') ?>
						</button>
					</div>
                </div>
                <div class="form-compelete"><?= BaseController::getMessage('607') ?></div>
            </form>
        </div>
        <?php if($comments) : ?>
            <div class="comments-list">
                <strong class="h2 line-title"><?= BaseController::getMessage('609') ?></strong>
                <?php foreach ($comments as $comment) : ?>
                <div class="comment-item">
                    <div class="comment-item-question">
                        <div class="comment-item-head">
                            <strong class="comment-author"><?= $comment->name ?></strong>
                            <time datetime="<?= $comment->comment_date ?>" class="comment-date"><?= $comment->comment_date ?></time>
                        </div>
                        <p><?= $comment->comment ?></p>
                    </div>

                    <?php if ($comment->response) : ?>
                        <div class="comment-item-answer">
                            <div class="comment-item-head">
                                <strong class="comment-author"><?= BaseController::getMessage('608') ?></strong>
                                <time datetime="<?= $comment->response_date ?>" class="comment-date"><?= $comment->response_date ?></time>
                            </div>
                            <p><?= $comment->response ?></p>
                        </div>
                    <?php endif; ?>
                </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>