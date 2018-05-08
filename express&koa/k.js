/*
	区别： Express 中间件链是基于回调的，而 Koa 是基于 Promise 的
 */
const Koa = require('koa')
const app = new Koa()

// Middleware 1
app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Setting status')
  // Call the next middleware, wait for it to complete
  // await next()
})

// Middleware 2
app.use((ctx) => {
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
})
app.listen(3002, () => console.log('Koa app listening on 3002'))