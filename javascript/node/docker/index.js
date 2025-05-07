const http = require('http')

http.createServer((req, res) => {
  const json = JSON.stringify({name: "denis"})
  res.end(json)
}).listen(3000, () => {
  console.log('start the server')
})