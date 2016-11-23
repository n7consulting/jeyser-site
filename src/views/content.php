<div class="row">
    <div class="col-lg-2 col-md-3 col-xs-4">
        <ul class="list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li><a href="/fr/">French Documentation</a></li>
            <?php
            /** @var array $menu */
            foreach ($menu as $m => $text) {
                ?>
                <li><a href="/<?php echo (is_dir('txt/'.$route[0]) ? $route[0].'/'.$m: $m); ?>"><?php echo ucfirst($text); ?></a></li>
                <?php
            }
            ?>
        </ul>
    </div>
    <div class="col-lg-10 col-md-9 col-xs-8">
        <?php /** @var string $page */
        echo $page; ?>
    </div>
</div>
