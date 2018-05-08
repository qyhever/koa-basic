/* 
	koa-body 接收post请求参数
*/
const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

app.use(koaBody())

router.post('/post', ctx => {
	ctx.body = ctx.request.body
})

app.use(router.routes())

app.listen(3002, () => console.log('Koa app listening on 3002'))