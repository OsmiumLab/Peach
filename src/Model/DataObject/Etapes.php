<?php

namespace App\Peach\Model\DataObject;

class Etapes extends AbstractDataObject {

    private int $idEtape;
    private int $idFruit;
    private int $idChoix;
    private int $idJoueur;

    public function __construct(int $idEtape, int $idFruit, int $idChoix, int $idJoueur) {
        $this->idEtape = $idEtape;
        $this->idFruit = $idFruit;
        $this->idChoix = $idChoix;
        $this->idJoueur = $idJoueur;
    }

    public function formatTableau(): array {
        return array(
            "IDETAPE" => $this->getIdEtape(),
            "IDFRUIT" => $this->getIdFruit(),
            "IDCHOIX" => $this->getIdChoix(),
            "IDJOUEUR" => $this->getIdJoueur(),
        );
    }

    public function getIdEtape(): int { return $this->idEtape; }

    public function getIdFruit(): int { return $this->idFruit; }

    public function getIdChoix(): int { return $this->idChoix; }

    public function getIdJoueur(): int { return $this->idJoueur; }
}