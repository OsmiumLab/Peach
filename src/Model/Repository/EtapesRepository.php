<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\Etapes;

class EtapesRepository extends AbstractRepository
{

    protected function getNomTable(): string
    {
        return "NDI_ETAPES";
    }

    protected function getNomClePrimaire(): string
    {
        return "IDETAPE";
    }

    protected function construire(array $objetFormatTableau)
    {
        return new Etapes(
            $objetFormatTableau["IDETAPE"],
            $objetFormatTableau["IDFRUIT"],
            $objetFormatTableau["IDCHOIX"],
            $objetFormatTableau["IDJOUEUR"]
        );
    }

    protected function getNomsColonnes(): array
    {
        return array("IDETAPE", "IDFRUIT", "IDCHOIX", "IDJOUEUR");
    }

    protected function getProcedureInsert(): string
    {
        return "NDIAJOUTERETAPE";
    }
}