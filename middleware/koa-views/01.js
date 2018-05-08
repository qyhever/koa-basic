/*
	模板引擎，koa-views
 */
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(views(path.join(__dirname, '/views'), {
	extension: 'ejs'
}))

app.use(async (ctx) => {
	await ctx.render('index', {title: 'koa-views'})
})

app.listen(3002, () => console.log('Koa app listening on 3002'))