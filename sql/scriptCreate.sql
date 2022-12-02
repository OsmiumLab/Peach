CREATE TABLE NDI_Joueur(
   idJoueur INT,
   nomUtilisateur VARCHAR(100) NOT NULL,
   choixFruit VARCHAR(50) NOT NULL,
   PRIMARY KEY(idJoueur)
);

CREATE TABLE NDI_Choix(
   idChoix INT,
   texteChoix VARCHAR(200) NOT NULL,
   PRIMARY KEY(idChoix)
);

CREATE TABLE NDI_MessageFruits(
   idMessage INT,
   texteMessage VARCHAR(2000) NOT NULL,
   PRIMARY KEY(idMessage)
);

CREATE TABLE NDI_Fruits(
   idFruit INT,
   nomFruit VARCHAR(100) NOT NULL,
   tauxVerreDeTerre INT NOT NULL,
   nbPepins INT NOT NULL,
   idMessage INT NOT NULL,
   PRIMARY KEY(idFruit),
   FOREIGN KEY(idMessage) REFERENCES NDI_MessageFruits(idMessage)
);

CREATE TABLE NDI_Etapes(
   idEtape INT,
   idFruit INT NOT NULL,
   idChoix INT NOT NULL,
   idJoueur INT NOT NULL,
   PRIMARY KEY(idEtape),
   FOREIGN KEY(idFruit) REFERENCES NDI_Fruits(idFruit),
   FOREIGN KEY(idChoix) REFERENCES NDI_Choix(idChoix),
   FOREIGN KEY(idJoueur) REFERENCES NDI_Joueur(idJoueur)
);
