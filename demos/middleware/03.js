/**
 * 异步中间件
 */
const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('../template.html', 'utf8');
});

app.listen(3000, () => {
  console.log('running...');
});