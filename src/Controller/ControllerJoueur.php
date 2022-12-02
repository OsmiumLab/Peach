<?php

namespace App\Peach\Controller;

use App\Peach\Model\DataObject\Choix;
use App\Peach\Model\DataObject\Etapes;
use App\Peach\Model\DataObject\Fruits;
use App\Peach\Model\DataObject\Joueur;
use App\Peach\Model\DataObject\MessageFruits;
use App\Peach\Model\Repository\ChoixRepository;
use App\Peach\Model\Repository\EtapesRepository;
use App\Peach\Model\Repository\FruitsRepository;
use App\Peach\Model\Repository\JoueurRepository;
use App\Peach\Model\Repository\MessageFruitsRepository;

class ControllerJoueur {

    public static function createJoueur() : void {
        $joueur = new Joueur((int)null, $_POST['nomUrl'], $_POST['choixFruit']);
        (new JoueurRepository())->sauvegarder($joueur);
    }

    public static function createChoix() : void {
        $choix = new Choix((int)null, $_POST['texteChoix']);
        (new ChoixRepository())->sauvegarder($choix);
    }

    public static function createEtapes() : void {
        $etapes = new Etapes((int)null, $_POST['idFruit'], $_POST['idChoix'], $_POST['idJoueur']);
        (new EtapesRepository())->sauvegarder($etapes);
    }
}