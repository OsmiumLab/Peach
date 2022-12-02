<?php

namespace App\Peach\Model\DataObject;

class Fruits extends AbstractDataObject {

    private int $idFruit;
    private string $nomFruit;
    private int $tauxVerreDeTerre;
    private int $nbInteractions;
    private int $nbPepins;

    public function __construct(int $idFruit, string $nomFruit, int $tauxVerreDeTerre, int $nbInteractions, int $nbPepins) {
        $this->idFruit = $idFruit;
        $this->nomFruit = $nomFruit;
        $this->tauxVerreDeTerre = $tauxVerreDeTerre;
        $this->nbInteractions = $nbInteractions;
        $this->nbPepins = $nbPepins;
    }

    public function formatTableau(): array {
        return array(
            "IDFRUIT" => $this->getIdFruit(),
            "NOMFRUIT" => $this->getNomFruit(),
            "TAUXVERREDETERRE" => $this->getTauxVerreDeTerre(),
            "NBINTERACTIONS" => $this->getNbInteractions(),
            "NBPEPINS" => $this->getNbPepins()
        );
    }

    public function getIdFruit(): int
    {
        return $this->idFruit;
    }

    public function getNomFruit(): string
    {
        return $this->nomFruit;
    }

    public function getTauxVerreDeTerre(): int
    {
        return $this->tauxVerreDeTerre;
    }

    public function getNbInteractions(): int
    {
        return $this->nbInteractions;
    }

    public function getNbPepins(): int
    {
        return $this->nbPepins;
    }
}