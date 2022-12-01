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
CREATE OR REPLACE PROCEDURE NDIAjouterJoueur(p_nomUtilisateur NDI_JOUEUR.nomUtilisateur%TYPE, p_choixFruit NDI_JOUEUR.CHOIXFRUIT%TYPE) IS
BEGIN
    INSERT INTO NDI_JOUEUR VALUES (ndi_seq_joueur_id.nextval, p_nomUtilisateur, p_choixFruit);
END;

DROP PROCEDURE NDIAjouterChoix;
CREATE OR REPLACE PROCEDURE NDIAjouterChoix(p_texteChoix NDI_CHOIX.TEXTECHOIX%TYPE) IS
BEGIN
    INSERT INTO NDI_CHOIX VALUES (ndi_seq_choix_id.nextval, p_texteChoix);
END;

DROP PROCEDURE NDIAjouterMessagesFruits;
CREATE OR REPLACE PROCEDURE NDIAjouterMessagesFruits(p_texteMessage NDI_MESSAGEFRUITS.TEXTEMESSAGE%TYPE) IS
BEGIN
    INSERT INTO NDI_MESSAGEFRUITS VALUES (ndi_seq_messages_fruits_id.nextval, p_texteMessage);
END;

DROP PROCEDURE NDIAjouterFruits;
CREATE OR REPLACE PROCEDURE NDIAjouterFruits(p_nomFruit NDI_FRUITS.NOMFRUIT%TYPE, p_tauxVerreDeTerre NDI_FRUITS.TAUXVERREDETERRE%TYPE, p_nbInteractions NDI_FRUITS.NBINTERACTIONS%TYPE) IS
BEGIN
    INSERT INTO NDI_FRUITS VALUES (ndi_seq_fruits_id.nextval, p_nomFruit, p_tauxVerreDeTerre, p_nbInteractions);
END;

DROP PROCEDURE NDIAjouterMessageDesFruits;
CREATE OR REPLACE PROCEDURE NDIAjouterMessageDesFruits(p_idFruit NDI_FRUITS.IDFRUIT%TYPE, p_idMessage NDI_MESSAGEFRUITS.IDMESSAGE%TYPE) IS
BEGIN
    INSERT INTO NDI_MESSAGEFRUITS VALUES (p_idFruit, p_idMessage);
END;

DROP PROCEDURE NDIAjouterEtapes;
CREATE OR REPLACE PROCEDURE NDIAjouterEtapes(p_idFruit NDI_FRUITS.IDFRUIT%TYPE, p_idChoix NDI_CHOIX.IDCHOIX%TYPE, p_idJoueur NDI_JOUEUR.IDJOUEUR%TYPE) IS
BEGIN
    INSERT INTO NDI_ETAPES VALUES (ndi_seq_etapes_id.nextval, p_idFruit, p_idChoix, p_idJoueur);
END;

-- ############################################################
-- # Procedures : MODIFIER
-- ############################################################
DROP PROCEDURE NDIModifierFruits;
CREATE OR REPLACE PROCEDURE NDIModifierFruits(p_idFruit NDI_FRUITS.IDFRUIT%TYPE, p_tauxVerreDeTerre NDI_FRUITS.TAUXVERREDETERRE%TYPE, p_nbInteractions NDI_FRUITS.NBINTERACTIONS%TYPE) IS
BEGIN
    UPDATE NDI_FRUITS SET tauxVerreDeTerre = p_tauxVerreDeTerre, nbInteractions = p_nbInteractions
    WHERE idFruit = p_idFruit;
END;

-- ############################################################
-- # Procedures : SUPPRIMER
-- ############################################################
DROP PROCEDURE NDISupprimerJoueur;
CREATE OR REPLACE PROCEDURE NDISupprimerJoueur(p_idJoueur NDI_JOUEUR.IDJOUEUR%TYPE) IS
BEGIN
    DELETE FROM NDI_ETAPES WHERE idJoueur = p_idJoueur;
    DELETE FROM NDI_JOUEUR WHERE idJoueur = p_idJoueur;
END;

DROP PROCEDURE NDISupprimerChoix;
CREATE OR REPLACE PROCEDURE NDISupprimerChoix(p_idChoix NDI_CHOIX.IDCHOIX%TYPE) IS
BEGIN
    DELETE FROM NDI_ETAPES WHERE idChoix = p_idChoix;
    DELETE FROM NDI_CHOIX WHERE idChoix = p_idChoix;
END;

DROP PROCEDURE NDISupprimerFruits;
CREATE OR REPLACE PROCEDURE NDISupprimerFruits(p_idFruit NDI_FRUITS.IDFRUIT%TYPE) IS
BEGIN
    DELETE FROM NDI_MESSAGEDESFRUITS WHERE idFruit = p_idFruit;
    DELETE FROM NDI_ETAPES WHERE idFruit = p_idFruit;
    DELETE FROM NDI_FRUITS WHERE idFruit = p_idFruit;
END;

DROP PROCEDURE NDISupprimerEtapes;
CREATE OR REPLACE PROCEDURE NDISupprimerEtapes(p_idEtape NDI_ETAPES.IDETAPE%TYPE) IS
BEGIN
    DELETE FROM NDI_ETAPES WHERE idEtape = p_idEtape;
END;

DROP PROCEDURE NDISupprimerMessageFruits;
CREATE OR REPLACE PROCEDURE NDISupprimerMessageFruits(p_idMessage NDI_MESSAGEFRUITS.IDMESSAGE%TYPE) IS
BEGIN
    DELETE FROM NDI_MESSAGEDESFRUITS WHERE idMessage = p_idMessage;
    DELETE FROM NDI_MESSAGEFRUITS WHERE idMessage = p_idMessage;
END;