const Koa = require('koa')
const app = new Koa()

// Simple Promise delay
function delay (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Setting status')
  // next() // forgot await!
  // await next()
  return next()
})

app.use(async (ctx) => {
  await delay(1000) // simulate actual async behavior
  console.log('Setting body')
  ctx.body = 'Hello from Koa'
})

app.listen(3002, () => console.log('Koa app listening on 3002'))