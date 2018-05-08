/* 
  中间件的合成，koa-compose
*/
const Koa = require('koa');
const app = new Koa();
const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`date:${+new Date()} method:${ctx.request.method} url:${ctx.request.url}`);
  next();
};

const main = ctx => {
  ctx.response.body = 'koa';
};

const middlewares = compose([logger, main]);

app.use(middlewares);

app.listen(3000, () => console.log('running...'));