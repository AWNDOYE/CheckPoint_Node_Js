var nodemailer = require('nodemailer');

function emailSend () {
    // Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',         // Utiliser le service Gmail
    auth: {
      user: 'yourmail@gmail.com',          // Votre adresse e-mail Gmail
      pass: 'yourPassword'       // Votre mot de passe Gmail
    }
  });
  
  // Options pour l'e-mail
  const mailOptions = {
    from: 'yourmail@gmail.com',   // L'adresse e-mail de l'expéditeur
    to: 'destinataire@gmail.com',  // L'adresse e-mail du destinataire
    subject: 'Test d\'envoi d\'e-mail depuis Node.js', // Objet de l'e-mail
    text: 'Ceci est un test d\'envoi d\'e-mail depuis Node.js.' // Corps de l'e-mail au format texte
    // Vous pouvez également utiliser "html" pour le format HTML
  };
  
  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
    }
  });
}
emailSend();