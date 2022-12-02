<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\Joueur;

class JoueurRepository extends AbstractRepository
{

    protected function getNomTable(): string {
        return "NDI_JOUEUR";
    }

    protected function getNomClePrimaire(): string {
        return "IDJOUEUR";
    }

    protected function construire(array $objetFormatTableau) {
        return new Joueur(
            $objetFormatTableau["IDJOUEUR"],
            $objetFormatTableau["NOMUTILISATEUR"],
            $objetFormatTableau["CHOIXFRUIT"]
        );
    }

    protected function getNomsColonnes(): array {
        return array("IDJOUEUR", "NOMUTILISATEUR", "CHOIXFRUIT");
    }

    protected function getProcedureInsert(): string {
        return "NDIAJOUTERJOUEUR";
    }
}