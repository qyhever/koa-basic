/* 
  koa-route，处理路由
*/
const Koa = require('koa');
const route = require('koa-route');

const app = new Koa();

const index = ctx => {
  ctx.body = 'Index Page';
};

const about = ctx => {
  ctx.body = 'About Page';
};

app.use(route.get('/index', index));
app.use(route.get('/about', about));

app.listen(3000, () => console.log('running...'));