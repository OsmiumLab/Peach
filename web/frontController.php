<?php

use App\Peach\Controller\ControllerJoueur;

require_once __DIR__ . '/../src/Lib/Psr4AutoloaderClass.php';

$loader = new App\Peach\Lib\Psr4AutoloaderClass();
$loader->addNamespace('App\Peach', __DIR__ . '/../src');
$loader->register();

$action = $_GET['action'] ?? 'createJoueur';

if (method_exists(ControllerJoueur::class, $action)) {
    ControllerJoueur::$action();
}