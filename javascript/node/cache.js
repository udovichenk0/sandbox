const http = require("http")

const users = [
  { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 3, name: 'Bob Johnson', age: 28, email: 'bob.johnson@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 4, name: 'Alice Williams', age: 22, email: 'alice.williams@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 5, name: 'David Brown', age: 35, email: 'david.brown@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 6, name: 'Emily Davis', age: 27, email: 'emily.davis@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 7, name: 'Chris Miller', age: 32, email: 'chris.miller@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 8, name: 'Sophie Taylor', age: 29, email: 'sophie.taylor@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 9, name: 'Michael Wilson', age: 31, email: 'michael.wilson@example.com', updated_at: "2024-01-17T11:56:30.000Z" },
  { id: 10, name: 'Olivia Jackson', age: 26, email: 'dolivia.jackson@example.com', updated_at: "Wed, 17 Jan 2024 12:51:35 GMT" },
];

let d 
const parse = (url, incomingUrl) => {
    const cIndex = url.indexOf(":")
    if(cIndex){
        const nextSlash = incomingUrl.indexOf('/', cIndex)
        if(nextSlash == -1) {
            return incomingUrl.slice(cIndex)
        }
    }
    return ''
}

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Headers", "Cache-Control, if-modified-since")
    if(req.method == 'GET'){
      if(req.url.startsWith('/user/')){
      const modifiedSince = req.headers['if-modified-since']
      const userId = parse('/user/:id', req.url)
      const user = users.find(({ id }) => id == userId)

      // const lastModified = getDate(user.updated_at)
      const lastModified = user.updated_at
      // if(modifiedSince && new Date(lastModified).getTime() <= new Date(modifiedSince).getTime()){
      //   console.log('from cache')
      //   res.statusCode = 304
      //   res.end()
      //   return
      // }
      // res.setHeader("Cache-Control", "max-age=0")
      res.setHeader("Vary", "Accept-Encoding")
      // res.setHeader("Last-Modified", lastModified)

      const json = JSON.stringify(user)
      setTimeout(() => res.end(json), 500)
    }
  }
  if(req.method == 'OPTIONS'){
    res.end()
  }
}).listen(3000, () => {
  console.log('Start the server')
})