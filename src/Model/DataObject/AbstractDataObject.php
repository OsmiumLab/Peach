<?php

namespace App\Peach\Model\DataObject;

abstract class AbstractDataObject {
    public abstract function formatTableau(): array;
}