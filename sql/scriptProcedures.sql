-- ############################################################
-- # Sequences
-- ############################################################
DROP SEQUENCE ndi_seq_joueur_id;
CREATE SEQUENCE ndi_seq_joueur_id START WITH 1 INCREMENT BY 1;

DROP SEQUENCE ndi_seq_etapes_id;
CREATE SEQUENCE ndi_seq_etapes_id START WITH 1 INCREMENT BY 1;

DROP SEQUENCE ndi_seq_fruits_id;
CREATE SEQUENCE ndi_seq_fruits_id START WITH 1 INCREMENT BY 1;

DROP SEQUENCE ndi_seq_choix_id;
CREATE SEQUENCE ndi_seq_choix_id START WITH 1 INCREMENT BY 1;

DROP SEQUENCE ndi_seq_messages_fruits_id;
CREATE SEQUENCE ndi_seq_messages_fruits_id START WITH 1 INCREMENT BY 1;


-- ############################################################
-- # Procedures : AJOUTER
-- ############################################################
DROP PROCEDURE NDIAjouterJoueur;
CREATE OR REPLACE PROCEDURE NDIAjouterJoueur(osef NUMBER, p_nomUtilisateur NDI_JOUEUR.nomUtilisateur%TYPE, p_choixFruit NDI_JOUEUR.CHOIXFRUIT%TYPE) IS
BEGIN
    INSERT INTO NDI_JOUEUR VALUES (ndi_seq_joueur_id.nextval, p_nomUtilisateur, p_choixFruit);
END;

DROP PROCEDURE NDIAjouterChoix;
CREATE OR REPLACE PROCEDURE NDIAjouterChoix(osef NUMBER, p_texteChoix NDI_CHOIX.TEXTECHOIX%TYPE) IS
BEGIN
    INSERT INTO NDI_CHOIX VALUES (ndi_seq_choix_id.nextval, p_texteChoix);
END;

DROP PROCEDURE NDIAjouterMessagesFruits;
CREATE OR REPLACE PROCEDURE NDIAjouterMessagesFruits(osef NUMBER, p_texteMessage NDI_MESSAGEFRUITS.TEXTEMESSAGE%TYPE) IS
BEGIN
    INSERT INTO NDI_MESSAGEFRUITS VALUES (ndi_seq_messages_fruits_id.nextval, p_texteMessage);
END;

DROP PROCEDURE NDIAjouterFruits;
CREATE OR REPLACE PROCEDURE NDIAjouterFruits(osef NUMBER, p_nomFruit NDI_FRUITS.NOMFRUIT%TYPE, p_tauxVerreDeTerre NDI_FRUITS.TAUXVERREDETERRE%TYPE, p_nbPepins NDI_FRUITS.NBPEPINS%TYPE, p_idMessage NDI_MESSAGEFRUITS.idMessage%TYPE) IS
BEGIN
    INSERT INTO NDI_FRUITS VALUES (ndi_seq_fruits_id.nextval, p_nomFruit, p_tauxVerreDeTerre, p_nbPepins, p_idMessage);
END;

DROP PROCEDURE NDIAjouterEtapes;
CREATE OR REPLACE PROCEDURE NDIAjouterEtapes(osef NUMBER, p_idFruit NDI_FRUITS.IDFRUIT%TYPE, p_idChoix NDI_CHOIX.IDCHOIX%TYPE, p_idJoueur NDI_JOUEUR.IDJOUEUR%TYPE) IS
BEGIN
    INSERT INTO NDI_ETAPES VALUES (ndi_seq_etapes_id.nextval, p_idFruit, p_idChoix, p_idJoueur);
END;

-- ############################################################
-- # Procedures : Lecture Data
-- ############################################################
CREATE OR REPLACE PROCEDURE ListeJoueurParID(p_idJoueur NDI_JOUEUR.IDJOUEUR%TYPE) IS
    CURSOR c1 IS
        SELECT NJ.IDJOUEUR, NE.IDETAPE, NE.IDFRUIT, NE.IDCHOIX FROM NDI_JOUEUR NJ
        JOIN NDI_ETAPES NE on NJ.IDJOUEUR = NE.IDJOUEUR
        WHERE NJ.IDJOUEUR = p_idJoueur;
BEGIN
    FOR v1 IN c1 LOOP
        IF v1.IDFRUIT = 5 THEN
            DBMS_OUTPUT.PUT_LINE('https://www.pasteur.fr/fr/centre-medical/fiches-maladies/sida-vih');
        ELSE IF v1.IDFRUIT = 2 THEN
            DBMS_OUTPUT.PUT_LINE('https://www.moncorpsmacontraception.fr/methodes-contraceptives/preservatif-feminin'
                                     || 'https://www.moncorpsmacontraception.fr/methodes-contraceptives/preservatif-masculin');
        ELSE IF v1.IDFRUIT = 6 THEN
            DBMS_OUTPUT.PUT_LINE('https://www.ameli.fr/assure/sante/themes/mst-ist/depistage');
        END IF;
        END IF;
        END IF;
    END LOOP;
END;