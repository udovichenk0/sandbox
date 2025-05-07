const http = require('node:http')

import { collectDefaultMetrics, register, Counter, Gauge } from 'prom-client';
collectDefaultMetrics({ timeout: 5000 });

// const httpMetricsLabelNames = ['method', 'path'];

// const totalHttpRequestCount = new Counter({
//   name: 'nodejs_http_total_count',
//   help: 'total request number',
//   labelNames: httpMetricsLabelNames
// });
// const totalHttpRequestDuration = new Gauge({
//   name: 'nodejs_http_total_duration',
//   help: 'the last duration or response time of last request',
//   labelNames: httpMetricsLabelNames
// });
const server = http.createServer((req, res) => {
  const json = JSON.stringify({name: "denis"})
  res.end(json)
}).listen(3000, () => {
  console.log('start the server')
})

// function initMetrics4EachRoute(layer) {
//   layer.stack.unshift(async (ctx, next) => {
//     await next();
//     totalHttpRequestCount.labels(ctx.method, layer.path).inc();
//     // start time symbol defined in pino-http
//     totalHttpRequestDuration
//       .labels(ctx.method, layer.path)
//       .inc(new Date().valueOf() - (ctx.res)[startTime]);
//   });
// }
// export function initRoutingMetrics() {
//   yourRouter.stack.forEach(initMetrics4EachRoute);
// }
// r.on('socket', (socket) => {
//   console.log("here")
// })import { collectDefaultMetrics } from 'prom-client';
collectDefaultMetrics({ timeout: 5000 });