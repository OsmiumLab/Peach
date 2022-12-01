<?php

namespace App\Peach\Model\DataObject;

class Joueur extends AbstractDataObject {

    private int $idJoueur;
    private string $nomUtilisateur;
    private string $choixFruit;

    public function __construct(int $idJoueur, string $nomUtilisateur, string $choixFruit) {
        $this->idJoueur = $idJoueur;
        $this->nomUtilisateur = $nomUtilisateur;
        $this->choixFruit = $choixFruit;
    }

    public function formatTableau(): array {
        return array(
            "IDJOUEUR" => $this->getIdJoueur(),
            "NOMUTILISATEUR" => $this->getNomUtilisateur(),
            "CHOIXFRUIT" => $this->getChoixFruit()
        );
    }

    public function getIdJoueur(): int { return $this->idJoueur; }

    public function getNomUtilisateur(): string { return $this->nomUtilisateur; }

    public function getChoixFruit(): string { return $this->choixFruit; }
}