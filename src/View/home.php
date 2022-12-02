<html>
    <head>
        <title>Peach and Pips</title>
        <style type="text/css">
            body {
                background-image: url('../../../Peach/web/assets/js/images/backfull.png');
                background-repeat: no-repeat;
                background-position: center;
            }

            legend {
                font-family: 'VT323', monospace;
                font-size: 60px;
                color: black;
                background-color: hotpink;
                text-align: center;
            }

            label {
                font-family: 'VT323', monospace;
                font-size: 20px;
                color: black;
                text-align: center;
            }

            .forme {
                background-color: hotpink;
            }

            select, input {
                font-family: 'VT323', monospace;
                font-size: 15px;
                color: #000;
                text-align: center;
            }

            .bouton {
                display: block;
                padding: 5px 20px;
                background-color: hotpink;
                font-family: 'VT323', monospace;
                font-size: 15px;
                text-align: center;
                color: #000;
            }

            p {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            div {
                margin: 3%;
            }

        </style>
    </head>
    <body>
        <form method="post" action="frontController.php?action=createdJoueur">
            <div>
                <legend>Peach and Pips</legend>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-around">
                <div>
                    <p class="forme">
                        <label for="user_id">Nom</label>
                    </p>
                    <p>
                        <input type="text" placeholder="Roger" name="nomUtilisateur" id="user_id" required/>
                    </p>
                </div>
                <div>
                    <p class="forme">
                        <label for="fruit_id">Fruit</label>
                    </p>
                    <p>
                        <select name="choixFruit" id="fruit_id" required>
                            <option value="Aubergine">Aubergine</option>
                            <option value="Peche">Pêche</option>
                        </select>
                    </p>
                </div>
            </div>
            <div style="padding-top: 30px">
                <p>
                    <input class="bouton" type="submit" value="JOUER" />
                </p>
            </div>
        </form>
    </body>
</html>