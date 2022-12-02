<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\MessageFruits;

class MessageFruitsRepository extends AbstractRepository
{

    protected function getNomTable(): string
    {
        return "NDI_MESSAGEFRUITS";
    }

    protected function getNomClePrimaire(): string
    {
        return "IDMESSAGE";
    }

    protected function construire(array $objetFormatTableau)
    {
        return new MessageFruits(
            $objetFormatTableau["IDMESSAGE"],
            $objetFormatTableau["TEXTEMESSAGE"]
        );
    }

    protected function getNomsColonnes(): array
    {
        return array("IDMESSAGE", "TEXTEMESSAGE");
    }

    protected function getProcedureInsert(): string
    {
        return "NDIAJOUTERMESSAGE";
    }
}