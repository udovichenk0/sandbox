const http = require('node:http')
const { setDefaultHighWaterMark } = require('node:stream')
const v8 = require('v8')
const data = []
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Headers", "Cache-Control, if-modified-since")
	data.push(req.headers)
	const d = JSON.stringify(data)
	res.end(d);
}).listen(3000, () => {
	process.on('SIGINT', () => {
		console.log('hello')
		console.log("length:",data.length)
		const fileName = v8.writeHeapSnapshot()

		console.log(fileName)
	})
	console.log(process.pid)
  console.log("start the server")
})

alskdfjlasdf 
a
setDefaultHighWaterMarkasd
falsesdf
alskdfjlasdfsd
falsesdfsd
falseas