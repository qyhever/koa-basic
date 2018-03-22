/**
 * 返回网页模板
 */
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.response.type = 'html'; // 设置响应类型
  ctx.response.body = fs.createReadStream('./template.html');
});

app.listen(3000, () => {
  console.log('running...');
});