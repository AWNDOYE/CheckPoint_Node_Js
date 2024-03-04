const fs = require('fs');

// Contenu à écrire dans le fichier
const content = 'Hello Node';

// Création du fichier "welcome.txt" avec le contenu
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Erreur lors de la création du fichier:', err);
  } else {
    console.log('Le fichier welcome.txt a été créé avec succès.');
  }
});