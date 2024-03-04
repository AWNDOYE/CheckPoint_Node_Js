var http = require("http");
//Création du serveur
const server = http.createServer((req, res) => {
    // test si la requête est ok ou non
    if (req.url === '/') {
      // Configure l'en-tête de la réponse avec le type de contenu HTML
      res.writeHead(200, {'Content-Type': 'text/html'});
      
      // Envoie la réponse avec le message HTML
      res.end('<h1>Hello Node!!!!</h1>');
    } else {
      // Si le chemin est nok, renvoie une réponse 404 (Not Found)
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found\n');
    }
  });
  
  // Écoute le serveur sur le port 3000
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  
  // Gestion d'erreur en cas de problème lors du démarrage du serveur
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Le port ${port} est déjà utilisé. Choisissez un autre port.`);
    } else {
      console.error('Erreur inattendue:', error.message);
    }
  });