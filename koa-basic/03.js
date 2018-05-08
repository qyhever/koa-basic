/**
 * 返回网页模板
 */
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.type = 'html'; // 设置响应类型
  ctx.body = fs.createReadStream('./test.html');
});

app.listen(3000, () => console.log('running...'));