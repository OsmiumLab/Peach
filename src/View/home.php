<form method="post" action="frontController.php?action=createdJoueur">
    <fieldset>
        <legend>Mon formulaire :</legend>
        <p>
            <label for="user_id">Nom</label> :
            <input type="text" placeholder="Roger" name="nomUtilisateur" id="user_id" required/>
        </p>
        <p>
            <label for="fruit_id">Fruit</label> :
            <select name="choixFruit" id="fruit_id" required>
                <option value="Aubergine">Aubergine</option>
                <option value="Peche">Pêche</option>
            </select>
        </p>
        <p>
            <input type="submit" value="Envoyer" />
        </p>
    </fieldset>
</form>