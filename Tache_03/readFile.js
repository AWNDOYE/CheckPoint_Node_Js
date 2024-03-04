// readFile.js
const fs = require('fs');

// Lecture du fichier "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
  } else {
    console.log('Contenu de welcome.txt:', data);
  }
});
