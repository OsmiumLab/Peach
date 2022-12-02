<?php

namespace App\Peach\Model\Repository;

use App\Peach\Model\DataObject\AbstractDataObject;
use PDOException;

abstract class AbstractRepository {

    public function sauvegarder(AbstractDataObject $object): bool {
        $sql = "CALL " . $this->getProcedureInsert(). "(:" . implode(', :', $this->getNomsColonnes()) . ")";
        $values = $object->formatTableau();
        $pdoStatement = DatabaseConnection::getPdo()->prepare($sql);
        try {
            $pdoStatement->execute($values);
            return true;
        } catch (PDOException) {
            return false;
        }
    }

    protected abstract function getNomTable(): string;

    protected abstract function getNomClePrimaire(): string;

    protected abstract function construire(array $objetFormatTableau);

    protected abstract function getNomsColonnes(): array;

    protected abstract function getProcedureInsert(): string;

    protected abstract function getSequence(): string;

}