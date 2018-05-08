/* 
	koa-static，处理静态文件
*/
const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

app.use(static(path.resolve(__dirname, 'public')))

app.use(ctx => {
	ctx.body = 'koa-static'
})

app.listen(3002, () => console.log('Koa app listening on 3002'))