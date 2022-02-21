<ul class="social-list">
    <?php if (!empty($contacts->link_fb)): ?>
        <li class="facebook">
            <a href="<?= $contacts->link_fb ?>" rel="nofollow" target="_blank">
                <i class="icon-facebook"></i>
            </a>
        </li>
    <?php endif; ?>
    <?php if (!empty($contacts->link_youtube)): ?>
        <li>
            <a href="<?= $contacts->link_youtube ?>" rel="nofollow" target="_blank">
                <i class="icon-youtube"></i>
            </a>
        </li>
    <?php endif; ?>
    <?php if (!empty($contacts->link_telegram)): ?>
        <li>
            <a href="<?= $contacts->link_telegram ?>" rel="nofollow" target="_blank">
                <i class="icon-telegram"></i>
            </a>
        </li>
    <?php endif; ?>
    <?php if (!empty($contacts->link_viber)): ?>
        <li>
            <a href="<?= $contacts->link_viber ?>" rel="nofollow" target="_blank">
                <i class="icon-viber"></i>
            </a>
        </li>
    <?php endif; ?>
    <?php if (!empty($contacts->link_insta)): ?>
        <li>
            <a href="<?= $contacts->link_insta ?>" rel="nofollow" target="_blank">
                <i class="icon-instagram"></i>
            </a>
        </li>
    <?php endif; ?>
</ul>
