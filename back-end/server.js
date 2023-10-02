const http = require('http');
const fs = require('fs');
const path = require('path');

// Caminho das páginas
const file_path = 'C:\\Users\\dougl\\Projects\\gatry-skins\\public';

// Rotas
const routes = {
  '/': path.join(file_path, 'index.html'),
  '/about': path.join(file_path, 'about.html'),
  '/contact': path.join(file_path, 'contact.html'),
  '/css/styles.css': path.join(file_path, 'css/styles.css'),
  '/css/logo.png': path.join(file_path, 'css/logo.png'),
  '/index.js': path.join(file_path, 'index.js'),
};

// Servidor HTTP
const server = http.createServer((req, res) => {
  const filePath = routes[req.url];
  
  if (filePath) {
    // Determina a extensão do arquivo solicitado
    const extname = path.extname(filePath);
    
    // Define o tipo de conteúdo (MIME type) com base na extensão do arquivo
    let contentType = 'text/html';
    if (extname === '.css') {
      contentType = 'text/css';
    } else if (extname === '.png') {
        contentType = 'image/png';
    }
    
    // Lê o arquivo solicitado
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('File not found');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});