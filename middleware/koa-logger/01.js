/* 
	koa-logger， 打印请求日志
*/
const logger = require('koa-logger')
const Koa = require('koa')

const app = new Koa()
app.use(logger())

app.use(ctx => {
	if (ctx.path === '/favicon.ico') return
	ctx.body = 'logger'
})

app.listen(3000, () => console.log('running...'))