<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\Joueur;

class JoueurRepository extends AbstractRepository
{

    protected function getNomTable(): string {
        return "NDI_Joueur";
    }

    protected function getNomClePrimaire(): string {
        return "idJoueur";
    }

    protected function construire(array $objetFormatTableau) {
        return new Joueur(
            $objetFormatTableau["idJoueur"],
            $objetFormatTableau["nomUtilisateur"],
            $objetFormatTableau["choixFruit"]
        );
    }

    protected function getNomsColonnes(): array {
        return array("idJoueur", "nomUtilisateur", "choixFruit");
    }

    protected function getProcedureInsert(): string {
        return "NDIAjouterJoueur";
    }

    protected function getSequence(): string
    {
        return "ndi_sed_joueur_id";
    }
}