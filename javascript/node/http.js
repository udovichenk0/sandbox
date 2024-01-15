const http = require('node:http');
// const { listenerCount } = require('node:process');
const net = require('node:net');

// const json = JSON.stringify({namae: "denis"})
// http.createServer((req, res) => {
//   console.log('from server')
//   console.log("method: ", req.headers)
//   res.end(json)
// })
// .listen(3000, () => {
//   console.log('start the server')
// })


// const proxy = http.createServer((req,res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(json);
// })

// proxy.on('connect', (req, clientSocket, head) => {
//   console.log(req.url)
//   console.log('connect')
//   const { port, hostname } = new URL(`http://localhost:3000`)
//   const serverSocket = net.connect(port || 80, hostname, () => {
//     clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                 'Proxy-agent: Node.js-Proxy\r\n' +
//                 '\r\n');
//     serverSocket.write(head);
//     serverSocket.pipe(clientSocket);
//     clientSocket.pipe(serverSocket);
//   })
// })

// proxy.listen(1337, '127.0.0.1', () => {
//   console.log('listen proxy')
//   const options = {
//     port: 1337,
//     headers: {
//       "My-custom-header": "custom-header-value"
//     },
//     hostname: '127.0.0.1',
//     method: 'CONNECT',
//     // path: 'urlpath'
//   }
  
//   const req = http.request(options, (res) => {
//     res.on('data', (data) => {
//       console.log("1data: ", data)
//     })
//     console.log("herererrere")
//   })
//   console.log(req.headers)
//   req.on('response', (req) => {
//     console.log("response", req.headers)
//   })
//   req.end()
  
//   req.on('connect', (res, socket, head) => {
//     socket.write('GET /post HTTP/1.1\r\n' +
//               'Host: www.google.com:80\r\n' +
//               'Connection: close\r\n' +
//               '\r\n');
//     socket.on('data', (chunk) => {
//       console.log("data: ", chunk.toString());
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   })
// })

// const earlyHintsLink = '</styles.css>; rel=preload; as=style';
// const server = http.createServer((req, res) => {
//   console.log("headers: ", req.headers)
//   const json = JSON.stringify({name: "denis"})
//   const json1 = JSON.stringify({age:1})
//   const json2 = JSON.stringify({ages:2})

//   res.setHeader("header111"," value11")
//   // res.statusCode = 205
//   res.writeHead(205, {
//     'Content-Type': 'application/json',
//     "header111": "newvalue"
//   })
//   res.end(json)
// })

// server.maxHeadersCount = 2
// server.on('clientError', () => {
//   console.log('error occured')
// })
// server.listen(3000, () => {
//   console.log('start listening')
//   // server.close()
//   const req = http.request({
//     port: 3000,
//     host: 'localhost',
//     headers: {
//       "hader1l": "value1",
//       "hader2l": "value2",
//     },
//     path: '/some'
//   })

//   // req.setHeader('hader1', 'value1')
//   req.on('response', (res) => {
//   console.log(res.statusCode)
//     console.log("response headeres: ", res.headers)
//     res.on('data', (data) => console.log('data: ', data.toString()))
//   })
//   req.end()
// })






const agent = new http.Agent()

const server = http.createServer({
  keepAlive: true
}, (req, res) => {
server.getConnections((c) => {
  console.log("Connection: ", c)
})
  console.log("from server")
  const json = JSON.stringify({value: "value"})
  console.log(req.headers)
  res.end(json)
})

server.listen(3000, () => {
  console.log("listen the server")
  const req = http.request({
    port: 3000,
    host: 'localhost',
    agent: agent
  }, (res) => {
    res.on('data', (chunk) => {
      console.log(chunk.toString())
    })
  })
  req.end()
  const client = net.createConnection({ port: 3000 }, () => {
    console.log('connected to server')
    client.write('alsdfadf')
  })
  
  client.on('data', (chunk) => {
    console.log("aosdfjalsdf")
    console.log(chunk.toString())
    client.end()
  })
  client.on('end', () => {
    console.log('disconnected from server');
  }); 
})
