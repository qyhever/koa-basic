const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
	if (ctx.path === '/favicon.ico') return;
	const n = (+ctx.cookies.get('view') || 0) + 1;
	ctx.cookies.set('view', n);
	ctx.body = n + 'views';
});

app.listen(3002, () => console.log('Koa app listening on 3002'))