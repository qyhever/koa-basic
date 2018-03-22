/**
 * http服务
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.response.body = 'koa';
});

app.listen(3000, () => {
  console.log('running...');
});