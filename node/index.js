const http = require('http')

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.end('working');
})

server.listen(8000, '127.0.0.1', () => { console.log('started') })