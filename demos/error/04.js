/**
 * error 事件的监听：
 * 运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误。
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.throw(500);
});

app.on('error', (err, ctx) => {
  console.log('server error', err);
})

app.listen(3000, () => {
  console.log('running...');
});