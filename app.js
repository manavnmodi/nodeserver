const http = require('http');

const PORT = 8080;
const VERSION = process.env.IMAGE_TAG || 'local';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello with webhook6: ${VERSION}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});