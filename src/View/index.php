<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Engine</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="objectif">
        <strong>
            !
        </strong>
        <p id="objectifName">
            Aller parler au kiwi
        </p>
    </div>
    <div id="choix" class="hidden">
        <div id="container">
            <div>
                <p id="choix1">
                    Se faire sauter
                </p>
            </div>
            <div>
                <p id="choix2">
                    Pas faire sauter
                </p>
            </div>
        </div>
    </div>
    <div id="keysInstruction" class="hidden">
        <p>
            Press E to interact
        </p>
    </div>

    <p id="pepin">0 : pepins</p>
    <p id="protection">Protégé</p>
    <canvas></canvas>
    <script src="js/Pnj.js"></script>
    <script src="js/Scene.js"></script>
    <script src="js/Player.js"></script>
    <script src="js/Rideau.js"></script>
    <script src="js/engine.js"></script>
</body>
</html>