/* 
	koa-router，处理路由
*/
const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router({
	prefix: '/home'
})

const fs = require('fs')

router.get('/index', ctx => {
	ctx.body = 'Index Page'
})

router.get('/about', async ctx => {
	ctx.body = fs.readFileSync('./about.html', 'utf8')
})

app.use(router.routes(), router.allowedMethods())

app.listen(3002, () => console.log('Koa app listening on 3002'))