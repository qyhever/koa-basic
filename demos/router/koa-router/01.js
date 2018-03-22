/**
 * koa-router 模块
 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router
  .get('/',  ctx => {
    ctx.body = 'index';
  })
  .get('/about', ctx => {
    ctx.body = 'about';
  })
  .get('/goods', ctx => {
    ctx.body = 'goods';
  });

app.use(router.routes());

app.listen(3000, () => {
  console.log('running...');
});