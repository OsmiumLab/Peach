<?php

namespace App\Peach\Controller;

use App\Peach\Model\DataObject\Choix;
use App\Peach\Model\DataObject\Etapes;
use App\Peach\Model\DataObject\Joueur;
use App\Peach\Model\Repository\ChoixRepository;
use App\Peach\Model\Repository\EtapesRepository;
use App\Peach\Model\Repository\JoueurRepository;

class ControllerJoueur {

    private static function afficheVue(string $cheminVue, array $parametres = []): void {
        extract($parametres);
        require __DIR__ . "/../view/$cheminVue";
    }

    public static function createJoueur() : void {
        self::afficheVue('home.php');
    }

    public static function createdJoueur() : void {
        $joueur = new Joueur(0, $_POST['nomUtilisateur'], $_POST['choixFruit']);
        (new JoueurRepository())->sauvegarder($joueur);
    }

    public static function createChoix() : void {
        $choix = new Choix((int)null, $_POST['texteChoix']);
        (new ChoixRepository())->sauvegarder($choix);
    }

    public static function createEtapes() : void {
        $etapes = new Etapes((int)null, $_POST['idFruit'], $_POST['idChoix'], $_GET['idJoueur']);
        (new EtapesRepository())->sauvegarder($etapes);
    }
}