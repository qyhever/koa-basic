/**
 * post请求：koa-body中间件
 */
const Koa = require('koa');
const path = require('path');
const route = require('koa-route');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();

app.use(staticServer(path.resolve(__dirname, 'public')));

// 使用koa-body中间件
app.use(koaBody());

const post = ctx => {
  console.log('post', ctx.request.body);
  ctx.response.body = ctx.request.body;
};

app.use(route.post('/post', post));

app.listen(3000, () => {
  console.log('running...');
});