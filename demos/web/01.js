/**
 * cookie：ctx.cookies用来读写 Cookie。
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  let n = +ctx.cookies.get('view') ||  0;
  console.log(n);
  ctx.cookies.set('view', ++n);
  ctx.response.body = n + 'views';
});

app.listen(3000, () => {
  console.log('running...');
});