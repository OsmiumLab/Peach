<?php

namespace App\Peach\Model\DataObject;

class Choix extends AbstractDataObject {

    private int $idChoix;
    private string $texteChoix;

    public function __construct(int $idChoix, string $texteChoix) {
        $this->idChoix = $idChoix;
        $this->texteChoix = $texteChoix;
    }

    public function formatTableau(): array {
        return array(
            "IDCHOIX" => $this->getIdChoix(),
            "TEXTECHOIX" => $this->getTexteChoix(),
        );
    }

    public function getIdChoix(): int { return $this->idChoix; }

    public function getTexteChoix(): string { return $this->texteChoix; }
}