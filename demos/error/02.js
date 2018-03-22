/**
 * 404错误：
 * 将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.response.status = 404;
});

app.listen(3000, () => {
  console.log('running...');
});