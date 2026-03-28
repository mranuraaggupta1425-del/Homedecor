const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const SITE_DIR = path.join(__dirname, 'site');

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(SITE_DIR, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);

  if (!ext) filePath = path.join(SITE_DIR, 'index.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(SITE_DIR, 'index.html'), (err2, fallback) => {
        if (err2) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fallback);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
