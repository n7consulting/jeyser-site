<?php

function Multiview()
{
    $adresse1 = trim(str_replace('.html', '', $_SERVER['REQUEST_URI']), '/') . '/';
    $adresse = explode('/', $adresse1);
    return $adresse;
}

function routing(array $route)
{
    global $LANG;
    $result = array('src' => 'txt/index.md', 'menu' => 'txt');
    if (!preg_match('/[^a-z_\-0-9]/i', $route[0])) {
        if (count($route) == 3) { //looking for a doc in a language folder

            if (in_array($route[0], $LANG)) {
                if (file_exists('txt/' . $route[0] . '/' . $route[1] . '.md')) {
                    $result['src'] = 'txt/' . $route[0] . '/' . $route[1] . '.md';
                }
                $result['menu'] = 'txt/' . $route[0];
            }
        } elseif (count($route) == 2) {
            if (file_exists('txt/' . $route[0] . '.md')) {
                $result['src'] = 'txt/' . $route[0] . '.md';
            } elseif (is_dir('txt/' . $route[0])) {
                $result['src'] = 'txt/' . $route[0] . '/index.md';
                $result['menu'] = 'txt/' . $route[0];
            }
        }
    }
    return $result;
}

function warning($message)
{
    return '<div class="alert alert-danger">' . $message . '</div>';
}

function ok($message)
{
    return '<div class="alert alert-success">' . $message . '</div>';
}
