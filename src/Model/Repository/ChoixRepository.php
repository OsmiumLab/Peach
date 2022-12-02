<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\Choix;

class ChoixRepository extends AbstractRepository
{

    protected function getNomTable(): string
    {
        return "NDI_CHOIX";
    }

    protected function getNomClePrimaire(): string
    {
        return "IDCHOIX";
    }

    protected function construire(array $objetFormatTableau)
    {
        return new Choix(
            $objetFormatTableau["IDCHOIX"],
            $objetFormatTableau["TEXTECHOIX"]
        );
    }

    protected function getNomsColonnes(): array
    {
        return array("IDCHOIX", "TEXTECHOIX");
    }

    protected function getProcedureInsert(): string
    {
        return "NDIAJOUTERCHOIX";
    }
}