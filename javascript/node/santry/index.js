const http = require('node:http')
const Sentry = require('@sentry/node')
Sentry.init({
  
})
http.createServer((req, res) => {
  res.end("response")
}).listen(3000, () => {
  console.log("Start the server on the port 3000")
})