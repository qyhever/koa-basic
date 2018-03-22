/**
 * 重定向
 */
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const index = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<h2>This is index page</h2>';
};

const info = ctx => {
  ctx.response.redirect('/login');
};

const login = ctx => {
  ctx.response.body = '<a href="/">Login Page</a>';
};

app.use(route.get('/', index));
app.use(route.get('/info', info));
app.use(route.get('/login', login));

app.listen(3000, () => {
  console.log('running...');
});