const http = require("node:http")

http.createServer(() => {
  console.log("here")
  console.log(process.report.filename)
  throw new Error("here")
}).listen(3000, () => {
  console.log(process.env.MY_ENV)
  console.log(process.env.FORCE_COLOR, 3000)
})
