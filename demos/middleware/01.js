/**
 * 简易Logger功能中间件
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  console.log(`date:${+new Date()} method:${ctx.request.method} url:${ctx.request.url}`);
  ctx.response.body = 'koa';
});

app.listen(3000, () => {
  console.log('running...');
});