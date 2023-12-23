const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  // const worker = cluster.fork();

  let timeout
  // Fork workers.
  for (let i = 0; i < 3; i++) {
    cluster.fork();
  }
  cluster.on('fork', (worker) => {
    console.log('worker is dead:', worker.isDead());
  });
  cluster.on('disconnect', () => {
    console.log('WORKER DISCONNECTED')
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log('worker is dead:', worker.isDead());
  });
  // cluster.on('message', (worker, message) => {
  //   worker.kill()
  //   setTimeout(() => {
  //     console.log
  //   }, 2000)
  // })
  cluster.disconnect()
  cluster.on('exit', (worker) => {
    console.log(worker.exitedAfterDisconnect)
  })

} else {
  // Workers can share any TCP connection. In this case, it is an HTTP server.
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
    process.send('s')
  }).listen(3000);
}