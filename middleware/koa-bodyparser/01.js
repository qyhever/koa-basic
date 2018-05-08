/* 
	koa-bodyparser 接收post请求参数
*/
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())

app.use(ctx => {
	switch(ctx.method) {
		case 'GET':
			ctx.body = {
				url: ctx.url,
				query: ctx.query,
				querystring: ctx.querystring
			}
			break

		case 'POST':
			ctx.body = ctx.request.body
			break
	}
	
})

app.listen(3002, () => console.log('Koa app listening on 3002'))