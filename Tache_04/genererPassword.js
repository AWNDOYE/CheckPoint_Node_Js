const monPassword = require('generate-password');

function passwordGenerer(){
    const passwordOptions = {
        length: 12,              // Longueur du mot de passe
        numbers: true,           // Inclure des chiffres
        symbols: true,           // Inclure des caractères spéciaux
        uppercase: true,         // Inclure des lettres majuscules
        excludeSimilarCharacters: true,  // Exclure les caractères similaires
      };
    
      // Générer le mot de passe
      const password = monPassword.generate(passwordOptions);
    
      // Afficher le mot de passe dans la console
      console.log('Mot de passe généré:', password);
}
passwordGenerer()

