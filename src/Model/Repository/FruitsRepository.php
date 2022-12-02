<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\Fruits;

class FruitsRepository extends AbstractRepository
{

    protected function getNomTable(): string {
        return "NDI_FRUITS";
    }

    protected function getNomClePrimaire(): string
    {
        return "IDFRUIT";
    }

    protected function construire(array $objetFormatTableau)
    {
        return new Fruits(
            $objetFormatTableau["IDFRUIT"],
            $objetFormatTableau["NOMFRUIT"],
            $objetFormatTableau["TAUXVERREDETERRE"],
            $objetFormatTableau["NBINTERACTIONS"],
            $objetFormatTableau["NBPEPINS"]
        );
    }

    protected function getNomsColonnes(): array
    {
        return array("IDFRUIT", "NOMFRUIT", "TAUXVERREDETERRE", "NBINTERACTIONS", "NBPEPINS");
    }

    protected function getProcedureInsert(): string
    {
        return "NDIAJOUTERFRUITS";
    }
}