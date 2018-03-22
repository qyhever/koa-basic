/**
 * 500错误：
 * Koa 提供了ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误。
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.throw(500);
});

app.listen(3000, () => {
  console.log('running...');
});