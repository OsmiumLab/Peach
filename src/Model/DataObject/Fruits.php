<?php

namespace App\Peach\Model\DataObject;

class Fruits extends AbstractDataObject {

    private int $idFruit;
    private string $nomFruit;
    private int $tauxVerreDeTerre;
    private int $nbInteractions;

    public function __construct(int $idFruit, string $nomFruit, int $tauxVerreDeTerre, int $nbInteractions) {
        $this->idFruit = $idFruit;
        $this->nomFruit = $nomFruit;
        $this->tauxVerreDeTerre = $tauxVerreDeTerre;
        $this->nbInteractions = $nbInteractions;
    }

    public function formatTableau(): array {
        return array(
            "IDFRUIT" => $this->getIdFruit(),
            "NOMFRUIT" => $this->getNomFruit(),
            "TAUXVERREDETERRE" => $this->getTauxVerreDeTerre(),
            "NBINTERACTIONS" => $this->getNbInteractions(),
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

    public function setTauxVerreDeTerre(int $tauxVerreDeTerre): void
    {
        $this->tauxVerreDeTerre = $tauxVerreDeTerre;
    }

    public function setNbInteractions(int $nbInteractions): void
    {
        $this->nbInteractions = $nbInteractions;
    }
}