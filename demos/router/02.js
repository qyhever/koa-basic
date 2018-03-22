/**
 * koa-route 模块
 */
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const index = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<h2>This is index page</h2>';
};

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<h2>This is about page</h2>';
};

app.use(route.get('/', index));
app.use(route.get('/about', about));

app.listen(3000, () => {
  console.log('running...');
});