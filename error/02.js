/**
 * 404错误：
 * 将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。
 * ctx.throw([status], [msg], [properties])
 * ctx.throw(400);
 * ctx.throw(400, 'name required');
 * ctx.throw(400, 'name required', { user: user });
 * 
 * 例如 ctx.throw(400, 'name required') 等效于:
 * const err = new Error('name required');
 * err.status = 400;
 * err.expose = true;
 * throw err;
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.status = 404;
});

app.listen(3000, () => console.log('running...'));