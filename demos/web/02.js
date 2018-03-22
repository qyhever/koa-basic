/**
 * get请求
 */
const Koa = require('koa');
const path = require('path');
const route = require('koa-route');
const staticServer = require('koa-static');
const app = new Koa();

app.use(staticServer(path.resolve(__dirname, 'public')));

const get = ctx => {
  console.log('get', ctx.request.query);
  ctx.response.body = ctx.request.query;
};

app.use(route.get('/get', get));

app.listen(3000, () => {
  console.log('running...');
});