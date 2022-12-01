<?php

namespace App\Peach\Model\DataObject;

class MessageFruits extends AbstractDataObject {

    private int $idMessageFruits;
    private string $texteMessageFruits;

    public function __construct(int $idMessageFruits, string $texteMessageFruits) {
        $this->idMessageFruits = $idMessageFruits;
        $this->texteMessageFruits = $texteMessageFruits;
    }

    public function formatTableau(): array {
        return array(
            "IDMESSAGEFRUITS" => $this->getIdMessageFruits(),
            "TEXTEMESSAGEFRUITS" => $this->getTexteMessageFruits(),
        );
    }

    public function getIdMessageFruits(): int { return $this->idMessageFruits; }

    public function getTexteMessageFruits(): string { return $this->texteMessageFruits; }
}