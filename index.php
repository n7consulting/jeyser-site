<?php
require(__DIR__ . '/src/controllers/Parsedown.php');
require(__DIR__ . '/src/controllers/functions.php');

$LANG = array('fr', 'en'); //available languages in documentation.

$route = Multiview();//explode request uri according to /
$result = routing($route);

if ($result['src'] !== null) {
    $Parsedown = new ParsedownX();
    $page = $Parsedown->text(file_get_contents($result['src']));
}

if (!isset($page)) { //display index
    $Parsedown = new ParsedownX();
    $page = $Parsedown->text(file_get_contents('txt/index.md'));
}

//create a menu with all files
$files = scandir($result['menu']);
$menu = array();
foreach ($files as $f) {
    if (substr($f, -3) == '.md') {
        $menu[rtrim($f, '.md')] = str_replace('_', ' ', rtrim($f, '.md'));
    }
}

$title = (!empty($route[1]) ? ucfirst($route[1]) : (!empty($route[0]) ? ucfirst($route[0]) : 'Jeyser CRM'));
require(__DIR__ . '/src/views/header.php');
require(__DIR__ . '/src/views/content.php');
require(__DIR__ . '/src/views/footer.php');
