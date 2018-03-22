/**
 * 原生路由
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'This is index page';
  }
});

app.listen(3000, () => {
  console.log('running...');
});