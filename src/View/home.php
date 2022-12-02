<style type="text/css">
    body {
        background-color: blue;
    }

    legend {
        font-family: 'VT323', monospace;
        font-size: 60px;
        color: #fff;
        text-align: center;
    }

    label {
        font-family: 'VT323', monospace;
        font-size: 20px;
        color: #fff;
        text-align: center;
    }

    select, input {
        font-family: 'VT323', monospace;
        font-size: 15px;
        color: #000;
        text-align: center;
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
<form method="post" action="frontController.php?action=createdJoueur">
    <div>
        <legend>Peach and Pipes</legend>
    </div>
    <div style="display: flex; align-items: center; justify-content: space-around">
        <div>
            <p>
                <label for="user_id">Nom</label>
            </p>
            <p>
                <input type="text" placeholder="Roger" name="nomUtilisateur" id="user_id" required/>
            </p>
        </div>
        <div>
            <p>
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
            <input type="submit" value="JOUER" />
        </p>
    </div>
</form>